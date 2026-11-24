"use strict";(()=>{function Ni(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bo={duration:.5,overwrite:!1,delay:0},xu,nn,At,ni=1e8,vt=1/ni,hu=Math.PI*2,Sg=hu/4,bg=0,Hf=Math.sqrt,Tg=Math.cos,wg=Math.sin,Zt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},Bi=function(e){return typeof e=="number"},Va=function(e){return typeof e>"u"},Si=function(e){return typeof e=="object"},In=function(e){return e!==!1},yu=function(){return typeof window<"u"},Pa=function(e){return Lt(e)||Zt(e)},Gf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,Eg=/random\([^)]+\)/g,Ag=/,\s*/g,Lf=/(?:-?\.?\d|\.)+/gi,Mu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ru=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Su=/[+-]=-?[.\d]+/,Cg=/[^,'"\[\]\s]+/gi,Rg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,yi,fu,bu,Vn={},Ua={},Wf,Xf=function(e){return(Ua=Ts(e,Vn))&&ln},Ha=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},To=function(e,t){return!t&&console.warn(e)},qf=function(e,t){return e&&(Vn[e]=t)&&Ua&&(Ua[e]=t)||Vn},wo=function(){return 0},Pg={suppressEvents:!0,isStart:!0,kill:!1},Ia={suppressEvents:!0,kill:!1},Ig={suppressEvents:!0},Tu={},or=[],du={},Yf,Rn={},su={},Uf=30,Da=[],wu="",Eu=function(e){var t=e[0],n,i;if(Si(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Da.length;i--&&!Da[i].targetTest(t););n=Da[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Pu(e[i],n)))||e.splice(i,1);return e},ar=function(e){return e._gsap||Eu(ii(e))[0]._gsap},Au=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():Va(n)&&e.getAttribute&&e.getAttribute(t)||n},vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},kr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Dg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Fa=function(){var e=or.length,t=or.slice(0),n,i;for(du={},or.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Cu=function(e){return!!(e._initted||e._startAt||e.add)},Zf=function(e,t,n,i){or.length&&!nn&&Fa(),e.render(t,n,i||!!(nn&&t<0&&Cu(e))),or.length&&!nn&&Fa()},$f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Cg).length<2?t:Zt(e)?e.trim():e},Jf=function(e){return e},Hn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Lg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ts=function(e,t){for(var n in t)e[n]=t[n];return e},Ff=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Si(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Na=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},yo=function(e){var t=e.parent||Rt,n=e.keyframes?Lg(an(e.keyframes)):Hn;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ug=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Kf=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ga=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},lr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Fg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},pu=function(e,t,n,i){return e._startAt&&(nn?e._startAt.revert(Ia):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ng=function r(e){return!e||e._ts&&r(e.parent)},Nf=function(e){return e._repeat?ws(e._tTime,e=e.duration()+e._rDelay)*e:0},ws=function(e,t){var n=Math.floor(e=Ct(e/t));return e&&n===e?n-1:n},Oa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wa=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},Xa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wa(e),n._dirty||Fr(n,e)),e},Qf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Oa(e.rawTime(),t),(!t._dur||Ro(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),Fr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},Mi=function(e,t,n,i){return t.parent&&lr(t),t._start=Ct((Bi(n)?n:!n&&Ba(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Rt?ti(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Kf(e,t,"_first","_last",e._sort?"_start":0),Ba(t)||(e._recent=t),i||Qf(e,t),e._ts<0&&Xa(e,e._tTime),e},jf=function(e,t){return(Vn.ScrollTrigger||Ha("scrollTrigger",t))&&Vn.ScrollTrigger.create(t,e)},ed=function(e,t,n,i,s){if(Lu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Yf!==Pn.frame)return or.push(e),e._lazy=[s,i],1},Og=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ba=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Bg=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Og(e)&&!(!e._initted&&Ba(e))||(e._ts<0||e._dp._ts<0)&&!Ba(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Ro(0,e._tDur,t),u=ws(l,a),e._yoyo&&u&1&&(o=1-o),u!==ws(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||nn||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&ed(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&pu(e,t,n,!0),e._onUpdate&&!n&&zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&lr(e,1),!n&&!nn&&(zn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Es=function(e,t,n,i){var s=e._repeat,o=Ct(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Xa(e,e._tTime=e._tDur*a),e.parent&&Wa(e),n||Fr(e.parent,e),e},Of=function(e){return e instanceof on?Fr(e):Es(e,e._dur)},zg={_start:0,endTime:wo,totalDuration:wo},ti=function r(e,t,n){var i=e.labels,s=e._recent||zg,o=e.duration()>=ni?s.endTime(!1):e._dur,a,l,c;return Zt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(an(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Mo=function(e,t,n){var i=Bi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;o.immediateRender=In(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new kt(t[0],o,t[s+1])},cr=function(e,t){return e||e===0?t(e):t},Ro=function(e,t,n){return n<e?e:n>t?t:n},rn=function(e,t){return!Zt(e)||!(t=Rg.exec(e))?"":t[1]},Vg=function(e,t,n){return cr(n,function(i){return Ro(e,t,i)})},mu=[].slice,td=function(e,t){return e&&Si(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Si(e[0]))&&!e.nodeType&&e!==yi},Hg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Zt(i)&&!t||td(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Zt(e)&&!n&&(fu||!As())?mu.call((t||bu).querySelectorAll(e),0):an(e)?Hg(e,n):td(e)?mu.call(e,0):e?[e]:[]},gu=function(e){return e=ii(e)[0]||To("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?To("Invalid scope")||bu.createElement("div"):e)}},nd=function(e){return e.sort(function(){return .5-Math.random()})},id=function(e){if(Lt(e))return e;var t=Si(e)?e:{each:e},n=Nr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return Zt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(f,h,_){var g=(_||t).length,m=o[g],p,b,S,x,C,R,E,P,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,ni])[1],!M){for(E=-ni;E<(E=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=l?Math.min(M,g)*u-.5:i%M,b=M===ni?0:l?g*d/M-.5:i/M|0,E=0,P=ni,R=0;R<g;R++)S=R%M-p,x=b-(R/M|0),m[R]=C=c?Math.abs(c==="y"?x:S):Hf(S*S+x*x),C>E&&(E=C),C<P&&(P=C);i==="random"&&nd(m),m.max=E-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=rn(t.amount||t.each)||0,n=n&&g<0?t_(n):n}return g=(m[f]-m.min)/m.max||0,Ct(m.b+(n?n(g):g)*m.v)+m.u}},_u=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Bi(n)?0:rn(n))}},rd=function(e,t){var n=an(e),i,s;return!n&&Si(e)&&(i=n=e.radius||ni,e.values?(e=ii(e.values),(s=!Bi(e[0]))&&(i*=i)):e=_u(e.increment)),cr(t,n?Lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:o,s||u===o||Bi(o)?u:u+rn(o)}:_u(e))},sd=function(e,t,n,i){return cr(an(e)?!t:n===!0?!!(n=0):!i,function(){return an(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Gg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Wg=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n))}},Xg=function(e,t,n){return ad(e,t,0,1,n)},od=function(e,t,n){return cr(n,function(i){return e[~~t(i)]})},qg=function r(e,t,n){var i=t-e;return an(e)?od(e,r(0,e.length),t):cr(n,function(s){return(i+(s-e)%i)%i+e})},Yg=function r(e,t,n){var i=t-e,s=i*2;return an(e)?od(e,r(0,e.length-1),t):cr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Cs=function(e){return e.replace(Eg,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Ag);return sd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ad=function(e,t,n,i,s){var o=t-e,a=i-n;return cr(s,function(l){return n+((l-e)/o*a||0)})},Zg=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Zt(e),a={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(an(e)&&!an(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Ts(an(e)?[]:{},e));if(!u){for(l in t)Iu.call(a,e,l,"get",t[l]);s=function(_){return Nu(_,a)||(o?e.p:e)}}}return cr(n,s)},Bf=function(e,t,n){var i=e.labels,s=ni,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},zn=function(e,t,n){var i=e.vars,s=i[t],o=At,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&or.length&&Fa(),a&&(At=a),u=l?s.apply(c,l):s.call(c),At=o,u},vo=function(e){return lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&zn(e,"onInterrupt"),e},bs,ld=[],cd=function(e){if(e)if(e=!e.name&&e.default||e,yu()||e.headless){var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:wo,render:Nu,add:Iu,kill:h_,modifier:u_,rawVars:0},o={targetTest:0,get:0,getSetter:qa,aliases:{},register:0};if(As(),e!==i){if(Rn[t])return;Hn(i,Hn(Na(e,s),o)),Ts(i.prototype,Ts(s,Na(e,o))),Rn[i.prop=t]=i,e.targetTest&&(Da.push(i),Tu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qf(t,i),e.register&&e.register(ln,i,xn)}else ld.push(e)},Mt=255,xo={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},ou=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},ud=function(e,t,n){var i=e?Bi(e)?[e>>16,e>>8&Mt,e&Mt]:0:xo.black,s,o,a,l,c,u,d,f,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xo[e])i=xo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Lf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=ou(l+1/3,s,o),i[1]=ou(l,s,o),i[2]=ou(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Mu),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lf)||xo.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Mt,o=i[1]/Mt,a=i[2]/Mt,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},hd=function(e){var t=[],n=[],i=-1;return e.split(Oi).forEach(function(s){var o=s.match(Br)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},kf=function(e,t,n){var i="",s=(e+i).match(Oi),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=ud(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=hd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Oi,"1").split(Br),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Oi),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},Oi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),$g=/hsl[a]?\(/,Ru=function(e){var t=e.join(" "),n;if(Oi.lastIndex=0,Oi.test(t))return n=$g.test(t),e[1]=kf(e[1],n),e[0]=kf(e[0],n,hd(e[1])),!0},Eo,Pn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,d,f,h,_=function g(m){var p=r()-i,b=m===!0,S,x,C,R;if((p>e||p<0)&&(n+=p-t),i+=p,C=i-n,S=C-o,(S>0||b)&&(R=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=S+(S>=s?0:s-S),x=1),b||(l=c(g)),x)for(h=0;h<a.length;h++)a[h](C,f,R,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Wf&&(!fu&&yu()&&(yi=fu=window,bu=yi.document||{},Vn.gsap=ln,(yi.gsapVersions||(yi.gsapVersions=[])).push(ln.version),Xf(Ua||yi.GreenSockGlobals||!yi.gsap&&yi||{}),ld.forEach(cd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Eo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Eo=0,c=wo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,p,b){var S=p?function(x,C,R,E){m(x,C,R,E),d.remove(S)}:m;return d.remove(m),a[b?"unshift":"push"](S),As(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d})(),As=function(){return!Eo&&Pn.wake()},ot={},Jg=/^[\d.\-M][\d.\-,\s]/,Kg=/["']/g,Qg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Kg,"").trim():+c,i=l.substr(a+1).trim();return t},jg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},e_=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Qg(t[1])]:jg(e).split(",").map($f)):ot._CE&&Jg.test(e)?ot._CE("",e):n},t_=function(e){return function(t){return 1-e(1-t)}},Nr=function(e,t){return e&&(Lt(e)?e:ot[e]||e_(e))||t},zr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return vn(e,function(a){ot[a]=Vn[a]=s,ot[o=a.toLowerCase()]=n;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},fd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},au=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/hu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*wg((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:fd(a);return s=hu/s,l.config=function(c,u){return r(e,c,u)},l},lu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:fd(n);return i.config=function(s){return r(e,s)},i};vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;zr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;zr("Elastic",au("in"),au("out"),au());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};zr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);zr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});zr("Circ",function(r){return-(Hf(1-r*r)-1)});zr("Sine",function(r){return r===1?1:-Tg(r*Sg)+1});zr("Back",lu("in"),lu("out"),lu());ot.SteppedEase=ot.steps=Vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-vt;return function(a){return((i*Ro(0,o,a)|0)+s)*n}}};bo.ease=ot["quad.out"];vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return wu+=r+","+r+"Params,"});var Pu=function(e,t){this.id=bg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Au,this.set=t?t.getSetter:qa},Ao=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Es(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),Eo||Pn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Es(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(As(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xa(this,n),!s._dp||s.parent||Qf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Nf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Nf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ws(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Oa(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(Ro(-Math.abs(this._delay),a,s),i!==!1),Wa(this),Fg(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{As(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==vt,o;if(s)for(this._tTime-=vt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+vt){s=!1;break}o=o._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Mi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Oa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ig);var i=nn;return nn=n,Cu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Of(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Of(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ti(this,n),In(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i)),this._dur||(this._zTime=-vt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-vt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Lt(n)?n:Jf,l=function(){var u=i.then;i.then=null,s&&s(),Lt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){vo(this)},r})();Hn(Ao.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var on=(function(r){Vf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),Rt&&Mi(n.parent||Rt,Ni(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&jf(Ni(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Mo(0,arguments,this),this},t.from=function(i,s,o){return Mo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Mo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,yo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(i,s,ti(this,o),1),this},t.call=function(i,s,o){return Mi(this,kt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new kt(i,o,ti(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,yo(o).immediateRender=In(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,d){return a.startAt=o,yo(a).immediateRender=In(a.immediateRender),this.staggerTo(i,s,a,l,c,u,d)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,_,g,m,p,b,S,x,C,R,E;if(this!==Rt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,S=this._ts,p=!S,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Ct(u%m),u===l?(g=this._repeat,f=c):(C=Ct(u/m),g=~~C,g&&g===C&&(f=c,g--),f>c&&(f=c)),C=ws(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),R&&g&1&&(f=c-f,E=1),g!==C&&!this._lock){var P=R&&C&1,M=P===(R&&g&1);if(g<C&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Ct(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=kg(this,Ct(a),Ct(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!C&&(zn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&b!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=-vt);break}}h=_}else{h=this._last;for(var v=i<0?i:f;h;){if(_=h._prev,(h._act||v<=h._end)&&h._ts&&b!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(v-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(v-h._start)*h._ts,s,o||nn&&Cu(h)),f!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=v?-vt:vt);break}}h=_}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-vt)._zTime=f>=a?1:-1,this._ts))return this._start=x,Wa(this),this.render(i,s,o);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&lr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Bi(s)||(s=ti(this,s,i)),!(i instanceof Ao)){if(an(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Zt(i))return this.addLabel(i,s);if(Lt(i))i=kt.delayedCall(0,i);else return this}return this!==i?Mi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof kt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Zt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(i.parent===this&&Ga(this,i),i===this._recent&&(this._recent=this._last),Fr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(Pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ti(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=kt.delayedCall(0,s||wo,o);return a.data="isPause",this._hasPause=1,Mi(this,a,ti(this,i))},t.removePause=function(i){var s=this._first;for(i=ti(this,i);s;)s._start===i&&s.data==="isPause"&&lr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)sr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=Bi(s),u;l;)l instanceof kt?Dg(l._targets,a)&&(c?(!sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ti(o,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=kt.to(o,Hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||vt,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Es(_,m,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Hn({startAt:{time:ti(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bf(this,ti(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bf(this,ti(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ct(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Fr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ct(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Es(o,o===Rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(Zf(Rt,Oa(i,Rt)),Yf=Pn.frame),Pn.frame>=Uf){Uf+=Dn.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&Dn.autoSleep&&Pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pn.sleep()}}},e})(Ao);Hn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var n_=function(e,t,n,i,s,o,a){var l=new xn(this._pt,e,t,0,1,Fu,null,s),c=0,u=0,d,f,h,_,g,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Cs(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),f=n.match(ru)||[];d=ru.exec(i);)_=d[0],g=i.substring(c,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?kr(m,_)-m:parseFloat(_)-m,m:h&&h<4?Math.round:0},c=ru.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Su.test(i)||p)&&(l.e=0),this._pt=l,l},Iu=function(e,t,n,i,s,o,a,l,c,u){Lt(i)&&(i=i(s||0,e,o));var d=e[t],f=n!=="get"?n:Lt(d)?c?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Lt(d)?c?a_:pd:Uu,_;if(Zt(i)&&(~i.indexOf("random(")&&(i=Cs(i)),i.charAt(1)==="="&&(_=kr(f,i)+(rn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||vu)return!isNaN(f*i)&&i!==""?(_=new xn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?c_:md,0,h),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&Ha(t,i),n_.call(this,e,t,f,i,h,l||Dn.stringFilter,c))},i_=function(e,t,n,i,s){if(Lt(e)&&(e=So(e,s,t,n,i)),!Si(e)||e.style&&e.nodeType||an(e)||Gf(e))return Zt(e)?So(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=So(e[a],s,t,n,i);return o},Du=function(e,t,n,i,s,o){var a,l,c,u;if(Rn[e]&&(a=new Rn[e]).init(s,a.rawVars?t[e]:i_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new xn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==bs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},sr,vu,Lu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!xu,x=e.timeline,C=i.easeReverse||d,R,E,P,M,v,I,F,k,V,$,H,X,G;if(x&&(!f||!s)&&(s="none"),e._ease=Nr(s,bo.ease),e._rEase=C&&(Nr(C)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||f&&!i.stagger){if(k=m[0]?ar(m[0]).harness:0,X=k&&i[k.prop],R=Na(i,Tu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!h?g.render(-1,!0):g.revert(u&&_?Ia:Pg),g._lazy=0),o){if(lr(e._startAt=kt.set(m,Hn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn||!a&&!h)&&e._startAt.revert(Ia),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),P=Hn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&In(l),immediateRender:a,stagger:0,parent:p},R),X&&(P[k.prop]=X),lr(e._startAt=kt.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn?e._startAt.revert(Ia):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&In(l)||l&&!_,E=0;E<m.length;E++){if(v=m[E],F=v._gsap||Eu(m)[E]._gsap,e._ptLookup[E]=$={},du[F.id]&&or.length&&Fa(),H=b===m?E:b.indexOf(v),k&&(V=new k).init(v,X||R,e,H,b)!==!1&&(e._pt=M=new xn(e._pt,v,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(re){$[re]=M}),V.priority&&(I=1)),!k||X)for(P in R)Rn[P]&&(V=Du(P,R,e,H,v,b))?V.priority&&(I=1):$[P]=M=Iu.call(e,v,P,"get",R[P],H,b,0,i.stringFilter);e._op&&e._op[E]&&e.kill(v,e._op[E]),S&&e._pt&&(sr=e,Rt.killTweensOf(v,$,e.globalTime(t)),G=!e.parent,sr=0),e._pt&&l&&(du[F.id]=1)}I&&Ou(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&x.render(ni,!0,!0)},r_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return vu=1,e.vars[t]="+=0",Lu(e,a),vu=0,l?To(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=Ut(n)+rn(d.e)),d.b&&(d.b=u.s+rn(d.b))},s_=function(e,t){var n=e[0]?ar(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ts({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},o_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(an(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},So=function(e,t,n,i,s){return Lt(e)?e.call(t,n,i,s):Zt(e)&&~e.indexOf("random(")?Cs(e):e},ka=wu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",dd={};vn(ka+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return dd[r]=1});ka=ka.split(",");var kt=(function(r){Vf(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:yo(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Rt,b=(an(n)||Gf(n)?Bi(n[0]):"length"in i)?[n]:ii(n),S,x,C,R,E,P,M,v;if(a._targets=b.length?Eu(b):To("GSAP target "+n+" not found. https://gsap.com",!Dn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,_||f||Pa(c)||Pa(u)){i=a.vars;var I=i.easeReverse||i.yoyoEase;if(S=a.timeline=new on({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),S.kill(),S.parent=S._dp=Ni(a),S._start=0,f||Pa(c)||Pa(u)){if(R=b.length,M=f&&id(f),Si(f))for(E in f)~ka.indexOf(E)&&(v||(v={}),v[E]=f[E]);for(x=0;x<R;x++)C=Na(i,dd),C.stagger=0,I&&(C.easeReverse=I),v&&Ts(C,v),P=b[x],C.duration=+So(c,Ni(a),x,P,b),C.delay=(+So(u,Ni(a),x,P,b)||0)-a._delay,!f&&R===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),S.to(P,C,M?M(x,P,b):0),S._ease=ot.none;S.duration()?c=u=0:a.timeline=0}else if(_){yo(Hn(S.vars.defaults,{ease:"none"})),S._ease=Nr(_.ease||i.ease||"none");var F=0,k,V,$;if(an(_))_.forEach(function(H){return S.to(b,H,">")}),S.duration();else{C={};for(E in _)E==="ease"||E==="easeEach"||o_(E,_[E],C,_.easeEach);for(E in C)for(k=C[E].sort(function(H,X){return H.t-X.t}),F=0,x=0;x<k.length;x++)V=k[x],$={ease:V.e,duration:(V.t-(x?k[x-1].t:0))/100*c},$[E]=V.v,S.to(b,$,F),F+=$.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return h===!0&&!xu&&(sr=Ni(a),Rt.killTweensOf(b),sr=0),Mi(p,Ni(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!_&&a._start===Ct(p._time)&&In(d)&&Ng(Ni(a))&&p.data!=="nested")&&(a._tTime=-vt,a.render(Math.max(0,-u)||0)),m&&jf(Ni(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-vt&&!u?l:i<vt?0:i,f,h,_,g,m,p,b,S;if(!c)Bg(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Ct(d%g),d===l?(_=this._repeat,f=c):(m=Ct(d/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=ws(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ct(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(ed(this,u?i:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var C=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(x?-1:1)/C:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(zn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(b,h.d),h=h._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&pu(this,i,s,o),zn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&pu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&lr(this,1),!s&&!(u&&!a)&&(d||a||p)&&(zn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Eo||Pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Lu(this,c),u=this._ease(c/this._dur),r_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Xa(this,0),this.parent||Kf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?vo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,sr&&sr.vars.overwrite!==!0)._first||vo(this),this.parent&&o!==this.timeline.totalDuration()&&Es(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,u=this._pt,d,f,h,_,g,m,p;if((!s||s==="all")&&Ug(a,l))return s==="all"&&(this._pt=0),vo(this);for(d=this._op=this._op||[],s!=="all"&&(Zt(s)&&(g={},vn(s,function(b){return g[b]=1}),s=g),s=s_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(d[p]=s,_=f,h={}):(h=d[p]=d[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ga(this,m,"_pt"),delete f[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&vo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Mo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Mo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Rt.killTweensOf(i,s,o)},e})(Ao);Hn(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vn("staggerTo,staggerFrom,staggerFromTo",function(r){kt[r]=function(){var e=new on,t=mu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Uu=function(e,t,n){return e[t]=n},pd=function(e,t,n){return e[t](n)},a_=function(e,t,n,i){return e[t](i.fp,n)},l_=function(e,t,n){return e.setAttribute(t,n)},qa=function(e,t){return Lt(e[t])?pd:Va(e[t])&&e.setAttribute?l_:Uu},md=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},c_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Fu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Nu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},u_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},h_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ga(this,t,"_pt"):t.dep||(n=1),t=i;return!n},f_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ou=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},xn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||md,this.d=l||this,this.set=c||Uu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=f_,this.m=n,this.mt=s,this.tween=i},r})();vn(wu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Tu[r]=1});Vn.TweenMax=Vn.TweenLite=kt;Vn.TimelineLite=Vn.TimelineMax=on;Rt=new on({sortChildren:!1,defaults:bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Dn.stringFilter=Ru;var Or=[],La={},d_=[],zf=0,p_=0,cu=function(e){return(La[e]||d_).map(function(t){return t()})},Co=function(){var e=Date.now(),t=[];e-zf>2&&(cu("matchMediaInit"),Or.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=yi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),cu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zf=e,cu("matchMedia"))},gd=(function(){function r(t,n){this.selector=n&&gu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=p_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Lt(n)&&(s=i,i=n,n=Lt);var o=this,a=function(){var c=At,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=gu(s)),At=o,d=i.apply(o,arguments),Lt(d)&&o._r.push(d),At=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===Lt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof on?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Or.length;o--;)Or[o].id===this.id&&Or.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Co):a.removeEventListener("change",Co)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),m_=(function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Si(n)||(n={matches:n});var o=new gd(0,s||this.scope),a=o.conditions={},l,c,u;At&&!o.selector&&(o.selector=At.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=yi.matchMedia(n[c]),l&&(Or.indexOf(o)<0&&Or.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Co):l.addEventListener("change",Co),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),za={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return cd(i)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Zt(e)&&(e=ii(e)[0]);var s=ar(e||{}).get,o=n?Jf:$f;return n==="native"&&(n=""),e&&(t?o((Rn[t]&&Rn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Rn[a]&&Rn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(u){return ln.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var o=Rn[t],a=ar(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;bs._pt=0,d.init(e,n?u+n:u,bs,0,[e]),d.render(1,d),bs._pt&&Nu(1,bs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=ln.to(e,Hn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Nr(e.ease,bo.ease)),Ff(bo,e||{})},config:function(e){return Ff(Dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Rn[a]&&!Vn[a]&&To(t+" effect requires "+a+" plugin.")}),su[t]=function(a,l,c){return n(ii(a),Hn(l||{},s),c)},o&&(on.prototype[t]=function(a,l,c){return this.add(su[t](a,Si(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Nr(t)},parseEase:function(e,t){return arguments.length?Nr(e,t):ot},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new on(e),i,s;for(n.smoothChildTiming=In(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof kt&&i.vars.onComplete===i._targets[0]))&&Mi(n,i,i._start-i._delay),i=s;return Mi(Rt,n,0),n},context:function(e,t){return e?new gd(e,t):At},matchMedia:function(e){return new m_(e)},matchMediaRefresh:function(){return Or.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Co()},addEventListener:function(e,t){var n=La[e]||(La[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=La[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:qg,wrapYoyo:Yg,distribute:id,random:sd,snap:rd,normalize:Xg,getUnit:rn,clamp:Vg,splitColor:ud,toArray:ii,selector:gu,mapRange:ad,pipe:Gg,unitize:Wg,interpolate:Zg,shuffle:nd},install:Xf,effects:su,ticker:Pn,updateRoot:on.updateRoot,plugins:Rn,globalTimeline:Rt,core:{PropTween:xn,globals:qf,Tween:kt,Timeline:on,Animation:Ao,getCache:ar,_removeLinkedListItem:Ga,reverting:function(){return nn},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return xu=e}}};vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return za[r]=kt[r]});Pn.add(on.updateRoot);bs=za.to({},{duration:0});var g_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},__=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=g_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},uu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Zt(s)&&(l={},vn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}__(a,s)}}}},ln=za.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},uu("roundProps",_u),uu("modifiers"),uu("snap",rd))||za;kt.version=on.version=ln.version="3.15.1";Wf=1;yu()&&As();var v_=ot.Power0,x_=ot.Power1,y_=ot.Power2,M_=ot.Power3,S_=ot.Power4,b_=ot.Linear,T_=ot.Quad,w_=ot.Cubic,E_=ot.Quart,A_=ot.Quint,C_=ot.Strong,R_=ot.Elastic,P_=ot.Back,I_=ot.SteppedEase,D_=ot.Bounce,L_=ot.Sine,U_=ot.Expo,F_=ot.Circ;var _d,ur,Ps,Gu,Wr,N_,vd,Wu,O_=function(){return typeof window<"u"},zi={},Gr=180/Math.PI,Is=Math.PI/180,Rs=Math.atan2,xd=1e8,Xu=/([A-Z])/g,B_=/(left|right|width|margin|padding|x)/i,k_=/[\s,\(]\S/,bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ku=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},z_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},V_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},H_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},G_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ad=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},W_=function(e,t,n){return e.style[t]=n},X_=function(e,t,n){return e.style.setProperty(t,n)},q_=function(e,t,n){return e._gsap[t]=n},Y_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Z_=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},$_=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Pt="transform",Ln=Pt+"Origin",J_=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ki(i,a)}):this.tfm[e]=o.x?o[e]:ki(i,e),e===Ln&&(this.tfm.zOrigin=o.zOrigin);else return bi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Pt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,t,"")),e=Pt}(s||t)&&this.props.push(e,t,s[e])},Rd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},K_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Xu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Wu(),(!s||!s.isStart)&&!n[Pt]&&(Rd(n),i.zOrigin&&n[Ln]&&(n[Ln]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pd=function(e,t){var n={target:e,props:[],revert:K_,save:J_};return e._gsap||ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Id,zu=function(e,t){var n=ur.createElementNS?ur.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ur.createElement(e);return n&&n.style?n:ur.createElement(e)},Gn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Xu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ds(t)||t,1)||""},yd="O,Moz,ms,Ms,Webkit".split(","),Ds=function(e,t,n){var i=t||Wr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(yd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?yd[o]:"")+e},Vu=function(){O_()&&window.document&&(_d=window,ur=_d.document,Ps=ur.documentElement,Wr=zu("div")||{style:{}},N_=zu("div"),Pt=Ds(Pt),Ln=Pt+"Origin",Wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Id=!!Ds("perspective"),Wu=ln.core.reverting,Gu=1)},Md=function(e){var t=e.ownerSVGElement,n=zu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ps.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ps.removeChild(n),s},Sd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Dd=function(e){var t,n;try{t=e.getBBox()}catch{t=Md(e),n=1}return t&&(t.width||t.height)||n||(t=Md(e)),t&&!t.width&&!t.x&&!t.y?{x:+Sd(e,["x","cx","x1"])||0,y:+Sd(e,["y","cy","y1"])||0,width:0,height:0}:t},Ld=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dd(e))},fr=function(e,t){if(t){var n=e.style,i;t in zi&&t!==Ln&&(t=Pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Xu,"-$1").toLowerCase())):n.removeAttribute(t)}},hr=function(e,t,n,i,s,o){var a=new xn(e._pt,t,n,0,1,o?Cd:Ad);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},bd={deg:1,rad:1,turn:1},Q_={grid:1,flex:1},dr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Wr.style,l=B_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",_,g,m,p;if(i===o||!s||bd[i]||bd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Ld(e),(h||o==="%")&&(zi[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Ut(h?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ur||!g.appendChild)&&(g=ur.body),m=g._gsap,m&&h&&m.width&&l&&m.time===Pn.time&&!m.uncache)return Ut(s/m.width*d);if(h&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+i,_=e[u],b?e.style[t]=b:fr(e,t)}else(h||o==="%")&&!Q_[Gn(g,"display")]&&(a.position=Gn(e,"position")),g===e&&(a.position="static"),g.appendChild(Wr),_=Wr[u],g.removeChild(Wr),a.position="absolute";return l&&h&&(m=ar(g),m.time=Pn.time,m.width=g[u]),Ut(f?_*s/d:_&&s?d/_*s:0)},ki=function(e,t,n,i){var s;return Gu||Vu(),t in bi&&t!=="transform"&&(t=bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),zi[t]&&t!=="transform"?(s=Do(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Za(Gn(e,Ln))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ya[t]&&Ya[t](e,t,n)||Gn(e,t)||Au(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?dr(e,t,s,n)+n:s},j_=function(e,t,n,i){if(!n||n==="none"){var s=Ds(t,e,1),o=s&&Gn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Gn(e,"borderTopColor"))}var a=new xn(this._pt,e.style,t,0,1,Fu),l=0,c=0,u,d,f,h,_,g,m,p,b,S,x,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Gn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Gn(e,t)||i,g?e.style[t]=g:fr(e,t)),u=[n,i],Ru(u),n=u[0],i=u[1],f=n.match(Br)||[],C=i.match(Br)||[],C.length){for(;d=Br.exec(i);)m=d[0],b=i.substring(l,d.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(h=parseFloat(g)||0,x=g.substr((h+"").length),m.charAt(1)==="="&&(m=kr(h,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=Br.lastIndex-S.length,S||(S=S||Dn.units[t]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(h=dr(e,t,g,S)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:h,c:p-h,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Cd:Ad;return Su.test(i)&&(a.e=0),this._pt=a,a},Td={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},e0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Td[n]||n,t[1]=Td[i]||i,t.join(" ")},t0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],zi[a]&&(l=1,a=a==="transformOrigin"?Ln:Pt),fr(n,a);l&&(fr(n,Pt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Do(n,1),o.uncache=1,Rd(i)))}},Ya={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new xn(e._pt,t,n,0,0,t0);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Io=[1,0,0,1,0,0],Ud={},Fd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wd=function(e){var t=Gn(e,Pt);return Fd(t)?Io:t.substr(7).match(Mu).map(Ut)},qu=function(e,t){var n=e._gsap||ar(e),i=e.style,s=wd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Io:s):(s===Io&&!e.offsetParent&&e!==Ps&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ps.appendChild(e)),s=wd(e),l?i.display=l:fr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ps.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hu=function(e,t,n,i,s,o){var a=e._gsap,l=s||qu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],_=l[1],g=l[2],m=l[3],p=l[4],b=l[5],S=t.split(" "),x=parseFloat(S[0])||0,C=parseFloat(S[1])||0,R,E,P,M;n?l!==Io&&(E=h*m-_*g)&&(P=x*(m/E)+C*(-g/E)+(g*b-m*p)/E,M=x*(-_/E)+C*(h/E)-(h*b-_*p)/E,x=P,C=M):(R=Dd(e),x=R.x+(~S[0].indexOf("%")?x/100*R.width:x),C=R.y+(~(S[1]||S[0]).indexOf("%")?C/100*R.height:C)),i||i!==!1&&a.smooth?(p=x-c,b=C-u,a.xOffset=d+(p*h+b*g)-p,a.yOffset=f+(p*_+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Ln]="0px 0px",o&&(hr(o,a,"xOrigin",c,x),hr(o,a,"yOrigin",u,C),hr(o,a,"xOffset",d,a.xOffset),hr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+C)},Do=function(e,t){var n=e._gsap||new Pu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Gn(e,Ln)||"0",u,d,f,h,_,g,m,p,b,S,x,C,R,E,P,M,v,I,F,k,V,$,H,X,G,re,D,de,Le,Ze,J,oe;return u=d=f=g=m=p=b=S=x=0,h=_=1,n.svg=!!(e.getCTM&&Ld(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),i.scale=i.rotate=i.translate="none"),E=qu(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Hu(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,E)),C=n.xOrigin||0,R=n.yOrigin||0,E!==Io&&(I=E[0],F=E[1],k=E[2],V=E[3],u=$=E[4],d=H=E[5],E.length===6?(h=Math.sqrt(I*I+F*F),_=Math.sqrt(V*V+k*k),g=I||F?Rs(F,I)*Gr:0,b=k||V?Rs(k,V)*Gr+g:0,b&&(_*=Math.abs(Math.cos(b*Is))),n.svg&&(u-=C-(C*I+R*k),d-=R-(C*F+R*V))):(oe=E[6],Ze=E[7],D=E[8],de=E[9],Le=E[10],J=E[11],u=E[12],d=E[13],f=E[14],P=Rs(oe,Le),m=P*Gr,P&&(M=Math.cos(-P),v=Math.sin(-P),X=$*M+D*v,G=H*M+de*v,re=oe*M+Le*v,D=$*-v+D*M,de=H*-v+de*M,Le=oe*-v+Le*M,J=Ze*-v+J*M,$=X,H=G,oe=re),P=Rs(-k,Le),p=P*Gr,P&&(M=Math.cos(-P),v=Math.sin(-P),X=I*M-D*v,G=F*M-de*v,re=k*M-Le*v,J=V*v+J*M,I=X,F=G,k=re),P=Rs(F,I),g=P*Gr,P&&(M=Math.cos(P),v=Math.sin(P),X=I*M+F*v,G=$*M+H*v,F=F*M-I*v,H=H*M-$*v,I=X,$=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),h=Ut(Math.sqrt(I*I+F*F+k*k)),_=Ut(Math.sqrt(H*H+oe*oe)),P=Rs($,H),b=Math.abs(P)>2e-4?P*Gr:0,x=J?1/(J<0?-J:J):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Fd(Gn(e,Pt)),X&&e.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(h*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ut(h),n.scaleY=Ut(_),n.rotation=Ut(g)+a,n.rotationX=Ut(m)+a,n.rotationY=Ut(p)+a,n.skewX=b+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Ln]=Za(c)),n.xOffset=n.yOffset=0,n.force3D=Dn.force3D,n.renderTransform=n.svg?i0:Id?Nd:n0,n.uncache=0,n},Za=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bu=function(e,t,n){var i=rn(t);return Ut(parseFloat(t)+parseFloat(dr(e,"x",n+"px",i)))+i},n0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Nd(e,t)},Vr="0deg",Po="0px",Hr=") ",Nd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,S=n.zOrigin,x="",C=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==Vr||u!==Vr)){var R=parseFloat(u)*Is,E=Math.sin(R),P=Math.cos(R),M;R=parseFloat(d)*Is,M=Math.cos(R),o=Bu(b,o,E*M*-S),a=Bu(b,a,-Math.sin(R)*-S),l=Bu(b,l,P*M*-S+S)}m!==Po&&(x+="perspective("+m+Hr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(C||o!==Po||a!==Po||l!==Po)&&(x+=l!==Po||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Hr),c!==Vr&&(x+="rotate("+c+Hr),u!==Vr&&(x+="rotateY("+u+Hr),d!==Vr&&(x+="rotateX("+d+Hr),(f!==Vr||h!==Vr)&&(x+="skew("+f+", "+h+Hr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Hr),b.style[Pt]=x||"translate(0, 0)"},i0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,S=parseFloat(o),x=parseFloat(a),C,R,E,P,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Is,c*=Is,C=Math.cos(l)*d,R=Math.sin(l)*d,E=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Is,M=Math.tan(c-u),M=Math.sqrt(1+M*M),E*=M,P*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),C*=M,R*=M)),C=Ut(C),R=Ut(R),E=Ut(E),P=Ut(P)):(C=d,P=f,R=E=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=dr(h,"x",o,"px"),x=dr(h,"y",a,"px")),(_||g||m||p)&&(S=Ut(S+_-(_*C+g*E)+m),x=Ut(x+g-(_*R+g*P)+p)),(i||s)&&(M=h.getBBox(),S=Ut(S+i/100*M.width),x=Ut(x+s/100*M.height)),M="matrix("+C+","+R+","+E+","+P+","+S+","+x+")",h.setAttribute("transform",M),b&&(h.style[Pt]=M)},r0=function(e,t,n,i,s){var o=360,a=Zt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Gr:1),c=l-i,u=i+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*xd)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*xd)%o-~~(c/o)*o)),e._pt=f=new xn(e._pt,t,n,i,c,z_),f.e=u,f.u="deg",e._props.push(n),f},Ed=function(e,t){for(var n in t)e[n]=t[n];return e},s0=function(e,t,n){var i=Ed({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,f,h,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pt]=t,a=Do(n,1),fr(n,Pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pt],o[Pt]=t,a=Do(n,1),o[Pt]=c);for(l in zi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=rn(c),_=rn(u),d=h!==_?dr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new xn(e._pt,a,l,d,f-d,ku),e._pt.u=_||0,e._props.push(l));Ed(a,i)};vn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ya[e>1?"border"+r:r]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(_){return ki(a,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(_,g){return h[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,h,d)}});var Yu={name:"css",register:Vu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,h,_,g,m,p,b,S,x,C,R,E,P,M;Gu||Vu(),this.styles=this.styles||Pd(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Rn[g]&&Du(g,t,n,i,e,s)))){if(h=typeof u,_=Ya[g],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Cs(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Oi.lastIndex=0,Oi.test(c)||(m=rn(c),p=rn(u),p?m!==p&&(c=dr(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Zt(c)&&~c.indexOf("random(")&&(c=Cs(c)),rn(c+"")||c==="auto"||(c+=Dn.units[g]||rn(ki(e,g))||""),(c+"").charAt(1)==="="&&(c=ki(e,g))):c=ki(e,g),f=parseFloat(c),b=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),g in bi&&(g==="autoAlpha"&&(f===1&&ki(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),hr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=bi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in zi,S){if(this.styles.save(g),M=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Gn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=Gn(e,"perspective"),v?e.style.perspective=v:fr(e,"perspective")}d=parseFloat(u)}if(x||(C=e._gsap,C.renderTransform&&!t.parseTransform||Do(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,x=this._pt=new xn(this._pt,a,Pt,0,1,C.renderTransform,C,0,-1),x.dep=1),g==="scale")this._pt=new xn(this._pt,C,"scaleY",C.scaleY,(b?kr(C.scaleY,b+d):d)-C.scaleY||0,ku),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Ln,0,a[Ln]),u=e0(u),C.svg?Hu(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&hr(this,C,"zOrigin",C.zOrigin,p),hr(this,a,g,Za(c),Za(u)));continue}else if(g==="svgOrigin"){Hu(e,u,1,R,0,this);continue}else if(g in Ud){r0(this,C,g,f,b?kr(f,b+u):u);continue}else if(g==="smoothOrigin"){hr(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){s0(this,u,e);continue}}else g in a||(g=Ds(g)||g);if(S||(d||d===0)&&(f||f===0)&&!k_.test(u)&&g in a)m=(c+"").substr((f+"").length),d||(d=0),p=rn(u)||(g in Dn.units?Dn.units[g]:m),m!==p&&(f=dr(e,g,c,p)),this._pt=new xn(this._pt,S?C:a,g,f,(b?kr(f,b+d):d)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?G_:ku),this._pt.u=p||0,S&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=H_):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=V_);else if(g in a)j_.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,i,s);else if(g!=="parseTransform"){Ha(g,u);continue}S||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),o.push(g)}}E&&Ou(this)},render:function(e,t){if(t.tween._time||!Wu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ki,aliases:bi,getSetter:function(e,t,n){var i=bi[t];return i&&i.indexOf(",")<0&&(t=i),t in zi&&t!==Ln&&(e._gsap.x||ki(e,"x"))?n&&vd===n?t==="scale"?Y_:q_:(vd=n||{})&&(t==="scale"?Z_:$_):e.style&&!Va(e.style[t])?W_:~t.indexOf("-")?X_:qa(e,t)},core:{_removeProperty:fr,_getMatrix:qu}};ln.utils.checkPrefix=Ds;ln.core.getStyleSaver=Pd;(function(r,e,t,n){var i=vn(r+","+e+","+t,function(s){zi[s]=1});vn(e,function(s){Dn.units[s]="deg",Ud[s]=1}),bi[i[13]]=r+","+e,vn(n,function(s){var o=s.split(":");bi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Dn.units[r]="px"});ln.registerPlugin(Yu);var Tt=ln.registerPlugin(Yu)||ln,Nb=Tt.core.Tween;function Od(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function o0(r,e,t){return e&&Od(r.prototype,e),t&&Od(r,t),r}var sn,Ka,a0,Un,pr,mr,Us,kd,Xr,Fs,zd,Vi,fi,Vd,Hd=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},Gd=1,Ls=[],je=[],di=[],Uo=Date.now,Zu=function(e,t){return t},l0=function(){var e=Fs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,je),i.push.apply(i,di),je=n,di=i,Zu=function(o,a){return t[o](a)}},Gi=function(e,t){return~di.indexOf(e)&&di[di.indexOf(e)+1][t]},Fo=function(e){return!!~zd.indexOf(e)},Mn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},$a="scrollLeft",Ja="scrollTop",$u=function(){return Vi&&Vi.isPressed||je.cache++},Qa=function(e,t){var n=function i(s){if(s||s===0){Gd&&Un.history.scrollRestoration!=="manual"&&(Un.history.scrollRestoration="manual");var o=Vi&&Vi.isPressed;s=i.v=Math.round(s)||(Vi&&Vi.iOS?1:0),e(s),i.cacheID=je.cache,o&&Zu("ss",s)}else(t||je.cache!==i.cacheID||Zu("ref"))&&(i.cacheID=je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},cn={s:$a,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Qa(function(r){return arguments.length?Un.scrollTo(r,Ht.sc()):Un.pageXOffset||pr[$a]||mr[$a]||Us[$a]||0})},Ht={s:Ja,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:cn,sc:Qa(function(r){return arguments.length?Un.scrollTo(cn.sc(),r):Un.pageYOffset||pr[Ja]||mr[Ja]||Us[Ja]||0})},Sn=function(e,t){return(t&&t._ctx&&t._ctx.selector||sn.utils.toArray)(e)[0]||(typeof e=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},c0=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Hi=function(e,t){var n=t.s,i=t.sc;Fo(e)&&(e=pr.scrollingElement||mr);var s=je.indexOf(e),o=i===Ht.sc?1:2;!~s&&(s=je.push(e)-1),je[s+o]||Mn(e,"scroll",$u);var a=je[s+o],l=a||(je[s+o]=Qa(Gi(e,n),!0)||(Fo(e)?i:Qa(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=sn.getProperty(e,"scrollBehavior")==="smooth"),l},ja=function(e,t,n){var i=e,s=e,o=Uo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Uo();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,m=s,p=Uo();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:d,getVelocity:f}},Lo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Bd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Wd=function(){Fs=sn.core.globals().ScrollTrigger,Fs&&Fs.core&&l0()},Xd=function(e){return sn=e||Hd(),!Ka&&sn&&typeof document<"u"&&document.body&&(Un=window,pr=document,mr=pr.documentElement,Us=pr.body,zd=[Un,pr,mr,Us],a0=sn.utils.clamp,Vd=sn.core.context||function(){},Xr="onpointerenter"in Us?"pointer":"mouse",kd=Ft.isTouch=Un.matchMedia&&Un.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Un||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=Ft.eventTypes=("ontouchstart"in mr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in mr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gd=0},500),Ka=1),Fs||Wd(),Ka};cn.op=Ht;je.cache=0;var Ft=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ka||Xd(sn)||console.warn("Please gsap.registerPlugin(Observer)"),Fs||Wd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,b=n.onDrag,S=n.onPress,x=n.onRelease,C=n.onRight,R=n.onLeft,E=n.onUp,P=n.onDown,M=n.onChangeX,v=n.onChangeY,I=n.onChange,F=n.onToggleX,k=n.onToggleY,V=n.onHover,$=n.onHoverEnd,H=n.onMove,X=n.ignoreCheck,G=n.isNormalizer,re=n.onGestureStart,D=n.onGestureEnd,de=n.onWheel,Le=n.onEnable,Ze=n.onDisable,J=n.onClick,oe=n.scrollSpeed,_e=n.capture,ae=n.allowClicks,Ae=n.lockAxis,Oe=n.onLockAxis;this.target=a=Sn(a)||mr,this.vars=n,h&&(h=sn.utils.toArray(h)),i=i||1e-9,s=s||0,_=_||1,oe=oe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Un.getComputedStyle(Us).lineHeight)||22);var Ie,$e,Xe,z,w,ee,ie,U=this,ne=0,ve=0,ce=n.passive||!u&&n.passive!==!1,A=Hi(a,cn),y=Hi(a,Ht),O=A(),Q=y(),K=~o.indexOf("touch")&&!~o.indexOf("pointer")&&fi[0]==="pointerdown",j=Fo(a),fe=a.ownerDocument||pr,ue=[0,0,0],me=[0,0,0],Ge=0,le=function(){return Ge=Uo()},he=function(Re,Ke){return(U.event=Re)&&h&&c0(Re.target,h)||Ke&&K&&Re.pointerType!=="touch"||X&&X(Re,Ke)},Ne=function(){U._vx.reset(),U._vy.reset(),$e.pause(),d&&d(U)},Fe=function(){var Re=U.deltaX=Bd(ue),Ke=U.deltaY=Bd(me),ye=Math.abs(Re)>=i,We=Math.abs(Ke)>=i;I&&(ye||We)&&I(U,Re,Ke,ue,me),ye&&(C&&U.deltaX>0&&C(U),R&&U.deltaX<0&&R(U),M&&M(U),F&&U.deltaX<0!=ne<0&&F(U),ne=U.deltaX,ue[0]=ue[1]=ue[2]=0),We&&(P&&U.deltaY>0&&P(U),E&&U.deltaY<0&&E(U),v&&v(U),k&&U.deltaY<0!=ve<0&&k(U),ve=U.deltaY,me[0]=me[1]=me[2]=0),(z||Xe)&&(H&&H(U),Xe&&(m&&Xe===1&&m(U),b&&b(U),Xe=0),z=!1),ee&&!(ee=!1)&&Oe&&Oe(U),w&&(de(U),w=!1),Ie=0},Te=function(Re,Ke,ye){ue[ye]+=Re,me[ye]+=Ke,U._vx.update(Re),U._vy.update(Ke),c?Ie||(Ie=requestAnimationFrame(Fe)):Fe()},Je=function(Re,Ke){Ae&&!ie&&(U.axis=ie=Math.abs(Re)>Math.abs(Ke)?"x":"y",ee=!0),ie!=="y"&&(ue[2]+=Re,U._vx.update(Re,!0)),ie!=="x"&&(me[2]+=Ke,U._vy.update(Ke,!0)),c?Ie||(Ie=requestAnimationFrame(Fe)):Fe()},ze=function(Re){if(!he(Re,1)){Re=Lo(Re,u);var Ke=Re.clientX,ye=Re.clientY,We=Ke-U.x,Pe=ye-U.y,He=U.isDragging;U.x=Ke,U.y=ye,(He||(We||Pe)&&(Math.abs(U.startX-Ke)>=s||Math.abs(U.startY-ye)>=s))&&(Xe||(Xe=He?2:1),He||(U.isDragging=!0),Je(We,Pe))}},at=U.onPress=function(be){he(be,1)||be&&be.button||(U.axis=ie=null,$e.pause(),U.isPressed=!0,be=Lo(be),ne=ve=0,U.startX=U.x=be.clientX,U.startY=U.y=be.clientY,U._vx.reset(),U._vy.reset(),Mn(G?a:fe,fi[1],ze,ce,!0),U.deltaX=U.deltaY=0,S&&S(U))},L=U.onRelease=function(be){if(!he(be,1)){yn(G?a:fe,fi[1],ze,!0);var Re=!isNaN(U.y-U.startY),Ke=U.isDragging,ye=Ke&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),We=Lo(be);!ye&&Re&&(U._vx.reset(),U._vy.reset(),u&&ae&&sn.delayedCall(.08,function(){if(Uo()-Ge>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(fe.createEvent){var Pe=fe.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,Un,1,We.screenX,We.screenY,We.clientX,We.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(Pe)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,d&&Ke&&!G&&$e.restart(!0),Xe&&Fe(),p&&Ke&&p(U),x&&x(U,ye)}},ge=function(Re){return Re.touches&&Re.touches.length>1&&(U.isGesturing=!0)&&re(Re,U.isDragging)},Z=function(){return(U.isGesturing=!1)||D(U)},te=function(Re){if(!he(Re)){var Ke=A(),ye=y();Te((Ke-O)*oe,(ye-Q)*oe,1),O=Ke,Q=ye,d&&$e.restart(!0)}},pe=function(Re){if(!he(Re)){Re=Lo(Re,u),de&&(w=!0);var Ke=(Re.deltaMode===1?l:Re.deltaMode===2?Un.innerHeight:1)*_;Te(Re.deltaX*Ke,Re.deltaY*Ke,0),d&&!G&&$e.restart(!0)}},xe=function(Re){if(!he(Re)){var Ke=Re.clientX,ye=Re.clientY,We=Ke-U.x,Pe=ye-U.y;U.x=Ke,U.y=ye,z=!0,d&&$e.restart(!0),(We||Pe)&&Je(We,Pe)}},Ve=function(Re){U.event=Re,V(U)},ct=function(Re){U.event=Re,$(U)},It=function(Re){return he(Re)||Lo(Re,u)&&J(U)};$e=U._dc=sn.delayedCall(f||.25,Ne).pause(),U.deltaX=U.deltaY=0,U._vx=ja(0,50,!0),U._vy=ja(0,50,!0),U.scrollX=A,U.scrollY=y,U.isDragging=U.isGesturing=U.isPressed=!1,Vd(this),U.enable=function(be){return U.isEnabled||(Mn(j?fe:a,"scroll",$u),o.indexOf("scroll")>=0&&Mn(j?fe:a,"scroll",te,ce,_e),o.indexOf("wheel")>=0&&Mn(a,"wheel",pe,ce,_e),(o.indexOf("touch")>=0&&kd||o.indexOf("pointer")>=0)&&(Mn(a,fi[0],at,ce,_e),Mn(fe,fi[2],L),Mn(fe,fi[3],L),ae&&Mn(a,"click",le,!0,!0),J&&Mn(a,"click",It),re&&Mn(fe,"gesturestart",ge),D&&Mn(fe,"gestureend",Z),V&&Mn(a,Xr+"enter",Ve),$&&Mn(a,Xr+"leave",ct),H&&Mn(a,Xr+"move",xe)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=z=Xe=!1,U._vx.reset(),U._vy.reset(),O=A(),Q=y(),be&&be.type&&at(be),Le&&Le(U)),U},U.disable=function(){U.isEnabled&&(Ls.filter(function(be){return be!==U&&Fo(be.target)}).length||yn(j?fe:a,"scroll",$u),U.isPressed&&(U._vx.reset(),U._vy.reset(),yn(G?a:fe,fi[1],ze,!0)),yn(j?fe:a,"scroll",te,_e),yn(a,"wheel",pe,_e),yn(a,fi[0],at,_e),yn(fe,fi[2],L),yn(fe,fi[3],L),yn(a,"click",le,!0),yn(a,"click",It),yn(fe,"gesturestart",ge),yn(fe,"gestureend",Z),yn(a,Xr+"enter",Ve),yn(a,Xr+"leave",ct),yn(a,Xr+"move",xe),U.isEnabled=U.isPressed=U.isDragging=!1,Ze&&Ze(U))},U.kill=U.revert=function(){U.disable();var be=Ls.indexOf(U);be>=0&&Ls.splice(be,1),Vi===U&&(Vi=0)},Ls.push(U),G&&Fo(a)&&(Vi=U),U.enable(g)},o0(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ft.version="3.15.1";Ft.create=function(r){return new Ft(r)};Ft.register=Xd;Ft.getAll=function(){return Ls.slice()};Ft.getById=function(r){return Ls.filter(function(e){return e.vars.id===r})[0]};Hd()&&sn.registerPlugin(Ft);var Ce,ks,nt,gt,qn,mt,ch,ml,Zo,Ho,Oo,el,un,vl,nh,Tn,qd,Yd,zs,cp,Ju,up,bn,ih,hp,fp,gr,rh,uh,Vs,hh,_r,sh,Ku,tl=1,hn=Date.now,Qu=hn(),oi=0,Bo=0,Zd=function(e,t,n){var i=Xn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},$d=function(e,t){return t&&(!Xn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},u0=function r(){return Bo&&requestAnimationFrame(r)},Jd=function(){return vl=1},Kd=function(){return vl=0},Ti=function(e){return e},ko=function(e){return Math.round(e*1e5)/1e5||0},dp=function(){return typeof window<"u"},pp=function(){return Ce||dp()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Kr=function(e){return!!~ch.indexOf(e)},mp=function(e){return(e==="Height"?hh:nt["inner"+e])||qn["client"+e]||mt["client"+e]},gp=function(e){return Gi(e,"getBoundingClientRect")||(Kr(e)?function(){return pl.width=nt.innerWidth,pl.height=hh,pl}:function(){return Wi(e)})},h0=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Gi(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?mp(s):e["client"+s])||0}},f0=function(e,t){return!t||~di.indexOf(e)?gp(e):function(){return pl}},wi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Gi(e,n))?o()-gp(e)()[s]:Kr(e)?(qn[n]||mt[n])-mp(i):e[n]-e["offset"+i])},nl=function(e,t){for(var n=0;n<zs.length;n+=3)(!t||~t.indexOf(zs[n+1]))&&e(zs[n],zs[n+1],zs[n+2])},Xn=function(e){return typeof e=="string"},fn=function(e){return typeof e=="function"},zo=function(e){return typeof e=="number"},qr=function(e){return typeof e=="object"},No=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ns=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Os=Math.abs,_p="left",vp="top",fh="right",dh="bottom",Zr="width",$r="height",Go="Right",Wo="Left",Xo="Top",qo="Bottom",Gt="padding",ri="margin",Gs="Width",ph="Height",$t="px",si=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},d0=function(e){var t=si(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Qd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wi=function(e,t){var n=t&&si(e)[nh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},gl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},xp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},p0=function(e){return function(t){return Ce.utils.snap(xp(e),t)}},mh=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},m0=function(e){return function(t,n){return mh(xp(e))(t,n.direction)}},il=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Qt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},rl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},jd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sl={toggleActions:"play",anticipatePin:0},_l={top:0,left:0,center:.5,bottom:1,right:1},ul=function(e,t){if(Xn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in _l?_l[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ol=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,_=gt.createElement("div"),g=Kr(n)||Gi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?mt:n.tagName==="IFRAME"?n.contentDocument.body:n,b=e.indexOf("start")!==-1,S=b?c:u,x="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===Ht?fh:dh)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=b,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],hl(_,0,i,b),_},hl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Gs]=1,s["border"+a+Gs]=0,s[n.p]=t+"px",Ce.set(e,s)},tt=[],oh={},$o,ep=function(){return hn()-oi>34&&($o||($o=requestAnimationFrame(Xi)))},Bs=function(){(!bn||!bn.isPressed||bn.startX>mt.clientWidth)&&(je.cache++,bn?$o||($o=requestAnimationFrame(Xi)):Xi(),oi||jr("scrollStart"),oi=hn())},ju=function(){fp=nt.innerWidth,hp=nt.innerHeight},Vo=function(e){je.cache++,(e===!0||!un&&!up&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!ih||fp!==nt.innerWidth||Math.abs(nt.innerHeight-hp)>nt.innerHeight*.25))&&ml.restart(!0)},Qr={},g0=[],yp=function r(){return Qt(Qe,"scrollEnd",r)||Yr(!0)},jr=function(e){return Qr[e]&&Qr[e].map(function(t){return t()})||g0},Wn=[],Mp=function(e){for(var t=0;t<Wn.length;t+=5)(!e||Wn[t+4]&&Wn[t+4].query===e)&&(Wn[t].style.cssText=Wn[t+1],Wn[t].getBBox&&Wn[t].setAttribute("transform",Wn[t+2]||""),Wn[t+3].uncache=1)},Sp=function(){je.cache++,je.forEach(function(e){return fn(e)&&(e.rec=e())})},gh=function(e,t){var n;for(Tn=0;Tn<tt.length;Tn++)n=tt[Tn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));_r=!0,t&&Mp(t),t||jr("revert")},bp=function(e,t){je.cache++,(t||!wn)&&je.forEach(function(n){return fn(n)&&n.cacheID++&&(n.rec=0)}),Xn(e)&&(uh=e,nt.history.scrollRestoration!==e&&(nt.history.scrollRestoration=e))},wn,Jr=0,tp,_0=function(){if(tp!==Jr){var e=tp=Jr;requestAnimationFrame(function(){return e===Jr&&Yr(!0)})}},Tp=function(){mt.appendChild(Vs),hh=!bn&&Vs.offsetHeight||nt.innerHeight,mt.removeChild(Vs)},np=function(e){return Zo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Yr=function(e,t){if(qn=gt.documentElement,mt=gt.body,ch=[nt,gt,qn,mt],oi&&!e&&!_r){jt(Qe,"scrollEnd",yp);return}Tp(),wn=Qe.isRefreshing=!0,_r||Sp();var n=jr("refreshInit");cp&&Qe.sort(),t||gh(),je.forEach(function(i){fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),_r=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),sh=1,np(!0),tt.forEach(function(i){var s=wi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),np(!1),sh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),je.forEach(function(i){fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),bp(uh,1),ml.pause(),Jr++,wn=2,Xi(2),tt.forEach(function(i){return fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=Qe.isRefreshing=!1,jr("refresh")},ah=0,fl=1,Yo,Xi=function(e){if(e===2||!wn&&!_r){Qe.isUpdating=!0,Yo&&Yo.update(0);var t=tt.length,n=hn(),i=n-Qu>=50,s=t&&tt[0].scroll();if(fl=ah>s?-1:1,wn||(ah=s),i&&(oi&&!vl&&n-oi>200&&(oi=0,jr("scrollEnd")),Oo=Qu,Qu=n),fl<0){for(Tn=t;Tn-- >0;)tt[Tn]&&tt[Tn].update(0,i);fl=1}else for(Tn=0;Tn<t;Tn++)tt[Tn]&&tt[Tn].update(0,i);Qe.isUpdating=!1}$o=0},lh=[_p,vp,dh,fh,ri+qo,ri+Go,ri+Xo,ri+Wo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],dl=lh.concat([Zr,$r,"boxSizing","max"+Gs,"max"+ph,"position",ri,Gt,Gt+Xo,Gt+Go,Gt+qo,Gt+Wo]),v0=function(e,t,n){Hs(n);var i=e._gsap;if(i.spacerIsNative)Hs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},eh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=lh.length,o=t.style,a=e.style,l;s--;)l=lh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[dh]=a[fh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Zr]=gl(e,cn)+$t,o[$r]=gl(e,Ht)+$t,o[Gt]=a[ri]=a[vp]=a[_p]="0",Hs(i),a[Zr]=a["max"+Gs]=n[Zr],a[$r]=a["max"+ph]=n[$r],a[Gt]=n[Gt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},x0=/([A-Z])/g,Hs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(x0,"-$1").toLowerCase())}},al=function(e){for(var t=dl.length,n=e.style,i=[],s=0;s<t;s++)i.push(dl[s],n[dl[s]]);return i.t=e,i},y0=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},pl={left:0,top:0},ip=function(e,t,n,i,s,o,a,l,c,u,d,f,h,_){fn(e)&&(e=e(l)),Xn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ul("0"+e.substr(3),n):0));var g=h?h.time():0,m,p,b;if(h&&h.seek(0),isNaN(e)||(e=+e),zo(e))h&&(e=Ce.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&hl(a,n,i,!0);else{fn(t)&&(t=t(l));var S=(e||"0").split(" "),x,C,R,E;b=Sn(t,l)||mt,x=Wi(b)||{},(!x||!x.left&&!x.top)&&si(b).display==="none"&&(E=b.style.display,b.style.display="block",x=Wi(b),E?b.style.display=E:b.style.removeProperty("display")),C=ul(S[0],x[i.d]),R=ul(S[1]||"0",n),e=x[i.p]-c[i.p]-u+C+s-R,a&&hl(a,R,i,n-R<20||a._isStart&&R>20),n-=n-R}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+n,M=o._isStart;m="scroll"+i.d2,hl(o,P,i,M&&P>20||!M&&(d?Math.max(mt[m],qn[m]):o.parentNode[m])<=P+1),d&&(c=Wi(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+$t))}return h&&b&&(m=Wi(b),h.seek(f),p=Wi(b),h._caScrollDist=m[i.p]-p[i.p],e=e/h._caScrollDist*f),h&&h.seek(g),h?e:Math.round(e)},M0=/(webkit|moz|length|cssText|inset)/i,rp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===mt){e._stOrig=s.cssText,a=si(e);for(o in a)!+o&&!M0.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},wp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ll=function(e,t,n){var i={};i[t.p]="+="+n,Ce.set(e,i)},sp=function(e,t){var n=Hi(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,h=l.onComplete,_={};c=c||n();var g=wp(n,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){je.cache++,o.tween&&Xi()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=Ce.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},jt(e,"wheel",n.wheelHandler),Qe.isTouch&&jt(e,"touchmove",n.wheelHandler),s},Qe=(function(){function r(t,n){ks||r.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),rh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Bo){this.update=this.refresh=this.kill=Ti;return}n=Qd(Xn(n)||zo(n)||n.nodeType?{trigger:n}:n,sl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,b=s.onSnapComplete,S=s.once,x=s.snap,C=s.pinReparent,R=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,M=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?cn:Ht,I=!d&&d!==0,F=Sn(n.scroller||nt),k=Ce.core.getCache(F),V=Kr(F),$=("pinType"in n?n.pinType:Gi(F,"pinType")||V&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=I&&n.toggleActions.split(" "),G="markers"in n?n.markers:sl.markers,re=V?0:parseFloat(si(F)["border"+v.p2+Gs])||0,D=this,de=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Le=h0(F,V,v),Ze=f0(F,V),J=0,oe=0,_e=0,ae=Hi(F,v),Ae,Oe,Ie,$e,Xe,z,w,ee,ie,U,ne,ve,ce,A,y,O,Q,K,j,fe,ue,me,Ge,le,he,Ne,Fe,Te,Je,ze,at,L,ge,Z,te,pe,xe,Ve,ct;if(D._startClamp=D._endClamp=!1,D._dir=v,m*=45,D.scroller=F,D.scroll=E?E.time.bind(E):ae,$e=ae(),_r&&ae.rec==null&&(ae.rec=$e),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(cp=1,n.refreshPriority===-9999&&(Yo=D)),k.tweenScroll=k.tweenScroll||{top:sp(F,Ht),left:sp(F,cn)},D.tweenTo=Ae=k.tweenScroll[v.p],D.scrubDuration=function(ye){ge=zo(ye)&&ye,ge?L?L.duration(ye):L=Ce.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ge,paused:!0,onComplete:function(){return p&&p(D)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(d),ze=0,l||(l=i.vars.id)),x&&((!qr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in mt.style&&Ce.set(V?[mt,qn]:F,{scrollBehavior:"auto"}),je.forEach(function(ye){return fn(ye)&&ye.target===(V?gt.scrollingElement||qn:F)&&(ye.smooth=!1)}),Ie=fn(x.snapTo)?x.snapTo:x.snapTo==="labels"?p0(i):x.snapTo==="labelsDirectional"?m0(i):x.directional!==!1?function(ye,We){return mh(x.snapTo)(ye,hn()-oe<500?0:We.direction)}:Ce.utils.snap(x.snapTo),Z=x.duration||{min:.1,max:2},Z=qr(Z)?Ho(Z.min,Z.max):Ho(Z,Z),te=Ce.delayedCall(x.delay||ge/2||.1,function(){var ye=ae(),We=hn()-oe<500,Pe=Ae.tween;if((We||Math.abs(D.getVelocity())<10)&&!Pe&&!vl&&J!==ye){var He=(ye-z)/A,Bt=i&&!I?i.totalProgress():He,it=We?0:(Bt-at)/(hn()-Oo)*1e3||0,St=Ce.utils.clamp(-He,1-He,Os(it/2)*it/.185),Xt=He+(x.inertia===!1?0:St),xt,yt,ft=x,Bn=ft.onStart,bt=ft.onInterrupt,gn=ft.onComplete;if(xt=Ie(Xt,D),zo(xt)||(xt=Xt),yt=Math.max(0,Math.round(z+xt*A)),ye<=w&&ye>=z&&yt!==ye){if(Pe&&!Pe._initted&&Pe.data<=Os(yt-ye))return;x.inertia===!1&&(St=xt-He),Ae(yt,{duration:Z(Os(Math.max(Os(Xt-Bt),Os(xt-Bt))*.185/it/.05||0)),ease:x.ease||"power3",data:Os(yt-ye),onInterrupt:function(){return te.restart(!0)&&bt&&Ns(D,bt)},onComplete:function(){D.update(),J=ae(),i&&!I&&(L?L.resetTo("totalProgress",xt,i._tTime/i._tDur):i.progress(xt)),ze=at=i&&!I?i.totalProgress():D.progress,b&&b(D),gn&&Ns(D,gn)}},ye,St*A,yt-ye-St*A),Bn&&Ns(D,Bn,Ae.tween)}}else D.isActive&&J!==ye&&te.restart(!0)}).pause()),l&&(oh[l]=D),f=D.trigger=Sn(f||h!==!0&&h),ct=f&&f._gsap&&f._gsap.stRevert,ct&&(ct=ct(D)),h=h===!0?f:Sn(h),Xn(a)&&(a={targets:f,className:a}),h&&(_===!1||_===ri||(_=!_&&h.parentNode&&h.parentNode.style&&si(h.parentNode).display==="flex"?!1:Gt),D.pin=h,Oe=Ce.core.getCache(h),Oe.spacer?y=Oe.pinState:(R&&(R=Sn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Oe.spacerIsNative=!!R,R&&(Oe.spacerState=al(R))),Oe.spacer=K=R||gt.createElement("div"),K.classList.add("pin-spacer"),l&&K.classList.add("pin-spacer-"+l),Oe.pinState=y=al(h)),n.force3D!==!1&&Ce.set(h,{force3D:!0}),D.spacer=K=Oe.spacer,Je=si(h),le=Je[_+v.os2],fe=Ce.getProperty(h),ue=Ce.quickSetter(h,v.a,$t),eh(h,K,Je),Q=al(h)),G){ve=qr(G)?Qd(G,jd):jd,U=ol("scroller-start",l,F,v,ve,0),ne=ol("scroller-end",l,F,v,ve,0,U),j=U["offset"+v.op.d2];var It=Sn(Gi(F,"content")||F);ee=this.markerStart=ol("start",l,It,v,ve,j,0,E),ie=this.markerEnd=ol("end",l,It,v,ve,j,0,E),E&&(Ve=Ce.quickSetter([ee,ie],v.a,$t)),!$&&!(di.length&&Gi(F,"fixedMarkers")===!0)&&(d0(V?mt:F),Ce.set([U,ne],{force3D:!0}),Ne=Ce.quickSetter(U,v.a,$t),Te=Ce.quickSetter(ne,v.a,$t))}if(E){var be=E.vars.onUpdate,Re=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),be&&be.apply(E,Re||[])})}if(D.previous=function(){return tt[tt.indexOf(D)-1]},D.next=function(){return tt[tt.indexOf(D)+1]},D.revert=function(ye,We){if(!We)return D.kill(!0);var Pe=ye!==!1||!D.enabled,He=un;Pe!==D.isReverted&&(Pe&&(pe=Math.max(ae(),D.scroll.rec||0),_e=D.progress,xe=i&&i.progress()),ee&&[ee,ie,U,ne].forEach(function(Bt){return Bt.style.display=Pe?"none":"block"}),Pe&&(un=D,D.update(Pe)),h&&(!C||!D.isActive)&&(Pe?v0(h,K,y):eh(h,K,si(h),he)),Pe||D.update(Pe),un=He,D.isReverted=Pe)},D.refresh=function(ye,We,Pe,He){if(!((un||!D.enabled)&&!We)){if(h&&ye&&oi){jt(r,"scrollEnd",yp);return}!wn&&de&&de(D),un=D,Ae.tween&&!Pe&&(Ae.tween.kill(),Ae.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Bt=Le(),it=Ze(),St=E?E.duration():wi(F,v),Xt=A<=.01||!A,xt=0,yt=He||0,ft=qr(Pe)?Pe.end:n.end,Bn=n.endTrigger||f,bt=qr(Pe)?Pe.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),gn=D.pinnedContainer=n.pinnedContainer&&Sn(n.pinnedContainer,D),Qn=f&&Math.max(0,tt.indexOf(D))||0,qt=Qn,Yt,T,B,q,W,N,se,Me,Ee,we,Ue,ke,De;for(G&&qr(Pe)&&(ke=Ce.getProperty(U,v.p),De=Ce.getProperty(ne,v.p));qt-- >0;)N=tt[qt],N.end||N.refresh(0,1)||(un=D),se=N.pin,se&&(se===f||se===h||se===gn)&&!N.isReverted&&(we||(we=[]),we.unshift(N),N.revert(!0,!0)),N!==tt[qt]&&(Qn--,qt--);for(fn(bt)&&(bt=bt(D)),bt=Zd(bt,"start",D),z=ip(bt,f,Bt,v,ae(),ee,U,D,it,re,$,St,E,D._startClamp&&"_startClamp")||(h?-.001:0),fn(ft)&&(ft=ft(D)),Xn(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(Xn(bt)?bt.split(" ")[0]:"")+ft:(xt=ul(ft.substr(2),Bt),ft=Xn(bt)?bt:(E?Ce.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,z):z)+xt,Bn=f)),ft=Zd(ft,"end",D),w=Math.max(z,ip(ft||(Bn?"100% 0":St),Bn,Bt,v,ae()+xt,ie,ne,D,it,re,$,St,E,D._endClamp&&"_endClamp"))||-.001,xt=0,qt=Qn;qt--;)N=tt[qt]||{},se=N.pin,se&&N.start-N._pinPush<=z&&!E&&N.end>0&&(Yt=N.end-(D._startClamp?Math.max(0,N.start):N.start),(se===f&&N.start-N._pinPush<z||se===gn)&&isNaN(bt)&&(xt+=Yt*(1-N.progress)),se===h&&(yt+=Yt));if(z+=xt,w+=xt,D._startClamp&&(D._startClamp+=xt),D._endClamp&&!wn&&(D._endClamp=w||-.001,w=Math.min(w,wi(F,v))),A=w-z||(z-=.01)&&.001,Xt&&(_e=Ce.utils.clamp(0,1,Ce.utils.normalize(z,w,pe))),D._pinPush=yt,ee&&xt&&(Yt={},Yt[v.a]="+="+xt,gn&&(Yt[v.p]="-="+ae()),Ce.set([ee,ie],Yt)),h&&!(sh&&D.end>=wi(F,v)))Yt=si(h),q=v===Ht,B=ae(),me=parseFloat(fe(v.a))+yt,!St&&w>1&&(Ue=(V?gt.scrollingElement||qn:F).style,Ue={style:Ue,value:Ue["overflow"+v.a.toUpperCase()]},V&&si(mt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Ue.style["overflow"+v.a.toUpperCase()]="scroll")),eh(h,K,Yt),Q=al(h),T=Wi(h,!0),Me=$&&Hi(F,q?cn:Ht)(),_?(he=[_+v.os2,A+yt+$t],he.t=K,qt=_===Gt?gl(h,v)+A+yt:0,qt&&(he.push(v.d,qt+$t),K.style.flexBasis!=="auto"&&(K.style.flexBasis=qt+$t)),Hs(he),gn&&tt.forEach(function(qe){qe.pin===gn&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),$&&ae(pe)):(qt=gl(h,v),qt&&K.style.flexBasis!=="auto"&&(K.style.flexBasis=qt+$t)),$&&(W={top:T.top+(q?B-z:Me)+$t,left:T.left+(q?Me:B-z)+$t,boxSizing:"border-box",position:"fixed"},W[Zr]=W["max"+Gs]=Math.ceil(T.width)+$t,W[$r]=W["max"+ph]=Math.ceil(T.height)+$t,W[ri]=W[ri+Xo]=W[ri+Go]=W[ri+qo]=W[ri+Wo]="0",W[Gt]=Yt[Gt],W[Gt+Xo]=Yt[Gt+Xo],W[Gt+Go]=Yt[Gt+Go],W[Gt+qo]=Yt[Gt+qo],W[Gt+Wo]=Yt[Gt+Wo],O=y0(y,W,C),wn&&ae(0)),i?(Ee=i._initted,Ju(1),i.render(i.duration(),!0,!0),Ge=fe(v.a)-me+A+yt,Fe=Math.abs(A-Ge)>1,$&&Fe&&O.splice(O.length-2,2),i.render(0,!0,!0),Ee||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ju(0)):Ge=A,Ue&&(Ue.value?Ue.style["overflow"+v.a.toUpperCase()]=Ue.value:Ue.style.removeProperty("overflow-"+v.a));else if(f&&ae()&&!E)for(T=f.parentNode;T&&T!==mt;)T._pinOffset&&(z-=T._pinOffset,w-=T._pinOffset),T=T.parentNode;we&&we.forEach(function(qe){return qe.revert(!1,!0)}),D.start=z,D.end=w,$e=Xe=wn?pe:ae(),!E&&!wn&&!_r&&($e<pe&&ae(pe),D.scroll.rec=0),D.revert(!1,!0),oe=hn(),te&&(J=-1,te.restart(!0)),un=0,i&&I&&(i._initted||xe)&&i.progress()!==xe&&i.progress(xe||0,!0).render(i.time(),!0,!0),(Xt||_e!==D.progress||E||g||i&&!i._initted)&&(i&&!I&&(i._initted||_e||i.vars.immediateRender!==!1)&&i.totalProgress(E&&z<-.001&&!_e?Ce.utils.normalize(z,w,0):_e,!0),D.progress=Xt||($e-z)/A===_e?0:_e),h&&_&&(K._pinOffset=Math.round(D.progress*Ge)),L&&L.invalidate(),isNaN(ke)||(ke-=Ce.getProperty(U,v.p),De-=Ce.getProperty(ne,v.p),ll(U,v,ke),ll(ee,v,ke-(He||0)),ll(ne,v,De),ll(ie,v,De-(He||0))),Xt&&!wn&&D.update(),u&&!wn&&!ce&&(ce=!0,u(D),ce=!1)}},D.getVelocity=function(){return(ae()-Xe)/(hn()-Oo)*1e3||0},D.endAnimation=function(){No(D.callbackAnimation),i&&(L?L.progress(1):i.paused()?I||No(i,D.direction<0,1):No(i,i.reversed()))},D.labelToScroll=function(ye){return i&&i.labels&&(z||D.refresh()||z)+i.labels[ye]/i.duration()*A||0},D.getTrailing=function(ye){var We=tt.indexOf(D),Pe=D.direction>0?tt.slice(0,We).reverse():tt.slice(We+1);return(Xn(ye)?Pe.filter(function(He){return He.vars.preventOverlaps===ye}):Pe).filter(function(He){return D.direction>0?He.end<=z:He.start>=w})},D.update=function(ye,We,Pe){if(!(E&&!Pe&&!ye)){var He=wn===!0?pe:D.scroll(),Bt=ye?0:(He-z)/A,it=Bt<0?0:Bt>1?1:Bt||0,St=D.progress,Xt,xt,yt,ft,Bn,bt,gn,Qn;if(We&&(Xe=$e,$e=E?ae():He,x&&(at=ze,ze=i&&!I?i.totalProgress():it)),m&&h&&!un&&!tl&&oi&&(!it&&z<He+(He-Xe)/(hn()-Oo)*m?it=1e-4:it===1&&w>He+(He-Xe)/(hn()-Oo)*m&&(it=.9999)),it!==St&&D.enabled){if(Xt=D.isActive=!!it&&it<1,xt=!!St&&St<1,bt=Xt!==xt,Bn=bt||!!it!=!!St,D.direction=it>St?1:-1,D.progress=it,Bn&&!un&&(yt=it&&!St?0:it===1?1:St===1?2:3,I&&(ft=!bt&&X[yt+1]!=="none"&&X[yt+1]||X[yt],Qn=i&&(ft==="complete"||ft==="reset"||ft in i))),M&&(bt||Qn)&&(Qn||d||!i)&&(fn(M)?M(D):D.getTrailing(M).forEach(function(B){return B.endAnimation()})),I||(L&&!un&&!tl?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",it,i._tTime/i._tDur):(L.vars.totalProgress=it,L.invalidate().restart())):i&&i.totalProgress(it,!!(un&&(oe||ye)))),h){if(ye&&_&&(K.style[_+v.os2]=le),!$)ue(ko(me+Ge*it));else if(Bn){if(gn=!ye&&it>St&&w+1>He&&He+1>=wi(F,v),C)if(!ye&&(Xt||gn)){var qt=Wi(h,!0),Yt=He-z;rp(h,mt,qt.top+(v===Ht?Yt:0)+$t,qt.left+(v===Ht?0:Yt)+$t)}else rp(h,K);Hs(Xt||gn?O:Q),Fe&&it<1&&Xt||ue(me+(it===1&&!gn?Ge:0))}}x&&!Ae.tween&&!un&&!tl&&te.restart(!0),a&&(bt||S&&it&&(it<1||!Ku))&&Zo(a.targets).forEach(function(B){return B.classList[Xt||S?"add":"remove"](a.className)}),o&&!I&&!ye&&o(D),Bn&&!un?(I&&(Qn&&(ft==="complete"?i.pause().totalProgress(1):ft==="reset"?i.restart(!0).pause():ft==="restart"?i.restart(!0):i[ft]()),o&&o(D)),(bt||!Ku)&&(c&&bt&&Ns(D,c),H[yt]&&Ns(D,H[yt]),S&&(it===1?D.kill(!1,1):H[yt]=0),bt||(yt=it===1?1:3,H[yt]&&Ns(D,H[yt]))),P&&!Xt&&Math.abs(D.getVelocity())>(zo(P)?P:2500)&&(No(D.callbackAnimation),L?L.progress(1):No(i,ft==="reverse"?1:!it,1))):I&&o&&!un&&o(D)}if(Te){var T=E?He/E.duration()*(E._caScrollDist||0):He;Ne(T+(U._isFlipped?1:0)),Te(T)}Ve&&Ve(-He/E.duration()*(E._caScrollDist||0))}},D.enable=function(ye,We){D.enabled||(D.enabled=!0,jt(F,"resize",Vo),V||jt(F,"scroll",Bs),de&&jt(r,"refreshInit",de),ye!==!1&&(D.progress=_e=0,$e=Xe=J=ae()),We!==!1&&D.refresh())},D.getTween=function(ye){return ye&&Ae?Ae.tween:L},D.setPositions=function(ye,We,Pe,He){if(E){var Bt=E.scrollTrigger,it=E.duration(),St=Bt.end-Bt.start;ye=Bt.start+St*ye/it,We=Bt.start+St*We/it}D.refresh(!1,!1,{start:$d(ye,Pe&&!!D._startClamp),end:$d(We,Pe&&!!D._endClamp)},He),D.update()},D.adjustPinSpacing=function(ye){if(he&&ye){var We=he.indexOf(v.d)+1;he[We]=parseFloat(he[We])+ye+$t,he[1]=parseFloat(he[1])+ye+$t,Hs(he)}},D.disable=function(ye,We){if(ye!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,We||L&&L.pause(),pe=0,Oe&&(Oe.uncache=1),de&&Qt(r,"refreshInit",de),te&&(te.pause(),Ae.tween&&Ae.tween.kill()&&(Ae.tween=0)),!V)){for(var Pe=tt.length;Pe--;)if(tt[Pe].scroller===F&&tt[Pe]!==D)return;Qt(F,"resize",Vo),V||Qt(F,"scroll",Bs)}},D.kill=function(ye,We){D.disable(ye,We),L&&!We&&L.kill(),l&&delete oh[l];var Pe=tt.indexOf(D);Pe>=0&&tt.splice(Pe,1),Pe===Tn&&fl>0&&Tn--,Pe=0,tt.forEach(function(He){return He.scroller===D.scroller&&(Pe=1)}),Pe||wn||_r||(D.scroll.rec=0),i&&(i.scrollTrigger=null,ye&&i.revert({kill:!1}),We||i.kill()),ee&&[ee,ie,U,ne].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),Yo===D&&(Yo=0),h&&(Oe&&(Oe.uncache=1),Pe=0,tt.forEach(function(He){return He.pin===h&&Pe++}),Pe||(Oe.spacer=0)),n.onKill&&n.onKill(D)},tt.push(D),D.enable(!1,!1),ct&&ct(D),i&&i.add&&!A){var Ke=D.update;D.update=function(){D.update=Ke,je.cache++,z||w||D.refresh()},Ce.delayedCall(.01,D.update),A=.01,z=w=0}else D.refresh();h&&_0()},r.register=function(n){return ks||(Ce=n||pp(),dp()&&window.document&&r.enable(),ks=Bo),ks},r.defaults=function(n){if(n)for(var i in n)sl[i]=n[i];return sl},r.disable=function(n,i){Bo=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),Qt(nt,"wheel",Bs),Qt(gt,"scroll",Bs),clearInterval(el),Qt(gt,"touchcancel",Ti),Qt(mt,"touchstart",Ti),il(Qt,gt,"pointerdown,touchstart,mousedown",Jd),il(Qt,gt,"pointerup,touchend,mouseup",Kd),ml.kill(),nl(Qt);for(var s=0;s<je.length;s+=3)rl(Qt,je[s],je[s+1]),rl(Qt,je[s],je[s+2])},r.enable=function(){if(nt=window,gt=document,qn=gt.documentElement,mt=gt.body,Ce){if(Zo=Ce.utils.toArray,Ho=Ce.utils.clamp,rh=Ce.core.context||Ti,Ju=Ce.core.suppressOverwrites||Ti,uh=nt.history.scrollRestoration||"auto",ah=nt.pageYOffset||0,Ce.core.globals("ScrollTrigger",r),mt){Bo=1,Vs=document.createElement("div"),Vs.style.height="100vh",Vs.style.position="absolute",Tp(),u0(),Ft.register(Ce),r.isTouch=Ft.isTouch,gr=Ft.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ih=Ft.isTouch===1,jt(nt,"wheel",Bs),ch=[nt,gt,qn,mt],Ce.matchMedia?(r.matchMedia=function(u){var d=Ce.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},Ce.addEventListener("matchMediaInit",function(){Sp(),gh()}),Ce.addEventListener("matchMediaRevert",function(){return Mp()}),Ce.addEventListener("matchMedia",function(){Yr(0,1),jr("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return ju(),ju})):console.warn("Requires GSAP 3.11.0 or later"),ju(),jt(gt,"scroll",Bs);var n=mt.hasAttribute("style"),i=mt.style,s=i.borderTopStyle,o=Ce.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Wi(mt),Ht.m=Math.round(a.top+Ht.sc())||0,cn.m=Math.round(a.left+cn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(mt.setAttribute("style",""),mt.removeAttribute("style")),el=setInterval(ep,250),Ce.delayedCall(.5,function(){return tl=0}),jt(gt,"touchcancel",Ti),jt(mt,"touchstart",Ti),il(jt,gt,"pointerdown,touchstart,mousedown",Jd),il(jt,gt,"pointerup,touchend,mouseup",Kd),nh=Ce.utils.checkPrefix("transform"),dl.push(nh),ks=hn(),ml=Ce.delayedCall(.2,Yr).pause(),zs=[gt,"visibilitychange",function(){var u=nt.innerWidth,d=nt.innerHeight;gt.hidden?(qd=u,Yd=d):(qd!==u||Yd!==d)&&Vo()},gt,"DOMContentLoaded",Yr,nt,"load",Yr,nt,"resize",Vo],nl(jt),tt.forEach(function(u){return u.enable(0,1)}),l=0;l<je.length;l+=3)rl(Qt,je[l],je[l+1]),rl(Qt,je[l],je[l+2])}else if(gt){var c=function u(){r.enable(),gt.removeEventListener("DOMContentLoaded",u)};gt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Ku=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(el)||(el=i)&&setInterval(ep,i),"ignoreMobileResize"in n&&(ih=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(nl(Qt)||nl(jt,n.autoRefreshEvents||"none"),up=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Sn(n),o=je.indexOf(s),a=Kr(s);~o&&je.splice(o,a?6:2),i&&(a?di.unshift(nt,i,mt,i,qn,i):di.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Xn(n)?Sn(n):n).getBoundingClientRect(),a=o[s?Zr:$r]*i||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},r.positionInViewport=function(n,i,s){Xn(n)&&(n=Sn(n));var o=n.getBoundingClientRect(),a=o[s?Zr:$r],l=i==null?a/2:i in _l?_l[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Qr.killAll||[];Qr={},i.forEach(function(s){return s()})}},r})();Qe.version="3.15.1";Qe.saveStyles=function(r){return r?Zo(r).forEach(function(e){if(e&&e.style){var t=Wn.indexOf(e);t>=0&&Wn.splice(t,5),Wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),rh())}}):Wn};Qe.revert=function(r,e){return gh(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?Vo(!0):(ks||Qe.register())&&Yr(!0)};Qe.update=function(r){return++je.cache&&Xi(r===!0?2:0)};Qe.clearScrollMemory=bp;Qe.maxScroll=function(r,e){return wi(r,e?cn:Ht)};Qe.getScrollFunc=function(r,e){return Hi(Sn(r),e?cn:Ht)};Qe.getById=function(r){return oh[r]};Qe.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!oi};Qe.snapDirectional=mh;Qe.addEventListener=function(r,e){var t=Qr[r]||(Qr[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=Qr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],h=Ce.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&h.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&fn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return fn(s)&&(s=s(),jt(Qe,"refresh",function(){return s=e.batchMax()})),Zo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Qe.create(c))}),t};var op=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},th=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ft.isTouch?" pinch-zoom":""):"none",e===qn&&r(mt,t)},cl={auto:1,scroll:1},S0=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ce.core.getCache(s),a=hn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(cl[(l=si(s)).overflowY]||cl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Kr(s)&&(cl[(l=si(s)).overflowY]||cl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Ep=function(e,t,n,i){return Ft.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&S0,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&jt(gt,Ft.eventTypes[0],lp,!1,!0)},onDisable:function(){return Qt(gt,Ft.eventTypes[0],lp,!0)}})},b0=/(input|label|select|textarea)/i,ap,lp=function(e){var t=b0.test(e.target.tagName);(t||ap)&&(e._gsapAllow=!0,ap=t)},T0=function(e){qr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Sn(e.target)||qn,u=Ce.core.globals().ScrollSmoother,d=u&&u.get(),f=gr&&(e.content&&Sn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Hi(c,Ht),_=Hi(c,cn),g=1,m=(Ft.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,b=fn(i)?function(){return i(a)}:function(){return i||2.8},S,x,C=Ep(c,e.type,!0,s),R=function(){return x=!1},E=Ti,P=Ti,M=function(){l=wi(c,Ht),P=Ho(gr?1:0,l),n&&(E=Ho(0,wi(c,cn))),S=Jr},v=function(){f._gsap.y=ko(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},I=function(){if(x){requestAnimationFrame(R);var G=ko(a.deltaY/2),re=P(h.v-G);if(f&&re!==h.v+h.offset){h.offset=re-h.v;var D=ko((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",h.cacheID=je.cache,Xi()}return!0}h.offset&&v(),x=!0},F,k,V,$,H=function(){M(),F.isActive()&&F.vars.scrollY>l&&(h()>l?F.progress(1)&&h(l):F.resetTo("scrollY",l))};return f&&Ce.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return gr&&X.type==="touchmove"&&I(X)||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){x=!1;var X=g;g=ko((nt.visualViewport&&nt.visualViewport.scale||1)/m),F.pause(),X!==g&&th(c,g>1.01?!0:n?!1:"x"),k=_(),V=h(),M(),S=Jr},e.onRelease=e.onGestureStart=function(X,G){if(h.offset&&v(),!G)$.restart(!0);else{je.cache++;var re=b(),D,de;n&&(D=_(),de=D+re*.05*-X.velocityX/.227,re*=op(_,D,de,wi(c,cn)),F.vars.scrollX=E(de)),D=h(),de=D+re*.05*-X.velocityY/.227,re*=op(h,D,de,wi(c,Ht)),F.vars.scrollY=P(de),F.invalidate().duration(re).play(.01),(gr&&F.vars.scrollY>=l||D>=l-1)&&Ce.to({},{onUpdate:H,duration:re})}o&&o(X)},e.onWheel=function(){F._ts&&F.pause(),hn()-p>1e3&&(S=0,p=hn())},e.onChange=function(X,G,re,D,de){if(Jr!==S&&M(),G&&n&&_(E(D[2]===G?k+(X.startX-X.x):_()+G-D[1])),re){h.offset&&v();var Le=de[2]===re,Ze=Le?V+X.startY-X.y:h()+re-de[1],J=P(Ze);Le&&Ze!==J&&(V+=J-Ze),h(J)}(re||G)&&Xi()},e.onEnable=function(){th(c,n?!1:"x"),Qe.addEventListener("refresh",H),jt(nt,"resize",H),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){th(c,!0),Qt(nt,"resize",H),Qe.removeEventListener("refresh",H),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ft(e),a.iOS=gr,gr&&!h()&&h(1),gr&&Ce.ticker.add(Ti),$=a._dc,F=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:wp(h,h(),function(){return F.pause()})},onUpdate:Xi,onComplete:$.vars.onComplete}),a};Qe.sort=function(r){if(fn(r))return tt.sort(r);var e=nt.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Ft(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return bn;if(r===!0&&bn)return bn.enable();if(r===!1){bn&&bn.kill(),bn=r;return}var e=r instanceof Ft?r:T0(r);return bn&&bn.target===e.target&&bn.kill(),Kr(e.target)&&(bn=e),e};Qe.core={_getVelocityProp:ja,_inputObserver:Ep,_scrollers:je,_proxies:di,bridge:{ss:function(){oi||jr("scrollStart"),oi=hn()},ref:function(){return un}}};pp()&&Ce.registerPlugin(Qe);var Zp=0,Wh=1,$p=2;var Xh=1,Jp=2,Ii=3,Qi=0,An=1,Di=2,tr=0,as=1,ya=2,qh=3,Yh=4,Kp=5,Er=100,Qp=101,jp=102,em=103,tm=104,nm=200,im=201,rm=202,sm=203,zl=204,Vl=205,om=206,am=207,lm=208,cm=209,um=210,hm=211,fm=212,dm=213,pm=214,cc=0,uc=1,hc=2,ls=3,fc=4,dc=5,pc=6,mc=7,Zh=0,mm=1,gm=2,nr=0,_m=1,vm=2,xm=3,ym=4,Mm=5,Sm=6,bm=7;var $h=300,ps=301,ms=302,gc=303,_c=304,Ma=306,Hl=1e3,wr=1001,Gl=1002,li=1003,Tm=1004;var Sa=1005;var _i=1006,vc=1007;var Ir=1008;var Li=1009,Jh=1010,Kh=1011,co=1012,xc=1013,Dr=1014,Ui=1015,uo=1016,yc=1017,Mc=1018,gs=1020,Qh=35902,jh=1021,ef=1022,ui=1023,tf=1024,nf=1025,os=1026,cs=1027,rf=1028,Sc=1029,sf=1030,bc=1031;var Tc=1033,ba=33776,Ta=33777,wa=33778,Ea=33779,wc=35840,Ec=35841,Ac=35842,Cc=35843,Rc=36196,Pc=37492,Ic=37496,Dc=37808,Lc=37809,Uc=37810,Fc=37811,Nc=37812,Oc=37813,Bc=37814,kc=37815,zc=37816,Vc=37817,Hc=37818,Gc=37819,Wc=37820,Xc=37821,Aa=36492,qc=36494,Yc=36495,of=36283,Zc=36284,$c=36285,Jc=36286;var na=2300,Wl=2301,kl=2302,Oh=2400,Bh=2401,kh=2402;var wm=3200,Em=3201;var Am=0,Cm=1,ir="",$n="srgb",us="srgb-linear",ia="linear",_t="srgb";var rs=7680;var zh=519,Rm=512,Pm=513,Im=514,af=515,Dm=516,Lm=517,Um=518,Fm=519,Vh=35044;var lf="300 es",Ai=2e3,ra=2001;var ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ap=1234567,ea=Math.PI/180,ro=180/Math.PI;function ho(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function cf(r,e){return(r%e+e)%e}function w0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function E0(r,e,t){return r!==e?(t-r)/(e-r):0}function ta(r,e,t){return(1-t)*r+t*e}function A0(r,e,t,n){return ta(r,e,1-Math.exp(-t*n))}function C0(r,e=1){return e-Math.abs(cf(r,e*2)-e)}function R0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function P0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function I0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function D0(r,e){return r+Math.random()*(e-r)}function L0(r){return r*(.5-Math.random())}function U0(r){r!==void 0&&(Ap=r);let e=Ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F0(r){return r*ea}function N0(r){return r*ro}function O0(r){return(r&r-1)===0&&r!==0}function B0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function k0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function z0(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),h=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*d,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*h,a*c);break;case"YXY":r.set(l*h,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function no(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ca={DEG2RAD:ea,RAD2DEG:ro,generateUUID:ho,clamp:st,euclideanModulo:cf,mapLinear:w0,inverseLerp:E0,lerp:ta,damp:A0,pingpong:C0,smoothstep:R0,smootherstep:P0,randInt:I0,randFloat:D0,randFloatSpread:L0,seededRandom:U0,degToRad:F0,radToDeg:N0,isPowerOfTwo:O0,ceilPowerOfTwo:B0,floorPowerOfTwo:k0,setQuaternionFromProperEuler:z0,normalize:En,denormalize:no},ht=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],g=i[0],m=i[3],p=i[6],b=i[1],S=i[4],x=i[7],C=i[2],R=i[5],E=i[8];return s[0]=o*g+a*b+l*C,s[3]=o*m+a*S+l*R,s[6]=o*p+a*x+l*E,s[1]=c*g+u*b+d*C,s[4]=c*m+u*S+d*R,s[7]=c*p+u*x+d*E,s[2]=f*g+h*b+_*C,s[5]=f*m+h*S+_*R,s[8]=f*p+h*x+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,_=t*d+n*f+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=h*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_h.makeScale(e,t)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,t){return this.premultiply(_h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_h=new Ye;function uf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function sa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Nm(){let r=sa("canvas");return r.style.display="block",r}var Cp={};function Lr(r){r in Cp||(Cp[r]=!0,console.warn(r))}function Om(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Bm(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function km(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Rp=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pp=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V0(){let r={enabled:!0,workingColorSpace:us,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(i.r=io(i.r),i.g=io(i.g),i.b=io(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ir?ia:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[us]:{primaries:e,whitePoint:n,transfer:ia,toXYZ:Rp,fromXYZ:Pp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Rp,fromXYZ:Pp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),r}var lt=V0();function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ws,Xl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=sa("canvas")),Ws.width=e.width,Ws.height=e.height;let n=Ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ws}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},H0=0,so=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(vh(i[o].image)):s.push(vh(i[o]))}else s=vh(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function vh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var G0=0,Jn=class r extends ji{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=wr,i=wr,s=_i,o=Ir,a=ui,l=Li,c=r.DEFAULT_ANISOTROPY,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=ho(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hl:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hl:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=$h;Jn.DEFAULT_ANISOTROPY=1;var Ot=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,x=(h+1)/2,C=(p+1)/2,R=(u+f)/4,E=(d+g)/4,P=(_+m)/4;return S>x&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=R/n,s=E/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=R/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=P/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ql=class extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Jn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new so(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oa=class extends Jn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=li,this.minFilter=li,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends Jn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=li,this.minFilter=li,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=s[o+0],h=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||c!==h||u!==_){let m=1-a,p=l*f+c*h+u*_+d*g,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let C=Math.sqrt(S),R=Math.atan2(C,p*b);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}let x=a*b;if(l=l*m+f*x,c=c*m+h*x,u=u*m+_*x,d=d*m+g*x,m===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],f=s[o+1],h=s[o+2],_=s[o+3];return e[t]=a*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-a*h,e[t+2]=c*_+u*h+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),f=l(n/2),h=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-i)*h}else if(n>a&&n>d){let h=2*Math.sqrt(1+n-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-n-d);this._w=(s-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-n-a);this._w=(o-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ip.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xh=new Y,Ip=new er,Ar=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xl.copy(n.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),yl.subVectors(this.max,Jo),Xs.subVectors(e.a,Jo),qs.subVectors(e.b,Jo),Ys.subVectors(e.c,Jo),vr.subVectors(qs,Xs),xr.subVectors(Ys,qs),es.subVectors(Xs,Ys);let t=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-es.z,es.y,vr.z,0,-vr.x,xr.z,0,-xr.x,es.z,0,-es.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-es.y,es.x,0];return!yh(t,Xs,qs,Ys,yl)||(t=[1,0,0,0,1,0,0,0,1],!yh(t,Xs,qs,Ys,yl))?!1:(Ml.crossVectors(vr,xr),t=[Ml.x,Ml.y,Ml.z],yh(t,Xs,qs,Ys,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],pi=new Y,xl=new Ar,Xs=new Y,qs=new Y,Ys=new Y,vr=new Y,xr=new Y,es=new Y,Jo=new Y,yl=new Y,Ml=new Y,ts=new Y;function yh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ts.fromArray(r,s);let a=i.x*Math.abs(ts.x)+i.y*Math.abs(ts.y)+i.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var W0=new Ar,Ko=new Y,Mh=new Y,hs=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):W0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);let t=Ko.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ko,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Mh)),this.expandByPoint(Ko.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yi=new Y,Sh=new Y,Sl=new Y,yr=new Y,bh=new Y,bl=new Y,Th=new Y,aa=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sh.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Sh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Sl),a=yr.dot(this.direction),l=-yr.dot(Sl),c=yr.lengthSq(),u=Math.abs(1-o*o),d,f,h,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){let g=1/u;d*=g,f*=g,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Sh).addScaledVector(Sl,f),h}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);let n=Yi.dot(this.direction),i=Yi.dot(Yi)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,i,s){bh.subVectors(t,e),bl.subVectors(n,e),Th.crossVectors(bh,bl);let o=this.direction.dot(Th),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yr.subVectors(this.origin,e);let l=a*this.direction.dot(bl.crossVectors(yr,bl));if(l<0)return null;let c=a*this.direction.dot(bh.cross(yr));if(c<0||l+c>o)return null;let u=-a*yr.dot(Th);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class r{constructor(e,t,n,i,s,o,a,l,c,u,d,f,h,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,d,f,h,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,d,f,h,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Zs.setFromMatrixColumn(e,0).length(),s=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,_=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,_=c*u,g=c*d;t[0]=f+g*a,t[4]=_*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,_=c*u,g=c*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,_=a*u,g=a*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=_*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-g*d}else if(e.order==="XZY"){let f=o*l,h=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=o*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X0,e,q0)}lookAt(e,t,n){let i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Mr.crossVectors(n,Yn),Mr.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Mr.crossVectors(n,Yn)),Mr.normalize(),Tl.crossVectors(Yn,Mr),i[0]=Mr.x,i[4]=Tl.x,i[8]=Yn.x,i[1]=Mr.y,i[5]=Tl.y,i[9]=Yn.y,i[2]=Mr.z,i[6]=Tl.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],S=n[7],x=n[11],C=n[15],R=i[0],E=i[4],P=i[8],M=i[12],v=i[1],I=i[5],F=i[9],k=i[13],V=i[2],$=i[6],H=i[10],X=i[14],G=i[3],re=i[7],D=i[11],de=i[15];return s[0]=o*R+a*v+l*V+c*G,s[4]=o*E+a*I+l*$+c*re,s[8]=o*P+a*F+l*H+c*D,s[12]=o*M+a*k+l*X+c*de,s[1]=u*R+d*v+f*V+h*G,s[5]=u*E+d*I+f*$+h*re,s[9]=u*P+d*F+f*H+h*D,s[13]=u*M+d*k+f*X+h*de,s[2]=_*R+g*v+m*V+p*G,s[6]=_*E+g*I+m*$+p*re,s[10]=_*P+g*F+m*H+p*D,s[14]=_*M+g*k+m*X+p*de,s[3]=b*R+S*v+x*V+C*G,s[7]=b*E+S*I+x*$+C*re,s[11]=b*P+S*F+x*H+C*D,s[15]=b*M+S*k+x*X+C*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*d-i*c*d-s*a*f+n*c*f+i*a*h-n*l*h)+g*(+t*l*h-t*c*f+s*o*f-i*o*h+i*c*u-s*l*u)+m*(+t*c*d-t*a*h-s*o*d+n*o*h+s*a*u-n*c*u)+p*(-i*a*u-t*l*d+t*a*f+i*o*d-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],g=e[13],m=e[14],p=e[15],b=d*m*c-g*f*c+g*l*h-a*m*h-d*l*p+a*f*p,S=_*f*c-u*m*c-_*l*h+o*m*h+u*l*p-o*f*p,x=u*g*c-_*d*c+_*a*h-o*g*h-u*a*p+o*d*p,C=_*d*l-u*g*l-_*a*f+o*g*f+u*a*m-o*d*m,R=t*b+n*S+i*x+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/R;return e[0]=b*E,e[1]=(g*f*s-d*m*s-g*i*h+n*m*h+d*i*p-n*f*p)*E,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(d*l*s-a*f*s-d*i*c+n*f*c+a*i*h-n*l*h)*E,e[4]=S*E,e[5]=(u*m*s-_*f*s+_*i*h-t*m*h-u*i*p+t*f*p)*E,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*h+t*l*h)*E,e[8]=x*E,e[9]=(_*d*s-u*g*s-_*n*h+t*g*h+u*n*p-t*d*p)*E,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*h-t*a*h)*E,e[12]=C*E,e[13]=(u*g*i-_*d*i+_*n*f-t*g*f-u*n*m+t*d*m)*E,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*E,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,_=s*d,g=o*u,m=o*d,p=a*d,b=l*c,S=l*u,x=l*d,C=n.x,R=n.y,E=n.z;return i[0]=(1-(g+p))*C,i[1]=(h+x)*C,i[2]=(_-S)*C,i[3]=0,i[4]=(h-x)*R,i[5]=(1-(f+p))*R,i[6]=(m+b)*R,i[7]=0,i[8]=(_+S)*E,i[9]=(m-b)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Zs.set(i[0],i[1],i[2]).length(),o=Zs.set(i[4],i[5],i[6]).length(),a=Zs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mi.copy(this);let c=1/s,u=1/o,d=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=d,mi.elements[9]*=d,mi.elements[10]*=d,t.setFromRotationMatrix(mi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ai){let l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),h,_;if(a===Ai)h=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ra)h=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ai){let l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(o-s),f=(t+e)*c,h=(n+i)*u,_,g;if(a===Ai)_=(o+s)*d,g=-2*d;else if(a===ra)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zs=new Y,mi=new zt,X0=new Y(0,0,0),q0=new Y(1,1,1),Mr=new Y,Tl=new Y,Yn=new Y,Dp=new zt,Lp=new er,Pi=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Y0=0,Up=new Y,$s=new er,Zi=new zt,wl=new Y,Qo=new Y,Z0=new Y,$0=new er,Fp=new Y(1,0,0),Np=new Y(0,1,0),Op=new Y(0,0,1),Bp={type:"added"},J0={type:"removed"},Js={type:"childadded",child:null},wh={type:"childremoved",child:null},Kn=class r extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new Y,t=new Pi,n=new er,i=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new Ye}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Fp,e)}rotateY(e){return this.rotateOnAxis(Np,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,t){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fp,e)}translateY(e){return this.translateOnAxis(Np,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wl.copy(e):wl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Qo,wl,this.up):Zi.lookAt(wl,Qo,this.up),this.quaternion.setFromRotationMatrix(Zi),i&&(Zi.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(Zi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bp),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J0),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bp),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,Z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Kn.DEFAULT_UP=new Y(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new Y,$i=new Y,Eh=new Y,Ji=new Y,Ks=new Y,Qs=new Y,kp=new Y,Ah=new Y,Ch=new Y,Rh=new Y,Ph=new Ot,Ih=new Ot,Dh=new Ot,Tr=class r{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gi.subVectors(e,t),i.cross(gi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gi.subVectors(i,t),$i.subVectors(n,t),Eh.subVectors(e,t);let o=gi.dot(gi),a=gi.dot($i),l=gi.dot(Eh),c=$i.dot($i),u=$i.dot(Eh),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ph.setScalar(0),Ih.setScalar(0),Dh.setScalar(0),Ph.fromBufferAttribute(e,t),Ih.fromBufferAttribute(e,n),Dh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ph,s.x),o.addScaledVector(Ih,s.y),o.addScaledVector(Dh,s.z),o}static isFrontFacing(e,t,n,i){return gi.subVectors(n,t),$i.subVectors(e,t),gi.cross($i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),gi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Ks.subVectors(i,n),Qs.subVectors(s,n),Ah.subVectors(e,n);let l=Ks.dot(Ah),c=Qs.dot(Ah);if(l<=0&&c<=0)return t.copy(n);Ch.subVectors(e,i);let u=Ks.dot(Ch),d=Qs.dot(Ch);if(u>=0&&d<=u)return t.copy(i);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ks,o);Rh.subVectors(e,s);let h=Ks.dot(Rh),_=Qs.dot(Rh);if(_>=0&&h<=_)return t.copy(s);let g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Qs,a);let m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return kp.subVectors(s,i),a=(d-u)/(d-u+(h-_)),t.copy(i).addScaledVector(kp,a);let p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Ks,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},El={h:0,s:0,l:0};function Lh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var rt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=cf(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lh(o,s,e+1/3),this.g=Lh(o,s,e),this.b=Lh(o,s,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=$n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){let n=zm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return lt.fromWorkingColorSpace(pn.copy(this),e),Math.round(st(pn.r*255,0,255))*65536+Math.round(st(pn.g*255,0,255))*256+Math.round(st(pn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(pn.copy(this),t);let n=pn.r,i=pn.g,s=pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=$n){lt.fromWorkingColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,i=pn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(El);let n=ta(Sr.h,El.h,t),i=ta(Sr.s,El.s,t),s=ta(Sr.l,El.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new rt;rt.NAMES=zm;var K0=0,Cr=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=as,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Vl,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Vl&&(n.blendDst=this.blendDst),this.blendEquation!==Er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ca=class extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new Y,Al=new ht,Q0=0,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=no(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=no(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=no(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=no(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=no(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vh&&(e.usage=this.usage),e}};var ua=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ha=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ci=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},j0=0,ai=new zt,Uh=new Kn,js=new Y,Zn=new Ar,jo=new Ar,en=new Y,vi=class r extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uf(e)?ha:ua)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ci(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Zn.min,jo.min),Zn.expandByPoint(en),en.addVectors(Zn.max,jo.max),Zn.expandByPoint(en)):(Zn.expandByPoint(jo.min),Zn.expandByPoint(jo.max))}Zn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(e,c),en.add(js)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new Y,l[P]=new Y;let c=new Y,u=new Y,d=new Y,f=new ht,h=new ht,_=new ht,g=new Y,m=new Y;function p(P,M,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,v),f.fromBufferAttribute(s,P),h.fromBufferAttribute(s,M),_.fromBufferAttribute(s,v),u.sub(c),d.sub(c),h.sub(f),_.sub(f);let I=1/(h.x*_.y-_.x*h.y);isFinite(I)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(I),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(I),a[P].add(g),a[M].add(g),a[v].add(g),l[P].add(m),l[M].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,M=b.length;P<M;++P){let v=b[P],I=v.start,F=v.count;for(let k=I,V=I+F;k<V;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new Y,x=new Y,C=new Y,R=new Y;function E(P){C.fromBufferAttribute(i,P),R.copy(C);let M=a[P];S.copy(M),S.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(R,M);let I=x.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,I)}for(let P=0,M=b.length;P<M;++P){let v=b[P],I=v.start,F=v.count;for(let k=I,V=I+F;k<V;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let f=0,h=e.count;f<h;f+=3){let _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new Nt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zp=new zt,ns=new aa,Cl=new hs,Vp=new Y,Rl=new Y,Pl=new Y,Il=new Y,Fh=new Y,Dl=new Y,Hp=new Y,Ll=new Y,Nn=class extends Kn{constructor(e=new vi,t=new ca){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(Fh.fromBufferAttribute(d,e),o?Dl.addScaledVector(Fh,u):Dl.addScaledVector(Fh.sub(t),u))}t.add(Dl)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(s),ns.copy(e.ray).recast(e.near),!(Cl.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Cl,Vp)===null||ns.origin.distanceToSquared(Vp)>(e.far-e.near)**2))&&(zp.copy(s).invert(),ns.copy(e.ray).applyMatrix4(zp),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=o[m.materialIndex],b=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=b,C=S;x<C;x+=3){let R=a.getX(x),E=a.getX(x+1),P=a.getX(x+2);i=Ul(this,p,e,n,c,u,d,R,E,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){let b=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Ul(this,o,e,n,c,u,d,b,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=o[m.materialIndex],b=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=b,C=S;x<C;x+=3){let R=x,E=x+1,P=x+2;i=Ul(this,p,e,n,c,u,d,R,E,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){let b=m,S=m+1,x=m+2;i=Ul(this,o,e,n,c,u,d,b,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function ev(r,e,t,n,i,s,o,a){let l;if(e.side===An?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Qi,a),l===null)return null;Ll.copy(a),Ll.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Ll);return c<t.near||c>t.far?null:{distance:c,point:Ll.clone(),object:r}}function Ul(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Rl),r.getVertexPosition(l,Pl),r.getVertexPosition(c,Il);let u=ev(r,e,t,n,Rl,Pl,Il,Hp);if(u){let d=new Y;Tr.getBarycoord(Hp,Rl,Pl,Il,d),i&&(u.uv=Tr.getInterpolatedAttribute(i,a,l,c,d,new ht)),s&&(u.uv1=Tr.getInterpolatedAttribute(s,a,l,c,d,new ht)),o&&(u.normal=Tr.getInterpolatedAttribute(o,a,l,c,d,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new Y,materialIndex:0};Tr.getNormal(Rl,Pl,Il,f.normal),u.face=f,u.barycoord=d}return u}var oo=class r extends vi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(d,2));function _(g,m,p,b,S,x,C,R,E,P,M){let v=x/E,I=C/P,F=x/2,k=C/2,V=R/2,$=E+1,H=P+1,X=0,G=0,re=new Y;for(let D=0;D<H;D++){let de=D*I-k;for(let Le=0;Le<$;Le++){let Ze=Le*v-F;re[g]=Ze*b,re[m]=de*S,re[p]=V,c.push(re.x,re.y,re.z),re[g]=0,re[m]=0,re[p]=R>0?1:-1,u.push(re.x,re.y,re.z),d.push(Le/E),d.push(1-D/P),X+=1}}for(let D=0;D<P;D++)for(let de=0;de<E;de++){let Le=f+de+$*D,Ze=f+de+$*(D+1),J=f+(de+1)+$*(D+1),oe=f+(de+1)+$*D;l.push(Le,Ze,oe),l.push(Ze,J,oe),G+=6}a.addGroup(h,G,M),h+=G,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _s(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(r){let e={};for(let t=0;t<r.length;t++){let n=_s(r[t]);for(let i in n)e[i]=n[i]}return e}function tv(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function hf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Vm={clone:_s,merge:mn},nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},fa=class extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},br=new Y,Gp=new ht,Wp=new ht,Fn=class extends fa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,Gp,Wp),t.subVectors(Wp,Gp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ea*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},eo=-90,to=1,Zl=class extends Kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fn(eo,to,e,t);i.layers=this.layers,this.add(i);let s=new Fn(eo,to,e,t);s.layers=this.layers,this.add(s);let o=new Fn(eo,to,e,t);o.layers=this.layers,this.add(o);let a=new Fn(eo,to,e,t);a.layers=this.layers,this.add(a);let l=new Fn(eo,to,e,t);l.layers=this.layers,this.add(l);let c=new Fn(eo,to,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},da=class extends Jn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$l=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new da(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new oo(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:tr});s.uniforms.tEquirect.value=t;let o=new Nn(i,s),a=t.minFilter;return t.minFilter===Ir&&(t.minFilter=_i),new Zl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},ss=class extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},rv={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var pa=class extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Nh=new Y,sv=new Y,ov=new Ye,Ei=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Nh.subVectors(n,t).cross(sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Nh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ov.getNormalMatrix(e),i=this.coplanarPoint(Nh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new hs,Fl=new Y,ma=class{constructor(e=new Ei,t=new Ei,n=new Ei,i=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai){let n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],_=i[9],g=i[10],m=i[11],p=i[12],b=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,m-h,x-p).normalize(),n[1].setComponents(l+s,f+c,m+h,x+p).normalize(),n[2].setComponents(l+o,f+u,m+_,x+b).normalize(),n[3].setComponents(l-o,f-u,m-_,x-b).normalize(),n[4].setComponents(l-a,f-d,m-g,x-S).normalize(),t===Ai)n[5].setComponents(l+a,f+d,m+g,x+S).normalize();else if(t===ra)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Fl.x=i.normal.x>0?e.max.x:e.min.x,Fl.y=i.normal.y>0?e.max.y:e.min.y,Fl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jl=class extends Cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xp=new zt,Hh=new aa,Nl=new hs,Ol=new Y,ga=class extends Kn{constructor(e=new vi,t=new Jl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(i),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;Xp.copy(i).invert(),Hh.copy(e.ray).applyMatrix4(Xp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let _=f,g=h;_<g;_++){let m=c.getX(_);Ol.fromBufferAttribute(d,m),qp(Ol,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let _=f,g=h;_<g;_++)Ol.fromBufferAttribute(d,_),qp(Ol,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function qp(r,e,t,n,i,s,o){let a=Hh.distanceSqToPoint(r);if(a<t){let l=new Y;Hh.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var _a=class extends Jn{constructor(e,t,n,i,s,o,a,l,c,u=os){if(u!==os&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===os&&(n=Dr),n===void 0&&u===cs&&(n=gs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:li,this.minFilter=l!==void 0?l:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var fs=class r extends vi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,h=[],_=[],g=[],m=[];for(let p=0;p<u;p++){let b=p*f-o;for(let S=0;S<c;S++){let x=S*d-s;_.push(x,-b,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,x=b+c*(p+1),C=b+1+c*(p+1),R=b+1+c*p;h.push(S,x,R),h.push(x,C,R)}this.setIndex(h),this.setAttribute("position",new Ci(_,3)),this.setAttribute("normal",new Ci(g,3)),this.setAttribute("uv",new Ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Kl=class extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ql=class extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function av(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var ds=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jl=class extends ds{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bh:s=e,a=2*t-n;break;case kh:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:o=e,l=2*n-t;break;case kh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,b=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,S=(-1-h)*m+(1.5+h)*g+.5*_,x=h*m-h*g;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+b*o[c+C]+S*o[l+C]+x*o[d+C];return s}},ec=class extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},tc=class extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ci=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bl(t,this.TimeBufferType),this.values=Bl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bl(e.times,Array),values:Bl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case Wl:t=this.InterpolantFactoryMethodLinear;break;case kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&av(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let d=a*n,f=d-n,h=d+n;for(let _=0;_!==n;++_){let g=t[d+_];if(g!==t[f+_]||g!==t[h+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let h=0;h!==n;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Wl;var Rr=class extends ci{constructor(e,t,n){super(e,t,n)}};Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=na;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends ci{};nc.prototype.ValueTypeName="color";var ic=class extends ci{};ic.prototype.ValueTypeName="number";var rc=class extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)er.slerpFlat(s,0,o,c-a,o,c,l);return s}},va=class extends ci{InterpolantFactoryMethodLinear(e){return new rc(this.times,this.values,this.getValueSize(),e)}};va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends ci{constructor(e,t,n){super(e,t,n)}};Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=na;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends ci{};sc.prototype.ValueTypeName="vector";var oc=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],_=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null}}},Hm=new oc,ac=class{constructor(e){this.manager=e!==void 0?e:Hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var lo=class extends fa{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var lc=class extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}},xa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Yp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Yp(){return performance.now()}var ff="\\[\\]\\.:\\/",lv=new RegExp("["+ff+"]","g"),df="[^"+ff+"]",cv="[^"+ff.replace("\\.","")+"]",uv=/((?:WC+[\/:])*)/.source.replace("WC",df),hv=/(WCOD+)?/.source.replace("WCOD",cv),fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),dv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),pv=new RegExp("^"+uv+hv+fv+dv+"$"),mv=["material","materials","bones","map"],Gh=class{constructor(e,t,n){let i=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lv,"")}static parseTrackName(e){let t=pv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);mv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Gh;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vb=new Float32Array(1);function pf(r,e,t,n){let i=gv(n);switch(t){case jh:return r*e;case tf:return r*e;case nf:return r*e*2;case rf:return r*e/i.components*i.byteLength;case Sc:return r*e/i.components*i.byteLength;case sf:return r*e*2/i.components*i.byteLength;case bc:return r*e*2/i.components*i.byteLength;case ef:return r*e*3/i.components*i.byteLength;case ui:return r*e*4/i.components*i.byteLength;case Tc:return r*e*4/i.components*i.byteLength;case ba:case Ta:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ea:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Cc:return Math.max(r,16)*Math.max(e,8)/4;case wc:case Ac:return Math.max(r,8)*Math.max(e,8)/2;case Rc:case Pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Aa:case qc:case Yc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case of:case Zc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case $c:case Jc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gv(r){switch(r){case Li:case Jh:return{byteLength:1,components:1};case co:case Kh:case uo:return{byteLength:2,components:1};case yc:case Mc:return{byteLength:2,components:4};case Dr:case xc:case Ui:return{byteLength:4,components:1};case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"174"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="174");function fg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function vv(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){let _=d[f],g=d[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){let g=d[h];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yv=`#ifdef USE_ALPHAHASH
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
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wv=`#ifdef USE_AOMAP
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
#endif`,Ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
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
#endif`,Cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dv=`#ifdef USE_IRIDESCENCE
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
#endif`,Lv=`#ifdef USE_BUMPMAP
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hv=`#define PI 3.141592653589793
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$v="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,_x=`struct PhysicalMaterial {
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
}`,vx=`
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,Hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iy=`float getShadowMask() {
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
}`,ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sy=`#ifdef USE_SKINNING
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
#endif`,oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fy=`#ifdef USE_TRANSMISSION
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
#endif`,dy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xy=`uniform sampler2D t2D;
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
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
}`,wy=`#if DEPTH_PACKING == 3200
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
}`,Ey=`#define DISTANCE
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
}`,Ay=`#define DISTANCE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`uniform float scale;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Uy=`#define LAMBERT
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
}`,Fy=`#define LAMBERT
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
}`,Ny=`#define MATCAP
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
}`,Oy=`#define MATCAP
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
}`,By=`#define NORMAL
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
}`,ky=`#define NORMAL
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
}`,zy=`#define PHONG
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
}`,Vy=`#define PHONG
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
}`,Hy=`#define STANDARD
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
}`,Gy=`#define STANDARD
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
}`,Wy=`#define TOON
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
}`,Xy=`#define TOON
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
}`,qy=`uniform float size;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,Zy=`#include <common>
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
}`,$y=`uniform vec3 color;
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
}`,Jy=`uniform float rotation;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:xv,alphahash_pars_fragment:yv,alphamap_fragment:Mv,alphamap_pars_fragment:Sv,alphatest_fragment:bv,alphatest_pars_fragment:Tv,aomap_fragment:wv,aomap_pars_fragment:Ev,batching_pars_vertex:Av,batching_vertex:Cv,begin_vertex:Rv,beginnormal_vertex:Pv,bsdfs:Iv,iridescence_fragment:Dv,bumpmap_pars_fragment:Lv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Fv,clipping_planes_pars_vertex:Nv,clipping_planes_vertex:Ov,color_fragment:Bv,color_pars_fragment:kv,color_pars_vertex:zv,color_vertex:Vv,common:Hv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:Xv,displacementmap_vertex:qv,emissivemap_fragment:Yv,emissivemap_pars_fragment:Zv,colorspace_fragment:$v,colorspace_pars_fragment:Jv,envmap_fragment:Kv,envmap_common_pars_fragment:Qv,envmap_pars_fragment:jv,envmap_pars_vertex:ex,envmap_physical_pars_fragment:hx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:rx,fog_pars_fragment:sx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:ux,lights_toon_fragment:fx,lights_toon_pars_fragment:dx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:_x,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:yx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:Tx,map_fragment:wx,map_pars_fragment:Ex,map_particle_fragment:Ax,map_particle_pars_fragment:Cx,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Ix,morphcolor_vertex:Dx,morphnormal_vertex:Lx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Fx,normal_fragment_begin:Nx,normal_fragment_maps:Ox,normal_pars_fragment:Bx,normal_pars_vertex:kx,normal_vertex:zx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Hx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:qx,packing:Yx,premultiplied_alpha_fragment:Zx,project_vertex:$x,dithering_fragment:Jx,dithering_pars_fragment:Kx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:ey,shadowmap_pars_vertex:ty,shadowmap_vertex:ny,shadowmask_pars_fragment:iy,skinbase_vertex:ry,skinning_pars_vertex:sy,skinning_vertex:oy,skinnormal_vertex:ay,specularmap_fragment:ly,specularmap_pars_fragment:cy,tonemapping_fragment:uy,tonemapping_pars_fragment:hy,transmission_fragment:fy,transmission_pars_fragment:dy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:gy,worldpos_vertex:_y,background_vert:vy,background_frag:xy,backgroundCube_vert:yy,backgroundCube_frag:My,cube_vert:Sy,cube_frag:by,depth_vert:Ty,depth_frag:wy,distanceRGBA_vert:Ey,distanceRGBA_frag:Ay,equirect_vert:Cy,equirect_frag:Ry,linedashed_vert:Py,linedashed_frag:Iy,meshbasic_vert:Dy,meshbasic_frag:Ly,meshlambert_vert:Uy,meshlambert_frag:Fy,meshmatcap_vert:Ny,meshmatcap_frag:Oy,meshnormal_vert:By,meshnormal_frag:ky,meshphong_vert:zy,meshphong_frag:Vy,meshphysical_vert:Hy,meshphysical_frag:Gy,meshtoon_vert:Wy,meshtoon_frag:Xy,points_vert:qy,points_frag:Yy,shadow_vert:Zy,shadow_frag:$y,sprite_vert:Jy,sprite_frag:Ky},Se={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Fi={basic:{uniforms:mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new rt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:mn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:mn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new rt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:mn([Se.points,Se.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:mn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:mn([Se.common,Se.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:mn([Se.sprite,Se.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:mn([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:mn([Se.lights,Se.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Fi.physical={uniforms:mn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Kc={r:0,b:0,g:0},vs=new Pi,Qy=new zt;function jy(r,e,t,n,i,s,o){let a=new rt(0),l=s===!0?0:1,c,u,d=null,f=0,h=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function g(S){let x=!1,C=_(S);C===null?p(a,l):C&&C.isColor&&(p(C,1),x=!0);let R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,x){let C=_(x);C&&(C.isCubeTexture||C.mapping===Ma)?(u===void 0&&(u=new Nn(new oo(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:_s(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),vs.copy(x.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(vs)),u.material.toneMapped=lt.getTransfer(C.colorSpace)!==_t,(d!==C||f!==C.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Nn(new fs(2,2),new On({name:"BackgroundMaterial",uniforms:_s(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(C.colorSpace)!==_t,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,h=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(Kc,hf(r)),n.buffers.color.setClear(Kc.r,Kc.g,Kc.b,x,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m,dispose:b}}function eM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(v,I,F,k,V){let $=!1,H=d(k,F,I);s!==H&&(s=H,c(s.object)),$=h(v,k,F,V),$&&_(v,k,F,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(v,I,F,k),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function d(v,I,F){let k=F.wireframe===!0,V=n[v.id];V===void 0&&(V={},n[v.id]=V);let $=V[I.id];$===void 0&&($={},V[I.id]=$);let H=$[k];return H===void 0&&(H=f(l()),$[k]=H),H}function f(v){let I=[],F=[],k=[];for(let V=0;V<t;V++)I[V]=0,F[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:k,object:v,attributes:{},index:null}}function h(v,I,F,k){let V=s.attributes,$=I.attributes,H=0,X=F.getAttributes();for(let G in X)if(X[G].location>=0){let D=V[G],de=$[G];if(de===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),D===void 0||D.attribute!==de||de&&D.data!==de.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function _(v,I,F,k){let V={},$=I.attributes,H=0,X=F.getAttributes();for(let G in X)if(X[G].location>=0){let D=$[G];D===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(D=v.instanceColor));let de={};de.attribute=D,D&&D.data&&(de.data=D.data),V[G]=de,H++}s.attributes=V,s.attributesNum=H,s.index=k}function g(){let v=s.newAttributes;for(let I=0,F=v.length;I<F;I++)v[I]=0}function m(v){p(v,0)}function p(v,I){let F=s.newAttributes,k=s.enabledAttributes,V=s.attributeDivisors;F[v]=1,k[v]===0&&(r.enableVertexAttribArray(v),k[v]=1),V[v]!==I&&(r.vertexAttribDivisor(v,I),V[v]=I)}function b(){let v=s.newAttributes,I=s.enabledAttributes;for(let F=0,k=I.length;F<k;F++)I[F]!==v[F]&&(r.disableVertexAttribArray(F),I[F]=0)}function S(v,I,F,k,V,$,H){H===!0?r.vertexAttribIPointer(v,I,F,V,$):r.vertexAttribPointer(v,I,F,k,V,$)}function x(v,I,F,k){g();let V=k.attributes,$=F.getAttributes(),H=I.defaultAttributeValues;for(let X in $){let G=$[X];if(G.location>=0){let re=V[X];if(re===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){let D=re.normalized,de=re.itemSize,Le=e.get(re);if(Le===void 0)continue;let Ze=Le.buffer,J=Le.type,oe=Le.bytesPerElement,_e=J===r.INT||J===r.UNSIGNED_INT||re.gpuType===xc;if(re.isInterleavedBufferAttribute){let ae=re.data,Ae=ae.stride,Oe=re.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<G.locationSize;Ie++)p(G.location+Ie,ae.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<G.locationSize;Ie++)m(G.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Ie=0;Ie<G.locationSize;Ie++)S(G.location+Ie,de/G.locationSize,J,D,Ae*oe,(Oe+de/G.locationSize*Ie)*oe,_e)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)p(G.location+ae,re.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<G.locationSize;ae++)m(G.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let ae=0;ae<G.locationSize;ae++)S(G.location+ae,de/G.locationSize,J,D,de*oe,de/G.locationSize*ae*oe,_e)}}else if(H!==void 0){let D=H[X];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(G.location,D);break;case 3:r.vertexAttrib3fv(G.location,D);break;case 4:r.vertexAttrib4fv(G.location,D);break;default:r.vertexAttrib1fv(G.location,D)}}}}b()}function C(){P();for(let v in n){let I=n[v];for(let F in I){let k=I[F];for(let V in k)u(k[V].object),delete k[V];delete I[F]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let F in I){let k=I[F];for(let V in k)u(k[V].object),delete k[V];delete I[F]}delete n[v.id]}function E(v){for(let I in n){let F=n[I];if(F[v.id]===void 0)continue;let k=F[v.id];for(let V in k)u(k[V].object),delete k[V];delete F[v.id]}}function P(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function tM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==ui&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let P=E===uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Li&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ui&&!P)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:C,maxSamples:R}}function iM(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Ei,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{let b=s?0:n,S=b*4,x=p.clippingState||null;l.value=x,x=u(_,f,S,h);for(let C=0;C!==S;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=h+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=h;S!==g;++S,x+=4)o.copy(d[S]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function rM(r){let e=new WeakMap;function t(o,a){return a===gc?o.mapping=ps:a===_c&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gc||a===_c)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $l(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var po=4,Gm=[.125,.215,.35,.446,.526,.582],Ms=20,mf=new lo,Wm=new rt,gf=null,_f=0,vf=0,xf=!1,ys=(1+Math.sqrt(5))/2,fo=1/ys,Xm=[new Y(-ys,fo,0),new Y(ys,fo,0),new Y(-fo,0,ys),new Y(fo,0,ys),new Y(0,ys,-fo),new Y(0,ys,fo),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],sM=new Y,eu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=sM}=s;gf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,_f,vf),this._renderer.xr.enabled=xf,e.scissorTest=!1,Qc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:uo,format:ui,colorSpace:us,depthBuffer:!1},i=qm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qm(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oM(s)),this._blurMaterial=aM(s,e,t)}return i}_compileMaterial(e){let t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,mf)}_sceneToCubeUV(e,t,n,i,s){let l=new Fn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Wm),d.toneMapping=nr,d.autoClear=!1;let _=new ca({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new Nn(new oo,_),m=!1,p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(Wm),m=!0);for(let b=0;b<6;b++){let S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));let x=this._cubeSize;Qc(i,S*x,b>2?x:0,x,x),d.setRenderTarget(i),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ps||e.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ym());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Qc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,mf)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xm[(i-s-1)%Xm.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Nn(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ms-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Ms;m>Ms&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);let p=[],b=0;for(let E=0;E<Ms;++E){let P=E/g,M=Math.exp(-P*P/2);p.push(M),E===0?b+=M:E<m&&(b+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;let x=this._sizeLods[i],C=3*x*(i>S-po?i-S+po:0),R=4*(this._cubeSize-x);Qc(t,C,R,3*x,2*x),l.setRenderTarget(t),l.render(d,mf)}};function oM(r){let e=[],t=[],n=[],i=r,s=r-po+1+Gm.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-po?l=Gm[o-r+po-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*h),S=new Float32Array(m*_*h),x=new Float32Array(p*_*h);for(let R=0;R<h;R++){let E=R%3*2/3-1,P=R>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];b.set(M,g*_*R),S.set(f,m*_*R);let v=[R,R,R,R,R,R];x.set(v,p*_*R)}let C=new vi;C.setAttribute("position",new Nt(b,g)),C.setAttribute("uv",new Nt(S,m)),C.setAttribute("faceIndex",new Nt(x,p)),e.push(C),i>po&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qm(r,e,t){let n=new Ri(r,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function aM(r,e,t){let n=new Float32Array(Ms),i=new Y(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rf(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Ym(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Zm(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Rf(){return`

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
	`}function lM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===gc||l===_c,u=l===ps||l===ms;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new eu(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new eu(r)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function cM(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function uM(r,e,t,n){let i={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],r.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,_=d.attributes.position,g=0;if(h!==null){let b=h.array;g=h.version;for(let S=0,x=b.length;S<x;S+=3){let C=b[S+0],R=b[S+1],E=b[S+2];f.push(C,R,R,E,E,C)}}else if(_!==void 0){let b=_.array;g=_.version;for(let S=0,x=b.length/3-1;S<x;S+=3){let C=S+0,R=S+1,E=S+2;f.push(C,R,R,E,E,C)}}else return;let m=new(uf(f)?ha:ua)(f,1);m.version=g;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function hM(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*o),t.update(h,n,1)}function c(f,h,_){_!==0&&(r.drawElementsInstanced(n,h,s,f*o,_),t.update(h,n,_))}function u(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];t.update(m,n,1)}function d(f,h,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,g,0,_);let p=0;for(let b=0;b<_;b++)p+=h[b]*g[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fM(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dM(r,e,t){let n=new WeakMap,i=new Ot;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==d){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;h===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let x=a.attributes.position.count*S,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let R=new Float32Array(x*C*4*d),E=new oa(R,x,C,d);E.type=Ui,E.needsUpdate=!0;let P=S*4;for(let v=0;v<d;v++){let I=m[v],F=p[v],k=b[v],V=x*C*4*v;for(let $=0;$<I.count;$++){let H=$*P;h===!0&&(i.fromBufferAttribute(I,$),R[V+H+0]=i.x,R[V+H+1]=i.y,R[V+H+2]=i.z,R[V+H+3]=0),_===!0&&(i.fromBufferAttribute(F,$),R[V+H+4]=i.x,R[V+H+5]=i.y,R[V+H+6]=i.z,R[V+H+7]=0),g===!0&&(i.fromBufferAttribute(k,$),R[V+H+8]=i.x,R[V+H+9]=i.y,R[V+H+10]=i.z,R[V+H+11]=k.itemSize===4?i.w:1)}}f={count:d,texture:E,size:new ht(x,C)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];let _=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function pM(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var dg=new Jn,$m=new _a(1,1),pg=new oa,mg=new Yl,gg=new da,Jm=[],Km=[],Qm=new Float32Array(16),jm=new Float32Array(9),eg=new Float32Array(4);function go(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Jm[i];if(s===void 0&&(s=new Float32Array(i),Jm[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function nu(r,e){let t=Km[e];t===void 0&&(t=new Int32Array(e),Km[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function _M(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function vM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function xM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;eg.set(n),r.uniformMatrix2fv(this.addr,!1,eg),Kt(t,n)}}function yM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;jm.set(n),r.uniformMatrix3fv(this.addr,!1,jm),Kt(t,n)}}function MM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;Qm.set(n),r.uniformMatrix4fv(this.addr,!1,Qm),Kt(t,n)}}function SM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function TM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function wM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function EM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function AM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function CM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function RM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function PM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?($m.compareFunction=af,s=$m):s=dg,t.setTexture2D(e||s,i)}function IM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mg,i)}function DM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gg,i)}function LM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pg,i)}function UM(r){switch(r){case 5126:return mM;case 35664:return gM;case 35665:return _M;case 35666:return vM;case 35674:return xM;case 35675:return yM;case 35676:return MM;case 5124:case 35670:return SM;case 35667:case 35671:return bM;case 35668:case 35672:return TM;case 35669:case 35673:return wM;case 5125:return EM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return LM}}function FM(r,e){r.uniform1fv(this.addr,e)}function NM(r,e){let t=go(e,this.size,2);r.uniform2fv(this.addr,t)}function OM(r,e){let t=go(e,this.size,3);r.uniform3fv(this.addr,t)}function BM(r,e){let t=go(e,this.size,4);r.uniform4fv(this.addr,t)}function kM(r,e){let t=go(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function zM(r,e){let t=go(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function VM(r,e){let t=go(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function HM(r,e){r.uniform1iv(this.addr,e)}function GM(r,e){r.uniform2iv(this.addr,e)}function WM(r,e){r.uniform3iv(this.addr,e)}function XM(r,e){r.uniform4iv(this.addr,e)}function qM(r,e){r.uniform1uiv(this.addr,e)}function YM(r,e){r.uniform2uiv(this.addr,e)}function ZM(r,e){r.uniform3uiv(this.addr,e)}function $M(r,e){r.uniform4uiv(this.addr,e)}function JM(r,e,t){let n=this.cache,i=e.length,s=nu(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||dg,s[o])}function KM(r,e,t){let n=this.cache,i=e.length,s=nu(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||mg,s[o])}function QM(r,e,t){let n=this.cache,i=e.length,s=nu(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||gg,s[o])}function jM(r,e,t){let n=this.cache,i=e.length,s=nu(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||pg,s[o])}function eS(r){switch(r){case 5126:return FM;case 35664:return NM;case 35665:return OM;case 35666:return BM;case 35674:return kM;case 35675:return zM;case 35676:return VM;case 5124:case 35670:return HM;case 35667:case 35671:return GM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return qM;case 36294:return YM;case 36295:return ZM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return jM}}var Mf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=UM(t.type)}},Sf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eS(t.type)}},bf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},yf=/(\w+)(\])?(\[|\.)?/g;function tg(r,e){r.seq.push(e),r.map[e.id]=e}function tS(r,e,t){let n=r.name,i=n.length;for(yf.lastIndex=0;;){let s=yf.exec(n),o=yf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){tg(t,c===void 0?new Mf(a,r,e):new Sf(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new bf(a),tg(t,d)),t=d}}}var mo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);tS(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function ng(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var nS=37297,iS=0;function rS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ig=new Ye;function sS(r){lt._getMatrix(ig,lt.workingColorSpace,r);let e=`mat3( ${ig.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case ia:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function rg(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+rS(r.getShaderSource(e),o)}else return i}function oS(r,e){let t=sS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aS(r,e){let t;switch(e){case _m:t="Linear";break;case vm:t="Reinhard";break;case xm:t="Cineon";break;case ym:t="ACESFilmic";break;case Sm:t="AgX";break;case bm:t="Neutral";break;case Mm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jc=new Y;function lS(){lt.getLuminanceCoefficients(jc);let r=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function uS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ra(r){return r!==""}function sg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function og(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(r){return r.replace(fS,pS)}var dS=new Map;function pS(r,e){let t=et[e];if(t===void 0){let n=dS.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tf(t)}var mS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ag(r){return r.replace(mS,gS)}function gS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function _S(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function vS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case Ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function yS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zh:e="ENVMAP_BLENDING_MULTIPLY";break;case mm:e="ENVMAP_BLENDING_MIX";break;case gm:e="ENVMAP_BLENDING_ADD";break}return e}function MS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function SS(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_S(t),c=vS(t),u=xS(t),d=yS(t),f=MS(t),h=cS(t),_=uS(s),g=i.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ra).join(`
`),p.length>0&&(p+=`
`)):(m=[lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),p=[lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?et.tonemapping_pars_fragment:"",t.toneMapping!==nr?aS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,oS("linearToOutputTexel",t.outputColorSpace),lS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=Tf(o),o=sg(o,t),o=og(o,t),a=Tf(a),a=sg(a,t),a=og(a,t),o=ag(o),a=ag(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+m+o,x=b+p+a,C=ng(i,i.VERTEX_SHADER,S),R=ng(i,i.FRAGMENT_SHADER,x);i.attachShader(g,C),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(I){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(C).trim(),V=i.getShaderInfoLog(R).trim(),$=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,R);else{let X=rg(i,C,"vertex"),G=rg(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+X+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||V==="")&&(H=!1);H&&(I.diagnostics={runnable:$,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(C),i.deleteShader(R),P=new mo(i,g),M=hS(i,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,nS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}var bS=0,wf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ef(e),t.set(e,n)),n}},Ef=class{constructor(e){this.id=bS++,this.code=e,this.usedTimes=0}};function TS(r,e,t,n,i,s,o){let a=new la,l=new wf,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,h=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,I,F,k){let V=F.fog,$=k.geometry,H=M.isMeshStandardMaterial?F.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),G=X&&X.mapping===Ma?X.image.height:null,re=_[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let D=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,de=D!==void 0?D.length:0,Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let Ze,J,oe,_e;if(re){let be=Fi[re];Ze=be.vertexShader,J=be.fragmentShader}else Ze=M.vertexShader,J=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);let ae=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Oe=k.isInstancedMesh===!0,Ie=k.isBatchedMesh===!0,$e=!!M.map,Xe=!!M.matcap,z=!!X,w=!!M.aoMap,ee=!!M.lightMap,ie=!!M.bumpMap,U=!!M.normalMap,ne=!!M.displacementMap,ve=!!M.emissiveMap,ce=!!M.metalnessMap,A=!!M.roughnessMap,y=M.anisotropy>0,O=M.clearcoat>0,Q=M.dispersion>0,K=M.iridescence>0,j=M.sheen>0,fe=M.transmission>0,ue=y&&!!M.anisotropyMap,me=O&&!!M.clearcoatMap,Ge=O&&!!M.clearcoatNormalMap,le=O&&!!M.clearcoatRoughnessMap,he=K&&!!M.iridescenceMap,Ne=K&&!!M.iridescenceThicknessMap,Fe=j&&!!M.sheenColorMap,Te=j&&!!M.sheenRoughnessMap,Je=!!M.specularMap,ze=!!M.specularColorMap,at=!!M.specularIntensityMap,L=fe&&!!M.transmissionMap,ge=fe&&!!M.thicknessMap,Z=!!M.gradientMap,te=!!M.alphaMap,pe=M.alphaTest>0,xe=!!M.alphaHash,Ve=!!M.extensions,ct=nr;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ct=r.toneMapping);let It={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:J,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&k._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,instancingMorph:Oe&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:us,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:Xe,envMap:z,envMapMode:z&&X.mapping,envMapCubeUVHeight:G,aoMap:w,lightMap:ee,bumpMap:ie,normalMap:U,displacementMap:f&&ne,emissiveMap:ve,normalMapObjectSpace:U&&M.normalMapType===Cm,normalMapTangentSpace:U&&M.normalMapType===Am,metalnessMap:ce,roughnessMap:A,anisotropy:y,anisotropyMap:ue,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:Ge,clearcoatRoughnessMap:le,dispersion:Q,iridescence:K,iridescenceMap:he,iridescenceThicknessMap:Ne,sheen:j,sheenColorMap:Fe,sheenRoughnessMap:Te,specularMap:Je,specularColorMap:ze,specularIntensityMap:at,transmission:fe,transmissionMap:L,thicknessMap:ge,gradientMap:Z,opaque:M.transparent===!1&&M.blending===as&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:xe,combine:M.combine,mapUv:$e&&g(M.map.channel),aoMapUv:w&&g(M.aoMap.channel),lightMapUv:ee&&g(M.lightMap.channel),bumpMapUv:ie&&g(M.bumpMap.channel),normalMapUv:U&&g(M.normalMap.channel),displacementMapUv:ne&&g(M.displacementMap.channel),emissiveMapUv:ve&&g(M.emissiveMap.channel),metalnessMapUv:ce&&g(M.metalnessMap.channel),roughnessMapUv:A&&g(M.roughnessMap.channel),anisotropyMapUv:ue&&g(M.anisotropyMap.channel),clearcoatMapUv:me&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(M.sheenRoughnessMap.channel),specularMapUv:Je&&g(M.specularMap.channel),specularColorMapUv:ze&&g(M.specularColorMap.channel),specularIntensityMapUv:at&&g(M.specularIntensityMap.channel),transmissionMapUv:L&&g(M.transmissionMap.channel),thicknessMapUv:ge&&g(M.thicknessMap.channel),alphaMapUv:te&&g(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(U||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&($e||te),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ae,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Le,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:ve&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Di,flipSided:M.side===An,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ve&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&M.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)v.push(I),v.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(b(v,M),S(v,M),v.push(r.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function b(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function S(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let v=_[M.type],I;if(v){let F=Fi[v];I=Vm.clone(F.uniforms)}else I=M.uniforms;return I}function C(M,v){let I;for(let F=0,k=u.length;F<k;F++){let V=u[F];if(V.cacheKey===v){I=V,++I.usedTimes;break}}return I===void 0&&(I=new SS(r,v,M,s),u.push(I)),I}function R(M){if(--M.usedTimes===0){let v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:R,releaseShaderCache:E,programs:u,dispose:P}}function wS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function ES(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function cg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ug(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,h,_,g,m){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},r[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function a(d,f,h,_,g,m){let p=o(d,f,h,_,g,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(d,f,h,_,g,m){let p=o(d,f,h,_,g,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||ES),n.length>1&&n.sort(f||cg),i.length>1&&i.sort(f||cg)}function u(){for(let d=e,f=r.length;d<f;d++){let h=r[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function AS(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new ug,r.set(n,[o])):i>=s.length?(o=new ug,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function CS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new rt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function RS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var PS=0;function IS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function DS(r){let e=new CS,t=RS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let i=new Y,s=new zt,o=new zt;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,_=0,g=0,m=0,p=0,b=0,S=0,x=0,C=0,R=0,E=0;c.sort(IS);for(let M=0,v=c.length;M<v;M++){let I=c[M],F=I.color,k=I.intensity,V=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*k,d+=F.g*k,f+=F.b*k;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],k);E++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,G=t.get(I);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[h]=G,n.directionalShadowMap[h]=$,n.directionalShadowMatrix[h]=I.shadow.matrix,b++}n.directional[h]=H,h++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(F).multiplyScalar(k),H.distance=V,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[g]=H;let X=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,X.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[g]=X.matrix,I.castShadow){let G=t.get(I);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=$,x++}g++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(F).multiplyScalar(k),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let X=I.shadow,G=t.get(I);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=I.shadow.matrix,S++}n.point[_]=H,_++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(k),H.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==h||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==E)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,P.directionalLength=h,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=E,n.version=PS++)}function l(c,u){let d=0,f=0,h=0,_=0,g=0,m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let S=c[p];if(S.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isSpotLight){let x=n.spot[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function hg(r){let e=new DS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function LS(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new hg(r),e.set(i,[a])):s>=o.length?(a=new hg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var US=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FS=`uniform sampler2D shadow_pass;
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
}`;function NS(r,e,t){let n=new ma,i=new ht,s=new ht,o=new Ot,a=new Kl({depthPacking:Em}),l=new Ql,c={},u=t.maxTextureSize,d={[Qi]:An,[An]:Qi,[Di]:Di},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:US,fragmentShader:FS}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let _=new vi;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Nn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let p=this.type;this.render=function(R,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let M=r.getRenderTarget(),v=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),F=r.state;F.setBlending(tr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==Ii&&this.type===Ii,V=p===Ii&&this.type!==Ii;for(let $=0,H=R.length;$<H;$++){let X=R[$],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let re=G.getFrameExtents();if(i.multiply(re),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/re.x),i.x=s.x*re.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/re.y),i.y=s.y*re.y,G.mapSize.y=s.y)),G.map===null||k===!0||V===!0){let de=this.type!==Ii?{minFilter:li,magFilter:li}:{};G.map!==null&&G.map.dispose(),G.map=new Ri(i.x,i.y,de),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let D=G.getViewportCount();for(let de=0;de<D;de++){let Le=G.getViewport(de);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),F.viewport(o),G.updateMatrices(X,de),n=G.getFrustum(),x(E,P,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Ii&&b(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,v,I)};function b(R,E){let P=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ri(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(E,null,P,f,g,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(E,null,P,h,g,null)}function S(R,E,P,M){let v=null,I=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)v=I;else if(v=P.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let F=v.uuid,k=E.uuid,V=c[F];V===void 0&&(V={},c[F]=V);let $=V[k];$===void 0&&($=v.clone(),V[k]=$,E.addEventListener("dispose",C)),v=$}if(v.visible=E.visible,v.wireframe=E.wireframe,M===Ii?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:d[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=r.properties.get(v);F.light=P}return v}function x(R,E,P,M,v){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Ii)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let k=e.update(R),V=R.material;if(Array.isArray(V)){let $=k.groups;for(let H=0,X=$.length;H<X;H++){let G=$[H],re=V[G.materialIndex];if(re&&re.visible){let D=S(R,re,M,v);R.onBeforeShadow(r,R,E,P,k,D,G),r.renderBufferDirect(P,null,k,D,R,G),R.onAfterShadow(r,R,E,P,k,D,G)}}}else if(V.visible){let $=S(R,V,M,v);R.onBeforeShadow(r,R,E,P,k,$,null),r.renderBufferDirect(P,null,k,$,R,null),R.onAfterShadow(r,R,E,P,k,$,null)}}let F=R.children;for(let k=0,V=F.length;k<V;k++)x(F[k],E,P,M,v)}function C(R){R.target.removeEventListener("dispose",C);for(let P in c){let M=c[P],v=R.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var OS={[cc]:uc,[hc]:pc,[fc]:mc,[ls]:dc,[uc]:cc,[pc]:hc,[mc]:fc,[dc]:ls};function BS(r,e){function t(){let L=!1,ge=new Ot,Z=null,te=new Ot(0,0,0,0);return{setMask:function(pe){Z!==pe&&!L&&(r.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){L=pe},setClear:function(pe,xe,Ve,ct,It){It===!0&&(pe*=ct,xe*=ct,Ve*=ct),ge.set(pe,xe,Ve,ct),te.equals(ge)===!1&&(r.clearColor(pe,xe,Ve,ct),te.copy(ge))},reset:function(){L=!1,Z=null,te.set(-1,0,0,0)}}}function n(){let L=!1,ge=!1,Z=null,te=null,pe=null;return{setReversed:function(xe){if(ge!==xe){let Ve=e.get("EXT_clip_control");ge?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let ct=pe;pe=null,this.setClear(ct)}ge=xe},getReversed:function(){return ge},setTest:function(xe){xe?ae(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(xe){Z!==xe&&!L&&(r.depthMask(xe),Z=xe)},setFunc:function(xe){if(ge&&(xe=OS[xe]),te!==xe){switch(xe){case cc:r.depthFunc(r.NEVER);break;case uc:r.depthFunc(r.ALWAYS);break;case hc:r.depthFunc(r.LESS);break;case ls:r.depthFunc(r.LEQUAL);break;case fc:r.depthFunc(r.EQUAL);break;case dc:r.depthFunc(r.GEQUAL);break;case pc:r.depthFunc(r.GREATER);break;case mc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=xe}},setLocked:function(xe){L=xe},setClear:function(xe){pe!==xe&&(ge&&(xe=1-xe),r.clearDepth(xe),pe=xe)},reset:function(){L=!1,Z=null,te=null,pe=null,ge=!1}}}function i(){let L=!1,ge=null,Z=null,te=null,pe=null,xe=null,Ve=null,ct=null,It=null;return{setTest:function(be){L||(be?ae(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(be){ge!==be&&!L&&(r.stencilMask(be),ge=be)},setFunc:function(be,Re,Ke){(Z!==be||te!==Re||pe!==Ke)&&(r.stencilFunc(be,Re,Ke),Z=be,te=Re,pe=Ke)},setOp:function(be,Re,Ke){(xe!==be||Ve!==Re||ct!==Ke)&&(r.stencilOp(be,Re,Ke),xe=be,Ve=Re,ct=Ke)},setLocked:function(be){L=be},setClear:function(be){It!==be&&(r.clearStencil(be),It=be)},reset:function(){L=!1,ge=null,Z=null,te=null,pe=null,xe=null,Ve=null,ct=null,It=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],_=null,g=!1,m=null,p=null,b=null,S=null,x=null,C=null,R=null,E=new rt(0,0,0),P=0,M=!1,v=null,I=null,F=null,k=null,V=null,$=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,X=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=X>=2);let re=null,D={},de=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),Ze=new Ot().fromArray(de),J=new Ot().fromArray(Le);function oe(L,ge,Z,te){let pe=new Uint8Array(4),xe=r.createTexture();r.bindTexture(L,xe),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ve=0;Ve<Z;Ve++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ge,0,r.RGBA,1,1,te,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(ge+Ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return xe}let _e={};_e[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(r.DEPTH_TEST),o.setFunc(ls),ie(!1),U(Wh),ae(r.CULL_FACE),w(tr);function ae(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Ae(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Oe(L,ge){return d[L]!==ge?(r.bindFramebuffer(L,ge),d[L]=ge,L===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ge),L===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ie(L,ge){let Z=h,te=!1;if(L){Z=f.get(ge),Z===void 0&&(Z=[],f.set(ge,Z));let pe=L.textures;if(Z.length!==pe.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,Ve=pe.length;xe<Ve;xe++)Z[xe]=r.COLOR_ATTACHMENT0+xe;Z.length=pe.length,te=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,te=!0);te&&r.drawBuffers(Z)}function $e(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let Xe={[Er]:r.FUNC_ADD,[Qp]:r.FUNC_SUBTRACT,[jp]:r.FUNC_REVERSE_SUBTRACT};Xe[em]=r.MIN,Xe[tm]=r.MAX;let z={[nm]:r.ZERO,[im]:r.ONE,[rm]:r.SRC_COLOR,[zl]:r.SRC_ALPHA,[um]:r.SRC_ALPHA_SATURATE,[lm]:r.DST_COLOR,[om]:r.DST_ALPHA,[sm]:r.ONE_MINUS_SRC_COLOR,[Vl]:r.ONE_MINUS_SRC_ALPHA,[cm]:r.ONE_MINUS_DST_COLOR,[am]:r.ONE_MINUS_DST_ALPHA,[hm]:r.CONSTANT_COLOR,[fm]:r.ONE_MINUS_CONSTANT_COLOR,[dm]:r.CONSTANT_ALPHA,[pm]:r.ONE_MINUS_CONSTANT_ALPHA};function w(L,ge,Z,te,pe,xe,Ve,ct,It,be){if(L===tr){g===!0&&(Ae(r.BLEND),g=!1);return}if(g===!1&&(ae(r.BLEND),g=!0),L!==Kp){if(L!==m||be!==M){if((p!==Er||x!==Er)&&(r.blendEquation(r.FUNC_ADD),p=Er,x=Er),be)switch(L){case as:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ya:r.blendFunc(r.ONE,r.ONE);break;case qh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case as:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ya:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,S=null,C=null,R=null,E.set(0,0,0),P=0,m=L,M=be}return}pe=pe||ge,xe=xe||Z,Ve=Ve||te,(ge!==p||pe!==x)&&(r.blendEquationSeparate(Xe[ge],Xe[pe]),p=ge,x=pe),(Z!==b||te!==S||xe!==C||Ve!==R)&&(r.blendFuncSeparate(z[Z],z[te],z[xe],z[Ve]),b=Z,S=te,C=xe,R=Ve),(ct.equals(E)===!1||It!==P)&&(r.blendColor(ct.r,ct.g,ct.b,It),E.copy(ct),P=It),m=L,M=!1}function ee(L,ge){L.side===Di?Ae(r.CULL_FACE):ae(r.CULL_FACE);let Z=L.side===An;ge&&(Z=!Z),ie(Z),L.blending===as&&L.transparent===!1?w(tr):w(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let te=L.stencilWrite;a.setTest(te),te&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(L){v!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),v=L)}function U(L){L!==Zp?(ae(r.CULL_FACE),L!==I&&(L===Wh?r.cullFace(r.BACK):L===$p?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),I=L}function ne(L){L!==F&&(H&&r.lineWidth(L),F=L)}function ve(L,ge,Z){L?(ae(r.POLYGON_OFFSET_FILL),(k!==ge||V!==Z)&&(r.polygonOffset(ge,Z),k=ge,V=Z)):Ae(r.POLYGON_OFFSET_FILL)}function ce(L){L?ae(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+$-1),re!==L&&(r.activeTexture(L),re=L)}function y(L,ge,Z){Z===void 0&&(re===null?Z=r.TEXTURE0+$-1:Z=re);let te=D[Z];te===void 0&&(te={type:void 0,texture:void 0},D[Z]=te),(te.type!==L||te.texture!==ge)&&(re!==Z&&(r.activeTexture(Z),re=Z),r.bindTexture(L,ge||_e[L]),te.type=L,te.texture=ge)}function O(){let L=D[re];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(L){Ze.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function Te(L){J.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function Je(L,ge){let Z=c.get(ge);Z===void 0&&(Z=new WeakMap,c.set(ge,Z));let te=Z.get(L);te===void 0&&(te=r.getUniformBlockIndex(ge,L.name),Z.set(L,te))}function ze(L,ge){let te=c.get(ge).get(L);l.get(ge)!==te&&(r.uniformBlockBinding(ge,te,L.__bindingPointIndex),l.set(ge,te))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},re=null,D={},d={},f=new WeakMap,h=[],_=null,g=!1,m=null,p=null,b=null,S=null,x=null,C=null,R=null,E=new rt(0,0,0),P=0,M=!1,v=null,I=null,F=null,k=null,V=null,Ze.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Ae,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:$e,setBlending:w,setMaterial:ee,setFlipSided:ie,setCullFace:U,setLineWidth:ne,setPolygonOffset:ve,setScissorTest:ce,activeTexture:A,bindTexture:y,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:K,texImage2D:he,texImage3D:Ne,updateUBOMapping:Je,uniformBlockBinding:ze,texStorage2D:Ge,texStorage3D:le,texSubImage2D:j,texSubImage3D:fe,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:Fe,viewport:Te,reset:at}}function kS(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return h?new OffscreenCanvas(A,y):sa("canvas")}function g(A,y,O){let Q=1,K=ce(A);if((K.width>O||K.height>O)&&(Q=O/Math.max(K.width,K.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let j=Math.floor(Q*K.width),fe=Math.floor(Q*K.height);d===void 0&&(d=_(j,fe));let ue=y?_(j,fe):d;return ue.width=j,ue.height=fe,ue.getContext("2d").drawImage(A,0,0,j,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+fe+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(A,y,O,Q,K=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=y;if(y===r.RED&&(O===r.FLOAT&&(j=r.R32F),O===r.HALF_FLOAT&&(j=r.R16F),O===r.UNSIGNED_BYTE&&(j=r.R8)),y===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.R8UI),O===r.UNSIGNED_SHORT&&(j=r.R16UI),O===r.UNSIGNED_INT&&(j=r.R32UI),O===r.BYTE&&(j=r.R8I),O===r.SHORT&&(j=r.R16I),O===r.INT&&(j=r.R32I)),y===r.RG&&(O===r.FLOAT&&(j=r.RG32F),O===r.HALF_FLOAT&&(j=r.RG16F),O===r.UNSIGNED_BYTE&&(j=r.RG8)),y===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RG8UI),O===r.UNSIGNED_SHORT&&(j=r.RG16UI),O===r.UNSIGNED_INT&&(j=r.RG32UI),O===r.BYTE&&(j=r.RG8I),O===r.SHORT&&(j=r.RG16I),O===r.INT&&(j=r.RG32I)),y===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGB8UI),O===r.UNSIGNED_SHORT&&(j=r.RGB16UI),O===r.UNSIGNED_INT&&(j=r.RGB32UI),O===r.BYTE&&(j=r.RGB8I),O===r.SHORT&&(j=r.RGB16I),O===r.INT&&(j=r.RGB32I)),y===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),O===r.UNSIGNED_INT&&(j=r.RGBA32UI),O===r.BYTE&&(j=r.RGBA8I),O===r.SHORT&&(j=r.RGBA16I),O===r.INT&&(j=r.RGBA32I)),y===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),y===r.RGBA){let fe=K?ia:lt.getTransfer(Q);O===r.FLOAT&&(j=r.RGBA32F),O===r.HALF_FLOAT&&(j=r.RGBA16F),O===r.UNSIGNED_BYTE&&(j=fe===_t?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(A,y){let O;return A?y===null||y===Dr||y===gs?O=r.DEPTH24_STENCIL8:y===Ui?O=r.DEPTH32F_STENCIL8:y===co&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Dr||y===gs?O=r.DEPTH_COMPONENT24:y===Ui?O=r.DEPTH_COMPONENT32F:y===co&&(O=r.DEPTH_COMPONENT16),O}function C(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==li&&A.minFilter!==_i?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){let y=A.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&u.delete(y)}function E(A){let y=A.target;y.removeEventListener("dispose",E),v(y)}function P(A){let y=n.get(A);if(y.__webglInit===void 0)return;let O=A.source,Q=f.get(O);if(Q){let K=Q[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(A),Object.keys(Q).length===0&&f.delete(O)}n.remove(A)}function M(A){let y=n.get(A);r.deleteTexture(y.__webglTexture);let O=A.source,Q=f.get(O);delete Q[y.__cacheKey],o.memory.textures--}function v(A){let y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let K=0;K<y.__webglFramebuffer[Q].length;K++)r.deleteFramebuffer(y.__webglFramebuffer[Q][K]);else r.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)r.deleteFramebuffer(y.__webglFramebuffer[Q]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=A.textures;for(let Q=0,K=O.length;Q<K;Q++){let j=n.get(O[Q]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(O[Q])}n.remove(A)}let I=0;function F(){I=0}function k(){let A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function V(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function $(A,y){let O=n.get(A);if(A.isVideoTexture&&ne(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(O,A,y);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+y)}function H(A,y){let O=n.get(A);if(A.version>0&&O.__version!==A.version){J(O,A,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+y)}function X(A,y){let O=n.get(A);if(A.version>0&&O.__version!==A.version){J(O,A,y);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+y)}function G(A,y){let O=n.get(A);if(A.version>0&&O.__version!==A.version){oe(O,A,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+y)}let re={[Hl]:r.REPEAT,[wr]:r.CLAMP_TO_EDGE,[Gl]:r.MIRRORED_REPEAT},D={[li]:r.NEAREST,[Tm]:r.NEAREST_MIPMAP_NEAREST,[Sa]:r.NEAREST_MIPMAP_LINEAR,[_i]:r.LINEAR,[vc]:r.LINEAR_MIPMAP_NEAREST,[Ir]:r.LINEAR_MIPMAP_LINEAR},de={[Rm]:r.NEVER,[Fm]:r.ALWAYS,[Pm]:r.LESS,[af]:r.LEQUAL,[Im]:r.EQUAL,[Um]:r.GEQUAL,[Dm]:r.GREATER,[Lm]:r.NOTEQUAL};function Le(A,y){if(y.type===Ui&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===_i||y.magFilter===vc||y.magFilter===Sa||y.magFilter===Ir||y.minFilter===_i||y.minFilter===vc||y.minFilter===Sa||y.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,re[y.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,re[y.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,re[y.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,D[y.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,D[y.minFilter]),y.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,de[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===li||y.minFilter!==Sa&&y.minFilter!==Ir||y.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ze(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));let Q=y.source,K=f.get(Q);K===void 0&&(K={},f.set(Q,K));let j=V(y);if(j!==A.__cacheKey){K[j]===void 0&&(K[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[j].usedTimes++;let fe=K[A.__cacheKey];fe!==void 0&&(K[A.__cacheKey].usedTimes--,fe.usedTimes===0&&M(y)),A.__cacheKey=j,A.__webglTexture=K[j].texture}return O}function J(A,y,O){let Q=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=r.TEXTURE_3D);let K=Ze(A,y),j=y.source;t.bindTexture(Q,A.__webglTexture,r.TEXTURE0+O);let fe=n.get(j);if(j.version!==fe.__version||K===!0){t.activeTexture(r.TEXTURE0+O);let ue=lt.getPrimaries(lt.workingColorSpace),me=y.colorSpace===ir?null:lt.getPrimaries(y.colorSpace),Ge=y.colorSpace===ir||ue===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let le=g(y.image,!1,i.maxTextureSize);le=ve(y,le);let he=s.convert(y.format,y.colorSpace),Ne=s.convert(y.type),Fe=S(y.internalFormat,he,Ne,y.colorSpace,y.isVideoTexture);Le(Q,y);let Te,Je=y.mipmaps,ze=y.isVideoTexture!==!0,at=fe.__version===void 0||K===!0,L=j.dataReady,ge=C(y,le);if(y.isDepthTexture)Fe=x(y.format===cs,y.type),at&&(ze?t.texStorage2D(r.TEXTURE_2D,1,Fe,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,Fe,le.width,le.height,0,he,Ne,null));else if(y.isDataTexture)if(Je.length>0){ze&&at&&t.texStorage2D(r.TEXTURE_2D,ge,Fe,Je[0].width,Je[0].height);for(let Z=0,te=Je.length;Z<te;Z++)Te=Je[Z],ze?L&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Te.width,Te.height,he,Ne,Te.data):t.texImage2D(r.TEXTURE_2D,Z,Fe,Te.width,Te.height,0,he,Ne,Te.data);y.generateMipmaps=!1}else ze?(at&&t.texStorage2D(r.TEXTURE_2D,ge,Fe,le.width,le.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le.width,le.height,he,Ne,le.data)):t.texImage2D(r.TEXTURE_2D,0,Fe,le.width,le.height,0,he,Ne,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,Fe,Je[0].width,Je[0].height,le.depth);for(let Z=0,te=Je.length;Z<te;Z++)if(Te=Je[Z],y.format!==ui)if(he!==null)if(ze){if(L)if(y.layerUpdates.size>0){let pe=pf(Te.width,Te.height,y.format,y.type);for(let xe of y.layerUpdates){let Ve=Te.data.subarray(xe*pe/Te.data.BYTES_PER_ELEMENT,(xe+1)*pe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,xe,Te.width,Te.height,1,he,Ve)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Te.width,Te.height,le.depth,he,Te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Fe,Te.width,Te.height,le.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Te.width,Te.height,le.depth,he,Ne,Te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,Fe,Te.width,Te.height,le.depth,0,he,Ne,Te.data)}else{ze&&at&&t.texStorage2D(r.TEXTURE_2D,ge,Fe,Je[0].width,Je[0].height);for(let Z=0,te=Je.length;Z<te;Z++)Te=Je[Z],y.format!==ui?he!==null?ze?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Te.width,Te.height,he,Te.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?L&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Te.width,Te.height,he,Ne,Te.data):t.texImage2D(r.TEXTURE_2D,Z,Fe,Te.width,Te.height,0,he,Ne,Te.data)}else if(y.isDataArrayTexture)if(ze){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,Fe,le.width,le.height,le.depth),L)if(y.layerUpdates.size>0){let Z=pf(le.width,le.height,y.format,y.type);for(let te of y.layerUpdates){let pe=le.data.subarray(te*Z/le.data.BYTES_PER_ELEMENT,(te+1)*Z/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,he,Ne,pe)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,he,Ne,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,le.width,le.height,le.depth,0,he,Ne,le.data);else if(y.isData3DTexture)ze?(at&&t.texStorage3D(r.TEXTURE_3D,ge,Fe,le.width,le.height,le.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,he,Ne,le.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,le.width,le.height,le.depth,0,he,Ne,le.data);else if(y.isFramebufferTexture){if(at)if(ze)t.texStorage2D(r.TEXTURE_2D,ge,Fe,le.width,le.height);else{let Z=le.width,te=le.height;for(let pe=0;pe<ge;pe++)t.texImage2D(r.TEXTURE_2D,pe,Fe,Z,te,0,he,Ne,null),Z>>=1,te>>=1}}else if(Je.length>0){if(ze&&at){let Z=ce(Je[0]);t.texStorage2D(r.TEXTURE_2D,ge,Fe,Z.width,Z.height)}for(let Z=0,te=Je.length;Z<te;Z++)Te=Je[Z],ze?L&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,he,Ne,Te):t.texImage2D(r.TEXTURE_2D,Z,Fe,he,Ne,Te);y.generateMipmaps=!1}else if(ze){if(at){let Z=ce(le);t.texStorage2D(r.TEXTURE_2D,ge,Fe,Z.width,Z.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Ne,le)}else t.texImage2D(r.TEXTURE_2D,0,Fe,he,Ne,le);m(y)&&p(Q),fe.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function oe(A,y,O){if(y.image.length!==6)return;let Q=Ze(A,y),K=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+O);let j=n.get(K);if(K.version!==j.__version||Q===!0){t.activeTexture(r.TEXTURE0+O);let fe=lt.getPrimaries(lt.workingColorSpace),ue=y.colorSpace===ir?null:lt.getPrimaries(y.colorSpace),me=y.colorSpace===ir||fe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ge=y.isCompressedTexture||y.image[0].isCompressedTexture,le=y.image[0]&&y.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!Ge&&!le?he[te]=g(y.image[te],!0,i.maxCubemapSize):he[te]=le?y.image[te].image:y.image[te],he[te]=ve(y,he[te]);let Ne=he[0],Fe=s.convert(y.format,y.colorSpace),Te=s.convert(y.type),Je=S(y.internalFormat,Fe,Te,y.colorSpace),ze=y.isVideoTexture!==!0,at=j.__version===void 0||Q===!0,L=K.dataReady,ge=C(y,Ne);Le(r.TEXTURE_CUBE_MAP,y);let Z;if(Ge){ze&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Je,Ne.width,Ne.height);for(let te=0;te<6;te++){Z=he[te].mipmaps;for(let pe=0;pe<Z.length;pe++){let xe=Z[pe];y.format!==ui?Fe!==null?ze?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,xe.width,xe.height,Fe,xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Je,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,xe.width,xe.height,Fe,Te,xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Je,xe.width,xe.height,0,Fe,Te,xe.data)}}}else{if(Z=y.mipmaps,ze&&at){Z.length>0&&ge++;let te=ce(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Je,te.width,te.height)}for(let te=0;te<6;te++)if(le){ze?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Fe,Te,he[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,he[te].width,he[te].height,0,Fe,Te,he[te].data);for(let pe=0;pe<Z.length;pe++){let Ve=Z[pe].image[te].image;ze?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ve.width,Ve.height,Fe,Te,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Je,Ve.width,Ve.height,0,Fe,Te,Ve.data)}}else{ze?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,Te,he[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Fe,Te,he[te]);for(let pe=0;pe<Z.length;pe++){let xe=Z[pe];ze?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Fe,Te,xe.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Je,Fe,Te,xe.image[te])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),j.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function _e(A,y,O,Q,K,j){let fe=s.convert(O.format,O.colorSpace),ue=s.convert(O.type),me=S(O.internalFormat,fe,ue,O.colorSpace),Ge=n.get(y),le=n.get(O);if(le.__renderTarget=y,!Ge.__hasExternalTextures){let he=Math.max(1,y.width>>j),Ne=Math.max(1,y.height>>j);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,j,me,he,Ne,y.depth,0,fe,ue,null):t.texImage2D(K,j,me,he,Ne,0,fe,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),U(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,K,le.__webglTexture,0,ie(y)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,K,le.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(A,y,O){if(r.bindRenderbuffer(r.RENDERBUFFER,A),y.depthBuffer){let Q=y.depthTexture,K=Q&&Q.isDepthTexture?Q.type:null,j=x(y.stencilBuffer,K),fe=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=ie(y);U(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,j,y.width,y.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,j,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,j,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,A)}else{let Q=y.textures;for(let K=0;K<Q.length;K++){let j=Q[K],fe=s.convert(j.format,j.colorSpace),ue=s.convert(j.type),me=S(j.internalFormat,fe,ue,j.colorSpace),Ge=ie(y);O&&U(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,me,y.width,y.height):U(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,me,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,me,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);let K=Q.__webglTexture,j=ie(y);if(y.depthTexture.format===os)U(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(y.depthTexture.format===cs)U(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Oe(A){let y=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",K)};Q.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=Q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ae(y.__webglFramebuffer,A)}else if(O){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=r.createRenderbuffer(),ae(y.__webglDepthbuffer[Q],A,!1);else{let K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),ae(y.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,K)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(A,y,O){let Q=n.get(A);y!==void 0&&_e(Q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Oe(A)}function $e(A){let y=A.texture,O=n.get(A),Q=n.get(y);A.addEventListener("dispose",E);let K=A.textures,j=A.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=y.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let me=0;me<y.mipmaps.length;me++)O.__webglFramebuffer[ue][me]=r.createFramebuffer()}else O.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)O.__webglFramebuffer[ue]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(fe)for(let ue=0,me=K.length;ue<me;ue++){let Ge=n.get(K[ue]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&U(A)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<K.length;ue++){let me=K[ue];O.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);let Ge=s.convert(me.format,me.colorSpace),le=s.convert(me.type),he=S(me.internalFormat,Ge,le,me.colorSpace,A.isXRRenderTarget===!0),Ne=ie(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,he,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(r.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)_e(O.__webglFramebuffer[ue][me],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else _e(O.__webglFramebuffer[ue],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ue=0,me=K.length;ue<me;ue++){let Ge=K[ue],le=n.get(Ge);t.bindTexture(r.TEXTURE_2D,le.__webglTexture),Le(r.TEXTURE_2D,Ge),_e(O.__webglFramebuffer,A,Ge,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),m(Ge)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),Le(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)_e(O.__webglFramebuffer[me],A,y,r.COLOR_ATTACHMENT0,ue,me);else _e(O.__webglFramebuffer,A,y,r.COLOR_ATTACHMENT0,ue,0);m(y)&&p(ue),t.unbindTexture()}A.depthBuffer&&Oe(A)}function Xe(A){let y=A.textures;for(let O=0,Q=y.length;O<Q;O++){let K=y[O];if(m(K)){let j=b(A),fe=n.get(K).__webglTexture;t.bindTexture(j,fe),p(j),t.unbindTexture()}}}let z=[],w=[];function ee(A){if(A.samples>0){if(U(A)===!1){let y=A.textures,O=A.width,Q=A.height,K=r.COLOR_BUFFER_BIT,j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=n.get(A),ue=y.length>1;if(ue)for(let me=0;me<y.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<y.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ge=n.get(y[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,O,Q,0,0,O,Q,K,r.NEAREST),l===!0&&(z.length=0,w.length=0,z.push(r.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(z.push(j),w.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,w)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<y.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ge=n.get(y[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function ie(A){return Math.min(i.maxSamples,A.samples)}function U(A){let y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ne(A){let y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function ve(A,y){let O=A.colorSpace,Q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==us&&O!==ir&&(lt.getTransfer(O)===_t?(Q!==ui||K!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Ie,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=U}function zS(r,e){function t(n,i=ir){let s,o=lt.getTransfer(i);if(n===Li)return r.UNSIGNED_BYTE;if(n===yc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return r.BYTE;if(n===Kh)return r.SHORT;if(n===co)return r.UNSIGNED_SHORT;if(n===xc)return r.INT;if(n===Dr)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===uo)return r.HALF_FLOAT;if(n===jh)return r.ALPHA;if(n===ef)return r.RGB;if(n===ui)return r.RGBA;if(n===tf)return r.LUMINANCE;if(n===nf)return r.LUMINANCE_ALPHA;if(n===os)return r.DEPTH_COMPONENT;if(n===cs)return r.DEPTH_STENCIL;if(n===rf)return r.RED;if(n===Sc)return r.RED_INTEGER;if(n===sf)return r.RG;if(n===bc)return r.RG_INTEGER;if(n===Tc)return r.RGBA_INTEGER;if(n===ba||n===Ta||n===wa||n===Ea)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Ec||n===Ac||n===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Pc||n===Ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rc||n===Pc)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ic)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dc||n===Lc||n===Uc||n===Fc||n===Nc||n===Oc||n===Bc||n===kc||n===zc||n===Vc||n===Hc||n===Gc||n===Wc||n===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===qc||n===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Aa)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===of||n===Zc||n===$c||n===Jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var VS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HS=`
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

}`,Af=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Jn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new On({vertexShader:VS,fragmentShader:HS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cf=class extends ji{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null,g=new Af,m=t.getContextAttributes(),p=null,b=null,S=[],x=[],C=new ht,R=null,E=new Fn;E.viewport=new Ot;let P=new Fn;P.viewport=new Ot;let M=[E,P],v=new lc,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=S[J];return oe===void 0&&(oe=new ao,S[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=S[J];return oe===void 0&&(oe=new ao,S[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=S[J];return oe===void 0&&(oe=new ao,S[J]=oe),oe.getHandSpace()};function k(J){let oe=x.indexOf(J.inputSource);if(oe===-1)return;let _e=S[oe];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||o),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",$);for(let J=0;J<S.length;J++){let oe=x[J];oe!==null&&(x[J]=null,S[J].disconnect(oe))}I=null,F=null,g.reset(),e.setRenderTarget(p),h=null,f=null,d=null,i=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ae=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?cs:os,ae=m.stencil?gs:Dr);let Oe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(Oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Ri(f.textureWidth,f.textureHeight,{format:ui,type:Li,depthTexture:new _a(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Ri(h.framebufferWidth,h.framebufferHeight,{format:ui,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(J){for(let oe=0;oe<J.removed.length;oe++){let _e=J.removed[oe],ae=x.indexOf(_e);ae>=0&&(x[ae]=null,S[ae].disconnect(_e))}for(let oe=0;oe<J.added.length;oe++){let _e=J.added[oe],ae=x.indexOf(_e);if(ae===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=x.length){x.push(_e),ae=Oe;break}else if(x[Oe]===null){x[Oe]=_e,ae=Oe;break}if(ae===-1)break}let Ae=S[ae];Ae&&Ae.connect(_e)}}let H=new Y,X=new Y;function G(J,oe,_e){H.setFromMatrixPosition(oe.matrixWorld),X.setFromMatrixPosition(_e.matrixWorld);let ae=H.distanceTo(X),Ae=oe.projectionMatrix.elements,Oe=_e.projectionMatrix.elements,Ie=Ae[14]/(Ae[10]-1),$e=Ae[14]/(Ae[10]+1),Xe=(Ae[9]+1)/Ae[5],z=(Ae[9]-1)/Ae[5],w=(Ae[8]-1)/Ae[0],ee=(Oe[8]+1)/Oe[0],ie=Ie*w,U=Ie*ee,ne=ae/(-w+ee),ve=ne*-w;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ve),J.translateZ(ne),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let ce=Ie+ne,A=$e+ne,y=ie-ve,O=U+(ae-ve),Q=Xe*$e/A*ce,K=z*$e/A*ce;J.projectionMatrix.makePerspective(y,O,Q,K,ce,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let oe=J.near,_e=J.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),v.near=P.near=E.near=oe,v.far=P.far=E.far=_e,(I!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,F=v.far),E.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,v.layers.mask=E.layers.mask|P.layers.mask;let ae=J.parent,Ae=v.cameras;re(v,ae);for(let Oe=0;Oe<Ae.length;Oe++)re(Ae[Oe],ae);Ae.length===2?G(v,E,P):v.projectionMatrix.copy(E.projectionMatrix),D(J,v,ae)};function D(J,oe,_e){_e===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ro*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let de=null;function Le(J,oe){if(u=oe.getViewerPose(c||o),_=oe,u!==null){let _e=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ae=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let Ie=0;Ie<_e.length;Ie++){let $e=_e[Ie],Xe=null;if(h!==null)Xe=h.getViewport($e);else{let w=d.getViewSubImage(f,$e);Xe=w.viewport,Ie===0&&(e.setRenderTargetTextures(b,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(b))}let z=M[Ie];z===void 0&&(z=new Fn,z.layers.enable(Ie),z.viewport=new Ot,M[Ie]=z),z.matrix.fromArray($e.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray($e.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ie===0&&(v.matrix.copy(z.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(z)}let Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){let Ie=d.getDepthInformation(_e[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,i.renderState)}}for(let _e=0;_e<S.length;_e++){let ae=x[_e],Ae=S[_e];ae!==null&&Ae!==void 0&&Ae.update(ae,oe,c||o)}de&&de(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}let Ze=new fg;Ze.setAnimationLoop(Le),this.setAnimationLoop=function(J){de=J},this.dispose=function(){}}},xs=new Pi,GS=new zt;function WS(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,xs.copy(x),xs.x*=-1,xs.y*=-1,xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(GS.makeRotationFromEuler(xs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function XS(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let x=S.program;n.uniformBlockBinding(b,x)}function c(b,S){let x=i[b.id];x===void 0&&(_(b),x=u(b),i[b.id]=x,b.addEventListener("dispose",m));let C=S.program;n.updateUBOMapping(b,C);let R=e.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function u(b){let S=d();b.__bindingPointIndex=S;let x=r.createBuffer(),C=b.__size,R=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let S=i[b.id],x=b.uniforms,C=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let R=0,E=x.length;R<E;R++){let P=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,v=P.length;M<v;M++){let I=P[M];if(h(I,R,M,C)===!0){let F=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],V=0;for(let $=0;$<k.length;$++){let H=k[$],X=g(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,F+V,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,V),V+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(b,S,x,C){let R=b.value,E=S+"_"+x;if(C[E]===void 0)return typeof R=="number"||typeof R=="boolean"?C[E]=R:C[E]=R.clone(),!0;{let P=C[E];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return C[E]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(b){let S=b.uniforms,x=0,C=16;for(let E=0,P=S.length;E<P;E++){let M=Array.isArray(S[E])?S[E]:[S[E]];for(let v=0,I=M.length;v<I;v++){let F=M[v],k=Array.isArray(F.value)?F.value:[F.value];for(let V=0,$=k.length;V<$;V++){let H=k[V],X=g(H),G=x%C,re=G%X.boundary,D=G+re;x+=re,D!==0&&C-D<X.storage&&(x+=C-D),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=X.storage}}}let R=x%C;return R>0&&(x+=C-R),b.__size=x,b.__cache={},this}function g(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(let b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var tu=class{constructor(e={}){let{canvas:t=Nm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=nr,this.toneMappingExposure=1;let x=this,C=!1,R=0,E=0,P=null,M=-1,v=null,I=new Ot,F=new Ot,k=null,V=new rt(0),$=0,H=t.width,X=t.height,G=1,re=null,D=null,de=new Ot(0,0,H,X),Le=new Ot(0,0,H,X),Ze=!1,J=new ma,oe=!1,_e=!1;this.transmissionResolutionScale=1;let ae=new zt,Ae=new zt,Oe=new Y,Ie=new Ot,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function z(){return P===null?G:1}let w=n;function ee(T,B){return t.getContext(T,B)}try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"174"}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",xe,!1),w===null){let B="webgl2";if(w=ee(B,T),w===null)throw ee(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,U,ne,ve,ce,A,y,O,Q,K,j,fe,ue,me,Ge,le,he,Ne,Fe,Te,Je,ze,at,L;function ge(){ie=new cM(w),ie.init(),ze=new zS(w,ie),U=new nM(w,ie,e,ze),ne=new BS(w,ie),U.reverseDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),ve=new fM(w),ce=new wS,A=new kS(w,ie,ne,ce,U,ze,ve),y=new rM(x),O=new lM(x),Q=new vv(w),at=new eM(w,Q),K=new uM(w,Q,ve,at),j=new pM(w,K,Q,ve),Fe=new dM(w,U,A),le=new iM(ce),fe=new TS(x,y,O,ie,U,at,le),ue=new WS(x,ce),me=new AS,Ge=new LS(ie),Ne=new jy(x,y,O,ne,j,h,l),he=new NS(x,j,U),L=new XS(w,ve,U,ne),Te=new tM(w,ie,ve),Je=new hM(w,ie,ve),ve.programs=fe.programs,x.capabilities=U,x.extensions=ie,x.properties=ce,x.renderLists=me,x.shadowMap=he,x.state=ne,x.info=ve}ge();let Z=new Cf(x,w);this.xr=Z,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(H,X,!1))},this.getSize=function(T){return T.set(H,X)},this.setSize=function(T,B,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,X=B,t.width=Math.floor(T*G),t.height=Math.floor(B*G),q===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(H*G,X*G).floor()},this.setDrawingBufferSize=function(T,B,q){H=T,X=B,G=q,t.width=Math.floor(T*q),t.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(de)},this.setViewport=function(T,B,q,W){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,B,q,W),ne.viewport(I.copy(de).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,B,q,W){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,B,q,W),ne.scissor(F.copy(Le).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){ne.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){re=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,q=!0){let W=0;if(T){let N=!1;if(P!==null){let se=P.texture.format;N=se===Tc||se===bc||se===Sc}if(N){let se=P.texture.type,Me=se===Li||se===Dr||se===co||se===gs||se===yc||se===Mc,Ee=Ne.getClearColor(),we=Ne.getClearAlpha(),Ue=Ee.r,ke=Ee.g,De=Ee.b;Me?(_[0]=Ue,_[1]=ke,_[2]=De,_[3]=we,w.clearBufferuiv(w.COLOR,0,_)):(g[0]=Ue,g[1]=ke,g[2]=De,g[3]=we,w.clearBufferiv(w.COLOR,0,g))}else W|=w.COLOR_BUFFER_BIT}B&&(W|=w.DEPTH_BUFFER_BIT),q&&(W|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ne.dispose(),me.dispose(),Ge.dispose(),ce.dispose(),y.dispose(),O.dispose(),j.dispose(),at.dispose(),L.dispose(),fe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ye),Z.removeEventListener("sessionend",We),Pe.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let T=ve.autoReset,B=he.enabled,q=he.autoUpdate,W=he.needsUpdate,N=he.type;ge(),ve.autoReset=T,he.enabled=B,he.autoUpdate=q,he.needsUpdate=W,he.type=N}function xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ve(T){let B=T.target;B.removeEventListener("dispose",Ve),ct(B)}function ct(T){It(T),ce.remove(T)}function It(T){let B=ce.get(T).programs;B!==void 0&&(B.forEach(function(q){fe.releaseProgram(q)}),T.isShaderMaterial&&fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,W,N,se){B===null&&(B=$e);let Me=N.isMesh&&N.matrixWorld.determinant()<0,Ee=Bn(T,B,q,W,N);ne.setMaterial(W,Me);let we=q.index,Ue=1;if(W.wireframe===!0){if(we=K.getWireframeAttribute(q),we===void 0)return;Ue=2}let ke=q.drawRange,De=q.attributes.position,qe=ke.start*Ue,dt=(ke.start+ke.count)*Ue;se!==null&&(qe=Math.max(qe,se.start*Ue),dt=Math.min(dt,(se.start+se.count)*Ue)),we!==null?(qe=Math.max(qe,0),dt=Math.min(dt,we.count)):De!=null&&(qe=Math.max(qe,0),dt=Math.min(dt,De.count));let Vt=dt-qe;if(Vt<0||Vt===1/0)return;at.setup(N,W,Ee,q,we);let Dt,ut=Te;if(we!==null&&(Dt=Q.get(we),ut=Je,ut.setIndex(Dt)),N.isMesh)W.wireframe===!0?(ne.setLineWidth(W.wireframeLinewidth*z()),ut.setMode(w.LINES)):ut.setMode(w.TRIANGLES);else if(N.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),ne.setLineWidth(Be*z()),N.isLineSegments?ut.setMode(w.LINES):N.isLineLoop?ut.setMode(w.LINE_LOOP):ut.setMode(w.LINE_STRIP)}else N.isPoints?ut.setMode(w.POINTS):N.isSprite&&ut.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ut.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Be=N._multiDrawStarts,tn=N._multiDrawCounts,pt=N._multiDrawCount,hi=we?Q.get(we).bytesPerElement:1,Ss=ce.get(W).currentProgram.getUniforms();for(let kn=0;kn<pt;kn++)Ss.setValue(w,"_gl_DrawID",kn),ut.render(Be[kn]/hi,tn[kn])}else if(N.isInstancedMesh)ut.renderInstances(qe,Vt,N.count);else if(q.isInstancedBufferGeometry){let Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,tn=Math.min(q.instanceCount,Be);ut.renderInstances(qe,Vt,tn)}else ut.render(qe,Vt)};function be(T,B,q){T.transparent===!0&&T.side===Di&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,xt(T,B,q),T.side=Qi,T.needsUpdate=!0,xt(T,B,q),T.side=Di):xt(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),p=Ge.get(q),p.init(B),S.push(p),q.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==q&&T.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let W=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let se=N.material;if(se)if(Array.isArray(se))for(let Me=0;Me<se.length;Me++){let Ee=se[Me];be(Ee,q,N),W.add(Ee)}else be(se,q,N),W.add(se)}),p=S.pop(),W},this.compileAsync=function(T,B,q=null){let W=this.compile(T,B,q);return new Promise(N=>{function se(){if(W.forEach(function(Me){ce.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){N(T);return}setTimeout(se,10)}ie.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Re=null;function Ke(T){Re&&Re(T)}function ye(){Pe.stop()}function We(){Pe.start()}let Pe=new fg;Pe.setAnimationLoop(Ke),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(T){Re=T,Z.setAnimationLoop(T),T===null?Pe.stop():Pe.start()},Z.addEventListener("sessionstart",ye),Z.addEventListener("sessionend",We),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,P),p=Ge.get(T,S.length),p.init(B),S.push(p),Ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(Ae),_e=this.localClippingEnabled,oe=le.init(this.clippingPlanes,_e),m=me.get(T,b.length),m.init(),b.push(m),Z.enabled===!0&&Z.isPresenting===!0){let se=x.xr.getDepthSensingMesh();se!==null&&He(se,B,-1/0,x.sortObjects)}He(T,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(re,D),Xe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Xe&&Ne.addToRenderList(m,T),this.info.render.frame++,oe===!0&&le.beginShadows();let q=p.state.shadowsArray;he.render(q,T,B),oe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,N=m.transmissive;if(p.setupLights(),B.isArrayCamera){let se=B.cameras;if(N.length>0)for(let Me=0,Ee=se.length;Me<Ee;Me++){let we=se[Me];it(W,N,T,we)}Xe&&Ne.render(T);for(let Me=0,Ee=se.length;Me<Ee;Me++){let we=se[Me];Bt(m,T,we,we.viewport)}}else N.length>0&&it(W,N,T,B),Xe&&Ne.render(T),Bt(m,T,B);P!==null&&E===0&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,B),at.resetDefaultState(),M=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],oe===!0&&le.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function He(T,B,q,W){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){W&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);let Me=j.update(T),Ee=T.material;Ee.visible&&m.push(T,Me,Ee,q,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){let Me=j.update(T),Ee=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ie.copy(Me.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ee)){let we=Me.groups;for(let Ue=0,ke=we.length;Ue<ke;Ue++){let De=we[Ue],qe=Ee[De.materialIndex];qe&&qe.visible&&m.push(T,Me,qe,q,Ie.z,De)}}else Ee.visible&&m.push(T,Me,Ee,q,Ie.z,null)}}let se=T.children;for(let Me=0,Ee=se.length;Me<Ee;Me++)He(se[Me],B,q,W)}function Bt(T,B,q,W){let N=T.opaque,se=T.transmissive,Me=T.transparent;p.setupLightsView(q),oe===!0&&le.setGlobalState(x.clippingPlanes,q),W&&ne.viewport(I.copy(W)),N.length>0&&St(N,B,q),se.length>0&&St(se,B,q),Me.length>0&&St(Me,B,q),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function it(T,B,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ri(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?uo:Li,minFilter:Ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let se=p.state.transmissionRenderTarget[W.id],Me=W.viewport||I;se.setSize(Me.z*x.transmissionResolutionScale,Me.w*x.transmissionResolutionScale);let Ee=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(V),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&Ne.render(q);let we=x.toneMapping;x.toneMapping=nr;let Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),oe===!0&&le.setGlobalState(x.clippingPlanes,W),St(T,q,W),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let De=0,qe=B.length;De<qe;De++){let dt=B[De],Vt=dt.object,Dt=dt.geometry,ut=dt.material,Be=dt.group;if(ut.side===Di&&Vt.layers.test(W.layers)){let tn=ut.side;ut.side=An,ut.needsUpdate=!0,Xt(Vt,q,W,Dt,ut,Be),ut.side=tn,ut.needsUpdate=!0,ke=!0}}ke===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}x.setRenderTarget(Ee),x.setClearColor(V,$),Ue!==void 0&&(W.viewport=Ue),x.toneMapping=we}function St(T,B,q){let W=B.isScene===!0?B.overrideMaterial:null;for(let N=0,se=T.length;N<se;N++){let Me=T[N],Ee=Me.object,we=Me.geometry,Ue=W===null?Me.material:W,ke=Me.group;Ee.layers.test(q.layers)&&Xt(Ee,B,q,we,Ue,ke)}}function Xt(T,B,q,W,N,se){T.onBeforeRender(x,B,q,W,N,se),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(x,B,q,W,T,se),N.transparent===!0&&N.side===Di&&N.forceSinglePass===!1?(N.side=An,N.needsUpdate=!0,x.renderBufferDirect(q,B,W,N,T,se),N.side=Qi,N.needsUpdate=!0,x.renderBufferDirect(q,B,W,N,T,se),N.side=Di):x.renderBufferDirect(q,B,W,N,T,se),T.onAfterRender(x,B,q,W,N,se)}function xt(T,B,q){B.isScene!==!0&&(B=$e);let W=ce.get(T),N=p.state.lights,se=p.state.shadowsArray,Me=N.state.version,Ee=fe.getParameters(T,N.state,se,B,q),we=fe.getProgramCacheKey(Ee),Ue=W.programs;W.environment=T.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(T.isMeshStandardMaterial?O:y).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",Ve),Ue=new Map,W.programs=Ue);let ke=Ue.get(we);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===Me)return ft(T,Ee),ke}else Ee.uniforms=fe.getUniforms(T),T.onBeforeCompile(Ee,x),ke=fe.acquireProgram(Ee,we),Ue.set(we,ke),W.uniforms=Ee.uniforms;let De=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=le.uniform),ft(T,Ee),W.needsLights=gn(T),W.lightsStateVersion=Me,W.needsLights&&(De.ambientLightColor.value=N.state.ambient,De.lightProbe.value=N.state.probe,De.directionalLights.value=N.state.directional,De.directionalLightShadows.value=N.state.directionalShadow,De.spotLights.value=N.state.spot,De.spotLightShadows.value=N.state.spotShadow,De.rectAreaLights.value=N.state.rectArea,De.ltc_1.value=N.state.rectAreaLTC1,De.ltc_2.value=N.state.rectAreaLTC2,De.pointLights.value=N.state.point,De.pointLightShadows.value=N.state.pointShadow,De.hemisphereLights.value=N.state.hemi,De.directionalShadowMap.value=N.state.directionalShadowMap,De.directionalShadowMatrix.value=N.state.directionalShadowMatrix,De.spotShadowMap.value=N.state.spotShadowMap,De.spotLightMatrix.value=N.state.spotLightMatrix,De.spotLightMap.value=N.state.spotLightMap,De.pointShadowMap.value=N.state.pointShadowMap,De.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function yt(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=mo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ft(T,B){let q=ce.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Bn(T,B,q,W,N){B.isScene!==!0&&(B=$e),A.resetTextureUnits();let se=B.fog,Me=W.isMeshStandardMaterial?B.environment:null,Ee=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:us,we=(W.isMeshStandardMaterial?O:y).get(W.envMap||Me),Ue=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!q.morphAttributes.position,qe=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color,Vt=nr;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Vt=x.toneMapping);let Dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=Dt!==void 0?Dt.length:0,Be=ce.get(W),tn=p.state.lights;if(oe===!0&&(_e===!0||T!==v)){let _n=T===v&&W.id===M;le.setState(W,T,_n)}let pt=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==tn.state.version||Be.outputColorSpace!==Ee||N.isBatchedMesh&&Be.batching===!1||!N.isBatchedMesh&&Be.batching===!0||N.isBatchedMesh&&Be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Be.instancing===!1||!N.isInstancedMesh&&Be.instancing===!0||N.isSkinnedMesh&&Be.skinning===!1||!N.isSkinnedMesh&&Be.skinning===!0||N.isInstancedMesh&&Be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Be.instancingMorph===!1&&N.morphTexture!==null||Be.envMap!==we||W.fog===!0&&Be.fog!==se||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==le.numPlanes||Be.numIntersection!==le.numIntersection)||Be.vertexAlphas!==Ue||Be.vertexTangents!==ke||Be.morphTargets!==De||Be.morphNormals!==qe||Be.morphColors!==dt||Be.toneMapping!==Vt||Be.morphTargetsCount!==ut)&&(pt=!0):(pt=!0,Be.__version=W.version);let hi=Be.currentProgram;pt===!0&&(hi=xt(W,B,N));let Ss=!1,kn=!1,_o=!1,Et=hi.getUniforms(),jn=Be.uniforms;if(ne.useProgram(hi.program)&&(Ss=!0,kn=!0,_o=!0),W.id!==M&&(M=W.id,kn=!0),Ss||v!==T){ne.buffers.depth.getReversed()?(ae.copy(T.projectionMatrix),Bm(ae),km(ae),Et.setValue(w,"projectionMatrix",ae)):Et.setValue(w,"projectionMatrix",T.projectionMatrix),Et.setValue(w,"viewMatrix",T.matrixWorldInverse);let Cn=Et.map.cameraPosition;Cn!==void 0&&Cn.setValue(w,Oe.setFromMatrixPosition(T.matrixWorld)),U.logarithmicDepthBuffer&&Et.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,kn=!0,_o=!0)}if(N.isSkinnedMesh){Et.setOptional(w,N,"bindMatrix"),Et.setOptional(w,N,"bindMatrixInverse");let _n=N.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Et.setValue(w,"boneTexture",_n.boneTexture,A))}N.isBatchedMesh&&(Et.setOptional(w,N,"batchingTexture"),Et.setValue(w,"batchingTexture",N._matricesTexture,A),Et.setOptional(w,N,"batchingIdTexture"),Et.setValue(w,"batchingIdTexture",N._indirectTexture,A),Et.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&Et.setValue(w,"batchingColorTexture",N._colorsTexture,A));let ei=q.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&Fe.update(N,q,hi),(kn||Be.receiveShadow!==N.receiveShadow)&&(Be.receiveShadow=N.receiveShadow,Et.setValue(w,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(jn.envMap.value=we,jn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(jn.envMapIntensity.value=B.environmentIntensity),kn&&(Et.setValue(w,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&bt(jn,_o),se&&W.fog===!0&&ue.refreshFogUniforms(jn,se),ue.refreshMaterialUniforms(jn,W,G,X,p.state.transmissionRenderTarget[T.id]),mo.upload(w,yt(Be),jn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(mo.upload(w,yt(Be),jn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(w,"center",N.center),Et.setValue(w,"modelViewMatrix",N.modelViewMatrix),Et.setValue(w,"normalMatrix",N.normalMatrix),Et.setValue(w,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let _n=W.uniformsGroups;for(let Cn=0,iu=_n.length;Cn<iu;Cn++){let Ur=_n[Cn];L.update(Ur,hi),L.bind(Ur,hi)}}return hi}function bt(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function gn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,B,q){ce.get(T.texture).__webglTexture=B,ce.get(T.depthTexture).__webglTexture=q;let W=ce.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){let q=ce.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};let Qn=w.createFramebuffer();this.setRenderTarget=function(T,B=0,q=0){P=T,R=B,E=q;let W=!0,N=null,se=!1,Me=!1;if(T){let we=ce.get(T);if(we.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(w.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(we.__hasExternalTextures)A.rebindTextures(T,ce.get(T.texture).__webglTexture,ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let De=T.depthTexture;if(we.__boundDepthTexture!==De){if(De!==null&&ce.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}let Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Me=!0);let ke=ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?N=ke[B][q]:N=ke[B],se=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?N=ce.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[q]:N=ke,I.copy(T.viewport),F.copy(T.scissor),k=T.scissorTest}else I.copy(de).multiplyScalar(G).floor(),F.copy(Le).multiplyScalar(G).floor(),k=Ze;if(q!==0&&(N=Qn),ne.bindFramebuffer(w.FRAMEBUFFER,N)&&W&&ne.drawBuffers(T,N),ne.viewport(I),ne.scissor(F),ne.setScissorTest(k),se){let we=ce.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,q)}else if(Me){let we=ce.get(T.texture),Ue=B;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,we.__webglTexture,q,Ue)}else if(T!==null&&q!==0){let we=ce.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,we.__webglTexture,q)}M=-1},this.readRenderTargetPixels=function(T,B,q,W,N,se,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){ne.bindFramebuffer(w.FRAMEBUFFER,Ee);try{let we=T.texture,Ue=we.format,ke=we.type;if(!U.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-W&&q>=0&&q<=T.height-N&&w.readPixels(B,q,W,N,ze.convert(Ue),ze.convert(ke),se)}finally{let we=P!==null?ce.get(P).__webglFramebuffer:null;ne.bindFramebuffer(w.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,W,N,se,Me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){let we=T.texture,Ue=we.format,ke=we.type;if(!U.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-W&&q>=0&&q<=T.height-N){ne.bindFramebuffer(w.FRAMEBUFFER,Ee);let De=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,De),w.bufferData(w.PIXEL_PACK_BUFFER,se.byteLength,w.STREAM_READ),w.readPixels(B,q,W,N,ze.convert(Ue),ze.convert(ke),0);let qe=P!==null?ce.get(P).__webglFramebuffer:null;ne.bindFramebuffer(w.FRAMEBUFFER,qe);let dt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Om(w,dt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,De),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,se),w.deleteBuffer(De),w.deleteSync(dt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,q=0){T.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);let W=Math.pow(2,-q),N=Math.floor(T.image.width*W),se=Math.floor(T.image.height*W),Me=B!==null?B.x:0,Ee=B!==null?B.y:0;A.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,q,0,0,Me,Ee,N,se),ne.unbindTexture()};let qt=w.createFramebuffer(),Yt=w.createFramebuffer();this.copyTextureToTexture=function(T,B,q=null,W=null,N=0,se=null){T.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],B=arguments[2],se=arguments[3]||0,q=null),se===null&&(N!==0?(Lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=N,N=0):se=0);let Me,Ee,we,Ue,ke,De,qe,dt,Vt,Dt=T.isCompressedTexture?T.mipmaps[se]:T.image;if(q!==null)Me=q.max.x-q.min.x,Ee=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,ke=q.min.y,De=q.isBox3?q.min.z:0;else{let ei=Math.pow(2,-N);Me=Math.floor(Dt.width*ei),Ee=Math.floor(Dt.height*ei),T.isDataArrayTexture?we=Dt.depth:T.isData3DTexture?we=Math.floor(Dt.depth*ei):we=1,Ue=0,ke=0,De=0}W!==null?(qe=W.x,dt=W.y,Vt=W.z):(qe=0,dt=0,Vt=0);let ut=ze.convert(B.format),Be=ze.convert(B.type),tn;B.isData3DTexture?(A.setTexture3D(B,0),tn=w.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),tn=w.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),tn=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment);let pt=w.getParameter(w.UNPACK_ROW_LENGTH),hi=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ss=w.getParameter(w.UNPACK_SKIP_PIXELS),kn=w.getParameter(w.UNPACK_SKIP_ROWS),_o=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Dt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Dt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ue),w.pixelStorei(w.UNPACK_SKIP_ROWS,ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,De);let Et=T.isDataArrayTexture||T.isData3DTexture,jn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let ei=ce.get(T),_n=ce.get(B),Cn=ce.get(ei.__renderTarget),iu=ce.get(_n.__renderTarget);ne.bindFramebuffer(w.READ_FRAMEBUFFER,Cn.__webglFramebuffer),ne.bindFramebuffer(w.DRAW_FRAMEBUFFER,iu.__webglFramebuffer);for(let Ur=0;Ur<we;Ur++)Et&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ce.get(T).__webglTexture,N,De+Ur),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ce.get(B).__webglTexture,se,Vt+Ur)),w.blitFramebuffer(Ue,ke,Me,Ee,qe,dt,Me,Ee,w.DEPTH_BUFFER_BIT,w.NEAREST);ne.bindFramebuffer(w.READ_FRAMEBUFFER,null),ne.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||ce.has(T)){let ei=ce.get(T),_n=ce.get(B);ne.bindFramebuffer(w.READ_FRAMEBUFFER,qt),ne.bindFramebuffer(w.DRAW_FRAMEBUFFER,Yt);for(let Cn=0;Cn<we;Cn++)Et?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ei.__webglTexture,N,De+Cn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ei.__webglTexture,N),jn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_n.__webglTexture,se,Vt+Cn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,_n.__webglTexture,se),N!==0?w.blitFramebuffer(Ue,ke,Me,Ee,qe,dt,Me,Ee,w.COLOR_BUFFER_BIT,w.NEAREST):jn?w.copyTexSubImage3D(tn,se,qe,dt,Vt+Cn,Ue,ke,Me,Ee):w.copyTexSubImage2D(tn,se,qe,dt,Ue,ke,Me,Ee);ne.bindFramebuffer(w.READ_FRAMEBUFFER,null),ne.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else jn?T.isDataTexture||T.isData3DTexture?w.texSubImage3D(tn,se,qe,dt,Vt,Me,Ee,we,ut,Be,Dt.data):B.isCompressedArrayTexture?w.compressedTexSubImage3D(tn,se,qe,dt,Vt,Me,Ee,we,ut,Dt.data):w.texSubImage3D(tn,se,qe,dt,Vt,Me,Ee,we,ut,Be,Dt):T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,se,qe,dt,Me,Ee,ut,Be,Dt.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,se,qe,dt,Dt.width,Dt.height,ut,Dt.data):w.texSubImage2D(w.TEXTURE_2D,se,qe,dt,Me,Ee,ut,Be,Dt);w.pixelStorei(w.UNPACK_ROW_LENGTH,pt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,hi),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ss),w.pixelStorei(w.UNPACK_SKIP_ROWS,kn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,_o),se===0&&B.generateMipmaps&&w.generateMipmap(tn),ne.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q=null,W=null,N=0){return T.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,W=arguments[1]||null,T=arguments[2],B=arguments[3],N=arguments[4]||0),Lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,q,W,N)},this.initRenderTarget=function(T){ce.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ne.unbindTexture()},this.resetState=function(){R=0,E=0,P=null,ne.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var YS=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,ZS=`
precision highp float;

uniform float uTime;
uniform float uReveal;
uniform float uScroll;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerVelocity;
uniform float uIsMobile;

varying vec2 vUv;

// 2D Simplex Noise Implementation
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,
                      0.366025403784439,
                     -0.577350269189626,
                      0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// 5-Octave Fractional Brownian Motion with rotation
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
  for (int i = 0; i < 5; i++) {
    v += a * snoise(p);
    p = rot * p * 2.02;
    a *= 0.49;
  }
  return v;
}

// Multi-scale iterated domain warping: produces organic, living fluid flows
vec3 fluidField(vec2 p, vec2 swirl, float t) {
  // Layer 1: Primary advection field q with viscous swirl
  vec2 q = vec2(
    fbm(p * 1.35 + vec2(0.0, -t * 0.07) + swirl * 0.5),
    fbm(p * 1.35 + vec2(5.2, 1.3) + vec2(t * 0.06, t * 0.04) + swirl * 0.5)
  );

  // Layer 2: Secondary warped advection field r
  vec2 r = vec2(
    fbm(p * 1.75 + 2.7 * q + vec2(1.7, 9.2) + vec2(t * 0.09, -t * 0.06)),
    fbm(p * 1.75 + 2.7 * q + vec2(8.3, 2.8) + vec2(-t * 0.07, t * 0.08))
  );

  // Layer 3: Tertiary height & density field
  float h = fbm(p * 2.1 + 3.1 * r + vec2(0.0, t * 0.05));
  return vec3(h, q.x, r.y);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;

  // Adaptive composition: Desktop centers around (0.70, 0.50), Mobile centers around (0.50, 0.62)
  vec2 focalCenter = mix(vec2(0.70, 0.50), vec2(0.50, 0.30), uIsMobile);
  vec2 p = (uv - focalCenter) * vec2(aspect, 1.0);

  // Cursor swirl in coordinate space
  vec2 pointerP = (uPointer - focalCenter) * vec2(aspect, 1.0);
  vec2 pointerDelta = p - pointerP;
  float pointerDist = length(pointerDelta);
  float pointerInfluence = smoothstep(0.70, 0.0, pointerDist);
  vec2 swirl = vec2(-pointerDelta.y, pointerDelta.x) * (pointerInfluence * (uPointerVelocity * 0.75 + 0.12) * 0.38);

  float t = uTime;

  // Compute central fluid heightfield
  vec3 field = fluidField(p, swirl, t);
  float f = field.x;
  float qx = field.y;
  float ry = field.z;

  // Approximate normal via finite differences for specular & fresnel
  float eps = 0.008;
  float fx = fluidField(p + vec2(eps, 0.0), swirl, t).x;
  float fy = fluidField(p + vec2(0.0, eps), swirl, t).x;
  vec3 normal = normalize(vec3(-(fx - f) / eps * 0.32, -(fy - f) / eps * 0.32, 1.0));

  // Fresnel & Specular Sheen (expensive liquid silk sheen)
  vec3 viewDir = vec3(0.0, 0.0, 1.0);
  float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
  vec3 lightDir = normalize(vec3(0.35, 0.55, 0.75));
  vec3 halfV = normalize(lightDir + viewDir);
  float specular = pow(max(dot(normal, halfV), 0.0), 22.0);

  // --- Pallindrome Luxury Studio Palette ---
  vec3 cObsidian = vec3(0.020, 0.020, 0.027); // #050507 base
  vec3 cDeepPurple = vec3(0.18, 0.03, 0.29);  // #2e084a
  vec3 cRoyalViolet = vec3(0.32, 0.06, 0.50); // #520f80
  vec3 cMagenta = vec3(0.82, 0.12, 0.72);     // #d11fb8
  vec3 cCyan = vec3(0.00, 0.90, 1.00);        // #00e6ff
  vec3 cBlue = vec3(0.10, 0.28, 0.78);        // #1a47c7
  vec3 cGold = vec3(0.96, 0.65, 0.06);        // #f5a610 (brand period accent)

  // Fluid density normalization with non-linear luxury thresholding
  float fNorm = clamp((f + 0.48) * 0.95, 0.0, 1.0);
  float qNorm = clamp(qx + 0.5, 0.0, 1.0);
  float rNorm = clamp(ry + 0.5, 0.0, 1.0);

  // 1. Base dark ether: transition from pure obsidian into deep royal purple
  vec3 ether = mix(cObsidian, cDeepPurple, smoothstep(0.18, 0.42, fNorm));

  // 2. Midtones: rich royal violet & deep blue eddy currents
  ether = mix(ether, cRoyalViolet, smoothstep(0.36, 0.62, fNorm) * 0.88);
  ether = mix(ether, cBlue, smoothstep(0.44, 0.68, rNorm) * 0.70);

  // 3. Vibrant highlights: magenta folds & electric cyan ridges
  float magentaWeight = smoothstep(0.46, 0.76, fNorm * 0.65 + qNorm * 0.45);
  ether = mix(ether, cMagenta, magentaWeight * 0.85);

  float cyanWeight = smoothstep(0.68, 0.94, fNorm) * (0.70 + 0.30 * sin(t * 0.45 + ry * 3.0));
  ether = mix(ether, cCyan, cyanWeight * 0.90);

  // 4. Subtle gold warmth on highest intensity convergence points
  float goldCrest = smoothstep(0.82, 0.98, fNorm * (0.6 + 0.4 * specular));
  ether += cGold * (goldCrest * 0.28);

  // 5. Specular sheen & Fresnel highlights (expensive liquid glass / silk luster)
  ether += cCyan * (specular * 0.36);
  ether += cMagenta * (specular * 0.18);
  ether += mix(cRoyalViolet, cCyan, fresnel) * (fresnel * 0.32);

  // --- Secondary Effect: Subtle Plasma Waves (10-20% accent) ---
  vec2 pwP = p * 1.50 + vec2(qx, ry) * 0.70;
  float wave1 = sin(pwP.x * 3.8 + pwP.y * 2.2 + t * 0.65 + qx * 1.3);
  float wave2 = cos(pwP.x * 2.8 - pwP.y * 3.2 - t * 0.50 + ry * 1.3);
  float wave3 = sin((pwP.x + pwP.y) * 4.2 + t * 0.80 + f * 2.2);

  // Ultra-fine harmonic filaments (interference)
  float filament = 0.010 / (abs(sin(wave1 * 1.30 + wave2 * 1.10) * 1.60 + wave3 * 0.50) + 0.018);
  filament = clamp(filament, 0.0, 1.0);

  // Plasma wave accent restricted to fluid body on the right side
  float plasmaBody = smoothstep(0.28, 0.72, fNorm) * smoothstep(0.35, 0.70, uv.x);
  vec3 plasmaColor = mix(cCyan, cMagenta, sin(t * 0.50 + pwP.y * 2.0) * 0.5 + 0.5);
  ether += plasmaColor * (filament * plasmaBody * 0.16 * (0.80 + 0.20 * sin(t * 1.0 + wave1)));

  // --- Spatial Composition & Negative Space ---
  // Core center: desktop (0.70, 0.50), mobile (0.50, 0.62)
  float rightFocus = mix(smoothstep(0.34, 0.62, uv.x), 1.0, uIsMobile);

  // Organic boundary modulated by subtle low-frequency noise
  float organicEdge = snoise(p * 0.75 + vec2(t * 0.04, -t * 0.03)) * 0.12;
  float distCenter = length((uv - focalCenter) * mix(vec2(1.15, 1.45), vec2(1.10, 1.25), uIsMobile)) + organicEdge;
  float spatialFalloff = smoothstep(1.15, 0.25, distCenter);

  // Top text protection on mobile (uv.y > 0.55 is where headline sits on mobile)
  float topSafeguard = mix(1.0, smoothstep(0.65, 0.38, uv.y), uIsMobile);

  // Clean darkness for left headline on desktop and top headline on mobile
  float spatialMask = mix(0.015, 1.0, rightFocus * spatialFalloff * topSafeguard);

  // Screen border feathering so there are zero hard cuts
  float edgeFeather = smoothstep(0.0, 0.06, uv.y) * smoothstep(1.0, 0.94, uv.y);
  edgeFeather *= smoothstep(1.0, 0.96, uv.x);

  // Scroll exit displacement and fade
  float scrollFade = clamp(1.0 - uScroll * 1.25, 0.0, 1.0);

  vec3 finalColor = ether * (spatialMask * edgeFeather * uReveal * scrollFade);

  gl_FragColor = vec4(finalColor, 1.0);
}
`,$S=`
uniform float uTime;
uniform float uReveal;
uniform float uScroll;
uniform vec2 uPointer;
uniform float uPixelRatio;
uniform float uIsMobile;

attribute vec3 aColor;
attribute float aSize;
attribute float aPhase;
attribute vec3 aVelocity;
attribute float aKind;   // 0.0 = tiny dot, 1.0 = soft micro-orb, 2.0 = liquid droplet
attribute float aDepth;  // 0.25 (far) .. 1.0 (near)
attribute float aAngle;

varying vec3 vColor;
varying float vAlpha;
varying float vKind;
varying float vAngle;
varying float vPhase;

void main() {
  vColor = aColor;
  vKind = aKind;
  vAngle = aAngle + sin(uTime * 0.14 + aPhase) * 0.25;
  vPhase = aPhase;

  vec3 pos = position;

  // On mobile, redistribute upper-left & bridge particles across the upper dark canvas
  if (uIsMobile > 0.5 && aDepth > 0.0) {
    if (pos.x < -0.15 && pos.y < 0.35 && pos.y > -0.35) {
      pos.y += 0.58;
    }
  }

  // Weightless multi-frequency drift (avoid obvious linear loops)
  float t = uTime;
  float driftScale = mix(0.035, 0.068, aDepth);
  pos.x += sin(t * 0.16 + aPhase) * driftScale + cos(t * 0.09 + aPhase * 1.7) * (driftScale * 0.5);
  pos.y += cos(t * 0.13 + aPhase * 1.35) * driftScale + sin(t * 0.07 + aPhase * 2.1) * (driftScale * 0.45);
  pos.x += sin(aVelocity.x * t * 0.9 + aPhase) * 0.04;
  pos.y += cos(aVelocity.y * t * 0.9 + aPhase * 1.2) * 0.04;

  // Delicate depth-layered cursor parallax & slight repulsion near cursor
  vec2 pointerDelta = pos.xy - uPointer;
  float pDist = length(pointerDelta);
  float cursorPush = smoothstep(0.45, 0.0, pDist) * 0.035 * aDepth;
  pos.xy += normalize(pointerDelta + 1e-4) * cursorPush;
  pos.xy += uPointer * (0.028 * aDepth);

  // Smooth scroll exit
  pos.y -= uScroll * (0.28 + 0.18 * aDepth);

  // Keep the core directly behind "We build / beyond / ordinary." quiet on desktop
  float headlineQuiet = 1.0;
  if (uIsMobile < 0.5) {
    vec2 hDist = (pos.xy - vec2(-0.58, 0.08)) / vec2(0.30, 0.32);
    headlineQuiet = smoothstep(0.55, 1.35, length(hDist)) * 0.82 + 0.18;
  } else {
    vec2 mDist = (pos.xy - vec2(-0.08, -0.04)) / vec2(0.75, 0.28);
    headlineQuiet = smoothstep(0.55, 1.30, length(mDist)) * 0.85 + 0.15;
  }

  // Compensate on desktop left side for CSS .hero__vignette darkening (78% -> 0%)
  float vignetteComp = uIsMobile < 0.5
    ? mix(3.15, 1.0, smoothstep(-0.98, 0.36, pos.x))
    : 1.05;

  // Very gentle opacity breathing
  float pulse = 0.72 + 0.28 * sin(t * 0.48 + aPhase * 3.1415);
  float baseAlpha = aKind < 0.5 ? 0.65 : (aKind < 1.5 ? 0.46 : 0.72);
  vAlpha = pulse * baseAlpha * headlineQuiet * vignetteComp * uReveal * clamp(1.0 - uScroll * 1.4, 0.0, 1.0);

  gl_Position = vec4(pos, 1.0);
  gl_PointSize = aSize * uPixelRatio * (0.90 + 0.10 * pulse);
}
`,JS=`
precision highp float;

varying vec3 vColor;
varying float vAlpha;
varying float vKind;
varying float vAngle;
varying float vPhase;

void main() {
  vec2 coord = gl_PointCoord - vec2(0.5);

  if (vKind < 0.5) {
    // 0: Tiny glowing dot
    float dist = length(coord);
    if (dist > 0.5) discard;
    float glow = pow(smoothstep(0.5, 0.04, dist), 1.9);
    gl_FragColor = vec4(vColor * 1.25, glow * vAlpha);
  } else if (vKind < 1.5) {
    // 1: Soft blurred micro-orb (Gaussian-like radial mist)
    float dist = length(coord);
    if (dist > 0.5) discard;
    float radial = smoothstep(0.5, 0.0, dist);
    float orb = exp(-dist * dist * 16.0) * radial;
    gl_FragColor = vec4(vColor * 1.15, orb * vAlpha);
  } else {
    // 2: Liquid-like tiny droplet with subtle off-center specular crescent
    float ca = cos(vAngle);
    float sa = sin(vAngle);
    vec2 rot = vec2(coord.x * ca - coord.y * sa, coord.x * sa + coord.y * ca);
    // Subtle organic teardrop / fluid elongation
    rot.x *= 1.38;
    rot.y *= 0.92 + 0.18 * rot.x;

    float dist = length(rot);
    if (dist > 0.46) discard;

    float body = smoothstep(0.46, 0.16, dist);
    float rim = smoothstep(0.44, 0.24, dist) - smoothstep(0.24, 0.05, dist);
    // Specular liquid glint offset toward upper-right
    float glint = exp(-dot(rot - vec2(0.11, 0.11), rot - vec2(0.11, 0.11)) * 65.0);

    vec3 dropColor = mix(vColor * 0.95, vec3(0.85, 0.96, 1.0), glint * 0.72 + rim * 0.22);
    float alpha = (body * 0.78 + glint * 0.45) * vAlpha;
    gl_FragColor = vec4(dropColor, alpha);
  }
}
`;function KS(){let n=new Float32Array(501),i=new Float32Array(501),s=new Float32Array(167),o=new Float32Array(167),a=new Float32Array(501),l=new Float32Array(167),c=new Float32Array(167),u=new Float32Array(167),d=new rt(9109759),f=new rt(13705144),h=new rt(59135),_=new rt(1992447),g=new rt(16098832),m=C=>{let R=Math.random();return R<C?g:R<C+.3?h:R<C+.58?d:R<C+.82?f:_};for(let C=0;C<95;C++){let R=C*3;n[R]=(Math.random()-.5)*1.92,n[R+1]=(Math.random()-.5)*1.88,n[R+2]=(Math.random()-.5)*.4;let E=m(.05);i[R]=E.r,i[R+1]=E.g,i[R+2]=E.b,l[C]=Math.random()<.14?1:0,c[C]=.25+Math.random()*.55,s[C]=l[C]>.5?10+Math.random()*10:1.8+Math.random()*2.6,o[C]=Math.random()*Math.PI*2,u[C]=Math.random()*Math.PI*2,a[R]=(Math.random()-.5)*.04,a[R+1]=(Math.random()-.5)*.04,a[R+2]=0}for(let C=0;C<72;C++){let R=95+C,E=R*3,P=Math.random(),M=-.5,v=0;P<.28?(M=-.92+Math.random()*.72,v=.48+Math.random()*.3):P<.6?(M=-.92+Math.random()*.84,v=-.8+Math.random()*.44):P<.86?(M=-.3+Math.random()*.46,v=-.68+Math.random()*1.32):(M=-.96+Math.random()*.16,v=-.32+Math.random()*.72),n[E]=M,n[E+1]=v,n[E+2]=(Math.random()-.5)*.3;let I=m(.06);i[E]=I.r,i[E+1]=I.g,i[E+2]=I.b;let F=Math.random();F<.52?(l[R]=0,s[R]=2+Math.random()*2.8):F<.84?(l[R]=1,s[R]=14+Math.random()*18):(l[R]=2,s[R]=8.5+Math.random()*6.5),c[R]=.4+Math.random()*.6,o[R]=Math.random()*Math.PI*2,u[R]=Math.random()*Math.PI*2,a[E]=-.012-Math.random()*.025,a[E+1]=(Math.random()-.5)*.03,a[E+2]=0}let p=new vi;p.setAttribute("position",new Nt(n,3)),p.setAttribute("aColor",new Nt(i,3)),p.setAttribute("aSize",new Nt(s,1)),p.setAttribute("aPhase",new Nt(o,1)),p.setAttribute("aVelocity",new Nt(a,3)),p.setAttribute("aKind",new Nt(l,1)),p.setAttribute("aDepth",new Nt(c,1)),p.setAttribute("aAngle",new Nt(u,1));let b={uTime:{value:0},uReveal:{value:0},uScroll:{value:0},uPointer:{value:new ht(0,0)},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)},uIsMobile:{value:0}},S=new On({vertexShader:$S,fragmentShader:JS,uniforms:b,transparent:!0,blending:ya,depthWrite:!1});return{points:new ga(p,S),uniforms:b,dispose:()=>{p.dispose(),S.dispose()}}}function _g(r,e,t={}){let n=null;try{n=new tu({canvas:r,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1})}catch(H){return console.warn("[HeroVisual] WebGL context creation failed:",H),t.onFallback?.(),{setReveal:()=>{},setScrollProgress:()=>{},renderOnce:()=>{},dispose:()=>{}}}n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),n.setClearColor(328967,1);let i=new pa,s=new lo(-1,1,1,-1,0,10);s.position.z=1;let o=new fs(2,2),a={uTime:{value:0},uReveal:{value:0},uScroll:{value:0},uResolution:{value:new ht(1,1)},uPointer:{value:new ht(.7,.5)},uPointerVelocity:{value:0},uIsMobile:{value:0}},l=new On({vertexShader:YS,fragmentShader:ZS,uniforms:a,depthWrite:!1}),c=new Nn(o,l);i.add(c);let u=KS();i.add(u.points);let d=new xa,f=0,h=!1,_=!0,g=0,m=0,p=.7,b=.5,S=.7,x=.5,C=.7,R=.5,E=0,P=()=>{if(h||!n)return;let H=e.clientWidth||window.innerWidth,X=e.clientHeight||window.innerHeight;H<=0||X<=0||(n.setSize(H,X,!1),a.uResolution.value.set(H,X),a.uIsMobile.value=H<768?1:0,u.uniforms.uIsMobile.value=H<768?1:0,u.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio||1,2))},M=H=>{if(!n)return;S+=(p-S)*.055,x+=(b-x)*.055;let X=S-C,G=x-R,re=Math.sqrt(X*X+G*G)*20;E+=(re-E)*.07,C=S,R=x,a.uTime.value=H,a.uReveal.value=g,a.uScroll.value=m,a.uPointer.value.set(S,x),a.uPointerVelocity.value=Ca.clamp(E,0,1.5),u.uniforms.uTime.value=H,u.uniforms.uReveal.value=g,u.uniforms.uScroll.value=m,u.uniforms.uPointer.value.set((S-.5)*2,(x-.5)*2),n.render(i,s)},v=()=>{if(h||document.hidden||!_||t.reducedMotion){f=0;return}M(d.getElapsedTime()),f=window.requestAnimationFrame(v)},I=()=>{!f&&!h&&!document.hidden&&_&&!t.reducedMotion&&(d.start(),f=window.requestAnimationFrame(v))},F=H=>{if(t.reducedMotion)return;let X=e.getBoundingClientRect();!X.width||!X.height||(p=(H.clientX-X.left)/X.width,b=1-(H.clientY-X.top)/X.height)},k=()=>{p=e.clientWidth<768?.5:.7,b=e.clientWidth<768?.3:.5},V=()=>{document.hidden&&f?(window.cancelAnimationFrame(f),f=0):!document.hidden&&_&&I()},$=new IntersectionObserver(H=>{for(let X of H)_=X.isIntersecting,_?I():f&&(window.cancelAnimationFrame(f),f=0)},{threshold:.02});return P(),$.observe(e),window.addEventListener("resize",P,{passive:!0}),window.addEventListener("pointermove",F,{passive:!0}),e.addEventListener("pointerleave",k,{passive:!0}),document.addEventListener("visibilitychange",V),t.reducedMotion?(g=1,M(1.4)):I(),{setReveal(H){g=Ca.clamp(H,0,1),t.reducedMotion&&M(1.4)},setScrollProgress(H){m=Ca.clamp(H,0,1),t.reducedMotion&&M(1.4)},renderOnce(){M(d.getElapsedTime())},dispose(){h=!0,f&&window.cancelAnimationFrame(f),$.disconnect(),window.removeEventListener("resize",P),window.removeEventListener("pointermove",F),e.removeEventListener("pointerleave",k),document.removeEventListener("visibilitychange",V),o.dispose(),l.dispose(),u.dispose(),n?.dispose(),n=null}}}var QS=`#version 300 es
in vec2 aPosition;
uniform vec2 uTexel;
out vec2 vUv;
out vec2 vL;
out vec2 vR;
out vec2 vT;
out vec2 vB;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  vL = vUv - vec2(uTexel.x, 0.0);
  vR = vUv + vec2(uTexel.x, 0.0);
  vT = vUv + vec2(0.0, uTexel.y);
  vB = vUv - vec2(0.0, uTexel.y);
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,xi=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv;
in vec2 vL;
in vec2 vR;
in vec2 vT;
in vec2 vB;
out vec4 outColor;
`,jS=`${xi}
uniform sampler2D uTarget;
uniform float uAspect;
uniform vec2 uA;
uniform vec2 uB;
uniform float uRadius;
uniform float uWide;
uniform vec3 uValue;
uniform float uMode;
uniform float uStrength;
float erf(float x) {
  float x2 = x * x;
  float a = 0.147;
  return sign(x) * sqrt(1.0 - exp(-x2 * (1.2732395 + a * x2) / (1.0 + a * x2)));
}
float sweep(float along, float length, float across, float radius) {
  return exp(-across * across / (radius * radius)) * 0.5 * (erf(along / radius) - erf((along - length) / radius));
}
void main() {
  vec2 p = vec2(vUv.x * uAspect, vUv.y);
  vec2 a = vec2(uA.x * uAspect, uA.y);
  vec2 ab = vec2(uB.x * uAspect, uB.y) - a;
  float len = length(ab);
  vec2 dir = len > 1e-6 ? ab / len : vec2(1.0, 0.0);
  vec2 ap = p - a;
  vec3 base = texture(uTarget, vUv).xyz;
  if (uMode > 1.5) {
    float along = dot(ap, dir);
    float across = dot(ap, vec2(-dir.y, dir.x));
    if (uMode > 2.5) {
      outColor = vec4(mix(base, uValue, sweep(along, len, across, uRadius) * uStrength), 1.0);
      return;
    }
    vec3 add = vec3(uValue.xy * sweep(along, len, across, uRadius), uValue.z * sweep(along, len, across, uWide));
    outColor = vec4(base + add, 1.0);
    return;
  }
  float h = clamp(dot(ap, ab) / max(dot(ab, ab), 1e-9), 0.0, 1.0);
  vec2 d = ap - ab * h;
  float r2 = dot(d, d);
  float falloff = exp(-r2 / (uRadius * uRadius));
  float wide = exp(-r2 / (uWide * uWide));
  vec3 result = uMode > 0.5 ? mix(base, uValue, falloff * uStrength) : base + vec3(uValue.xy * falloff, uValue.z * wide);
  outColor = vec4(result, 1.0);
}`,eb=`${xi}
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 uVelocityTexel;
uniform float uDt;
uniform vec4 uDecay;
void main() {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelocityTexel;
  outColor = texture(uSource, coord) * uDecay;
}`,tb=`${xi}
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform sampler2D uForward;
uniform sampler2D uBack;
uniform vec2 uVelocityTexel;
uniform vec2 uSourceTexel;
uniform float uDt;
uniform vec4 uDecay;
void main() {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelocityTexel;
  vec4 forward = texture(uForward, vUv);
  vec4 corrected = forward + 0.5 * (texture(uSource, vUv) - texture(uBack, vUv));
  vec2 base = (floor(coord / uSourceTexel - 0.5) + 0.5) * uSourceTexel;
  vec4 a = texture(uSource, base);
  vec4 b = texture(uSource, base + vec2(uSourceTexel.x, 0.0));
  vec4 c = texture(uSource, base + vec2(0.0, uSourceTexel.y));
  vec4 d = texture(uSource, base + uSourceTexel);
  vec4 low = min(min(a, b), min(c, d));
  vec4 high = max(max(a, b), max(c, d));
  outColor = clamp(corrected, low, high) * uDecay;
}`,nb=`${xi}
uniform sampler2D uVelocity;
void main() {
  float left = texture(uVelocity, vL).x;
  float right = texture(uVelocity, vR).x;
  float top = texture(uVelocity, vT).y;
  float bottom = texture(uVelocity, vB).y;
  vec2 center = texture(uVelocity, vUv).xy;
  if (vL.x < 0.0) left = -center.x;
  if (vR.x > 1.0) right = -center.x;
  if (vT.y > 1.0) top = -center.y;
  if (vB.y < 0.0) bottom = -center.y;
  outColor = vec4(0.5 * (right - left + top - bottom), 0.0, 0.0, 1.0);
}`,ib=`${xi}
uniform sampler2D uSource;
uniform float uValue;
void main() {
  outColor = texture(uSource, vUv) * uValue;
}`,rb=`${xi}
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
void main() {
  float left = texture(uPressure, vL).x;
  float right = texture(uPressure, vR).x;
  float top = texture(uPressure, vT).x;
  float bottom = texture(uPressure, vB).x;
  float divergence = texture(uDivergence, vUv).x;
  outColor = vec4((left + right + bottom + top - divergence) * 0.25, 0.0, 0.0, 1.0);
}`,sb=`${xi}
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
void main() {
  float left = texture(uPressure, vL).x;
  float right = texture(uPressure, vR).x;
  float top = texture(uPressure, vT).x;
  float bottom = texture(uPressure, vB).x;
  vec2 velocity = texture(uVelocity, vUv).xy - vec2(right - left, top - bottom);
  outColor = vec4(velocity, 0.0, 1.0);
}`,yg=`
uniform vec3 uColor;
uniform vec3 uSecondary;
uniform float uIntensity;
uniform float uHotspot;
vec3 shade(vec3 dye) {
  float energy = max(dye.x, 0.0);
  float heat = clamp(dye.y, 0.0, energy);
  float gas = max(dye.z, 0.0);
  float fresh = heat / max(energy, 0.0001);
  vec3 tint = mix(uSecondary, uColor, fresh);
  return (tint * energy + uSecondary * gas + vec3(heat * heat * 0.3 * uHotspot)) * uIntensity;
}
`,ob=`${xi}${yg}
uniform sampler2D uDye;
uniform vec2 uDyeTexel;
void main() {
  vec2 o = uDyeTexel * 0.5;
  vec3 light = shade(texture(uDye, vUv + vec2(-o.x, -o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(o.x, -o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(-o.x, o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(o.x, o.y)).xyz);
  outColor = vec4(light * 0.25, 1.0);
}`,ab=`${xi}
uniform sampler2D uSource;
uniform vec2 uSourceTexel;
void main() {
  vec2 o = uSourceTexel;
  vec3 color = texture(uSource, vUv).rgb * 4.0;
  color += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb;
  color += texture(uSource, vUv + vec2(o.x, -o.y)).rgb;
  color += texture(uSource, vUv + vec2(-o.x, o.y)).rgb;
  color += texture(uSource, vUv + vec2(o.x, o.y)).rgb;
  outColor = vec4(color / 8.0, 1.0);
}`,lb=`${xi}
uniform sampler2D uSource;
uniform vec2 uSourceTexel;
void main() {
  vec2 o = uSourceTexel;
  vec3 color = texture(uSource, vUv + vec2(-o.x * 2.0, 0.0)).rgb;
  color += texture(uSource, vUv + vec2(o.x * 2.0, 0.0)).rgb;
  color += texture(uSource, vUv + vec2(0.0, -o.y * 2.0)).rgb;
  color += texture(uSource, vUv + vec2(0.0, o.y * 2.0)).rgb;
  color += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(o.x, -o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(-o.x, o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(o.x, o.y)).rgb * 2.0;
  outColor = vec4(color / 12.0, 1.0);
}`,cb=`${xi}${yg}
uniform sampler2D uDye;
uniform sampler2D uBloom;
uniform float uGlow;
uniform float uGrain;
uniform float uTime;
uniform float uLight;
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
void main() {
  vec3 dye = texture(uDye, vUv).xyz;
  vec3 light = shade(dye);
  vec3 bloom = texture(uBloom, vUv).rgb * uGlow;
  float edge = smoothstep(0.0, 0.02, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y)));
  float grain = 1.0 + (hash(gl_FragCoord.xy + fract(uTime * 13.7) * 97.0) - 0.5) * uGrain * 2.0;
  if (uLight > 0.5) {
    float energy = max(dye.x, 0.0);
    float heat = clamp(dye.y, 0.0, energy);
    float gas = max(dye.z, 0.0);
    float fresh = heat / max(energy, 0.0001);
    vec3 tint = mix(uSecondary, uColor, fresh);
    float halo = dot(bloom, vec3(0.2126, 0.7152, 0.0722));
    float density = 1.0 - exp(-((energy * 1.1 + gas * 0.8) * uIntensity + halo * 0.25));
    float tone = dot(tint, vec3(0.2126, 0.7152, 0.0722));
    vec3 ink = tint * min(1.0, 0.5 / max(tone, 0.001)) * mix(0.95, 0.72, smoothstep(0.5, 3.0, energy));
    ink = mix(ink, vec3(1.0), clamp(heat * heat * 0.05 * uHotspot, 0.0, 0.45));
    density = clamp(density * grain, 0.0, 1.0) * edge;
    outColor = vec4(ink * density, density);
  } else {
    vec3 color = 1.0 - exp(-(light + bloom) * grain);
    color *= edge;
    outColor = vec4(color, max(color.r, max(color.g, color.b)));
  }
}`,ub={low:{sim:96,dye:384},medium:{sim:128,dye:576},high:{sim:160,dye:768}},hb=[["#00D9FF","#8B00FF"],["#EF00CF","#0066FF"],["#8B00FF","#00D9FF"],["#0066FF","#EF00CF"]],fb=20,db=.75,vg=5,Pf=(r,e,t)=>Math.min(t,Math.max(e,r)),rr=(r,e,t)=>r+(e-r)*t,xg=(r,e,t)=>{let n=r.createShader(e);return n?(r.shaderSource(n,t),r.compileShader(n),r.getShaderParameter(n,r.COMPILE_STATUS)?n:(r.deleteShader(n),null)):null},If=r=>{let e=r.replace(/^#/,"");return e.length===6?[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]:[0,.85,1]};function pb(r,e){let t=document.elementsFromPoint(r,e);for(let n of t)if(n instanceof HTMLElement&&!(n.id==="glow-cursor-layer"||n.id==="glow-cursor-canvas")){if(n.closest("#masthead, .mobile-drawer, .site-footer, .service-card--featured, .hero, .section--dark, .section--deep"))return"dark";if(n.closest(".section"))return"light"}return"dark"}function Mg(r,e,t={}){let n=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!n||!n.getExtension("EXT_color_buffer_float"))return null;let i=xg(n,n.VERTEX_SHADER,QS);if(!i)return null;let s=z=>{let w=xg(n,n.FRAGMENT_SHADER,z),ee=n.createProgram();if(!w||!ee)return null;if(n.attachShader(ee,i),n.attachShader(ee,w),n.bindAttribLocation(ee,0,"aPosition"),n.linkProgram(ee),n.deleteShader(w),!n.getProgramParameter(ee,n.LINK_STATUS))return n.deleteProgram(ee),null;let ie={},U=n.getProgramParameter(ee,n.ACTIVE_UNIFORMS);for(let ne=0;ne<U;ne++){let ve=n.getActiveUniform(ee,ne);ve&&(ie[ve.name]=n.getUniformLocation(ee,ve.name))}return{program:ee,uniforms:ie}},o={splat:s(jS),advect:s(eb),maccormack:s(tb),divergence:s(nb),scale:s(ib),pressure:s(rb),gradient:s(sb),prefilter:s(ob),down:s(ab),up:s(lb),display:s(cb)};if(Object.values(o).some(z=>!z))return n.deleteShader(i),null;let a=o,l=n.createVertexArray(),c=n.createBuffer();n.bindVertexArray(l),n.bindBuffer(n.ARRAY_BUFFER,c),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0);let u=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,d=(navigator.hardwareConcurrency||8)<=4||window.innerWidth<960,f={palettePairs:(t.colors&&t.colors.length?t.colors:hb).map(([z,w])=>[If(z),If(w)]),burstAccent:If(t.burstAccentColor??"#FFC900"),intensity:Math.max(0,t.intensity??1.2),trailWidth:Pf(t.trailWidth??3,.5,40),linger:Pf(t.linger??1.35,.1,10),glow:Math.max(0,t.glow??1.1),hotspot:Math.max(0,t.hotspot??.75),followSpeed:Pf(t.followSpeed??.62,0,1),grain:Math.max(0,t.grain??.015),clickBurst:t.clickBurst??!0,quality:t.quality??(d?"medium":"high"),maxDevicePixelRatio:t.maxDevicePixelRatio??2,enabled:t.enabled??!0},h={width:1,height:1,ratio:1,color:[0,.85,1],secondary:[.545,0,1],burstGoldWeight:0,theme:"dark",pointer:{x:0,y:0,inside:!1},emitter:{x:0,y:0,vx:0,vy:0,px:0,py:0},ready:!1,bursts:[],active:-1/0,time:0,allocated:"",targets:null},_=0,g=0,m=!0,p=!0,b=!1,S=(z,w,ee,ie,U)=>{let ne=n.createTexture();n.bindTexture(n.TEXTURE_2D,ne),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,U),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,U),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,ee,z,w,0,ie,n.HALF_FLOAT,null);let ve=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,ve),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0),n.viewport(0,0,z,w),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),{texture:ne,fbo:ve,width:z,height:w,texel:[1/z,1/w]}},x=(z,w,ee,ie,U)=>{let ne=S(z,w,ee,ie,U),ve=S(z,w,ee,ie,U);return{get read(){return ne},get write(){return ve},swap(){let ce=ne;ne=ve,ve=ce},targets(){return[ne,ve]}}},C=z=>{n.deleteTexture(z.texture),n.deleteFramebuffer(z.fbo)},R=()=>{let z=h.targets;z&&([...z.velocity.targets(),...z.dye.targets(),...z.pressure.targets(),z.divergence,z.forward,z.back,...z.bloom].forEach(C),h.targets=null)},E=()=>{let z=h.targets;z&&(n.clearColor(0,0,0,0),[...z.velocity.targets(),...z.dye.targets(),...z.pressure.targets()].forEach(w=>{n.bindFramebuffer(n.FRAMEBUFFER,w.fbo),n.clear(n.COLOR_BUFFER_BIT)}))},P=()=>{let z=`${f.quality}|${h.width}|${h.height}|${e.width}|${e.height}`;if(z===h.allocated&&h.targets)return;R(),h.allocated=z;let w=ub[f.quality],ee=h.width/h.height,ie=K=>ee>=1?[Math.round(K*ee),K]:[K,Math.round(K/ee)],[U,ne]=ie(w.sim),[ve,ce]=ie(w.dye),A=Math.min(1,e.width/ve,e.height/ce);ve=Math.max(2,Math.round(ve*A)),ce=Math.max(2,Math.round(ce*A));let y=[],O=ve>>1,Q=ce>>1;for(let K=0;K<vg;K++)y.push(S(Math.max(1,O),Math.max(1,Q),n.RGBA16F,n.RGBA,n.LINEAR)),O>>=1,Q>>=1;h.targets={velocity:x(U,ne,n.RG16F,n.RG,n.LINEAR),dye:x(ve,ce,n.RGBA16F,n.RGBA,n.LINEAR),forward:S(ve,ce,n.RGBA16F,n.RGBA,n.LINEAR),back:S(ve,ce,n.RGBA16F,n.RGBA,n.LINEAR),pressure:x(U,ne,n.R16F,n.RED,n.NEAREST),divergence:S(U,ne,n.R16F,n.RED,n.NEAREST),bloom:y}},M=()=>{let z=Math.max(1,r.clientWidth),w=Math.max(1,r.clientHeight),ee=Math.min(window.devicePixelRatio||1,Math.max(.5,f.maxDevicePixelRatio)),ie=Math.max(1,Math.round(z*ee)),U=Math.max(1,Math.round(w*ee));(e.width!==ie||e.height!==U)&&(e.width=ie,e.height=U),h.width=z,h.height=w,h.ratio=ee,P()},v=()=>{!_&&m&&p&&!document.hidden&&(_=requestAnimationFrame(oe))},I=()=>{b=!0,v()},F=z=>{z?(n.bindFramebuffer(n.FRAMEBUFFER,z.fbo),n.viewport(0,0,z.width,z.height)):(n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,e.width,e.height)),n.drawArrays(n.TRIANGLES,0,3)},k=(z,w)=>(n.useProgram(z.program),z.uniforms.uTexel&&n.uniform2f(z.uniforms.uTexel,w[0],w[1]),z.uniforms),V=(z,w)=>(n.activeTexture(n.TEXTURE0+z),n.bindTexture(n.TEXTURE_2D,w.texture),z),$=(z,w,ee,ie,U,ne,ve,ce,A,y=ne)=>{let O=k(a.splat,z.read.texel);n.uniform1i(O.uTarget,V(0,z.read)),n.uniform1f(O.uAspect,h.width/h.height),n.uniform2f(O.uA,w/h.width,1-ee/h.height),n.uniform2f(O.uB,ie/h.width,1-U/h.height),n.uniform1f(O.uRadius,ne/h.height),n.uniform1f(O.uWide,y/h.height),n.uniform3f(O.uValue,ve[0],ve[1],ve[2]),n.uniform1f(O.uMode,ce),n.uniform1f(O.uStrength,A),F(z.write),z.swap()},H=(z,w)=>{let{velocity:ee}=h.targets;return[z*ee.read.width/h.width,-w*ee.read.height/h.height]},X=()=>Math.max(f.trailWidth*.5,h.height/h.targets.dye.read.height*.9),G=z=>{let w=f.palettePairs,ee=h.time*.14%w.length,ie=Math.floor(ee),U=(ie+1)%w.length,ne=ee-ie,ve=ne*ne*(3-2*ne),[ce,A]=w[ie],[y,O]=w[U];h.burstGoldWeight=Math.max(0,h.burstGoldWeight-z*1.45);let Q=h.burstGoldWeight,K=rr(ce[0],y[0],ve),j=rr(ce[1],y[1],ve),fe=rr(ce[2],y[2],ve);h.color[0]=rr(K,f.burstAccent[0],Q*.85),h.color[1]=rr(j,f.burstAccent[1],Q*.85),h.color[2]=rr(fe,f.burstAccent[2],Q*.85),h.secondary[0]=rr(A[0],O[0],ve),h.secondary[1]=rr(A[1],O[1],ve),h.secondary[2]=rr(A[2],O[2],ve)},re=(z,w)=>{let{emitter:ee,pointer:ie}=h,{velocity:U,dye:ne}=h.targets;if(ee.px=ee.x,ee.py=ee.y,u||f.followSpeed>=1)ee.x=ie.x,ee.y=ie.y;else{let O=10+f.followSpeed*50,Q=Math.max(1,Math.ceil(z/.004)),K=z/Q;for(let j=0;j<Q;j++)ee.vx+=(O*O*(ie.x-ee.x)-2*O*ee.vx)*K,ee.vy+=(O*O*(ie.y-ee.y)-2*O*ee.vy)*K,ee.x+=ee.vx*K,ee.y+=ee.vy*K}let ve=ee.x-ee.px,ce=ee.y-ee.py;if(Math.hypot(ve,ce)<.05||!f.enabled)return;let y=X();if(!u){let O=H(ve/Math.max(z,.001),ce/Math.max(z,.001));$(U,ee.px,ee.py,ee.x,ee.y,y*4+18,[O[0],O[1],0],3,db*.6)}$(ne,ee.px,ee.py,ee.x,ee.y,y,[5.6,5.6,.7],2,1,y*5+6),h.active=w},D=(z,w,ee)=>{let{velocity:ie,dye:U}=h.targets,ne=X(),ve=6,ce=Math.random()*Math.PI*2;h.burstGoldWeight=1;for(let A=0;A<ve;A++){let y=ce+A/ve*Math.PI*2+(Math.random()-.5)*.5,O=Math.cos(y),Q=Math.sin(y),K=20+Math.random()*14,j=z+O*3,fe=w+Q*3,ue=z+O*K,me=w+Q*K;if(!u){let Ge=H(Math.cos(y+.6)*760,Math.sin(y+.6)*760);$(ie,j,fe,ue,me,18,[Ge[0],Ge[1],0],1,.9)}$(U,j,fe,ue,me,ne*1.1,[2.4,2.4,.3],0,1,ne*5+6)}$(U,z,w,z+.01,w,ne*2.2,[1.8,1.8,.4],0,1,ne*7+10),h.active=ee},de=z=>{let{velocity:w,dye:ee,pressure:ie,divergence:U}=h.targets;if(!u){let y=k(a.divergence,w.read.texel);n.uniform1i(y.uVelocity,V(0,w.read)),F(U),y=k(a.scale,ie.read.texel),n.uniform1i(y.uSource,V(0,ie.read)),n.uniform1f(y.uValue,.8),F(ie.write),ie.swap(),y=k(a.pressure,ie.read.texel),n.uniform1i(y.uDivergence,V(1,U));for(let Q=0;Q<fb;Q++)n.uniform1i(y.uPressure,V(0,ie.read)),F(ie.write),ie.swap();y=k(a.gradient,w.read.texel),n.uniform1i(y.uPressure,V(0,ie.read)),n.uniform1i(y.uVelocity,V(1,w.read)),F(w.write),w.swap(),y=k(a.advect,w.read.texel),n.uniform2f(y.uVelocityTexel,w.read.texel[0],w.read.texel[1]),n.uniform1i(y.uVelocity,V(0,w.read)),n.uniform1i(y.uSource,V(0,w.read)),n.uniform1f(y.uDt,z);let O=Math.exp(-z*1.2);n.uniform4f(y.uDecay,O,O,1,1),F(w.write),w.swap()}let ne=[Math.exp(-z*4.6/(f.linger*.8)),Math.exp(-z*4.6/(f.linger*.2)),Math.exp(-z*4.6/(f.linger*1.2)),1],{forward:ve,back:ce}=h.targets;if(u){let y=k(a.advect,ee.read.texel);n.uniform2f(y.uVelocityTexel,w.read.texel[0],w.read.texel[1]),n.uniform1i(y.uVelocity,V(0,w.read)),n.uniform1i(y.uSource,V(1,ee.read)),n.uniform1f(y.uDt,0),n.uniform4f(y.uDecay,ne[0],ne[1],ne[2],ne[3]),F(ee.write),ee.swap();return}let A=k(a.advect,ee.read.texel);n.uniform2f(A.uVelocityTexel,w.read.texel[0],w.read.texel[1]),n.uniform1i(A.uVelocity,V(0,w.read)),n.uniform1i(A.uSource,V(1,ee.read)),n.uniform1f(A.uDt,z),n.uniform4f(A.uDecay,1,1,1,1),F(ve),n.uniform1i(A.uSource,V(1,ve)),n.uniform1f(A.uDt,-z),F(ce),A=k(a.maccormack,ee.read.texel),n.uniform2f(A.uVelocityTexel,w.read.texel[0],w.read.texel[1]),n.uniform2f(A.uSourceTexel,ee.read.texel[0],ee.read.texel[1]),n.uniform1i(A.uVelocity,V(0,w.read)),n.uniform1i(A.uSource,V(1,ee.read)),n.uniform1i(A.uForward,V(2,ve)),n.uniform1i(A.uBack,V(3,ce)),n.uniform1f(A.uDt,z),n.uniform4f(A.uDecay,ne[0],ne[1],ne[2],ne[3]),F(ee.write),ee.swap()},Le=z=>{n.uniform3f(z.uColor,h.color[0],h.color[1],h.color[2]),n.uniform3f(z.uSecondary,h.secondary[0],h.secondary[1],h.secondary[2]),n.uniform1f(z.uIntensity,f.intensity),n.uniform1f(z.uHotspot,f.hotspot)},Ze=()=>{let{dye:z,bloom:w}=h.targets;if(f.glow>0){let ie=k(a.prefilter,w[0].texel);n.uniform1i(ie.uDye,V(0,z.read)),n.uniform2f(ie.uDyeTexel,z.read.texel[0],z.read.texel[1]),Le(ie),F(w[0]),ie=k(a.down,w[0].texel);for(let U=1;U<w.length;U++)n.uniform1i(ie.uSource,V(0,w[U-1])),n.uniform2f(ie.uSourceTexel,w[U-1].texel[0],w[U-1].texel[1]),F(w[U]);n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),ie=k(a.up,w[0].texel);for(let U=w.length-1;U>0;U--)n.uniform1i(ie.uSource,V(0,w[U])),n.uniform2f(ie.uSourceTexel,w[U].texel[0],w[U].texel[1]),F(w[U-1]);n.disable(n.BLEND)}let ee=k(a.display,[1/e.width,1/e.height]);n.uniform1i(ee.uDye,V(0,z.read)),n.uniform1i(ee.uBloom,V(1,w[0])),Le(ee),n.uniform1f(ee.uGlow,f.glow>0?f.glow*1.4/vg:0),n.uniform1f(ee.uGrain,f.grain),n.uniform1f(ee.uTime,h.time),n.uniform1f(ee.uLight,h.theme==="light"?1:0),F(null)},J=()=>{n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,e.width,e.height),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT)};function oe(z){if(_=0,b&&(b=!1,M()),!n||!m||!p||document.hidden)return;let w=g?Math.min(1/30,(z-g)/1e3):1/60;g=z,h.time+=w;let ee=Math.min(window.devicePixelRatio||1,Math.max(.5,f.maxDevicePixelRatio));for(Math.abs(ee-h.ratio)>.01&&M(),P(),G(w),n.bindVertexArray(l),n.disable(n.BLEND),h.ready&&re(w,z);h.bursts.length;){let[ne,ve]=h.bursts.shift();D(ne,ve,z)}de(w),Ze();let ie=z-h.active>f.linger*1200+900,U=Math.hypot(h.emitter.vx,h.emitter.vy)<1;if(ie&&U){E(),J(),g=0;return}_=requestAnimationFrame(oe)}let _e=(z,w)=>{let ee=pb(z,w);ee!==h.theme&&(h.theme=ee,e.style.mixBlendMode=ee==="light"?"normal":"screen")},ae=z=>{if(z.pointerType==="touch")return;let w=r.getBoundingClientRect(),ee=z.clientX-w.left,ie=z.clientY-w.top;if(!(ee>=0&&ie>=0&&ee<=w.width&&ie<=w.height)){h.pointer.inside&&(h.pointer.inside=!1,h.ready=!1,v());return}_e(z.clientX,z.clientY),h.ready||(h.emitter.x=ee,h.emitter.y=ie,h.emitter.px=ee,h.emitter.py=ie,h.emitter.vx=0,h.emitter.vy=0,h.ready=!0),h.pointer.x=ee,h.pointer.y=ie,h.pointer.inside=!0,v()},Ae=z=>{if(!f.clickBurst||!f.enabled)return;let w=r.getBoundingClientRect(),ee=z.clientX-w.left,ie=z.clientY-w.top;ee<0||ie<0||ee>w.width||ie>w.height||(_e(z.clientX,z.clientY),h.bursts.push([ee,ie]),v())},Oe=()=>{h.pointer.inside=!1,h.ready=!1,v()},Ie=()=>{g=0,v()},$e=new ResizeObserver(()=>{I(),v()});$e.observe(r);let Xe=new IntersectionObserver(z=>{p=z.some(w=>w.isIntersecting),p&&(g=0,v())});return Xe.observe(r),window.addEventListener("pointermove",ae,{passive:!0}),window.addEventListener("pointerdown",Ae,{passive:!0}),document.documentElement.addEventListener("pointerleave",Oe),document.addEventListener("visibilitychange",Ie),e.style.mixBlendMode="screen",I(),J(),{setEnabled(z){f.enabled=z,z||(h.ready=!1)},dispose(){m=!1,cancelAnimationFrame(_),$e.disconnect(),Xe.disconnect(),window.removeEventListener("pointermove",ae),window.removeEventListener("pointerdown",Ae),document.documentElement.removeEventListener("pointerleave",Oe),document.removeEventListener("visibilitychange",Ie),R(),Object.values(a).forEach(z=>n.deleteProgram(z.program)),n.deleteShader(i),n.deleteBuffer(c),n.deleteVertexArray(l)}}}Tt.registerPlugin(Qe);var mb={"rajamanickam-chit-fund":"Rajamanickam Chit Funds","zsi-yogesh":"ZSI Portfolio",kaiforge:"KaiForge",palindrome:"Palindrome",neuroshield:"NeuroShield",mfalmion:"Mfalmion"},gb="palindrome_intro_seen",Df=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function _b(){try{window.localStorage.setItem(gb,"1")}catch{}}function vb(){let r=document.documentElement,e=document.getElementById("intro-splash"),t=document.getElementById("intro-video"),n=document.getElementById("hero"),i=document.getElementById("hero-canvas"),s=document.getElementById("masthead"),o=document.getElementById("hero-scroll"),a=document.getElementById("hero-content"),l=Array.from(document.querySelectorAll(".hero__line-inner")),c=Array.from(document.querySelectorAll("[data-hero-stagger]")),u=Df(),d=null;n&&i?d=_g(i,n,{reducedMotion:u,onFallback:()=>{n.classList.add("is-webgl-fallback")}}):n&&n.classList.add("is-webgl-fallback"),u||(Tt.set(l,{yPercent:112,opacity:0}),Tt.set(c,{y:20,opacity:0}),s&&Tt.set(s,{y:-14,opacity:0}),o&&Tt.set(o,{opacity:0,y:10}));let f=!1,h=_=>{if(f)return;if(f=!0,u){d?.setReveal(1),r.classList.remove("intro-active");return}let g=Tt.timeline({defaults:{ease:"power4.out"}}),m={value:0};_&&e?g.to(e,{opacity:0,duration:.78,ease:"power3.inOut",onComplete:()=>{t?.pause(),r.classList.remove("intro-active"),e.style.opacity=""}},0):r.classList.remove("intro-active"),g.to(m,{value:1,duration:_?1.35:1.05,ease:"power3.out",onUpdate:()=>{d?.setReveal(m.value)}},_?.1:0);let p=_?.24:.04;c[0]&&g.to(c[0],{y:0,opacity:1,duration:.62,ease:"power3.out"},p),l.length&&g.to(l,{yPercent:0,opacity:1,duration:.85,stagger:.08,ease:"power4.out"},p+.06);let b=c.slice(1);b.length&&g.to(b,{y:0,opacity:1,duration:.68,stagger:.08,ease:"power3.out"},p+.28),s&&g.to(s,{y:0,opacity:1,duration:.65,ease:"power3.out",clearProps:"transform"},p+.18),o&&g.to(o,{opacity:1,y:0,duration:.6,ease:"power2.out"},p+.45)};if(n&&!u&&Qe.create({trigger:n,start:"top top",end:"bottom top",scrub:!0,onUpdate:_=>{d?.setScrollProgress(_.progress),a&&Tt.set(a,{y:_.progress*-48,opacity:Math.max(.18,1-_.progress*1.15)}),o&&Tt.set(o,{opacity:Math.max(0,1-_.progress*3.5)})}}),!u&&r.classList.contains("intro-active")&&e&&t){_b();let _=!1,g=0,m=()=>{_||(_=!0,g&&window.clearTimeout(g),h(!0))},p=t.dataset.src;p&&!t.getAttribute("src")&&(t.src=p),t.muted=!0,t.playsInline=!0,t.addEventListener("ended",m,{once:!0}),t.addEventListener("error",m,{once:!0}),t.addEventListener("loadedmetadata",()=>{let S=Number.isFinite(t.duration)&&t.duration>0?Math.ceil(t.duration*1e3)+1500:8e3;g&&window.clearTimeout(g),g=window.setTimeout(m,S)}),g=window.setTimeout(m,8e3);let b=t.play();b&&typeof b.catch=="function"&&b.catch(()=>{m()})}else h(!1)}function xb(){if(Df()||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let r=Array.from(document.querySelectorAll("[data-magnetic]"));for(let e of r){let t=Tt.quickTo(e,"x",{duration:.42,ease:"power3.out"}),n=Tt.quickTo(e,"y",{duration:.42,ease:"power3.out"});e.addEventListener("pointermove",i=>{let s=e.getBoundingClientRect();if(!s.width||!s.height)return;let o=((i.clientX-s.left)/s.width-.5)*14,a=((i.clientY-s.top)/s.height-.5)*10;t(o),n(a)}),e.addEventListener("pointerleave",()=>{t(0),n(0)})}}function yb(){let r=document.getElementById("scroll-progress"),e=document.getElementById("masthead"),t=Array.from(document.querySelectorAll("[data-nav-link]")),n=Array.from(document.querySelectorAll("main section[id]")),i=()=>{if(e&&e.classList.toggle("is-scrolled",window.scrollY>24),r){let s=document.documentElement.scrollHeight-window.innerHeight,o=s>0?Math.min(1,Math.max(0,window.scrollY/s)):0;r.style.transform=`scaleX(${o.toFixed(4)})`}};if(i(),window.addEventListener("scroll",i,{passive:!0}),n.length&&t.length&&"IntersectionObserver"in window){let s=new IntersectionObserver(o=>{for(let a of o){if(!a.isIntersecting)continue;let l=a.target.getAttribute("id");for(let c of t)c.classList.toggle("is-active",c.getAttribute("href")===`#${l}`)}},{rootMargin:"-42% 0px -48% 0px"});for(let o of n)s.observe(o)}}function Mb(){let r=Array.from(document.querySelectorAll("[data-reveal]"));if(!r.length)return;if(Df()||!("IntersectionObserver"in window)){for(let t of r)t.classList.add("is-revealed");return}let e=new IntersectionObserver((t,n)=>{for(let i of t)i.isIntersecting&&(i.target.classList.add("is-revealed"),n.unobserve(i.target))},{threshold:.1,rootMargin:"0px 0px -30px 0px"});for(let t of r)t.getBoundingClientRect().top<window.innerHeight*.94?t.classList.add("is-revealed"):e.observe(t)}function Sb(){let r=document.getElementById("menu-toggle"),e=document.getElementById("mobile-drawer");if(!r||!e)return;let t=i=>{r.setAttribute("aria-expanded",String(i)),e.setAttribute("aria-hidden",String(!i)),e.classList.toggle("is-open",i),document.body.style.overflow=i?"hidden":""};r.addEventListener("click",()=>{let i=r.getAttribute("aria-expanded")==="true";t(!i)});let n=e.querySelectorAll("[data-drawer-link]");for(let i of n)i.addEventListener("click",()=>t(!1));window.addEventListener("keydown",i=>{i.key==="Escape"&&r.getAttribute("aria-expanded")==="true"&&(t(!1),r.focus())})}function bb(){let r=Array.from(document.querySelectorAll("[data-work-filter]")),e=Array.from(document.querySelectorAll("[data-work-card]")),t=Array.from(document.querySelectorAll("[data-inspect-card]"));for(let n of r)n.addEventListener("click",()=>{let i=n.dataset.workFilter||"All";for(let s of r){let o=s===n;s.classList.toggle("is-active",o),s.setAttribute("aria-selected",String(o))}for(let s of e){let o=i==="All"||s.dataset.workGroup===i;s.hidden=!o}});for(let n of t)n.addEventListener("click",()=>{let i=n.getAttribute("aria-controls");if(!i)return;let s=document.getElementById(i),o=n.closest("[data-work-card]");if(!s)return;let a=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",String(!a)),s.hidden=a,o?.classList.toggle("is-expanded",!a),n.textContent=a?"Inspect Details +":"Hide Details \u2212"})}function Tb(){let r=Array.from(document.querySelectorAll("[data-skill-filter]")),e=Array.from(document.querySelectorAll("[data-skill-item]")),t=document.getElementById("inspector-category"),n=document.getElementById("inspector-name"),i=document.getElementById("inspector-focus"),s=document.getElementById("inspector-summary"),o=document.getElementById("inspector-projects");if(!e.length)return;let a=l=>{for(let c of e){let u=c===l;c.classList.toggle("is-selected",u),c.setAttribute("aria-selected",String(u))}if(t&&(t.textContent=l.dataset.skillCategory||""),n&&(n.textContent=l.dataset.skillName||""),i&&(i.textContent=l.dataset.skillFocus||""),s&&(s.textContent=l.dataset.skillSummary||""),o){let c=(l.dataset.skillProjects||"").split(",").filter(Boolean);o.innerHTML="";for(let u of c){let d=document.createElement("a");d.href=`#project-${u}`,d.className="skill-project-chip",d.textContent=mb[u]||u,o.appendChild(d)}}};for(let l of e)l.addEventListener("click",()=>a(l)),l.addEventListener("mouseenter",()=>a(l));for(let l of r)l.addEventListener("click",()=>{let c=l.dataset.skillFilter||"all";for(let f of r){let h=f===l;f.classList.toggle("is-active",h),f.setAttribute("aria-selected",String(h))}let u=null;for(let f of e){let h=c==="all"||f.dataset.skillCategory===c;f.hidden=!h,h&&!u&&(u=f)}!e.find(f=>f.classList.contains("is-selected")&&!f.hidden)&&u&&a(u)})}function wb(){let r=Array.from(document.querySelectorAll("[data-honor-tab]")),e=Array.from(document.querySelectorAll("[data-honor-panel]"));if(!(!r.length||!e.length))for(let t of r)t.addEventListener("click",()=>{let n=t.dataset.honorTab;for(let i of r){let s=i===t;i.classList.toggle("is-active",s),i.setAttribute("aria-selected",String(s))}for(let i of e)i.hidden=i.dataset.honorPanel!==n})}function Eb(){let r=document.getElementById("contact-form"),e=document.getElementById("contact-name"),t=document.getElementById("contact-email"),n=document.getElementById("contact-type"),i=document.getElementById("contact-description"),s=document.getElementById("description-count"),o=document.getElementById("contact-submit"),a=document.getElementById("form-status"),l=document.querySelectorAll("[data-select-service]");for(let g of l)g.addEventListener("click",()=>{let m=g.dataset.selectService;m&&n&&(n.value=m),e&&window.setTimeout(()=>e.focus(),350)});let c=document.querySelectorAll("[data-copy-text]");for(let g of c)g.addEventListener("click",async()=>{let m=g.dataset.copyText;if(m)try{await navigator.clipboard.writeText(m);let p=g.textContent;g.textContent="Copied",window.setTimeout(()=>{g.textContent=p},1600)}catch{}});if(!r||!e||!t||!n||!i||!o||!a)return;let u=()=>{s&&(s.textContent=`${i.value.length} / 2500`)};u(),i.addEventListener("input",u);let d=(g,m)=>{let p=document.getElementById(`error-${g}`);p&&(p.textContent=m)},f=()=>{for(let g of["name","email","project_type","description"])d(g,"");a.hidden=!0,a.className="form-status",a.textContent=""},h=(g,m)=>{a.hidden=!1,a.className=`form-status form-status--${g}`,a.textContent=m},_=g=>{let m=!0;return g.name.length<2&&(d("name","Please enter at least 2 characters."),m=!1),/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(g.email)||(d("email","Please enter a valid email address."),m=!1),g.project_type||(d("project_type","Please select a service package."),m=!1),g.description.length<15&&(d("description","Please describe your project in at least 15 characters."),m=!1),m};r.addEventListener("submit",async g=>{g.preventDefault(),f();let m={name:e.value.trim(),email:t.value.trim(),project_type:n.value.trim(),description:i.value.trim()};if(!_(m)){h("error","Please fix the highlighted fields before sending.");return}let p=o.querySelector("span:first-child");o.disabled=!0,p&&(p.textContent="Sending...");try{let b=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}),S=await b.json();if(!b.ok){if(Array.isArray(S.detail))for(let x of S.detail){let C=String(x.loc?.[x.loc.length-1]??"");C&&x.msg&&d(C,x.msg.replace(/^Value error,\s*/i,""))}h("error","Unable to submit yet. Please check your details and try again.");return}r.reset(),u(),h("success",S.message||"Project inquiry received by Palindrome Labs.")}catch{h("error","Network error while contacting the Python backend. Please try again.")}finally{o.disabled=!1,p&&(p.textContent="Send Project Inquiry")}})}function Ab(){let r=document.getElementById("glow-cursor-layer"),e=document.getElementById("glow-cursor-canvas");if(!r||!e)return;let t=document.documentElement,n=Mg(r,e,{colors:[["#00D9FF","#8B00FF"],["#EF00CF","#0066FF"],["#8B00FF","#00D9FF"],["#0066FF","#EF00CF"]],burstAccentColor:"#FFC900",intensity:1.25,trailWidth:3,linger:1.4,glow:1.15,hotspot:.78,followSpeed:.6,grain:.015,clickBurst:!0,enabled:!t.classList.contains("intro-active")});if(!n){r.remove();return}if(t.classList.contains("intro-active")){let i=new MutationObserver(()=>{t.classList.contains("intro-active")||(n.setEnabled(!0),i.disconnect())});i.observe(t,{attributes:!0,attributeFilter:["class"]})}}document.addEventListener("DOMContentLoaded",()=>{vb(),Ab(),xb(),yb(),Mb(),Sb(),bb(),Tb(),wb(),Eb()});function Cb(){let r=document.querySelector(".proof"),e=document.querySelector("[data-proof-stage]"),t=document.querySelector("[data-proof-panel]"),n=document.querySelector("[data-proof-intro]"),i=document.querySelector("[data-proof-exhibition]");if(!r||!e||!t||!n||!i)return;Tt.matchMedia().add("(min-width: 901px) and (prefers-reduced-motion: no-preference)",()=>{r.classList.add("is-cinematic");let o=Tt.utils.toArray("[data-project]",r),a=Tt.utils.toArray(".proof-frame",r),l=Tt.utils.toArray(".proof-background",r),c=Tt.utils.toArray("[data-proof-nav]",r),u=r.querySelector("[data-proof-count]"),d=r.querySelector("[data-proof-progress]"),f=-1,h=g=>{g!==f&&(f=g,o.forEach((m,p)=>{m.classList.toggle("is-active",p===g),m.setAttribute("aria-hidden",String(p!==g)),m.inert=p!==g,Tt.to(m,{opacity:p===g?1:0,y:p===g?0:12,duration:.3,overwrite:!0})}),c.forEach((m,p)=>{m.classList.toggle("is-active",p===g),p===g?m.setAttribute("aria-current","true"):m.removeAttribute("aria-current")}),u&&(u.textContent=String(g+1).padStart(2,"0")),d&&(d.style.width=`${(g+1)/o.length*100}%`))},_=Qe.create({trigger:e,start:"top top",end:()=>`+=${window.innerHeight*(o.length+.8)}`,pin:!0,scrub:!0,onUpdate(g){let m=Math.min(1,g.progress/.18);Tt.set(t,{width:`${43+57*m}vw`,height:`${52+48*m}vh`,borderRadius:18*(1-m)}),Tt.set(n,{opacity:Math.max(0,1-m*1.7),visibility:m>.7?"hidden":"visible"}),Tt.set(i,{opacity:Math.max(0,(m-.55)/.45)});let p=Math.max(0,Math.min(o.length-1,(g.progress-.18)/.72*(o.length-1))),b=Math.min(o.length-1,Math.round(p));h(b),a.forEach((S,x)=>{let C=x-p;Tt.set(S,{xPercent:0,yPercent:-50,y:C*window.innerHeight*.52,scale:Math.max(.32,1-Math.abs(C)*.68),opacity:Math.max(0,1-Math.abs(C)*.38),zIndex:Math.round(10-Math.abs(C)*5),filter:`brightness(${Math.max(.48,1-Math.abs(C)*.5)})`})}),l.forEach((S,x)=>Tt.set(S,{opacity:Math.max(0,1-Math.abs(x-p))}))}});return c.forEach((g,m)=>{g.onclick=()=>{let p=.18+m/(o.length-1)*.72;window.scrollTo({top:_.start+(_.end-_.start)*p,behavior:"smooth"})}}),h(0),Qe.refresh(),()=>{_.kill(),r.classList.remove("is-cinematic"),o.forEach(g=>{g.inert=!1,g.removeAttribute("aria-hidden"),g.classList.remove("is-active"),Tt.set(g,{clearProps:"all"})}),c.forEach(g=>{g.onclick=null}),Tt.set([t,n,i,...a,...l],{clearProps:"all"})}})}document.addEventListener("DOMContentLoaded",Cb);})();
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
