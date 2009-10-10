/*
Copyright (c) 2009, Kissy UI Library. All rights reserved.
MIT Licensed.
http://kissy.googlecode.com/

Date: 2009-10-10 23:29:46
Revision: 185
*/
var KISSY=window.KISSY||{};KISSY.Editor=function(a,b){var c=KISSY.Editor;if(!(this instanceof c)){return new c(a,b)}else{if(!c._isReady){c._setup()}return new c.Instance(a,b)}};(function(b){var a=YAHOO.lang;a.augmentObject(b,{version:"0.1",lang:{},mods:{},plugins:{},add:function(c,e,d){this.mods[c]={name:c,fn:e,details:d||{}};return this},addPlugin:function(f,j){var d=typeof f=="string"?[f]:f,e=this.plugins,h,g,c;for(g=0,c=d.length;g<c;++g){h=d[g];if(!e[h]){e[h]=a.merge(j,{name:h})}}},_isReady:false,_setup:function(){this._loadModules();this._isReady=true},_attached:{},_loadModules:function(){var f=this.mods,e=this._attached,d,c;for(d in f){c=f[d];if(!e[d]&&c){e[d]=c;if(c.fn){c.fn(this)}}}}})})(KISSY.Editor);KISSY.Editor.add("config",function(a){a.config={base:"",language:"en",theme:"default",toolbar:["undo","redo","fontName","fontSize","bold","italic","underline","strikeThrough","foreColor","backColor","","link","smiley","image","blockquote","","insertOrderedList","insertUnorderedList","outdent","indent","justifyLeft","justifyCenter","justifyRight","","removeformat","maximize","source"],statusbar:["wordcount","resize"],pluginsConfig:{}}});KISSY.Editor.add("lang~en",function(a){a.lang.en={source:{text:"Source",title:"Source"},undo:{text:"Undo",title:"Undo (Ctrl+Z)"},redo:{text:"Redo",title:"Redo (Ctrl+Y)"},fontName:{text:"Font Name",title:"Font",options:{Default:"Arial",Arial:"Arial","Times New Roman":"Times New Roman","Arial Black":"Arial Black","Arial Narrow":"Arial Narrow","Comic Sans MS":"Comic Sans MS","Courier New":"Courier New",Garamond:"Garamond",Georgia:"Georgia",Tahoma:"Tahoma","Trebuchet MS":"Trebuchet MS",Verdana:"Verdana"}},fontSize:{text:"Font Size",title:"Font size",options:{Default:"2","8":"1","10":"2","12":"3","14":"4","18":"5","24":"6","36":"7"}},bold:{text:"Bold",title:"Bold (Ctrl+B)"},italic:{text:"Italic",title:"Italick (Ctrl+I)"},underline:{text:"Underline",title:"Underline (Ctrl+U)"},strikeThrough:{text:"Strikeout",title:"Strikeout"},link:{text:"Link",title:"Insert/Edit link",href:"URL:",target:"Open link in new window",remove:"Remove link"},blockquote:{text:"Blockquote",title:"Insert blockquote"},smiley:{text:"Smiley",title:"Insert smiley"},image:{text:"Image",title:"Insert image",tab_link:"Web Image",tab_local:"Local Image",tab_album:"Album Image",label_link:"Enter image web address:",label_local:"Browse your computer for the image file to upload:",label_album:"Select the image from your album:",ok:"Insert"},insertOrderedList:{text:"Numbered List",title:"Numbered List (Ctrl+7)"},insertUnorderedList:{text:"Bullet List",title:"Bullet List (Ctrl+8)"},outdent:{text:"Decrease Indent",title:"Decrease Indent"},indent:{text:"Increase Indent",title:"Increase Indent"},justifyLeft:{text:"Left Justify",title:"Left Justify (Ctrl+L)"},justifyCenter:{text:"Center Justify",title:"Center Justify (Ctrl+E)"},justifyRight:{text:"Right Justify",title:"Right Justify (Ctrl+R)"},foreColor:{text:"Text Color",title:"Text Color"},backColor:{text:"Text Background Color",title:"Text Background Color"},maximize:{text:"Maximize",title:"Maximize"},removeformat:{text:"Remove Format",title:"Remove Format"},wordcount:{tmpl:"Remain %remain% words (include html code)"},resize:{larger_text:"Larger",larger_title:"Enlarge the editor",smaller_text:"Smaller",smaller_title:"Shrink the editor"},common:{ok:"OK",cancel:"Cancel"}}});KISSY.Editor.add("lang~zh-cn",function(a){a.lang["zh-cn"]={source:{text:"\u6e90\u7801",title:"\u6e90\u7801"},undo:{text:"\u64a4\u9500",title:"\u64a4\u9500"},redo:{text:"\u91cd\u505a",title:"\u91cd\u505a"},fontName:{text:"\u5b57\u4f53",title:"\u5b57\u4f53",options:{Default:"\u5b8b\u4f53","\u5b8b\u4f53":"\u5b8b\u4f53","\u9ed1\u4f53":"\u9ed1\u4f53","\u96b6\u4e66":"\u96b6\u4e66","\u6977\u4f53":"\u6977\u4f53_GB2312","\u5fae\u8f6f\u96c5\u9ed1":"\u5fae\u8f6f\u96c5\u9ed1",Georgia:"Georgia","Times New Roman":"Times New Roman",Impact:"Impact","Courier New":"Courier New",Verdana:"Verdana"}},fontSize:{text:"\u5927\u5c0f",title:"\u5927\u5c0f",options:{Default:"2","8":"1","10":"2","12":"3","14":"4","18":"5","24":"6","36":"7"}},bold:{text:"\u7c97\u4f53",title:"\u7c97\u4f53"},italic:{text:"\u659c\u4f53",title:"\u659c\u4f53"},underline:{text:"\u4e0b\u5212\u7ebf",title:"\u4e0b\u5212\u7ebf"},strikeThrough:{text:"\u5220\u9664\u7ebf",title:"\u5220\u9664\u7ebf"},link:{text:"\u94fe\u63a5",title:"\u63d2\u5165/\u7f16\u8f91\u94fe\u63a5",href:"URL:",target:"\u5728\u65b0\u7a97\u53e3\u6253\u5f00\u94fe\u63a5",remove:"\u79fb\u9664\u94fe\u63a5"},blockquote:{text:"\u5f15\u7528",title:"\u5f15\u7528"},smiley:{text:"\u8868\u60c5",title:"\u63d2\u5165\u8868\u60c5"},image:{text:"\u56fe\u7247",title:"\u63d2\u5165\u56fe\u7247",tab_link:"\u7f51\u7edc\u56fe\u7247",tab_local:"\u672c\u5730\u4e0a\u4f20",tab_album:"\u6211\u7684\u76f8\u518c",label_link:"\u8bf7\u8f93\u5165\u56fe\u7247\u5730\u5740\uff1a",label_local:"\u8bf7\u9009\u62e9\u672c\u5730\u56fe\u7247\uff1a",label_album:"\u8bf7\u9009\u62e9\u76f8\u518c\u56fe\u7247\uff1a",ok:"\u63d2\u5165"},insertOrderedList:{text:"\u6709\u5e8f\u5217\u8868",title:"\u6709\u5e8f\u5217\u8868"},insertUnorderedList:{text:"\u65e0\u5e8f\u5217\u8868",title:"\u65e0\u5e8f\u5217\u8868"},outdent:{text:"\u51cf\u5c11\u7f29\u8fdb",title:"\u51cf\u5c11\u7f29\u8fdb"},indent:{text:"\u589e\u52a0\u7f29\u8fdb",title:"\u589e\u52a0\u7f29\u8fdb"},justifyLeft:{text:"\u5de6\u5bf9\u9f50",title:"\u5de6\u5bf9\u9f50"},justifyCenter:{text:"\u5c45\u4e2d\u5bf9\u9f50",title:"\u5c45\u4e2d\u5bf9\u9f50"},justifyRight:{text:"\u53f3\u5bf9\u9f50",title:"\u53f3\u5bf9\u9f50"},foreColor:{text:"\u6587\u672c\u989c\u8272",title:"\u6587\u672c\u989c\u8272"},backColor:{text:"\u80cc\u666f\u989c\u8272",title:"\u80cc\u666f\u989c\u8272"},maximize:{text:"\u5168\u5c4f\u7f16\u8f91",title:"\u5168\u5c4f\u7f16\u8f91"},removeformat:{text:"\u6e05\u9664\u683c\u5f0f",title:"\u6e05\u9664\u683c\u5f0f"},wordcount:{tmpl:"\u8fd8\u53ef\u4ee5\u8f93\u5165 %remain% \u5b57\uff08\u542b html \u4ee3\u7801\uff09"},resize:{larger_text:"\u589e\u5927",larger_title:"\u589e\u5927\u7f16\u8f91\u533a\u57df",smaller_text:"\u7f29\u5c0f",smaller_title:"\u7f29\u5c0f\u7f16\u8f91\u533a\u57df"},common:{ok:"\u786e\u5b9a",cancel:"\u53d6\u6d88"}}});KISSY.Editor.add("core~plugin",function(a){a.PLUGIN_TYPE={CUSTOM:0,TOOLBAR_SEPARATOR:1,TOOLBAR_BUTTON:2,TOOLBAR_MENU_BUTTON:4,TOOLBAR_SELECT:8,STATUSBAR_ITEM:16,FUNC:32}});KISSY.Editor.add("core~dom",function(b){var a=YAHOO.env.ua;b.Dom={getText:function(c){return c?(c.textContent||""):""},setItemUnselectable:function(g){var d,f,c,h,e;d=g.getElementsByTagName("*");for(f=-1,c=d.length;f<c;++f){e=(f==-1)?g:d[f];h=e.nodeName;if(h&&h!="INPUT"){e.setAttribute("unselectable","on")}}return g},BLOCK_ELEMENTS:{blockquote:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,p:1,address:1,center:1,pre:1,form:1,fieldset:1,caption:1,table:1,tbody:1,tr:1,th:1,td:1,ul:1,ol:1,dl:1,dt:1,dd:1,li:1}};if(a.ie){b.Dom.getText=function(c){return c?(c.innerText||""):""}}});KISSY.Editor.add("core~color",function(d){var c="toString",a=parseInt,b=RegExp;d.Color={KEYWORDS:{black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"f00",purple:"800080",fuchsia:"f0f",green:"008000",lime:"0f0",olive:"808000",yellow:"ff0",navy:"000080",blue:"00f",teal:"008080",aqua:"0ff"},re_RGB:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/([0-9A-F])/gi,toRGB:function(e){if(!this.re_RGB.test(e)){e=this.toHex(e)}if(this.re_hex.exec(e)){e="rgb("+[a(b.$1,16),a(b.$2,16),a(b.$3,16)].join(", ")+")"}return e},toHex:function(i){i=this.KEYWORDS[i]||i;if(this.re_RGB.exec(i)){var h=(b.$1>>0)[c](16),f=(b.$2>>0)[c](16),e=(b.$3>>0)[c](16);i=[h.length==1?"0"+h:h,f.length==1?"0"+f:f,e.length==1?"0"+e:e].join("")}if(i.length<6){i=i.replace(this.re_hex3,"$1$1")}if(i!=="transparent"&&i.indexOf("#")<0){i="#"+i}return i.toLowerCase()}}});KISSY.Editor.add("core~command",function(f){var d=YAHOO.env.ua,b={backColor:d.gecko?"hiliteColor":"backColor"},c="bold,italic,underline,strikeThrough",a="styleWithCSS",e="execCommand";f.Command={exec:function(i,h,j,g){h=b[h]||h;this._preExec(i,h,g);i[e](h,false,j)},_preExec:function(i,h,g){if(d.gecko){var j=typeof g==="undefined"?(c.indexOf(h)===-1):g;i[e](a,false,j)}}}});KISSY.Editor.add("core~range",function(a){a.Range={getSelectionRange:function(e){var d=e.document,c,b;if(e.getSelection){c=e.getSelection();if(c.getRangeAt){b=c.getRangeAt(0)}else{b=d.createRange();b.setStart(c.anchorNode,c.anchorOffset);b.setEnd(c.focusNode,c.focusOffset)}}else{if(d.selection){b=d.selection.createRange()}}return b},getContainer:function(b){return b.startContainer||(b.parentElement&&b.parentElement())||(b.commonParentElement&&b.commonParentElement())},getSelectedText:function(b){if("text" in b){return b.text}return b.toString?b.toString():""}}});KISSY.Editor.add("core~instance",function(h){var a=YAHOO.util,d=a.Dom,e=YAHOO.lang,c="ks-editor",f='<div class="ks-editor-toolbar"></div><div class="ks-editor-content"><iframe frameborder="0" allowtransparency="true"></iframe></div><div class="ks-editor-statusbar"></div>',b='<!DOCTYPE html><html><head><title>Rich Text Area</title><meta http-equiv="content-type" content="text/html; charset=gb18030" /><link type="text/css" href="{CONTENT_CSS}" rel="stylesheet" /></head><body>{CONTENT}</body></html>',i="themes",g="content.css";h.Instance=function(j,k){this.textarea=d.get(j);this.config=e.merge(h.config,k||{});this.sourceMode=false;this.toolbar=new h.Toolbar(this);this.statusbar=new h.Statusbar(this);this._init()};e.augmentObject(h.Instance.prototype,{_init:function(){this._renderUI();this._initPlugins()},_renderUI:function(){this._renderContainer();this._setupContentPanel()},_initPlugins:function(){var k,l,m=h.plugins,j=[];for(k in m){j[k]=m[k]}this.plugins=j;this.toolbar.init();this.statusbar.init();for(k in j){l=j[k];if(l.inited){continue}l.editor=this;if(l.init){l.init()}l.inited=true}},_renderContainer:function(){var l=this.textarea,p=d.getRegion(l),n=(p.right-p.left-2)+"px",j=(p.bottom-p.top-2)+"px",k=document.createElement("div"),o,m;k.className=c;k.style.width=n;k.innerHTML=f;o=k.childNodes[1];o.style.width="100%";o.style.height=j;m=o.childNodes[0];m.style.width="100%";m.style.height="100%";m.setAttribute("frameBorder",0);l.style.display="none";d.insertBefore(k,l);this.container=k;this.toolbar.domEl=k.childNodes[0];this.contentWin=m.contentWindow;this.contentDoc=m.contentWindow.document;this.statusbar.domEl=k.childNodes[2]},_setupContentPanel:function(){var l=this.contentDoc,k=this.config,j=k.base+i+"/"+k.theme+"/"+g;l.open();l.write(b.replace("{CONTENT_CSS}",j).replace("{CONTENT}",this.textarea.value));l.close();l.designMode="on"},execCommand:function(k,l,j){this.contentWin.focus();h.Command.exec(this.contentDoc,k,l,j)},getData:function(){if(this.sourceMode){return this.textarea.value}return this.getContentDocData()},getContentDocData:function(){var k=this.contentDoc.body,j="",l=h.plugins.save;if(h.Dom.getText(k)){j=k.innerHTML;if(l&&l.filterData){j=l.filterData(j)}}return j},getSelectionRange:function(){return h.Range.getSelectionRange(this.contentWin)}})});KISSY.Editor.add("core~toolbar",function(p){var b=YAHOO.util,i=b.Dom,n=b.Event,j=YAHOO.lang,f=YAHOO.env.ua.ie,g=f===6,l=p.PLUGIN_TYPE,h='<div class="ks-editor-stripbar-sep ks-inline-block"></div>',m='<div class="ks-editor-toolbar-button ks-inline-block" title="{TITLE}"><div class="ks-editor-toolbar-button-outer-box"><div class="ks-editor-toolbar-button-inner-box"><span class="ks-editor-toolbar-item ks-editor-toolbar-{NAME}">{TEXT}</span></div></div></div>',k='<div class="ks-editor-toolbar-menu-button-caption ks-inline-block"><span class="ks-editor-toolbar-item ks-editor-toolbar-{NAME}">{TEXT}</span></div><div class="ks-editor-toolbar-menu-button-dropdown ks-inline-block"></div>',e="ks-editor-toolbar-menu-button",d="ks-editor-toolbar-select",c="ks-editor-toolbar-button-active",o="ks-editor-toolbar-button-hover",a=document.createElement("div");p.Toolbar=function(q){this.editor=q;this.config=q.config;this.lang=p.lang[this.config.language]};j.augmentObject(p.Toolbar.prototype,{init:function(){var s=this.config.toolbar,r=this.editor.plugins,u;for(var t=0,q=s.length;t<q;++t){u=s[t];if(u){if(!(u in r)){continue}this._addItem(r[u])}else{this._addSeparator()}}},_addItem:function(t){var s,r=t.type,u=this.lang,q;if(!t.lang){t.lang=j.merge(u.common,this.lang[t.name]||{})}q=m.replace("{TITLE}",t.lang.title||"").replace("{NAME}",t.name).replace("{TEXT}",t.lang.text||"");if(g){q=q.replace("outer-box","outer-box ks-inline-block").replace("inner-box","inner-box ks-inline-block")}a.innerHTML=q;t.domEl=s=a.firstChild;if(r==l.TOOLBAR_MENU_BUTTON||r==l.TOOLBAR_SELECT){this._renderMenuButton(t);if(r==l.TOOLBAR_SELECT){this._renderSelect(t)}}this._bindItemUI(t);this._addToStatusbar(s);t.editor=this.editor;if(t.init){t.init()}t.inited=true},_renderMenuButton:function(s){var r=s.domEl,q=r.getElementsByTagName("span")[0].parentNode;i.addClass(r,e);q.innerHTML=k.replace("{NAME}",s.name).replace("{TEXT}",s.lang.text||"")},_renderSelect:function(q){i.addClass(q.domEl,d)},_bindItemUI:function(r){var q=r.domEl;if(r.exec){n.on(q,"click",function(){r.exec()})}n.on(q,"mousedown",function(){i.addClass(q,c)});n.on(q,"mouseup",function(){i.removeClass(q,c)});n.on(q,"mouseout",function(u){var t=n.getRelatedTarget(u),s;try{if(q.contains){s=q.contains(t)}else{if(q.compareDocumentPosition){s=q.compareDocumentPosition(t)&8}}}catch(u){s=false}if(s){return}i.removeClass(q,c)});if(g){n.on(q,"mouseenter",function(){i.addClass(q,o)});n.on(q,"mouseleave",function(){i.removeClass(q,o)})}},_addSeparator:function(){a.innerHTML=h;this._addToStatusbar(a.firstChild)},_addToStatusbar:function(q){if(f){q=p.Dom.setItemUnselectable(q)}this.domEl.appendChild(q)}})});KISSY.Editor.add("core~statusbar",function(d){var e=YAHOO.util,c=YAHOO.lang,b=YAHOO.env.ua.ie,a='<div class="ks-editor-stripbar-sep kissy-inline-block"></div>',g='<div class="ks-editor-statusbar-item ks-editor-{NAME} ks-inline-block"></div>',f=document.createElement("div");d.Statusbar=function(h){this.editor=h;this.config=h.config;this.lang=d.lang[this.config.language]};c.augmentObject(d.Statusbar.prototype,{init:function(){var k=this.config.statusbar,j=this.editor.plugins,m;for(var l=0,h=k.length;l<h;++l){m=k[l];if(m){if(!(m in j)){continue}this._addItem(j[m])}else{this._addSep()}}},_addItem:function(i){var h,j=this.lang;if(!i.lang){i.lang=c.merge(j.common,this.lang[i.name]||{})}f.innerHTML=g.replace("{NAME}",i.name);i.domEl=h=f.firstChild;this._addToStatusbar(h);i.editor=this.editor;if(i.init){i.init()}i.inited=true},_addSep:function(){f.innerHTML=a;this._addToStatusbar(f.firstChild)},_addToStatusbar:function(h){if(b){h=d.Dom.setItemUnselectable(h)}this.domEl.appendChild(h)}})});KISSY.Editor.add("core~menu",function(l){var d=YAHOO.util,g=d.Dom,k=d.Event,h="visibility",e="hidden",i="visible",a="ks-editor-drop-menu",j="ks-editor-drop-menu-shadow",c="ks-editor-drop-menu-content",b=a+"-shim",f;l.Menu={generateDropMenu:function(o,n,q){var p=document.createElement("div"),m=this;p.innerHTML='<div class="'+j+'"></div><div class="'+c+'"></div>';p.className=a;p.style[h]="hidden";document.body.appendChild(p);k.on(n,"click",function(r){k.stopPropagation(r);m._hide(o.activeDropMenu);if(o.activeDropMenu!=p){m._setDropMenuPosition(n,p,q);m._show(p);o.activeDropMenu=p}else{o.activeDropMenu=null}});k.on([document,o.contentDoc],"click",function(){m._hide(o.activeDropMenu);o.activeDropMenu=null});this._initResizeEvent(n,p,q);return p.childNodes[1]},_setDropMenuPosition:function(m,o,s){var n=g.getRegion(m),q=n.left,p=n.bottom;if(s){q+=s[0];p+=s[1]}o.style.left=q+"px";o.style.top=p+"px"},_isVisible:function(m){if(!m){return false}return m.style[h]!=e},_hide:function(m){if(m){if(f){f.style[h]=e}m.style[h]=e}},_show:function(m){if(m){if(YAHOO.env.ua.ie===6){if(!f){this._initShim()}this._setShimRegion(m);f.style[h]=i}m.style[h]=i}},_initResizeEvent:function(o,p,q){var n=this,m;k.on(window,"resize",function(){if(m){clearTimeout(m)}m=setTimeout(function(){if(n._isVisible(p)){n._setDropMenuPosition(o,p,q)}},50)})},_initShim:function(){f=document.createElement("iframe");f.src="about:blank";f.className=b;f.style.position="absolute";f.style.visibility=e;f.style.border="none";document.body.appendChild(f)},_setShimRegion:function(m){if(f){var n=g.getRegion(m);f.style.left=n.left+"px";f.style.top=n.top+"px";f.style.width=n.width+"px";f.style.height=n.height+"px"}}}});KISSY.Editor.add("smilies~config~default",function(a){a.Smilies=a.Smilies||{};a.Smilies["default"]={name:"default",mode:"icons",cols:5,fileNames:["smile","confused","cool","cry","eek","angry","wink","sweat","lol","stun","razz","shy","rolleyes","sad","happy","yes","no","heart","idea","rose"],fileExt:"gif"}});KISSY.Editor.add("smilies~config~wangwang",function(a){a.Smilies=a.Smilies||{};a.Smilies.wangwang={name:"wangwang",mode:"sprite",base:"http://a.tbcdn.cn/sys/wangwang/smiley/48x48/",spriteStyle:"background: url(http://a.tbcdn.cn/sys/wangwang/smiley/sprite.png) no-repeat -1px 0; width: 288px; height: 235px",unitStyle:"width: 24px; height: 24px",filePattern:{start:0,end:98,step:1},fileExt:"gif"}});KISSY.Editor.add("plugins~base",function(b){var c=b.PLUGIN_TYPE,a="bold,italic,underline,strikeThrough,insertOrderedList,insertUnorderedList";b.addPlugin(a.split(","),{type:c.TOOLBAR_BUTTON,exec:function(){this.editor.execCommand(this.name)}})});KISSY.Editor.add("plugins~blockquote",function(c){var d=YAHOO.util,b=d.Dom,f=c.PLUGIN_TYPE,a="blockquote",e=c.Dom.BLOCK_ELEMENTS;c.addPlugin("blockquote",{type:f.TOOLBAR_BUTTON,exec:function(){var j=this.editor,h=j.getSelectionRange(),i=c.Range.getContainer(h),k;if(!i){return}if(this.isQuotableElement(i)){k=i}else{k=this.getQuotableAncestor(i)}if(k){var g=k.parentNode.nodeName.toLowerCase()===a;j.execCommand(g?"outdent":"indent",null,false)}},getQuotableAncestor:function(h){var g=this;return b.getAncestorBy(h,function(i){return g.isQuotableElement(i)})},isQuotableElement:function(g){return e[g.nodeName.toLowerCase()]}})});KISSY.Editor.add("plugins~color",function(l){var b=YAHOO.util,h=b.Dom,k=b.Event,e=YAHOO.env.ua.ie,j=l.PLUGIN_TYPE,d='<table class="ks-editor-palette-table"><tbody>{TR}</tbody></table>',c='<td class="ks-editor-palette-cell"><div class="ks-editor-palette-colorswatch" title="{COLOR}" style="background-color:{COLOR}"></div></td>',i=["000","444","666","999","CCC","EEE","F3F3F3","FFF"],g=["F00","F90","FF0","0F0","0FF","00F","90F","F0F"],f=["F4CCCC","FCE5CD","FFF2CC","D9EAD3","D0E0E3","CFE2F3","D9D2E9","EAD1DC","EA9999","F9CB9C","FFE599","B6D7A8","A2C4C9","9FC5E8","B4A7D6","D5A6BD","E06666","F6B26B","FFD966","93C47D","76A5AF","6FA8DC","8E7CC3","C27BAD","CC0000","E69138","F1C232","6AA84F","45818E","3D85C6","674EA7","A64D79","990000","B45F06","BF9000","38761D","134F5C","0B5394","351C75","741B47","660000","783F04","7F6000","274E13","0C343D","073763","20124D","4C1130"],a="ks-editor-palette-cell-selected";l.addPlugin(["foreColor","backColor"],{type:j.TOOLBAR_MENU_BUTTON,color:"",_indicator:null,dropMenu:null,init:function(){var n=this.domEl,m=n.getElementsByTagName("span")[0].parentNode;this.color=(this.name=="foreColor")?"#000000":"#ffffff";h.addClass(n,"ks-editor-toolbar-color-button");m.innerHTML='<div class="ks-editor-toolbar-color-button-indicator" style="border-bottom-color:'+this.color+'">'+m.innerHTML+"</div>";this._indicator=m.firstChild;this._initDropMenu(n)},_initDropMenu:function(m){this.dropMenu=l.Menu.generateDropMenu(this.editor,m,[1,0]);this._generatePalettes();if(e){l.Dom.setItemUnselectable(this.dropMenu)}this._bindPickEvent();this._updateSelectedColor(this.color)},_generatePalettes:function(){var m="";m+=this._getPaletteTable(i);m+=this._getPaletteTable(g);m+=this._getPaletteTable(f);this.dropMenu.innerHTML=m},_getPaletteTable:function(o){var q,n=o.length,p,m="<tr>";for(q=0,n=o.length;q<n;++q){if(q!=0&&q%8==0){m+="</tr><tr>"}p=l.Color.toRGB("#"+o[q]).toUpperCase();m+=c.replace(/{COLOR}/g,p)}m+="</tr>";return d.replace("{TR}",m)},_bindPickEvent:function(){var m=this;k.on(this.dropMenu,"click",function(o){var p=k.getTarget(o),n=p.getAttribute("title");if(n&&n.indexOf("RGB")===0){m.setColor(l.Color.toHex(n));m.editor.execCommand(m.name,m.color)}})},setColor:function(m){this.color=m;this._indicator.style.borderBottomColor=m;this._updateSelectedColor(m)},_updateSelectedColor:function(q){var o,m,p,n=this.dropMenu.getElementsByTagName("div");for(o=0,m=n.length;o<m;++o){p=n[o];if(l.Color.toHex(p.style.backgroundColor)==q){h.addClass(p.parentNode,a)}else{h.removeClass(p.parentNode,a)}}}})});KISSY.Editor.add("plugins~font",function(j){var a=YAHOO.util,c=a.Dom,i=a.Event,b=YAHOO.env.ua.ie,f=j.PLUGIN_TYPE,g='<ul class="ks-editor-select-list">{LI}</ul>',e='<li class="ks-editor-option" data-value="{VALUE}"><span class="ks-editor-option-checkbox"></span><span style="{STYLE}">{KEY}</span></li>',h="ks-editor-option-selected",d="Default";j.addPlugin(["fontName","fontSize"],{type:f.TOOLBAR_SELECT,selectedValue:"",selectHead:null,selectList:null,options:[],init:function(){var k=this.domEl;this.options=this.lang.options;this.selectHead=k.getElementsByTagName("span")[0];this._initSelectList(k);this._setSelectedOption(this.options[d])},_initSelectList:function(k){this.selectList=j.Menu.generateDropMenu(this.editor,k,[1,0]);this._renderSelectList();this._bindPickEvent()},_renderSelectList:function(){var m="",k=this.options,l,n;for(l in k){if(l==d){continue}n=k[l];m+=e.replace("{VALUE}",n).replace("{STYLE}",this._getOptionStyle(l,n)).replace("{KEY}",l)}this.selectList.innerHTML=g.replace("{LI}",m);c.addClass(this.selectList,"ks-editor-drop-menu-"+this.name);if(b){j.Dom.setItemUnselectable(this.selectList)}},_bindPickEvent:function(){var k=this;i.on(this.selectList,"click",function(l){var m=i.getTarget(l),n;if(m.nodeName!="LI"){m=c.getAncestorByTagName(m,"li")}if(!m){return}n=m.getAttribute("data-value");if(n){k._setSelectedOption(n);k.editor.execCommand(k.name,k.selectedValue)}})},_setSelectedOption:function(k){this.selectedValue=k;this.selectHead.innerHTML=this._getOptionKey(k);this._updateSelectedOption(k)},_getOptionStyle:function(k,l){if(this.name=="fontName"){return"font-family:"+l}else{return"font-size:"+k+"px"}},_getOptionKey:function(m){var k=this.options,l;for(l in k){if(l==d){continue}if(k[l]==m){return l}}},_updateSelectedOption:function(o){var l=this.selectList.getElementsByTagName("li"),m,k=l.length,n;for(m=0;m<k;++m){n=l[m];if(n.getAttribute("data-value")==o){c.addClass(n,h)}else{c.removeClass(n,h)}}}})});KISSY.Editor.add("plugins~image",function(q){var a=YAHOO.util,i=a.Dom,p=a.Event,j=YAHOO.lang,c=YAHOO.env.ua.ie,l=q.PLUGIN_TYPE,o="ks-editor-image",e="ks-editor-btn-ok",d="ks-editor-btn-cancel",h="ks-editor-image-tabs",k="ks-editor-image-tab-content",m="ks-editor-image-no-tab",b="ks-editor-image-tab-selected",f={local:'<li rel="local" class="'+b+'">{tab_local}</li>',link:'<li rel="link">{tab_link}</li>',album:'<li rel="album">{tab_album}</li>'},n=['<form onsubmit="return false">','<ul class="',h,' ks-clearfix">',"</ul>",'<div class="',k,'" rel="local" style="display: none">',"<label>{label_local}</label>",'<input type="file" size="40" name="localPath" />',"{local_extra}","</div>",'<div class="',k,'" rel="link">',"<label>{label_link}</label>",'<input name="imageUrl" size="50" />',"</div>",'<div class="',k,'" rel="album" style="display: none">',"<label>{label_album}</label>",'<p style="width: 300px">\u5c1a\u672a\u5b9e\u73b0...</p>',"</div>",'<div class="ks-editor-dialog-actions">','<button name="ok" class="',e,'">{ok}</button>','<span class="',d,'">{cancel}</span>',"</div>","</form>"].join(""),g={tabs:"link"};q.addPlugin("image",{type:l.TOOLBAR_BUTTON,config:{},dialog:null,form:null,range:null,init:function(){this.config=j.merge(g,this.editor.config.pluginsConfig[this.name]||{});this._renderUI();this._bindUI()},_renderUI:function(){var r=q.Menu.generateDropMenu(this.editor,this.domEl,[1,0]),s=this.lang;s.local_extra=this.config.local_extra||"";r.className+=" "+o;r.innerHTML=n.replace(/\{([^}]+)\}/g,function(t,u){return s[u]?s[u]:u});this.dialog=r;this.form=r.getElementsByTagName("form")[0];if(c){q.Dom.setItemUnselectable(r)}this._renderTabs()},_renderTabs:function(){var r=this.lang,x=i.getElementsByClassName(h,"ul",this.dialog)[0],y=i.getElementsByClassName(k,"div",this.dialog);var A=this.config.tabs,v="";for(var t=0,s=A.length;t<s;t++){v+=f[A[t]]}x.innerHTML=v.replace(/\{([^}]+)\}/g,function(B,C){return r[C]?r[C]:C});var z=x.childNodes,w=y.length;if(z.length===1){i.addClass(this.dialog,m)}u(z[0]);p.on(z,"click",function(){u(this)});function u(D){var C=0,B=D.getAttribute("rel");for(var E=0;E<w;E++){if(z[E]){i.removeClass(z[E],b)}y[E].style.display="none";if(y[E].getAttribute("rel")==B){C=E}}i.addClass(D,b);y[C].style.display=""}},_bindUI:function(){var s=this.form,r=this;p.on(this.domEl,"click",function(){if(r.dialog.style.visibility===c?"hidden":"visible"){r._syncUI()}});p.on(this.dialog,"click",function(t){var u=p.getTarget(t);switch(u.className){case e:r._insertImage(s.imageUrl.value);break;case d:break;default:p.stopPropagation(t)}})},_syncUI:function(){this.range=this.editor.getSelectionRange();this.form.imageUrl.value=""},_insertImage:function(t){t=j.trim(t);if(t.length===0){return}var u=this.editor,s=this.range,r;if(!c){r=document.createElement("img");r.src=t;r.setAttribute("title","");s.insertNode(r)}else{s.select();u.execCommand("insertImage",t)}}})});KISSY.Editor.add("plugins~indent",function(j){var a=YAHOO.util,d=a.Dom,f=YAHOO.lang,g=j.PLUGIN_TYPE,h=YAHOO.env.ua,b=f.merge(j.Dom.BLOCK_ELEMENTS,{li:0}),i="40",c="px",e={type:g.TOOLBAR_BUTTON,exec:function(){this.editor.execCommand(this.name)}};if(h.ie){e.exec=function(){var m=this.editor.getSelectionRange(),n,p;if(m.parentElement){n=m.parentElement()}else{if(m.item){n=m.item(0)}else{return}}if(l(n)){p=n}else{p=k(n)}if(p){var o=parseInt(p.style.marginLeft)>>0;o+=(this.name==="indent"?+1:-1)*i;p.style.marginLeft=o+c}function k(q){return d.getAncestorBy(q,function(r){return l(r)})}function l(q){return b[q.nodeName.toLowerCase()]}}}j.addPlugin(["indent","outdent"],e)});KISSY.Editor.add("plugins~justify",function(d){var f=YAHOO.util,b=f.Dom,g=d.PLUGIN_TYPE,a=YAHOO.env.ua,e=d.Dom.BLOCK_ELEMENTS,c={type:g.TOOLBAR_BUTTON,exec:function(){this.editor.execCommand(this.name)}};if(a.ie){c.exec=function(){var i=this.editor.getSelectionRange(),l,k;if(i.parentElement){l=i.parentElement()}else{if(i.item){l=i.item(0)}else{return}}if(h(l)){k=l}else{k=j(l)}if(k){k.style.textAlign=this.name.substring(7).toLowerCase()}function j(m){return b.getAncestorBy(m,function(n){return h(n)})}function h(m){return e[m.nodeName.toLowerCase()]}}}d.addPlugin(["justifyLeft","justifyCenter","justifyRight"],c)});KISSY.Editor.add("plugins~link",function(q){var a=YAHOO.util,h=a.Dom,p=a.Event,j=YAHOO.lang,b=YAHOO.env.ua.ie,l=q.PLUGIN_TYPE,d=q.Range,g=new Date().getTime(),k=/^\w+:\/\/.*|#.*$/,o="ks-editor-link",m="ks-editor-link-newlink-mode",e="ks-editor-btn-ok",c="ks-editor-btn-cancel",i="ks-editor-link-remove",f="http://",n=['<form onsubmit="return false"><ul>','<li class="ks-editor-link-href"><label>{href}</label><input name="href" size="40" value="http://" type="text" /></li>','<li class="ks-editor-link-target"><input name="target" id="target_"',g,' type="checkbox" /> <label for="target_"',g,">{target}</label></li>",'<li class="ks-editor-dialog-actions">','<button name="ok" class="',e,'">{ok}</button>','<span class="',c,'">{cancel}</span>','<span class="',i,'">{remove}</span>',"</li>","</ul></form>"].join("");q.addPlugin("link",{type:l.TOOLBAR_BUTTON,dialog:null,form:null,range:null,init:function(){this._renderUI();this._bindUI()},_renderUI:function(){var r=q.Menu.generateDropMenu(this.editor,this.domEl,[1,0]),s=this.lang;r.className+=" "+o;r.innerHTML=n.replace(/\{([^}]+)\}/g,function(t,u){return s[u]?s[u]:u});this.dialog=r;this.form=r.getElementsByTagName("form")[0];if(b){q.Dom.setItemUnselectable(r)}},_bindUI:function(){var s=this.form,r=this;p.on(this.domEl,"click",function(){if(r.dialog.style.visibility===b?"hidden":"visible"){r._syncUI()}});p.on(this.dialog,"click",function(t){var u=p.getTarget(t);switch(u.className){case e:r._createLink(s.href.value,s.target.checked);break;case c:break;case i:r._unLink();break;default:p.stopPropagation(t)}})},_syncUI:function(){this.range=this.editor.getSelectionRange();var u=this.form,s=d.getContainer(this.range),w=s.nodeName==="A",t=s.parentNode,v=t&&(t.nodeName==="A"),r;if(w||v){r=w?s:t;u.href.value=r.href;u.target.checked=r.target==="_blank";h.removeClass(u,m);return}u.href.value=f;u.target.checked=false;h.addClass(u,m)},_createLink:function(r,x){r=this._getValidHref(r);if(r.length===0){this._unLink();return}var w=this.editor,u=this.range,s=d.getContainer(u),y=s.nodeName==="A",v=s.parentNode,A=v&&(v.nodeName==="A"),z;if(y||A){z=y?s:v;z.href=r;if(x){z.setAttribute("target","_blank")}else{z.removeAttribute("target")}return}var t=d.getSelectedText(u);if(s.nodeType==3&&!t){if(!b){z=document.createElement("A");z.innerHTML=r;u.insertNode(z)}else{u.pasteHTML('<a href="'+r+'">'+r+"</a>")}}else{if(u.select){u.select()}w.execCommand("createLink",r)}},_getValidHref:function(r){r=j.trim(r);if(r&&!k.test(r)){r=f+r}return r},_unLink:function(){var u=this.editor,s=this.range,v=d.getSelectedText(s),r=d.getContainer(s),t;if(!v&&r.nodeType==3){t=r.parentNode;if(t.nodeName=="A"){t.parentNode.replaceChild(r,t)}}else{if(s.select){s.select()}u.execCommand("unLink",null)}}})});KISSY.Editor.add("plugins~maximize",function(d){var e=YAHOO.util,c=e.Dom,a=e.Event,f=d.PLUGIN_TYPE,b="kissy-editor-maximize-mode";d.addPlugin("maximize",{type:f.TOOLBAR_BUTTON,container:null,containerParentNode:null,init:function(){this.container=this.editor.container;this.containerParentNode=this.container.parentNode},exec:function(){var g=this.container;if(c.hasClass(g,b)){this.containerParentNode.appendChild(g);c.removeClass(g,b)}else{document.body.appendChild(g);c.addClass(g,b)}}})});KISSY.Editor.add("plugins~removeformat",function(d){var f=YAHOO.util,a=f.Dom,e=d.Range,g=d.PLUGIN_TYPE,c=/^(b|big|code|del|dfn|em|font|i|ins|kbd|q|samp|small|span|strike|strong|sub|sup|tt|u|var)$/g,b=["class","style","lang","width","height","align","hspace","valign"];d.addPlugin("removeformat",{type:g.TOOLBAR_BUTTON,exec:function(){var j=this.editor,h=j.getSelectionRange(),i=d.Range.getContainer(h);if(!i){return}alert("\u6b63\u5728\u5b9e\u73b0\u4e2d")}})});KISSY.Editor.add("plugins~resize",function(c){var d=YAHOO.util,a=d.Event,e=c.PLUGIN_TYPE,b='<span class="ks-editor-resize-larger" title="{larger_title}">{larger_text}</span><span class="ks-editor-resize-smaller" title="{smaller_title}">{smaller_text}</span>';c.addPlugin("resize",{type:e.STATUSBAR_ITEM,contentEl:null,currentHeight:0,init:function(){this.contentEl=this.editor.container.childNodes[1];this.currentHeight=parseInt(this.contentEl.style.height);this.renderUI();this.bindUI()},renderUI:function(){var f=this.lang;this.domEl.innerHTML=b.replace(/\{([^}]+)\}/g,function(g,h){return f[h]?f[h]:h})},bindUI:function(){var g=this.domEl.getElementsByTagName("span"),i=g[0],f=g[1],h=this.contentEl;a.on(i,"click",function(){this.currentHeight+=100;h.style.height=this.currentHeight+"px"},this,true);a.on(f,"click",function(){if(this.currentHeight<100){this.currentHeight=0}else{this.currentHeight-=100}h.style.height=this.currentHeight+"px"},this,true)}})});KISSY.Editor.add("plugins~save",function(c){var d=YAHOO.util,b=d.Event,e=c.PLUGIN_TYPE,a={b:{tag:"strong"},i:{tag:"em"},u:{tag:"span",style:"text-decoration:underline"},strike:{tag:"span",style:"text-decoration:line-through"}};c.addPlugin("save",{type:e.FUNC,init:function(){var g=this.editor,f=g.textarea,h=f.form;if(h){b.on(h,"submit",function(){if(!g.sourceMode){f.value=g.getData()}})}},filterData:function(f){f=f.replace(/<(\/?)([^>\s]+)([^>]*)>/g,function(i,k,h,g){h=h.toLowerCase();var l=a[h],j=h;if(l&&!g){j=l.tag;if(!k&&l.style){j+=' style="'+l.style+'"'}}return"<"+k+j+g+">"});return f}})});KISSY.Editor.add("plugins~smiley",function(j){var a=YAHOO.util,h=a.Event,d=YAHOO.lang,b=YAHOO.env.ua.ie,e=j.PLUGIN_TYPE,g="ks-editor-smiley-dialog",f="ks-editor-smiley-icons",i="ks-editor-smiley-sprite",c={tabs:["default"]};j.addPlugin("smiley",{type:e.TOOLBAR_BUTTON,config:{},dialog:null,range:null,init:function(){this.config=d.merge(c,this.editor.config.pluginsConfig[this.name]||{});this._renderUI();this._bindUI()},_renderUI:function(){var k=j.Menu.generateDropMenu(this.editor,this.domEl,[1,0]);k.className+=" "+g;this.dialog=k;this._renderDialog();if(b){j.Dom.setItemUnselectable(k)}},_renderDialog:function(){var l=j.Smilies[this.config.tabs[0]],k=l.mode;if(k==="icons"){this._renderIcons(l)}else{if(k==="sprite"){this._renderSprite(l)}}},_renderIcons:function(m){var l=this.editor.config.base+"smilies/"+m.name+"/",n=m.fileNames,s="."+m.fileExt,r=m.cols,q=[],o,p=n.length,k;q.push('<div class="'+f+'">');for(o=0;o<p;o++){k=n[o];q.push('<img src="'+l+k+s+'" alt="'+k+'" title="'+k+'" />');if(o%r===r-1){q.push("<br />")}}q.push("</div");this.dialog.innerHTML=q.join("")},_renderSprite:function(m){var q=m.base,r=m.filePattern,l="."+m.fileExt,k=r.end+1,p=r.step,n,o=[];o.push('<div class="'+i+' ks-clearfix" style="'+m.spriteStyle+'">');for(n=0;n<k;n+=p){o.push('<span data-icon="'+q+n+l+'" style="'+m.unitStyle+'"></span>')}o.push("</div");this.dialog.innerHTML=o.join("")},_bindUI:function(){var k=this;h.on(this.dialog,"click",function(l){var m=h.getTarget(l);switch(m.nodeName){case"IMG":k._insertImage(m.src,m.getAttribute("alt"));break;case"SPAN":k._insertImage(m.getAttribute("data-icon"),"");break;default:h.stopPropagation(l)}})},_insertImage:function(m,o){m=d.trim(m);if(m.length===0){return}var n=this.editor,l=n.getSelectionRange(),k;if(!b){k=document.createElement("img");k.src=m;k.setAttribute("alt",o);l.insertNode(k)}else{n.execCommand("insertImage",m)}}})});KISSY.Editor.add("plugins~source",function(a){var b=a.PLUGIN_TYPE;a.addPlugin("source",{type:b.TOOLBAR_BUTTON,init:function(){var c=this.editor;this.iframe=c.contentWin.frameElement;this.textarea=c.textarea;this.iframe.parentNode.appendChild(c.textarea)},exec:function(){var c=this.editor,d=c.sourceMode;if(d){c.contentDoc.body.innerHTML=this.textarea.value}else{this.textarea.value=c.getContentDocData()}this.textarea.style.display=d?"none":"";this.iframe.style.display=d?"":"none";c.sourceMode=!d}})});KISSY.Editor.add("plugins~undo",function(a){var b=a.PLUGIN_TYPE;a.addPlugin(["undo","redo"],{type:b.TOOLBAR_BUTTON,exec:function(){this.editor.execCommand(this.name)}})});KISSY.Editor.add("plugins~wordcount",function(f){var g=YAHOO.util,c=g.Dom,b=g.Event,e=YAHOO.lang,h=f.PLUGIN_TYPE,d="ks-editor-wordcount-alarm",a={total:50000,threshold:100};f.addPlugin("wordcount",{type:h.STATUSBAR_ITEM,total:Infinity,remain:Infinity,threshold:0,remainEl:null,init:function(){var j=e.merge(a,this.editor.config.pluginsConfig[this.name]||{});this.total=j.total;this.threshold=j.threshold;this.renderUI();this.bindUI();var i=this;setTimeout(function(){i.syncUI()},50)},renderUI:function(){this.domEl.innerHTML=this.lang.tmpl.replace("%remain%","<em>"+this.total+"</em>");this.remainEl=this.domEl.getElementsByTagName("em")[0]},bindUI:function(){var i=this.editor;b.on(i.textarea,"keyup",this.syncUI,this,true);b.on(i.contentDoc,"keyup",this.syncUI,this,true);b.on(i.container,"click",this.syncUI,this,true)},syncUI:function(){this.remain=this.total-this.editor.getData().length;this.remainEl.innerHTML=this.remain;if(this.remain<=this.threshold){c.addClass(this.domEl,d)}else{c.removeClass(this.domEl,d)}}})});
