/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Jul 20 18:42
*/
KISSY.add("anim/base",function(f,i,l,e,j,n,a){function r(c,d,b,g,m,o){if(c=i.get(c)){if(!(this instanceof r))return new r(c,d,b,g,m,o);var q=f.isPlainObject(b);d=d;this.domEl=c;if(f.isPlainObject(d))d=String(f.param(d,";")).replace(/=/g,":").replace(/%23/g,"#").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var z=d,t=c;c={};var p=x.length,v=t.cloneNode(true);i.insertAfter(v,t);t=v.style;for(h(v,z);p--;){var s=x[p];if(t[s])c[s]=(u[s]||u["*"]).getter(v,s)}z=k(z);for(var A in z)c[A]=(u[A]||u["*"]).getter(v,
A);i.remove(v);this.props=c;this.targetStyle=d;if(q)q=f.merge(B,b);else{q=f.clone(B);if(b)q.duration=parseFloat(b)||1;if(f.isString(g)||f.isFunction(g))q.easing=g;if(f.isFunction(m))q.complete=m;if(o!==a)q.nativeSupport=o}if(!f.isEmptyObject(k(d)))q.nativeSupport=false;this.config=q;if(q.nativeSupport&&F()&&f.isString(g=q.easing))if(/cubic-bezier\([\s\d.,]+\)/.test(g)||(g=e.NativeTimeFunction[g])){q.easing=g;this.transitionName=F()}if(f.isFunction(m))this.callback=m}}function y(c,d){return d}function h(c,
d){if(j.ie&&d.indexOf(C)>-1){var b=d.match(/opacity\s*:\s*([^;]+)(;|$)/);b&&i.css(c,C,parseFloat(b[1]))}c.style.cssText+=";"+d;b=k(d);for(var g in b)c[g]=b[g]}function k(c){for(var d={},b=0;b<w.length;b++){var g=w[b].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(g=c.match(RegExp(g+"\\s*:([^;]+)(;|$)")))d[w[b]]=f.trim(g[1])}return d}var x,w,C,B,D;l=l.Target;x="borderBottomWidth borderBottomStyle borderLeftWidth borderLeftStyle borderRightWidth borderRightStyle borderSpacing borderTopWidth borderTopStyle bottom fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
w=[];C="opacity";B={duration:1,easing:"easeNone",nativeSupport:true};r.PROPS=x;r.CUSTOM_ATTRS=w;r.PROP_OPS={"*":{getter:function(c,d){var b=i.css(c,d),g=parseFloat(b);b=(b+"").replace(/^[-\d.]+/,"");if(isNaN(g))return{v:b,u:"",f:y};return{v:g,u:b,f:this.interpolate}},setter:function(c,d,b){return i.css(c,d,b)},interpolate:function(c,d,b){return(c+(d-c)*b).toFixed(3)},eq:function(c,d){return c.v==d.v&&c.u==d.u}}};var u=r.PROP_OPS;f.augment(r,l,{isRunning:false,elapsedTime:0,start:0,finish:0,duration:0,
run:function(){var c=this.config,d=this.domEl,b,g=this.props,m={},o;if(!this.isRunning)if(this.fire("start")!==false){this.stop();this.duration=b=c.duration*1E3;if(this.transitionName)this._nativeRun();else{for(o in g)m[o]=(u[o]||u["*"]).getter(d,o);this.source=m;d=f.now();b=d+b;c=c.easing;if(f.isString(c))c=e[c]||e.easeNone;this.start=d;this.finish=b;this.easing=c;n.start(this)}this.isRunning=true;return this}},_complete:function(){this.fire("complete");this.callback&&this.callback()},_runFrame:function(){var c=
this.domEl,d=this.finish,b=this.start,g=this.duration,m=f.now(),o=this.source,q=this.easing,z=this.props,t;b=m-b;g=m>d?1:b/g;var p,v;this.elapsedTime=b;for(t in z){b=o[t];p=z[t];var s;s=p;var A=b,E=u[t];s=E&&E.eq?E.eq(s,A):u["*"].eq(s,A);if(!s){if(p.v==0)p.u=b.u;if(b.u!==p.u){b.v=0;b.u=p.u}s=p.f(b.v,p.v,q(g))+p.u;(u[t]||u["*"]).setter(c,t,s);if(p.f==y){b.v=p.v;b.u=p.u}}}if(this.fire("step")===false||(v=m>d)){this.stop();v&&this._complete()}},_nativeRun:function(){var c=this,d=c.domEl,b=c.duration,
g=c.config.easing,m=c.transitionName,o={};o[m+"Property"]="all";o[m+"Duration"]=b+"ms";o[m+"TimingFunction"]=g;i.css(d,o);f.later(function(){h(d,c.targetStyle)},0);f.later(function(){c.stop(true)},b)},stop:function(c){if(this.isRunning){if(this.transitionName)this._nativeStop(c);else{if(c){h(this.domEl,this.targetStyle);this._complete()}n.stop(this)}this.isRunning=false;return this}},_nativeStop:function(c){var d=this.domEl,b=this.transitionName,g=this.props,m;if(c){i.css(d,b+"Property","none");this._complete()}else{for(m in g)i.css(d,
m,i._getComputedStyle(d,m));i.css(d,b+"Property","none")}}});r.supportTransition=function(){if(D)return D;var c="transition",d,b=document.documentElement;if(b.style[c]!==a)d=c;else f.each(["Webkit","Moz","O"],function(g){if(b.style[c=g+"Transition"]!==a){d=c;return false}});return D=d};var F=r.supportTransition;return r},{requires:["dom","event","./easing","ua","./manager"]});
KISSY.add("anim/color",function(f,i,l){function e(h){h=h.toLowerCase();var k;if(k=h.match(n))return[parseInt(k[1]),parseInt(k[2]),parseInt(k[3])];else if(k=h.match(a)){for(h=1;h<k.length;h++)if(k[h].length<2)k[h]+=k[h];return[parseInt(k[1],16),parseInt(k[2],16),parseInt(k[3],16)]}if(j[h])return j[h];return[255,255,255]}var j={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],
olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255]},n=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,a=/^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i,r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),y=l.PROP_OPS;l=l.PROPS;l.push.apply(l,r);y.color={getter:function(h,k){return{v:e(i.css(h,k)),u:"",f:this.interpolate}},setter:y["*"].setter,interpolate:function(h,k,x){var w=
y["*"].interpolate;return"rgb("+[Math.floor(w(h[0],k[0],x)),Math.floor(w(h[1],k[1],x)),Math.floor(w(h[2],k[2],x))].join(", ")+")"},eq:function(h,k){return h.v+""==k.v+""}};f.each(r,function(h){y[h]=y.color})},{requires:["dom","./base"]});
KISSY.add("anim/easing",function(){var f=Math,i=f.PI,l=f.pow,e=f.sin,j=1.70158,n={easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;return-(l(2,10*(a-=1))*e((a-0.075)*2*i/0.3))},elasticOut:function(a){if(a===
0||a===1)return a;return l(2,-10*a)*e((a-0.075)*2*i/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*l(2,10*(a-=1))*e((a-0.1125)*2*i/0.45);return l(2,-10*(a-=1))*e((a-0.1125)*2*i/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((j+1)*a-j)},backOut:function(a){return(a-=1)*a*((j+1)*a+j)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((j*=1.525)+1)*a-j);return 0.5*((a-=2)*a*(((j*=1.525)+1)*a+j)+2)},bounceIn:function(a){return 1-n.bounceOut(1-a)},bounceOut:function(a){return a<
1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return n.bounceIn(a*2)*0.5;return n.bounceOut(a*2-1)*0.5+0.5}};n.NativeTimeFunction={easeNone:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeBoth:"ease-in-out",easeInStrong:"cubic-bezier(0.9, 0.0, 0.9, 0.5)",easeOutStrong:"cubic-bezier(0.1, 0.5, 0.1, 1.0)",easeBothStrong:"cubic-bezier(0.9, 0.0, 0.1, 1.0)"};return n});
KISSY.add("anim/manager",function(f){function i(e){e[l]=e[l]||f.guid("anim-");return e[l]}var l=f.guid("anim-");return{interval:20,runnings:{},timer:null,start:function(e){var j=i(e);if(!this.runnings[j]){this.runnings[j]=e;this.startTimer()}},stop:function(e){this.notRun(e)},notRun:function(e){delete this.runnings[i(e)];f.isEmptyObject(this.runnings)&&this.stopTimer()},pause:function(e){this.notRun(e)},resume:function(e){this.start(e)},startTimer:function(){var e=this;if(!e.timer)e.timer=setTimeout(function(){if(e.runFrames())e.stopTimer();
else{e.timer=null;e.startTimer()}},e.interval)},stopTimer:function(){var e=this.timer;if(e){clearTimeout(e);this.timer=null}},runFrames:function(){var e=true,j=this.runnings,n;for(n in j)if(j.hasOwnProperty(n)){e=false;j[n]._runFrame()}return e}}});KISSY.add("anim/scroll",function(f,i,l){var e=l.PROP_OPS;l.CUSTOM_ATTRS.push("scrollLeft","scrollTop");e.scrollLeft=e.scrollTop={getter:function(j,n){return{v:j[n],u:"",f:e["*"].interpolate}},setter:function(j,n,a){j[n]=a}}},{requires:["dom","./base"]});
KISSY.add("anim",function(f,i,l){i.Easing=l;return i},{requires:["anim/base","anim/easing","anim/color","anim/scroll"]});
