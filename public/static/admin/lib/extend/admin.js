!function(e){var i={};function t(a){if(i[a])return i[a].exports;var l=i[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=i,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var l in e)t.d(a,l,function(i){return e[i]}.bind(null,l));return a},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s=6)}({6:function(e,i,t){t(7)},7:function(e,i){layui.define(["jquery","layer"],function(e){var i=layui.jquery,t=layui.layer,a=".layui-layout-admin>.layui-body",l=a+">.layui-tab",n=".layui-layout-admin>.layui-side>.layui-side-scroll",o=".layui-layout-admin>.layui-header",s={version:"311",defaultTheme:"theme-admin",tableName:"easyweb",flexible:function(e){window!=top&&!s.isTop()&&top.layui&&top.layui.admin?top.layui.admin.flexible(e):i(".layui-layout-admin").hasClass("admin-nav-mini")!=!e&&(e?(s.hideTableScrollBar(),i(".layui-layout-admin").removeClass("admin-nav-mini")):i(".layui-layout-admin").addClass("admin-nav-mini"),s.removeNavHover())},activeNav:function(e){if(window!=top&&!s.isTop()&&top.layui&&top.layui.admin)top.layui.admin.activeNav(e);else if(e||(e=(e=window.location.pathname).substring(e.indexOf("/"))),e&&""!=e){i(n+">.layui-nav .layui-nav-item .layui-nav-child dd").removeClass("layui-this"),i(n+">.layui-nav .layui-nav-item").removeClass("layui-this");var t=i(n+'>.layui-nav a[lay-href="'+e+'"]');if(t&&t.length>0){"true"==i(n+">.layui-nav").attr("lay-accordion")&&i(n+">.layui-nav .layui-nav-itemed").removeClass("layui-nav-itemed"),t.parent().addClass("layui-this"),t.parent("dd").parents(".layui-nav-child").parent().addClass("layui-nav-itemed"),i('ul[lay-filter="admin-side-nav"]').addClass("layui-hide");var a=t.parents(".layui-nav");a.removeClass("layui-hide"),i(o+">.layui-nav>.layui-nav-item").removeClass("layui-this"),i(o+'>.layui-nav>.layui-nav-item>a[nav-bind="'+a.attr("nav-id")+'"]').parent().addClass("layui-this");var l=t.offset().top+t.outerHeight()+30-s.getPageHeight(),u=115-t.offset().top;l>0?i(n).animate({scrollTop:i(n).scrollTop()+l},100):u>0&&i(n).animate({scrollTop:i(n).scrollTop()-u},100)}}else console.warn("active url is null")},popupRight:function(e){return null==e.title&&(e.title=!1,e.closeBtn=!1),null==e.anim&&(e.anim=2),null==e.fixed&&(e.fixed=!0),e.isOutAnim=!1,e.offset="r",e.shadeClose=!0,e.area="336px",e.skin="layui-layer-adminRight",e.move=!1,s.open(e)},open:function(e){e.area||(e.area=2==e.type?["360px","300px"]:"360px"),e.skin||(e.skin="layui-layer-admin"),e.offset||(e.offset="35px"),null==e.fixed&&(e.fixed=!1),e.resize=null!=e.resize&&e.resize,e.shade=null!=e.shade?e.shade:.1;var a=e.end;if(e.end=function(){t.closeAll("tips"),a&&a()},e.url){null==e.type&&(e.type=1);var l=e.success;e.success=function(t,a){s.showLoading(t,2),i(t).children(".layui-layer-content").load(e.url,function(){l&&l(t,a),s.removeLoading(t,!1)})}}return t.open(e)},req:function(e,i,t,a){s.ajax({url:e,data:i,type:a,dataType:"json",success:t})},ajax:function(e){var t=e.success;e.success=function(i,a,l){var n;(n="json"==e.dataType.toLowerCase()?i:s.parseJSON(i))&&(n=i),0!=s.ajaxSuccessBefore(n,e.url)&&t(i,a,l)},e.error=function(i){e.success({code:i.status,msg:i.statusText})},e.beforeSend=function(i){for(var t=s.getAjaxHeaders(e.url),a=0;a<t.length;a++)i.setRequestHeader(t[a].name,t[a].value)},i.ajax(e)},parseJSON:function(e){if("string"==typeof e)try{var i=JSON.parse(e);if("object"==typeof i&&i)return i}catch(e){}},showLoading:function(e,t,a){e||(e="body"),null==t&&(t=1),i(e).addClass("page-no-scroll");var l=i(e).children(".page-loading");l.length<=0&&(i(e).append('<div class="page-loading">'+['<div class="ball-loader"><span></span><span></span><span></span><span></span></div>','<div class="rubik-loader"></div>'][t-1]+"</div>"),l=i(e).children(".page-loading")),a&&l.css("background-color","rgba(255,255,255,"+a+")"),l.show()},removeLoading:function(e,t,a){e||(e="body"),null==t&&(t=!0);var l=i(e).children(".page-loading");a?l.remove():t?l.fadeOut():l.hide(),i(e).removeClass("page-no-scroll")},putTempData:function(e,i){var t=s.tableName+"_tempData";null!=i&&null!=i?layui.sessionData(t,{key:e,value:i}):layui.sessionData(t,{key:e,remove:!0})},getTempData:function(e){var i=s.tableName+"_tempData",t=layui.sessionData(i);return!!t&&t[e]},rollPage:function(e){if(window!=top&&!s.isTop()&&top.layui&&top.layui.admin)top.layui.admin.rollPage(e);else{var t=i(l+">.layui-tab-title"),a=t.scrollLeft();if("left"===e)t.animate({scrollLeft:a-120},100);else if("auto"===e){var n=0;t.children("li").each(function(){if(i(this).hasClass("layui-this"))return!1;n+=i(this).outerWidth()}),t.animate({scrollLeft:n-120},100)}else t.animate({scrollLeft:a+120},100)}},refresh:function(e){var t;if(window!=top&&!s.isTop()&&top.layui&&top.layui.admin)top.layui.admin.refresh(e);else if(e?(!(t=i(l+'>.layui-tab-content>.layui-tab-item>.admin-iframe[lay-id="'+e+'"]'))||t.length<=0)&&(t=i(a+">.admin-iframe")):(!(t=i(l+">.layui-tab-content>.layui-tab-item.layui-show>.admin-iframe"))||t.length<=0)&&(t=i(a+">div>.admin-iframe")),t&&t[0])try{t[0].contentWindow.location.reload(!0)}catch(e){t.attr("src",t.attr("src"))}else console.warn(e+" is not found")},closeThisTabs:function(e){if(window!=top&&!s.isTop()&&top.layui&&top.layui.admin)top.layui.admin.closeThisTabs(e);else{s.closeTabOperNav();var a=i(l+">.layui-tab-title");if(e){if(e==a.find("li").first().attr("lay-id"))return void t.msg("主页不能关闭",{icon:2});a.find('li[lay-id="'+e+'"]').find(".layui-tab-close").trigger("click")}else{if(a.find("li").first().hasClass("layui-this"))return void t.msg("主页不能关闭",{icon:2});a.find("li.layui-this").find(".layui-tab-close").trigger("click")}}},closeOtherTabs:function(e){window!=top&&!s.isTop()&&top.layui&&top.layui.admin?top.layui.admin.closeOtherTabs(e):(e?i(l+">.layui-tab-title li:gt(0)").each(function(){e!=i(this).attr("lay-id")&&i(this).find(".layui-tab-close").trigger("click")}):i(l+">.layui-tab-title li:gt(0):not(.layui-this)").find(".layui-tab-close").trigger("click"),s.closeTabOperNav())},closeAllTabs:function(){window!=top&&!s.isTop()&&top.layui&&top.layui.admin?top.layui.admin.closeAllTabs():(i(l+">.layui-tab-title li:gt(0)").find(".layui-tab-close").trigger("click"),i(l+">.layui-tab-title li:eq(0)").trigger("click"),s.closeTabOperNav())},closeTabOperNav:function(){window!=top&&!s.isTop()&&top.layui&&top.layui.admin?top.layui.admin.closeTabOperNav():i(".layui-icon-down .layui-nav .layui-nav-child").removeClass("layui-show")},changeTheme:function(e){e?(layui.data(s.tableName,{key:"theme",value:e}),"theme-admin"==e&&(e=void 0)):layui.data(s.tableName,{key:"theme",remove:!0}),s.removeTheme(top),e&&top.layui&&top.layui.link(s.getThemeDir()+e+s.getCssSuffix(),e);for(var i=top.window.frames,t=0;t<i.length;t++){var a=i[t];s.removeTheme(a),e&&a.layui&&a.layui.link(s.getThemeDir()+e+s.getCssSuffix(),e);for(var l=a.frames,n=0;n<l.length;n++){var o=l[n];s.removeTheme(o),e&&o.layui&&o.layui.link(s.getThemeDir()+e+s.getCssSuffix(),e)}}},removeTheme:function(e){if(e||(e=window),e.layui){e.layui.jquery('link[id^="layuicss-theme"]').remove()}},getThemeDir:function(){return layui.cache.base+"extend/theme/"},closeThisDialog:function(){parent.layer.close(parent.layer.getFrameIndex(window.name))},closeDialog:function(e){var a=i(e).parents(".layui-layer").attr("id").substring(11);t.close(a)},iframeAuto:function(){parent.layer.iframeAuto(parent.layer.getFrameIndex(window.name))},getPageHeight:function(){return document.documentElement.clientHeight||document.body.clientHeight},getPageWidth:function(){return document.documentElement.clientWidth||document.body.clientWidth},removeNavHover:function(){i(".admin-nav-hover>.layui-nav-child").css({top:"auto","max-height":"none",overflow:"auto"}),i(".admin-nav-hover").removeClass("admin-nav-hover")},setNavHoverCss:function(e){var t=i(".admin-nav-hover>.layui-nav-child");if(e&&t.length>0&&e.offset()){if(e.offset().top+t.outerHeight()>window.innerHeight){var a=e.offset().top-t.outerHeight()+e.outerHeight();if(a<50){var l=s.getPageHeight();e.offset().top<l/2?t.css({top:"50px","max-height":l-50+"px",overflow:"auto"}):t.css({top:e.offset().top,"max-height":l-e.offset().top,overflow:"auto"})}else t.css("top",a)}else t.css("top",e.offset().top);u=!0}},getCssSuffix:function(){var e=".css";return null!=s.version&&(e+="?v=",1==s.version?e+=(new Date).getTime():e+=s.version),e},hideTableScrollBar:function(e){if(s.getPageWidth()>750){if(!e){var t=i(l+">.layui-tab-content>.layui-tab-item.layui-show>.admin-iframe");t.length<=0&&(t=i(a+">div>.admin-iframe")),t.length>0&&(e=t[0].contentWindow)}e&&e.layui&&e.layui.jquery&&(window.hsbTimer&&clearTimeout(hsbTimer),e.layui.jquery(".layui-table-body.layui-table-main").addClass("no-scrollbar"),window.hsbTimer=setTimeout(function(){e&&e.layui&&e.layui.jquery&&e.layui.jquery(".layui-table-body.layui-table-main").removeClass("no-scrollbar")},500))}},modelForm:function(e,t,a){var l=i(e);l.addClass("layui-form"),a&&(l.attr("id",a),l.attr("lay-filter",a));var n=l.find(".layui-layer-btn .layui-layer-btn0");n.attr("lay-submit",""),n.attr("lay-filter",t);var o=l.children(".layui-layer-content");o.find('[ew-event="closePageDialog"]').remove(),o.find("[lay-submit]").remove()},btnLoading:function(e,t,a){null!=t&&"boolean"==typeof t&&(a=t,t=void 0),null==a&&(a=!0);var l=i(e);a?(t&&l.html(t),l.find(".layui-icon").addClass("layui-hide"),l.addClass("icon-btn"),l.prepend('<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop ew-btn-loading"></i>'),l.prop("disabled","disabled")):(l.find(".ew-btn-loading").remove(),l.removeProp("disabled","disabled"),l.find(".layui-icon.layui-hide").length<=0&&l.removeClass("icon-btn"),l.find(".layui-icon").removeClass("layui-hide"),t&&l.html(t))},openSideAutoExpand:function(){i(".layui-layout-admin>.layui-side").off("mouseenter.openSideAutoExpand").on("mouseenter.openSideAutoExpand",function(){i(this).parent().hasClass("admin-nav-mini")&&(s.flexible(!0),i(this).addClass("side-mini-hover"))}),i(".layui-layout-admin>.layui-side").off("mouseleave.openSideAutoExpand").on("mouseleave.openSideAutoExpand",function(){i(this).hasClass("side-mini-hover")&&(s.flexible(!1),i(this).removeClass("side-mini-hover"))})},openCellAutoExpand:function(){i("body").off("mouseenter.openCellAutoExpand").on("mouseenter.openCellAutoExpand",".layui-table-view td",function(){i(this).find(".layui-table-grid-down").trigger("click")}),i("body").off("mouseleave.openCellAutoExpand").on("mouseleave.openCellAutoExpand",".layui-table-tips>.layui-layer-content",function(){i(".layui-table-tips-c").trigger("click")})},isTop:function(){return i(a).length>0},ajaxSuccessBefore:function(e,i){return!0},getAjaxHeaders:function(e){return new Array}};s.events={flexible:function(e){var t=i(".layui-layout-admin").hasClass("admin-nav-mini");window==top||s.isTop()||top.layui&&top.layui.jquery&&(t=top.layui.jquery(".layui-layout-admin").hasClass("admin-nav-mini")),s.flexible(t)},refresh:function(){s.refresh()},back:function(){history.back()},theme:function(){var e;e=window==top||s.isTop()?s:top.layui&&top.layui.admin?top.layui.admin:s;var t=i(this).attr("data-url");e.popupRight({id:"layer-theme",type:2,content:t||"page/tpl/tpl-theme.html"})},note:function(){var e;e=window==top||s.isTop()?s:top.layui&&top.layui.admin?top.layui.admin:s;var t=i(this).attr("data-url");e.popupRight({id:"layer-note",title:"便签",type:2,closeBtn:!1,content:t||"page/tpl/tpl-note.html"})},message:function(){var e;e=window==top||s.isTop()?s:top.layui&&top.layui.admin?top.layui.admin:s;var t=i(this).attr("data-url");e.popupRight({id:"layer-notice",type:2,content:t||"page/tpl/tpl-message.html"})},psw:function(){var e;e=window==top||s.isTop()?s:top.layui&&top.layui.admin?top.layui.admin:s;var t=i(this).attr("data-url");e.open({id:"pswForm",type:2,title:"修改密码",shade:0,content:t||"page/tpl/tpl-password.html"})},logout:function(){var e=i(this).attr("data-url");t.confirm("确定要退出登录吗？",{title:"温馨提示",skin:"layui-layer-admin"},function(){location.replace(e||"/")})},fullScreen:function(e){var t="layui-icon-screen-full",a="layui-icon-screen-restore",l=i(this).find("i");if(document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||!1){var n=document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen;if(n)n.call(document);else if(window.ActiveXObject){(u=new ActiveXObject("WScript.Shell"))&&u.SendKeys("{F11}")}l.addClass(t).removeClass(a)}else{var o=document.documentElement,s=o.requestFullscreen||o.webkitRequestFullscreen||o.mozRequestFullScreen||o.msRequestFullscreen;if(s)s.call(o);else if(window.ActiveXObject){var u;(u=new ActiveXObject("WScript.Shell"))&&u.SendKeys("{F11}")}l.addClass(a).removeClass(t)}},leftPage:function(){s.rollPage("left")},rightPage:function(){s.rollPage()},closeThisTabs:function(){s.closeThisTabs()},closeOtherTabs:function(){s.closeOtherTabs()},closeAllTabs:function(){s.closeAllTabs()},closeDialog:function(){s.closeThisDialog()},closePageDialog:function(){s.closeDialog(this)}},i(document).on("click","*[ew-event]",function(){var e=i(this).attr("ew-event"),t=s.events[e];t&&t.call(this,i(this))}),i(document).on("mouseenter","*[lay-tips]",function(){var e=i(this).attr("lay-tips"),a=i(this).attr("lay-direction"),l=i(this).attr("lay-bg");t.tips(e,this,{tips:[a||3,l||"#333333"],time:-1})}).on("mouseleave","*[lay-tips]",function(){t.closeAll("tips")});var u=!1;i(document).on("mouseenter",".layui-layout-admin.admin-nav-mini .layui-side .layui-nav .layui-nav-item>a",function(){if(s.getPageWidth()>750){var e=i(this);if(i(".admin-nav-hover>.layui-nav-child").css("top","auto"),i(".admin-nav-hover").removeClass("admin-nav-hover"),e.parent().addClass("admin-nav-hover"),i(".admin-nav-hover>.layui-nav-child").length>0)s.setNavHoverCss(e);else{var a=e.find("cite").text();t.tips(a,e,{tips:[2,"#333333"],time:-1})}}}).on("mouseleave",".layui-layout-admin.admin-nav-mini .layui-side .layui-nav .layui-nav-item>a",function(){t.closeAll("tips")}),i(document).on("mouseleave",".layui-layout-admin.admin-nav-mini .layui-side",function(){u=!1,setTimeout(function(){u||s.removeNavHover()},500)}),i(document).on("mouseenter",".layui-layout-admin.admin-nav-mini .layui-side .layui-nav .layui-nav-item.admin-nav-hover .layui-nav-child",function(){u=!0}),i(document).on("click","*[ew-href]",function(){var e=i(this).attr("ew-href"),t=i(this).attr("ew-title");t||(t=i(this).text()),top.layui&&top.layui.index?top.layui.index.openTab({title:t||"",url:e}):location.href=t});var c=layui.data(s.tableName);c&&c.theme?"theme-admin"==c.theme||layui.link(s.getThemeDir()+c.theme+s.getCssSuffix(),c.theme):"theme-admin"!=s.defaultTheme&&layui.link(s.getThemeDir()+s.defaultTheme+s.getCssSuffix(),s.defaultTheme),layui.contextMenu||i(document).off("click.ctxMenu").on("click.ctxMenu",function(){for(var e=top.window.frames,i=0;i<e.length;i++){var t=e[i];t.layui&&t.layui.jquery&&t.layui.jquery("body>.ctxMenu").remove()}top.layui&&top.layui.jquery&&top.layui.jquery("body>.ctxMenu").remove()}),s.chooseLocation=function(e){var a=e.title,l=e.onSelect,n=e.needCity,o=e.center,u=e.defaultZoom,c=e.pointZoom,r=e.keywords,d=e.pageSize,p=e.mapJsUrl;null==a&&(a="选择位置"),null==u&&(u=11),null==c&&(c=17),null==r&&(r=""),null==d&&(d=30),null==p&&(p="https://webapi.amap.com/maps?v=1.4.14&key=006d995d433058322319fa797f2876f5");var m,y=!1,f=function(e,t){AMap.service(["AMap.PlaceSearch"],function(){var a=new AMap.PlaceSearch({type:"",pageSize:d,pageIndex:1}),l=[t,e];a.searchNearBy(r,l,1e3,function(e,t){if("complete"==e){for(var a=t.poiList.pois,l="",n=0;n<a.length;n++){var o=a[n];null!=o.location&&(l+='<div data-lng="'+o.location.lng+'" data-lat="'+o.location.lat+'" class="ew-map-select-search-list-item">',l+='     <div class="ew-map-select-search-list-item-title">'+o.name+"</div>",l+='     <div class="ew-map-select-search-list-item-address">'+o.address+"</div>",l+='     <div class="ew-map-select-search-list-item-icon-ok layui-hide"><i class="layui-icon layui-icon-ok-circle"></i></div>',l+="</div>")}i("#ew-map-select-pois").html(l)}})})},v=function(){var e={resizeEnable:!0,zoom:u};o&&(e.center=o);var a=new AMap.Map("ew-map-select-map",e);a.on("complete",function(){var e=a.getCenter();f(e.lat,e.lng)}),a.on("moveend",function(){if(y)y=!1;else{i("#ew-map-select-tips").addClass("layui-hide"),i("#ew-map-select-center-img").removeClass("bounceInDown"),setTimeout(function(){i("#ew-map-select-center-img").addClass("bounceInDown")});var e=a.getCenter();f(e.lat,e.lng)}}),i("#ew-map-select-pois").off("click").on("click",".ew-map-select-search-list-item",function(){i("#ew-map-select-tips").addClass("layui-hide"),i("#ew-map-select-pois .ew-map-select-search-list-item-icon-ok").addClass("layui-hide"),i(this).find(".ew-map-select-search-list-item-icon-ok").removeClass("layui-hide"),i("#ew-map-select-center-img").removeClass("bounceInDown"),setTimeout(function(){i("#ew-map-select-center-img").addClass("bounceInDown")});var e=i(this).data("lng"),t=i(this).data("lat"),l=i(this).find(".ew-map-select-search-list-item-title").text(),n=i(this).find(".ew-map-select-search-list-item-address").text();m={name:l,address:n,lat:t,lng:e},y=!0,a.setZoomAndCenter(c,[e,t])}),i("#ew-map-select-btn-ok").click(function(){if(null==m)t.msg("请点击位置列表选择",{icon:2,anim:6});else if(l)if(n){var e=t.load(2);a.setCenter([m.lng,m.lat]),a.getCity(function(i){t.close(e),m.city=i,s.closeDialog("#ew-map-select-btn-ok"),l(m)})}else s.closeDialog("#ew-map-select-btn-ok"),l(m);else s.closeDialog("#ew-map-select-btn-ok")}),i("#ew-map-select-input-search").off("input").on("input",function(){var e=i(this).val();e||(i("#ew-map-select-tips").html(""),i("#ew-map-select-tips").addClass("layui-hide")),AMap.plugin("AMap.Autocomplete",function(){new AMap.Autocomplete({city:"全国"}).search(e,function(e,t){if(t.tips){for(var a=t.tips,l="",n=0;n<a.length;n++){var o=a[n];null!=o.location&&(l+='<div data-lng="'+o.location.lng+'" data-lat="'+o.location.lat+'" class="ew-map-select-search-list-item">',l+='     <div class="ew-map-select-search-list-item-icon-search"><i class="layui-icon layui-icon-search"></i></div>',l+='     <div class="ew-map-select-search-list-item-title">'+o.name+"</div>",l+='     <div class="ew-map-select-search-list-item-address">'+o.address+"</div>",l+="</div>")}i("#ew-map-select-tips").html(l),0==a.length?i("#ew-map-select-tips").addClass("layui-hide"):i("#ew-map-select-tips").removeClass("layui-hide")}else i("#ew-map-select-tips").html(""),i("#ew-map-select-tips").addClass("layui-hide")})})}),i("#ew-map-select-input-search").off("blur").on("blur",function(){i(this).val()||(i("#ew-map-select-tips").html(""),i("#ew-map-select-tips").addClass("layui-hide"))}),i("#ew-map-select-input-search").off("focus").on("focus",function(){i(this).val()&&i("#ew-map-select-tips").removeClass("layui-hide")}),i("#ew-map-select-tips").off("click").on("click",".ew-map-select-search-list-item",function(){i("#ew-map-select-tips").addClass("layui-hide");var e=i(this).data("lng"),t=i(this).data("lat");m=void 0,a.setZoomAndCenter(c,[e,t])})};s.open({id:"ew-map-select",type:1,title:a,area:"750px",content:'<div class="ew-map-select-tool" style="position: relative;">        搜索：<input id="ew-map-select-input-search" class="layui-input icon-search inline-block" style="width: 190px;" placeholder="输入关键字搜索" autocomplete="off" />        <button id="ew-map-select-btn-ok" class="layui-btn icon-btn pull-right" type="button"><i class="layui-icon">&#xe605;</i>确定</button>        <div id="ew-map-select-tips" class="ew-map-select-search-list layui-hide">        </div>   </div>   <div class="layui-row ew-map-select">        <div class="layui-col-sm7 ew-map-select-map-group" style="position: relative;">             <div id="ew-map-select-map"></div>             <i id="ew-map-select-center-img2" class="layui-icon layui-icon-add-1"></i>             <img id="ew-map-select-center-img" src="https://3gimg.qq.com/lightmap/components/locationPicker2/image/marker.png"/>        </div>        <div id="ew-map-select-pois" class="layui-col-sm5 ew-map-select-search-list">        </div>   </div>',success:function(e,t){i(e).children(".layui-layer-content").css("overflow","visible"),s.showLoading(e),null==window.AMap?i.getScript(p,function(){v(),s.removeLoading(e)}):(v(),s.removeLoading(e))}})},s.cropImg=function(e){var a="image/jpeg",l=e.aspectRatio,n=e.imgSrc,o=e.imgType,u=e.onCrop,c=e.limitSize,r=e.acceptMime,d=e.exts,p=e.title;null==l&&(l=1),null==p&&(p="裁剪图片"),o&&(a=o),layui.use(["cropper","upload"],function(){var e=layui.upload;var o='<div class="layui-row">';o+='        <div class="layui-col-sm8" style="min-height: 9rem;">',o+='             <img id="ew-crop-img" src="'+(n||"")+'" style="max-width:100%;" />',o+="        </div>",o+='        <div class="layui-col-sm4 layui-hide-xs" style="padding: 0 20px;text-align: center;">',o+='             <div id="ew-crop-img-preview" style="width: 100%;height: 9rem;overflow: hidden;display: inline-block;border: 1px solid #dddddd;"></div>',o+="        </div>",o+="   </div>",o+='   <div class="text-center ew-crop-tool" style="padding: 15px 10px 5px 0;">',o+='        <div class="layui-btn-group" style="margin-bottom: 10px;margin-left: 10px;">',o+='             <button title="放大" data-method="zoom" data-option="0.1" class="layui-btn icon-btn" type="button"><i class="layui-icon layui-icon-add-1"></i></button>',o+='             <button title="缩小" data-method="zoom" data-option="-0.1" class="layui-btn icon-btn" type="button"><span style="display: inline-block;width: 12px;height: 2.5px;background: rgba(255, 255, 255, 0.9);vertical-align: middle;margin: 0 4px;"></span></button>',o+="        </div>",o+='        <div class="layui-btn-group layui-hide-xs" style="margin-bottom: 10px;">',o+='             <button title="向左旋转" data-method="rotate" data-option="-45" class="layui-btn icon-btn" type="button"><i class="layui-icon layui-icon-refresh-1" style="transform: rotateY(180deg) rotate(40deg);display: inline-block;"></i></button>',o+='             <button title="向右旋转" data-method="rotate" data-option="45" class="layui-btn icon-btn" type="button"><i class="layui-icon layui-icon-refresh-1" style="transform: rotate(30deg);display: inline-block;"></i></button>',o+="        </div>",o+='        <div class="layui-btn-group" style="margin-bottom: 10px;">',o+='             <button title="左移" data-method="move" data-option="-10" data-second-option="0" class="layui-btn icon-btn" type="button"><i class="layui-icon layui-icon-left"></i></button>',o+='             <button title="右移" data-method="move" data-option="10" data-second-option="0" class="layui-btn icon-btn" type="button"><i class="layui-icon layui-icon-right"></i></button>',o+='             <button title="上移" data-method="move" data-option="0" data-second-option="-10" class="layui-btn icon-btn" type="button"><i class="layui-icon layui-icon-up"></i></button>',o+='             <button title="下移" data-method="move" data-option="0" data-second-option="10" class="layui-btn icon-btn" type="button"><i class="layui-icon layui-icon-down"></i></button>',o+="        </div>",o+='        <div class="layui-btn-group" style="margin-bottom: 10px;">',o+='             <button title="左右翻转" data-method="scaleX" data-option="-1" class="layui-btn icon-btn" type="button" style="position: relative;width: 41px;"><i class="layui-icon layui-icon-triangle-r" style="position: absolute;left: 9px;top: 0;transform: rotateY(180deg);font-size: 16px;"></i><i class="layui-icon layui-icon-triangle-r" style="position: absolute; right: 3px; top: 0;font-size: 16px;"></i></button>',o+='             <button title="上下翻转" data-method="scaleY" data-option="-1" class="layui-btn icon-btn" type="button" style="position: relative;width: 41px;"><i class="layui-icon layui-icon-triangle-d" style="position: absolute;left: 11px;top: 6px;transform: rotateX(180deg);line-height: normal;font-size: 16px;"></i><i class="layui-icon layui-icon-triangle-d" style="position: absolute; left: 11px; top: 14px;line-height: normal;font-size: 16px;"></i></button>',o+="        </div>",o+='        <div class="layui-btn-group" style="margin-bottom: 10px;">',o+='             <button title="重新开始" data-method="reset" class="layui-btn icon-btn" type="button"><i class="layui-icon layui-icon-refresh"></i></button>',o+='             <button title="选择图片" id="ew-crop-img-upload" class="layui-btn icon-btn" type="button"><i class="layui-icon layui-icon-upload-drag"></i></button>',o+="        </div>",o+='        <button data-method="getCroppedCanvas" data-option="{ &quot;maxWidth&quot;: 4096, &quot;maxHeight&quot;: 4096 }" class="layui-btn icon-btn" type="button" style="margin-left: 10px;margin-bottom: 10px;"><i class="layui-icon">&#xe605;</i>完成</button>',o+="   </div>",s.open({title:p,area:"665px",type:1,content:o,success:function(o,p){i(o).children(".layui-layer-content").css("overflow","visible"),function o(){var p=i("#ew-crop-img"),m={elem:"#ew-crop-img-upload",auto:!1,drag:!1,choose:function(e){e.preview(function(e,t,l){a=t.type,n?p.cropper("destroy").attr("src",l).cropper(y):(n=l,i("#ew-crop-img").attr("src",l),o())})}};if(null!=c&&(m.size=c),null!=r&&(m.acceptMime=r),null!=d&&(m.exts=d),e.render(m),n){var y={aspectRatio:l,preview:"#ew-crop-img-preview"};p.cropper(y),i(".ew-crop-tool").on("click","[data-method]",function(){var e,l,n=p.data("cropper"),o=i(this).data();if(n&&o.method){switch(o=i.extend({},o),e=n.cropped,o.method){case"rotate":e&&y.viewMode>0&&p.cropper("clear");break;case"getCroppedCanvas":"image/jpeg"===a&&(o.option||(o.option={}),o.option.fillColor="#fff")}switch(l=p.cropper(o.method,o.option,o.secondOption),o.method){case"rotate":e&&y.viewMode>0&&p.cropper("crop");break;case"scaleX":case"scaleY":i(this).data("option",-o.option);break;case"getCroppedCanvas":l?(u&&u(l.toDataURL(a)),s.closeDialog("#ew-crop-img")):t.msg("裁剪失败",{icon:2,anim:6})}}})}else i("#ew-crop-img-upload").trigger("click")}()}})})},e("admin",s)})}});