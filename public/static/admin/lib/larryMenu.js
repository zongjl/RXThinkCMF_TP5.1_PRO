!function(t){var a={};function e(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=a,e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)e.d(r,n,function(a){return t[a]}.bind(null,n));return r},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=6)}({6:function(t,a,e){e(7)},7:function(t,a){layui.define(["larryms"],function(t){var a=layui.$,e=(layui.layer,layui.larryms,layui.element,function(){this.config={name:"",offsetX:2,offsetY:2,textLimit:16,beforeShow:a.noop,afterShow:a.noop},this.params="",this._data=""}),r=a(document).data("func",{}),n=a("body");e.prototype.ContentMenu=function(t,e,i){var o=this;o._data=t,o.params=a.extend(!0,o.config,e||{}),i.each(function(){this.oncontextmenu=function(t){a.isFunction(o.params.beforeShow)&&o.params.beforeShow.call(this),(t=t||window.event).cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),o.hide();var e=r.scrollTop(),n=o.funLarryMenu(o._data);if(n){var i,l,s=a(window).width(),u=a(window).height(),c=a("div.larryMenuBox").width(),d=a("div.larryMenuBox").height();return s<t.clientX+o.params.offsetX+c?(i=t.clientX-o.params.offsetX-c,n.find("ul li").children("div.larryMenuBox").css({top:"-35px",left:-(c+2)})):(i=t.clientX+o.params.offsetX,n.find("ul li").children("div.larryMenuBox").css({top:"-1px",left:c-5})),l=u<t.clientY+o.params.offsetY+d?t.clientY-o.params.offsetY-d:t.clientY+e+o.params.offsetY,n.css({display:"block",left:i,top:l}),r.data("target",n),r.data("trigger",this),a.isFunction(o.params.afterShow)&&o.params.afterShow.call(this),!1}}}),n.data("bind")||n.bind("click",o.hide).data("bind",!0)},e.prototype.htmlCreateMenu=function(t){var e=this,n=t||e._data,i=t?Math.random().toString():e.params.name,o="",l="larry_menu_";return a.isArray(n)&&n.length&&(o='<div id="larryMenu_'+i+'" class="'+l+'box larryMenuBox"><div class="'+l+'body"><ul class="'+l+'ul">',a.each(n,function(t,n){t&&(o+='<li class="'+l+'li_separate">&nbsp;</li>'),a.isArray(n)&&a.each(n,function(t,n){var i=n.text,s="",u="",c=Math.random().toString().replace(".","");if(i){i.length>e.params.textLimit&&(i=i.slice(0,e.params.textLimit)+"…",u=' title="'+n.text+'"'),s=a.isArray(n.data)&&n.data.length?'<li class="'+l+'li" data-hover="true">'+e.htmlCreateMenu(n.data)+'<a href="javascript:" class="'+l+'a"'+u+' data-key="'+c+'"><i class="'+l+'triangle"></i>'+i+"</a></li>":'<li class="'+l+'li"><a href="javascript:" class="'+l+'a"'+u+' data-key="'+c+'">'+i+"</a></li>",o+=s;var d=r.data("func");d[c]=n.func,r.data("func",d)}})}),o+="</ul></div></div>"),o},e.prototype.funLarryMenu=function(){var t=this,e="#larryMenu_",n="larry_menu_",i=a(e+t.params.name);return i.size()?i:(a("body").append(t.htmlCreateMenu()),a(e+t.params.name+" a").bind("click",function(){var e=a(this).attr("data-key"),n=r.data("func")[e];return a.isFunction(n)&&n.call(r.data("trigger")),t.hide(),!1}),a(e+t.params.name+" li").each(function(){var t=a(this).attr("data-hover"),e=n+"li_hover";a(this).hover(function(){var r=a(this).siblings("."+e);r.removeClass(e).children("."+n+"box").hide(),r.children("."+n+"a").removeClass(n+"a_hover"),t&&(a(this).addClass(e).children("."+n+"box").show(),a(this).children("."+n+"a").addClass(n+"a_hover"))})}),a(e+t.params.name))},e.prototype.hide=function(){var t=r.data("target");t&&"block"===t.css("display")&&t.hide()},e.prototype.remove=function(){var t=r.data("target");t&&t.remove()};var i=new e;t("larryMenu",function(){return i})})}});