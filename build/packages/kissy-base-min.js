/*
Copyright 2010, KISSY UI Library v1.0.4
MIT Licensed
build: 480 Mar 11 14:06
*/
KISSY.add("datalazyload",function(l,p){function n(f,a){var b=this;if(!(b instanceof n))return new n(f,a);if(a===p){a=f;f=[c]}m.isArray(f)||(f=[i.get(f)||c]);b.containers=f;b.config=l.merge(h,a||{});b.callbacks={els:[],fns:[]};b._init()}var r=YAHOO.util,i=r.Dom,k=r.Event,m=YAHOO.lang,j=window,c=document,e={AUTO:"auto",MANUAL:"manual"},h={mod:e.MANUAL,diff:"default",placeholder:"http://a.tbcdn.cn/kissy/1.0.4/build/datalazyload/dot.gif"};l.mix(n.prototype,{_init:function(){var f=this;f.threshold=f._getThreshold();
f._filterItems();f._getItemsLength()&&f._initLoadEvent()},_initLoadEvent:function(){function f(){b||(b=setTimeout(function(){a();b=null},100))}function a(){d._loadItems();if(d._getItemsLength()===0){k.removeListener(j,"scroll",f);k.removeListener(j,"resize",f)}}var b,d=this;k.on(j,"scroll",f);k.on(j,"resize",function(){d.threshold=d._getThreshold();f()});d._getItemsLength()&&k.onDOMReady(function(){a()})},_filterItems:function(){var f=this,a=f.containers,b=f.threshold,d=f.config.placeholder,g=f.config.mod===
e.MANUAL,o,s,u,q,v,t,w,x=[],y=[];o=0;for(s=a.length;o<s;++o){u=a[o].getElementsByTagName("img");q=0;for(v=u.length;q<v;++q){t=u[q];w=t.getAttribute("data-lazyload-src");if(g){if(w){t.src=d;x.push(t)}}else if(i.getY(t)>b&&!w){t.setAttribute("data-lazyload-src",t.src);t.src=d;x.push(t)}}u=a[o].getElementsByTagName("textarea");q=0;for(v=u.length;q<v;++q){t=u[q];i.hasClass(t,"ks-datalazyload")&&y.push(t)}}f.images=x;f.areaes=y},_loadItems:function(){var f=this;f._loadImgs();f._loadAreaes();f._fireCallbacks()},
_loadImgs:function(){var f=this,a=f.images,b=i.getDocumentScrollTop();b=f.threshold+b;var d,g,o=[];for(d=0;g=a[d++];)i.getY(g)<=b?f._loadImgSrc(g):o.push(g);f.images=o},_loadImgSrc:function(f,a){a=a||"data-lazyload-src";var b=f.getAttribute(a);if(b&&f.src!=b){f.src=b;f.removeAttribute(a)}},_loadAreaes:function(){var f=this,a=f.areaes,b=i.getDocumentScrollTop();b=f.threshold+b;var d,g,o,s=[];for(d=0;g=a[d++];){o=g.parentNode;i.getY(o)<=b?f._loadDataFromArea(o,g):s.push(g)}f.areaes=s},_loadDataFromArea:function(f,
a){var b=document.createElement("DIV");b.innerHTML=a.value;a.style.display="none";a.className="";f.appendChild(b)},_fireCallbacks:function(){var f=this,a=f.callbacks,b=a.els,d=a.fns,g=i.getDocumentScrollTop();f=f.threshold+g;var o,s,u=[],q=[];for(g=0;(o=b[g])&&(s=d[g++]);)if(i.getY(o)<=f)s.call(o);else{u.push(o);q.push(s)}a.els=u;a.fns=q},addCallback:function(f,a){if((f=i.get(f))&&typeof a==="function"){this.callbacks.els.push(f);this.callbacks.fns.push(a)}},_getThreshold:function(){var f=this.config.diff,
a=i.getViewportHeight();return f==="default"?2*a:a+f},_getItemsLength:function(){var f=this;return f.images.length+f.areaes.length+f.callbacks.els.length},loadCustomLazyData:function(f,a,b){var d=this,g,o;m.isArray(f)||(f=[i.get(f)]);l.each(f,function(s){switch(a){case "textarea-data":if((g=s.getElementsByTagName("textarea")[0])&&i.hasClass(g,b||"ks-datalazyload-custom"))d._loadDataFromArea(s,g);break;default:o=s.nodeName==="IMG"?[s]:s.getElementsByTagName("img");s=0;for(var u=o.length;s<u;s++)d._loadImgSrc(o[s],
b||"data-lazyload-src-custom")}})}});l.mix(n,n.prototype,true,["loadCustomLazyData","_loadImgSrc","_loadDataFromArea"]);l.DataLazyload=n});
KISSY.add("suggest",function(l,p){function n(a,b,d){var g=this;if(!(g instanceof n))return new n(a,b,d);g.textInput=i.get(a);g.dataSource=b;g.JSONDataSource=m.isObject(b)?b:null;g.returnedData=null;g.config=m.merge(f,d||{});g.container=null;g.query="";g.queryParams="";g._timer=null;g._isRunning=false;g.dataScript=null;g._dataCache={};g._latestScriptTime="";g._scriptDataIsOut=false;g._onKeyboardSelecting=false;g.selectedItem=null;g._init()}var r=YAHOO.util,i=r.Dom,k=r.Event,m=YAHOO.lang,j=window,c=
document,e=c.getElementsByTagName("head")[0],h=YAHOO.env.ua.ie,f={containerClass:"",containerWidth:"auto",resultFormat:"Լ%result%�����",showCloseBtn:false,closeBtnText:"�ر�",useShim:h===6,timerDelay:200,autoFocus:false,submitFormOnClickSelect:true};l.mix(n.prototype,{_init:function(){var a=this;a._initTextInput();a._initContainer();a.config.useShim&&a._initShim();a._initStyle();a.createEvent("beforeDataRequest");a.createEvent("onDataReturn");a.createEvent("beforeShow");a.createEvent("onItemSelect");
a._initResizeEvent()},_initTextInput:function(){var a=this;a.textInput.setAttribute("autocomplete","off");k.on(a.textInput,"blur",function(){a.stop();a.hide()});a.config.autoFocus&&a.textInput.focus();var b=0;k.on(a.textInput,"keydown",function(d){d=d.keyCode;switch(d){case 27:a.hide();a.textInput.value=a.query;break;case 13:a.textInput.blur();a._onKeyboardSelecting&&a.textInput.value==a._getSelectedItemKey()&&a.fireEvent("onItemSelect",a.textInput.value);a._submitForm();break;case 40:case 38:if(b++==
0){a._isRunning&&a.stop();a._onKeyboardSelecting=true;a.selectItem(d==40)}else if(b==3)b=0;break}if(d!=40&&d!=38){a._isRunning||a.start();a._onKeyboardSelecting=false}});k.on(a.textInput,"keyup",function(){b=0})},_initContainer:function(){var a=c.createElement("div"),b=this.config.containerClass;a.className="suggest-container";if(b)a.className+=" "+b;a.style.position="absolute";a.style.visibility="hidden";this.container=a;this._setContainerRegion();this._initContainerEvent();c.body.insertBefore(a,
c.body.firstChild)},_setContainerRegion:function(){var a=this,b=i.getRegion(a.textInput),d=b.left,g=b.right-d-2;g=g>0?g:0;if(c.documentMode===7&&(h===7||h===8))d-=2;else YAHOO.env.ua.gecko&&d++;a.container.style.left=d+"px";a.container.style.top=b.bottom+"px";a.container.style.width=a.config.containerWidth=="auto"?g+"px":a.config.containerWidth},_initContainerEvent:function(){var a=this;k.on(a.container,"mousemove",function(d){d=k.getTarget(d);if(d.nodeName!="LI")d=i.getAncestorByTagName(d,"li");
if(i.isAncestor(a.container,d))if(d!=a.selectedItem){a._removeSelectedItem();a._setSelectedItem(d)}});var b=null;a.container.onmousedown=function(d){d=d||j.event;b=d.target||d.srcElement;a.textInput.onbeforedeactivate=function(){j.event.returnValue=false;a.textInput.onbeforedeactivate=null};return false};k.on(a.container,"mouseup",function(d){if(a._isInContainer(k.getXY(d))){d=k.getTarget(d);if(d==b)if(d.className=="suggest-close-btn")a.hide();else{if(d.nodeName!="LI")d=i.getAncestorByTagName(d,"li");
if(i.isAncestor(a.container,d)){a._updateInputFromSelectItem(d);a.fireEvent("onItemSelect",a.textInput.value);a.textInput.blur();a._submitForm()}}}})},_submitForm:function(){if(this.config.submitFormOnClickSelect){var a=this.textInput.form;if(a){if(c.createEvent){var b=c.createEvent("MouseEvents");b.initEvent("submit",true,false);a.dispatchEvent(b)}else c.createEventObject&&a.fireEvent("onsubmit");a.submit()}}},_isInContainer:function(a){var b=i.getRegion(this.container);return a[0]>=b.left&&a[0]<=
b.right&&a[1]>=b.top&&a[1]<=b.bottom},_initShim:function(){var a=c.createElement("iframe");a.src="about:blank";a.className="suggest-shim";a.style.position="absolute";a.style.visibility="hidden";a.style.border="none";this.container.shim=a;this._setShimRegion();c.body.insertBefore(a,c.body.firstChild)},_setShimRegion:function(){var a=this.container,b=a.shim;if(b){b.style.left=parseInt(a.style.left)-2+"px";b.style.top=a.style.top;b.style.width=parseInt(a.style.width)+2+"px"}},_initStyle:function(){var a=
i.get("suggest-style");if(!a){a=c.createElement("style");a.id="suggest-style";e.appendChild(a);if(a.styleSheet)a.styleSheet.cssText=".suggest-container{background:white;border:1px solid #999;z-index:99999}.suggest-shim{z-index:99998}.suggest-container li{color:#404040;padding:1px 0 2px;font-size:12px;line-height:18px;float:left;width:100%}.suggest-container li.selected{background-color:#39F;cursor:default}.suggest-key{float:left;text-align:left;padding-left:5px}.suggest-result{float:right;text-align:right;padding-right:5px;color:green}.suggest-container li.selected span{color:#FFF;cursor:default}.suggest-bottom{padding:0 5px 5px}.suggest-close-btn{float:right}.suggest-container li,.suggest-bottom{overflow:hidden;zoom:1;clear:both}.suggest-container{*margin-left:2px;_margin-left:-2px;_margin-top:-3px}";
else a.appendChild(c.createTextNode(".suggest-container{background:white;border:1px solid #999;z-index:99999}.suggest-shim{z-index:99998}.suggest-container li{color:#404040;padding:1px 0 2px;font-size:12px;line-height:18px;float:left;width:100%}.suggest-container li.selected{background-color:#39F;cursor:default}.suggest-key{float:left;text-align:left;padding-left:5px}.suggest-result{float:right;text-align:right;padding-right:5px;color:green}.suggest-container li.selected span{color:#FFF;cursor:default}.suggest-bottom{padding:0 5px 5px}.suggest-close-btn{float:right}.suggest-container li,.suggest-bottom{overflow:hidden;zoom:1;clear:both}.suggest-container{*margin-left:2px;_margin-left:-2px;_margin-top:-3px}"))}},
_initResizeEvent:function(){var a=this,b;k.on(j,"resize",function(){b&&clearTimeout(b);b=setTimeout(function(){a._setContainerRegion();a._setShimRegion()},50)})},start:function(){var a=this;n.focusInstance=a;a._timer=setTimeout(function(){a.updateContent();a._timer=setTimeout(arguments.callee,a.config.timerDelay)},a.config.timerDelay);a._isRunning=true},stop:function(){n.focusInstance=null;clearTimeout(this._timer);this._isRunning=false},show:function(){if(!this.isVisible()){var a=this.container,
b=a.shim;a.style.visibility="";if(b){if(!b.style.height){a=i.getRegion(a);b.style.height=a.bottom-a.top-2+"px"}b.style.visibility=""}}},hide:function(){if(this.isVisible()){var a=this.container,b=a.shim;if(b)b.style.visibility="hidden";a.style.visibility="hidden"}},isVisible:function(){return this.container.style.visibility!="hidden"},updateContent:function(){var a=this;if(a._needUpdate()){a._updateQueryValueFromInput();var b=a.query;if(m.trim(b).length)if(a._dataCache[b]!==p){a.returnedData="using cache";
a._fillContainer(a._dataCache[b]);a._displayContainer()}else a.JSONDataSource?a.handleResponse(a.JSONDataSource[b]):a.requestData();else{a._fillContainer("");a.hide()}}},_needUpdate:function(){return this.textInput.value!=this.query},requestData:function(){var a=this;if(!h)a.dataScript=null;if(!a.dataScript){var b=c.createElement("script");b.type="text/javascript";b.charset="utf-8";e.insertBefore(b,e.firstChild);a.dataScript=b;if(!h){var d=(new Date).getTime();a._latestScriptTime=d;b.setAttribute("time",
d);k.on(b,"load",function(){a._scriptDataIsOut=b.getAttribute("time")!=a._latestScriptTime})}}a.queryParams="q="+encodeURIComponent(a.query)+"&code=utf-8&callback=g_ks_suggest_callback";a.fireEvent("beforeDataRequest",a.query);a.dataScript.src=a.dataSource+"?"+a.queryParams},handleResponse:function(a){var b=this;if(!b._scriptDataIsOut){b.returnedData=a;b.fireEvent("onDataReturn",a);b.returnedData=b.formatData(b.returnedData);var d="";a=b.returnedData.length;if(a>0){d=c.createElement("ol");for(var g=
0;g<a;++g){var o=b.returnedData[g],s=b.formatItem(o.key,o.result);s.setAttribute("key",o.key);d.appendChild(s)}d=d}b._fillContainer(d);a>0&&b.appendBottom();m.trim(b.container.innerHTML)&&b.fireEvent("beforeShow",b.container);b._dataCache[b.query]=b.container.innerHTML;b._displayContainer()}},formatData:function(a){var b=[];if(!a)return b;if(m.isArray(a.result))a=a.result;var d=a.length;if(!d)return b;for(var g,o=0;o<d;++o){g=a[o];b[o]=m.isString(g)?{key:g}:m.isArray(g)&&g.length>=2?{key:g[0],result:g[1]}:
g}return b},formatItem:function(a,b){var d=c.createElement("li"),g=c.createElement("span");g.className="suggest-key";g.appendChild(c.createTextNode(a));d.appendChild(g);if(b!==p){a=this.config.resultFormat.replace("%result%",b);if(m.trim(a)){b=c.createElement("span");b.className="suggest-result";b.appendChild(c.createTextNode(a));d.appendChild(b)}}return d},appendBottom:function(){var a=c.createElement("div");a.className="suggest-bottom";if(this.config.showCloseBtn){var b=c.createElement("a");b.href=
"javascript: void(0)";b.setAttribute("target","_self");b.className="suggest-close-btn";b.appendChild(c.createTextNode(this.config.closeBtnText));a.appendChild(b)}m.trim(a.innerHTML)&&this.container.appendChild(a)},_fillContainer:function(a){if(a.nodeType==1){this.container.innerHTML="";this.container.appendChild(a)}else this.container.innerHTML=a;this.selectedItem=null},_displayContainer:function(){l.trim(this.container.innerHTML)?this.show():this.hide()},selectItem:function(a){var b=this,d=b.container.getElementsByTagName("li");
if(d.length!=0)if(b.isVisible()){if(b.selectedItem){a=i[a?"getNextSibling":"getPreviousSibling"](b.selectedItem);if(!a)b.textInput.value=b.query}else a=d[a?0:d.length-1];b._removeSelectedItem();if(a){b._setSelectedItem(a);b._updateInputFromSelectItem()}}else b.show()},_removeSelectedItem:function(){i.removeClass(this.selectedItem,"selected");this.selectedItem=null},_setSelectedItem:function(a){i.addClass(a,"selected");this.selectedItem=a},_getSelectedItemKey:function(){if(!this.selectedItem)return"";
return this.selectedItem.getAttribute("key")},_updateQueryValueFromInput:function(){this.query=this.textInput.value},_updateInputFromSelectItem:function(){this.textInput.value=this._getSelectedItemKey(this.selectedItem)}});l.augment(n,r.EventProvider);j.g_ks_suggest_callback=function(a){n.focusInstance&&setTimeout(function(){n.focusInstance.handleResponse(a)},0)};l.Suggest=n});
KISSY.add("switchable",function(l,p){function n(c,e){var h=this;e=e||{};if(!("mackupType"in e))if(e.panelCls)e.mackupType=1;else if(e.panels)e.mackupType=2;e=l.merge(n.Config,e);h.container=l.get(c);h.config=e;h.triggers=h.triggers||[];h.panels=h.panels||[];if(h.activeIndex===p)h.activeIndex=e.activeIndex;h._init()}var r=YAHOO.util,i=r.Dom,k=r.Event,m=YAHOO.lang,j=document;n.Config={mackupType:0,navCls:"ks-switchable-nav",contentCls:"ks-switchable-content",triggerCls:"ks-switchable-trigger",panelCls:"ks-switchable-panel",
triggers:[],panels:[],hasTriggers:true,triggerType:"mouse",delay:0.1,activeIndex:0,activeTriggerCls:"active",steps:1,viewSize:[]};n.Plugins=[];l.mix(n.prototype,{_init:function(){var c=this,e=c.config;c.panels.length===0&&c._parseMackup();c.createEvent("beforeSwitch");c.createEvent("onSwitch");e.hasTriggers&&c._bindTriggers();l.each(n.Plugins,function(h){h.init&&h.init(c)})},_parseMackup:function(){var c=this,e=c.container,h=c.config,f=h.hasTriggers,a,b=[],d=[];switch(h.mackupType){case 0:if(a=l.get("."+
h.navCls,e))b=i.getChildren(a);a=l.get("."+h.contentCls,e);d=i.getChildren(a);break;case 1:b=l.query("."+h.triggerCls,e);d=l.query("."+h.panelCls,e);break;case 2:b=h.triggers;d=h.panels;break}e=d.length;c.length=e/h.steps;if(f&&e>0&&b.length===0)b=c._generateTriggersMackup(c.length);if(f){h=0;for(f=b.length;h<f;h++)c.triggers.push(b[h])}for(h=0;h<e;h++)c.panels.push(d[h]);c.content=a||d[0].parentNode},_generateTriggersMackup:function(c){var e=this,h=e.config,f=j.createElement("UL"),a,b;f.className=
h.navCls;for(b=0;b<c;b++){a=j.createElement("LI");if(b===e.activeIndex)a.className=h.activeTriggerCls;a.innerHTML=b+1;f.appendChild(a)}e.container.appendChild(f);return i.getChildren(f)},_bindTriggers:function(){var c=this,e=c.config,h=c.triggers,f,a,b=h.length;for(a=0;a<b;a++)(function(d){f=h[d];k.on(f,"click",function(){c._onFocusTrigger(d)});k.on(f,"focus",function(){c._onFocusTrigger(d)});if(e.triggerType==="mouse"){k.on(f,"mouseenter",function(){c._onMouseEnterTrigger(d)});k.on(f,"mouseleave",
function(){c._onMouseLeaveTrigger(d)})}})(a)},_onFocusTrigger:function(c){var e=this;if(e.activeIndex!==c){e.switchTimer&&e.switchTimer.cancel();e.switchTo(c)}},_onMouseEnterTrigger:function(c){var e=this;if(e.activeIndex!==c)e.switchTimer=m.later(e.config.delay*1E3,e,function(){e.switchTo(c)})},_onMouseLeaveTrigger:function(){var c=this;c.switchTimer&&c.switchTimer.cancel()},switchTo:function(c,e){var h=this,f=h.config,a=h.triggers,b=h.panels,d=h.activeIndex,g=f.steps,o=d*g,s=c*g;if(c===d)return h;
if(!h.fireEvent("beforeSwitch",c))return h;if(f.hasTriggers)h._switchTrigger(d>-1?a[d]:null,a[c]);if(e===p)e=c>d?"forward":"forward";h._switchView(b.slice(o,o+g),b.slice(s,s+g),c,e);h.activeIndex=c;return h},_switchTrigger:function(c,e){var h=this.config.activeTriggerCls;c&&i.removeClass(c,h);i.addClass(e,h)},_switchView:function(c,e,h){i.setStyle(c,"display","none");i.setStyle(e,"display","block");this.fireEvent("onSwitch",h)},prev:function(){var c=this,e=c.activeIndex;c.switchTo(e>0?e-1:c.length-
1,"backward")},next:function(){var c=this,e=c.activeIndex;c.switchTo(e<c.length-1?e+1:0,"forward")}});l.augment(n,r.EventProvider);l.Switchable=n});
KISSY.add("switchable-autoplay",function(l){var p=YAHOO.util.Event,n=YAHOO.lang,r=l.Switchable;l.mix(r.Config,{autoplay:false,interval:5,pauseOnHover:true});r.Plugins.push({name:"autoplay",init:function(i){var k=i.config;if(k.autoplay){if(k.pauseOnHover){p.on(i.container,"mouseenter",function(){i.paused=true});p.on(i.container,"mouseleave",function(){setTimeout(function(){i.paused=false},k.interval*1E3)})}i.autoplayTimer=n.later(k.interval*1E3,i,function(){i.paused||i.switchTo(i.activeIndex<i.length-
1?i.activeIndex+1:0)},null,true)}}})});
KISSY.add("switchable-effect",function(l){var p=YAHOO.util,n=p.Dom,r=l.Switchable,i;l.mix(r.Config,{effect:"none",duration:0.5,easing:p.Easing.easeNone});r.Effects={none:function(k,m,j){n.setStyle(k,"display","none");n.setStyle(m,"display","block");j()},fade:function(k,m,j){if(k.length!==1)throw new Error("fade effect only supports steps == 1.");var c=this,e=c.config,h=k[0],f=m[0];c.anim&&c.anim.stop();n.setStyle(f,"opacity",1);c.anim=new p.Anim(h,{opacity:{to:0}},e.duration,e.easing);c.anim.onComplete.subscribe(function(){c.anim=
null;n.setStyle(f,"z-index",9);n.setStyle(h,"z-index",1);j()});c.anim.animate()},scroll:function(k,m,j,c){var e=this;k=e.config;m=k.effect==="scrollx";var h={};h[m?"left":"top"]={to:-(e.viewSize[m?0:1]*c)};e.anim&&e.anim.stop();e.anim=new p.Anim(e.content,h,k.duration,k.easing);e.anim.onComplete.subscribe(function(){e.anim=null;j()});e.anim.animate()}};i=r.Effects;i.scrollx=i.scrolly=i.scroll;r.Plugins.push({name:"effect",init:function(k){var m=k.config,j=m.effect,c=k.panels,e=m.steps,h=k.activeIndex*
e,f=h+e-1,a=c.length;k.viewSize=[m.viewSize[0]||c[0].offsetWidth*e,m.viewSize[0]||c[0].offsetHeight*e];if(j!=="none"){for(m=0;m<a;m++)c[m].style.display="block";switch(j){case "scrollx":case "scrolly":k.content.style.position="absolute";k.content.parentNode.style.position="relative";if(j==="scrollx"){n.setStyle(c,"float","left");k.content.style.width=k.viewSize[0]*(a/e)+"px"}break;case "fade":for(m=0;m<a;m++){n.setStyle(c[m],"opacity",m>=h&&m<=f?1:0);c[m].style.position="absolute";c[m].style.zIndex=
m>=h&&m<=f?9:1}break}}}});l.mix(r.prototype,{_switchView:function(k,m,j,c){var e=this,h=e.config.effect;(typeof h==="function"?h:i[h]).call(e,k,m,function(){e.fireEvent("onSwitch",j)},j,c)}})});
KISSY.add("switchable-circular",function(l){function p(d,g,o,s,u){var q=this;d=q.config;g=q.length;var v=q.activeIndex,t=d.scrollType===a,w=t?m:j,x=q.viewSize[t?0:1];t=-x*s;var y={},A,z=u===f;if(A=z&&v===0&&s===g-1||u===h&&v===g-1&&s===0)t=n.call(q,q.panels,s,z,w,x);y[w]={to:t};q.anim&&q.anim.stop();q.anim=new i.Anim(q.content,y,d.duration,d.easing);q.anim.onComplete.subscribe(function(){A&&r.call(q,q.panels,s,z,w,x);q.anim=null;o()});q.anim.animate()}function n(d,g,o,s,u){var q=this;g=q.config.steps;
q=q.length;var v=o?q-1:0,t=(v+1)*g;for(g=v*g;g<t;g++){d[g].style.position=k;d[g].style[s]=(o?"-":e)+u*q+c}return o?u:-u*q}function r(d,g,o,s,u){g=this;var q=g.config.steps,v=g.length,t=o?v-1:0,w=(t+1)*q;for(q=t*q;q<w;q++){d[q].style.position=e;d[q].style[s]=e}g.content.style[s]=o?-u*(v-1)+c:e}var i=YAHOO.util,k="relative",m="left",j="top",c="px",e="",h="forward",f="backward",a="scrollx",b=l.Switchable;l.mix(b.Config,{circular:false});b.Plugins.push({name:"circular",init:function(d){d=d.config;if(d.circular&&
(d.effect===a||d.effect==="scrolly")){d.scrollType=d.effect;d.effect=p}}})});
KISSY.add("switchable-lazyload",function(l){var p=YAHOO.util.Dom,n="beforeSwitch",r="img-src",i="textarea-data",k={},m=l.Switchable,j=l.DataLazyload;k[r]="data-lazyload-src-custom";k[i]="ks-datalazyload-custom";l.mix(m.Config,{lazyDataType:"",lazyDataFlag:""});m.Plugins.push({name:"autoplay",init:function(c){function e(d){var g=f.steps;d*=g;j.loadCustomLazyData(c.panels.slice(d,d+g),a,b);h()&&c.unsubscribe(n,e)}function h(){var d,g,o;if(a===r){d=c.container.getElementsByTagName("img");g=0;for(o=d.length;g<
o;g++)if(d[g].getAttribute(b))return false}else if(a===i){d=c.container.getElementsByTagName("textarea");g=0;for(o=d.length;g<o;g++)if(p.hasClass(d[g],b))return false}return true}var f=c.config,a=f.lazyDataType,b=f.lazyDataFlag||k[a];!j||!a||!b||c.subscribe(n,e)}})});KISSY.add("tabs",function(l){function p(n,r){var i=this;if(!(i instanceof p))return new p(n,r);p.superclass.constructor.call(i,n,r)}l.extend(p,l.Switchable);l.Tabs=p});
KISSY.add("slide",function(l){function p(r,i){var k=this;if(!(k instanceof p))return new p(r,i);i=l.merge(n,i||{});p.superclass.constructor.call(k,r,i)}var n={autoplay:true,circular:true};l.extend(p,l.Switchable);l.Slide=p});KISSY.add("carousel",function(l){function p(r,i){var k=this;if(!(k instanceof p))return new p(r,i);i=l.merge(n,i||{});p.superclass.constructor.call(k,r,i)}var n={circular:true};l.extend(p,l.Switchable);l.Carousel=p});
KISSY.add("megamenu",function(l){function p(j,c){var e=this;if(!(e instanceof p))return new p(j,c);c=l.merge(m,c||{});p.superclass.constructor.call(e,j,c);e._initView();e.config.showCloseBtn&&e._initCloseBtn()}var n=YAHOO.util,r=n.Dom,i=n.Event,k=YAHOO.lang,m={hideDelay:0.5,viewCls:"ks-megamenu-view",closeBtnCls:"ks-megamenu-closebtn",showCloseBtn:true,activeIndex:-1};l.extend(p,l.Switchable);l.mix(p.prototype,{_onFocusTrigger:function(j){var c=this;if(c.activeIndex!==j){c.switchTimer&&c.switchTimer.cancel();
c.hideTimer&&c.hideTimer.cancel();c.switchTo(j)}},_onMouseEnterTrigger:function(j){var c=this;c.hideTimer&&c.hideTimer.cancel();c.switchTimer=k.later(c.config.delay*1E3,c,function(){c.switchTo(j)})},_onMouseLeaveTrigger:function(){var j=this;j.switchTimer&&j.switchTimer.cancel();j.hideTimer=k.later(j.config.hideDelay*1E3,j,function(){j.hide()})},_initView:function(){var j=this,c=j.config,e=r.getElementsByClassName(c.viewCls,"*",j.container)[0];if(!e){e=document.createElement("DIV");e.className=c.viewCls;
j.container.appendChild(e)}i.on(e,"mouseenter",function(){j.hideTimer&&j.hideTimer.cancel()});i.on(e,"mouseleave",function(){j.hideTimer=k.later(c.hideDelay*1E3,j,"hide")});j.viewContent=e;j.view=e},_initCloseBtn:function(){var j=this,c,e=j.view;e.innerHTML="<span class='{hook_cls}'></span>".replace("{hook_cls}",j.config.closeBtnCls);i.on(e.firstChild,"click",function(){j.hide()});c=document.createElement("div");e.appendChild(c);j.viewContent=c},_switchView:function(j,c,e){j=this;j.view.style.display=
"block";j.viewContent.innerHTML=c[0].innerHTML;j.fireEvent("onSwitch",e)},hide:function(){var j=this;r.removeClass(j.triggers[j.activeIndex],j.config.activeTriggerCls);j.view.style.display="none";j.activeIndex=-1}});l.MegaMenu=p});