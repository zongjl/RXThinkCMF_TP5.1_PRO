!function(t){var i={};function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=i,a.d=function(t,i,e){a.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,i){if(1&i&&(t=a(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)a.d(e,r,function(i){return t[i]}.bind(null,r));return e},a.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(i,"a",i),i},a.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},a.p="",a(a.s=10)}({10:function(t,i,a){a(11)},11:function(t,a){layui.define(["larryms","larryElem"],function(t){var a=layui.$,e=layui.larryElem,r=layui.larryms,n=layui.layer,o={},l=0,d=(new Array,function(){this.config={data:void 0,url:void 0,type:"POST",cached:!0,top_menu:"#larryms_top_menu",spreadOne:!0,topFilter:"TopMenu",left_menu:"#larryms_left_menu",leftFilter:"LarrySide",tab_elem:"#larry_tab",tabFilter:"larryTab",tabSession:!0,closed:!0,tabMax:25,autoRefresh:!1,contextMenu:!0,tabShow:!0,pageEffect:1},this.fonts={icon:void 0,url:void 0,online:!1},this.larrymsCache={navHtml:void 0,tab:void 0}}),s=function(){var t=a("#larryms_top_menu").find("li.larryms-this").children("a").data("group"),i=void 0!==t?t:"0";tab.on("click(LarrySide)",i,function(t){tab.tabAdd(t.field)})};function c(t,i){if("on"==i){for(var a={top:"",left:[]},e=0;e<t.length;e++)if(a.top+=0==e?'<li class="larryms-nav-item larryms-this">':'<li class="larryms-nav-item">',a.top+='<a data-group="'+e+'" data-id="larry-'+t[e].id+'">',a.top+='<i class="'+t[e].font+" "+t[e].icon+'" data-icon="'+t[e].icon+'" data-font="'+t[e].font+'"></i>',a.top+="<cite>"+t[e].title+"</cite>",a.top+="</a>",a.top+="</li>",void 0!==t[e].children&&null!==t[e].children&&t[e].children.length>0){a.left[e]="";for(var r="",n=0;n<t[e].children.length;n++){if(r=t[e].children[n],0==e&&0==n?void 0!==r.children&&null!==r.children&&r.children.length>0?a.left[e]+='<li class="larryms-nav-item larryms-nav-itemed">':a.left[e]+='<li class="larryms-nav-item larryms-this">':r.spread&&0!=n?a.left[e]+='<li class="larryms-nav-item larryms-nav-itemed">':a.left[e]+='<li class="larryms-nav-item">',void 0!==r.children&&null!==r.children&&r.children.length>0){a.left[e]+='<a data-group="'+e+'" data-id="larry-'+r.id+'">',void 0!==r.icon&&""!==r.icon&&(void 0!==r.font&&""!==r.font?a.left[e]+='<i class="'+r.font+" "+r.icon+'" data-icon="'+r.icon+'" data-font="'+r.font+'"></i>':a.left[e]+='<i class="larry-icon" data-icon="'+r.icon+'" data-font="larry-icon"></i>'),a.left[e]+="<cite>"+r.title+"</cite>",a.left[e]+='<span class="larryms-nav-more"></span>',a.left[e]+="</a>",a.left[e]+='<dl class="larryms-nav-child">';var o="";for(s=0;s<r.children.length;s++){if(void 0!==(o=r.children[s]).children&&null!==o.children&&o.children.length>0){a.left[e]+='<dd class="grandson">',a.left[e]+='<a data-group="'+e+'" data-id="larry-'+o.id+'">',void 0!==o.icon&&""!==o.icon&&(void 0!==o.font&&""!==o.font?a.left[e]+='<i class="'+o.font+" "+o.icon+'" data-icon="'+o.icon+'" data-font="'+o.font+'"></i>':a.left[e]+='<i class="larry-icon" data-icon="'+o.icon+'" data-font="larry-icon"></i>'),a.left[e]+="<cite>"+o.title+"</cite>",a.left[e]+='<span class="larryms-nav-more"></span>',a.left[e]+="</a>",a.left[e]+='<dl class="larryms-nav-child">';for(var l="",d=0;d<o.children.length;d++)l=o.children[d],a.left[e]+="<dd>",a.left[e]+=void 0!==l.url&&""!==l.url?'<a data-group="'+e+'" data-url="'+l.url+'" data-id="larry-'+l.id+'">':'<a data-group="'+e+'" data-id="larry-'+l.id+'">',void 0!==l.icon&&""!==l.icon&&(void 0!==l.font&&""!==l.font?a.left[e]+='<i class="'+l.font+" "+l.icon+'" data-icon="'+l.icon+'" data-font="'+l.font+'"></i>':a.left[e]+='<i class="larry-icon" data-icon="'+l.icon+'" data-font="larry-icon"></i>'),a.left[e]+="<cite>"+l.title+"</cite>",a.left[e]+="</a>";a.left[e]+="</dl>"}else a.left[e]+="<dd>",a.left[e]+=void 0!==o.url&&""!==o.url?'<a data-group="'+e+'" data-url="'+o.url+'" data-id="larry-'+o.id+'">':'<a data-group="'+e+'" data-id="larry-'+o.id+'">',void 0!==o.icon&&""!==o.icon&&(void 0!==o.font&&""!==o.font?a.left[e]+='<i class="'+o.font+" "+o.icon+'" data-icon="'+o.icon+'" data-font="'+o.font+'"></i>':a.left[e]+='<i class="larry-icon" data-icon="'+o.icon+'" data-font="larry-icon"></i>'),a.left[e]+="<cite>"+o.title+"</cite>",a.left[e]+="</a>";a.left[e]+="</dd>"}a.left[e]+="</dl>"}else a.left[e]+=void 0!==r.url&&""!==r.url?'<a data-group="'+e+'" data-url="'+r.url+'" data-id="larry-'+r.id+'">':'<a data-group="'+e+'" data-id=larry-'+r.id+'">',void 0!==r.icon&&""!==r.icon&&(void 0!==r.font&&""!==r.font?a.left[e]+='<i class="'+r.font+" "+r.icon+'" data-icon="'+r.icon+'" data-font="'+r.font+'"></i>':a.left[e]+='<i class="larry-icon" data-icon="'+r.icon+'" data-font="larry-icon"></i>'),a.left[e]+="<cite>"+r.title+"</cite>",a.left[e]+="</a>";a.left[e]+="</li>"}}}else for(a="",e=0;e<t.length;e++){if(a+='<li class="larryms-nav-item">',void 0!==t[e].children&&null!==t[e].children&&t[e].children.length>0){a+='<a data-id="larry-'+t[e].id+'">',void 0!==t[e].icon&&null!==t[e].icon&&(void 0!==t[e].font&&null!==t[e].font?a+='<i class="'+t[e].font+" "+t[e].icon+'" data-icon="'+t[e].icon+'" data-font="'+t[e].font+'"></i>':a+='<i class="larry-icon" data-icon="'+t[e].icon+'" data-font="larry-icon"></i>'),a+="<cite>"+t[e].title+"</cite>",a+='<span class="larryms-nav-more"></span>',a+="</a>",a+='<dl class="larryms-nav-child">';for(r="",n=0;n<t[e].children.length;n++){if(void 0!==(r=t[e].children[n]).children&&null!==r.children&&r.children.length>0){a+='<dd class="grandson">',a+='<a data-id="larry-'+r.id+'">',void 0!==r.icon&&""!==r.icon&&(void 0!==r.font&&""!==r.font?a+='<i class="'+r.font+" "+r.icon+'" data-icon="'+r.icon+'" data-font="'+r.font+'"></i>':a+='<i class="larry-icon" data-icon="'+r.icon+'" data-font="larry-icon"></i>'),a+="<cite>"+r.title+"</cite>",a+='<span class="larryms-nav-more"></span>',a+="</a>",a+='<dl class="larryms-nav-child">';o="";for(var s=0;s<r.children.length;s++)a+="<dd>",a+=void 0!==(o=r.children[s]).url&&""!==o.url?'<a data-url="'+o.url+'" data-id="larry-'+o.id+'">':'<a data-id="larry-'+o.id+'">',void 0!==o.icon&&""!==o.icon&&(void 0!==o.font&&""!==o.font?a+='<i class="'+o.font+" "+o.icon+'" data-icon="'+o.icon+'" data-font="'+o.font+'"></i>':a+='<i class="larry-icon" data-icon="'+o.icon+'" data-font="larry-icon"></i>'),a+="<cite>"+o.title+"</cite>",a+="</a>",a+="</dd>";a+="</dl>"}else a+="<dd>",a+=void 0!==r.url&&""!==r.url?'<a data-url="'+r.url+'" data-id="larry-'+r.id+'">':'<a data-id="larry-'+r.id+'">',void 0!==r.icon&&""!==r.icon&&(void 0!==r.font&&""!==r.font?a+='<i class="'+r.font+" "+r.icon+'" data-icon="'+r.icon+'" data-font="'+r.font+'"></i>':a+='<i class="larry-icon" data-icon="'+r.icon+'" data-font="larry-icon"></i>'),a+="<cite>"+r.title+"</cite>",a+="</a>";a+="</dd>"}a+="</dl>"}else a+=void 0!==t[e].url&&""!==t[e].url?'<a data-url="'+t[e].url+'" data-id="larry-'+t[e].id+'">':'<a data-id="larry-'+t[e].id+'">',void 0!==t[e].icon&&""!==t[e].icon&&(void 0!==t[e].font&&""!==t[e].font?a+='<i class="'+t[e].font+" "+t[e].icon+'" data-icon="'+t[e].icon+'" data-font="'+t[e].font+'"></i>':a+='<i class="larry-icon" data-icon="'+t[e].icon+'" data-font="larry-icon"></i>'),a+="<cite>"+t[e].title+"</cite>",a+="</a>";a+="</li>"}return a}function f(t,i){var e={};for(var r in t)a.inArray(r,i)&&(e[r]=t[r]);return e}function u(t,i){var e;if("top_menu"==i){if(void 0===t)return e="undefined";if("string"!=typeof t&&"object"!=typeof t)return r.error(i+"参数未定义或设置出错",r.tit[1]),e="error"}else{if(void 0===t)return r.error("未设置【"+i+"】参数，请检查参数配置项",r.tit[1]),e="error";if("string"!=typeof t&&"object"!=typeof t)return r.error(i+"参数未定义或设置出错",r.tit[1]),e="error"}if("string"==typeof t&&(e=a(""+t)),"object"==typeof t&&(e=t),0===e.length)return r.error("您虽然设置了"+i+"参数，但DOM中却查找不到定义的【"+t+"】元素,请仔细检查",r.tit[1]),e="error";var n=e.attr("lay-filter");return void 0!==n&&""!==n||r.error("请为【"+t+"】容器设置lay-filter属性",r.error[0]),e}d.prototype.set=function(t){return a.extend(!0,this.config,t),this},d.prototype.font=function(t){a.extend(!0,this.fonts,t),r.font(this.fonts.icon,this.fonts.url,this.fonts.online)},d.prototype.menuSet=function(t){if(t.hasOwnProperty("url")||t.hasOwnProperty("data")){var i=f(t,["data","url","type","cached","spreadOne","top_menu","topFilter","left_menu","leftFilter"]);this.set(i)}else r.error("数据源解析出错：请设置data或url参数，否则导航菜单无法正常初始化！",r.tit[1])},d.prototype.tabSet=function(t){var i=f(t,["tab_elem","tabFilter","tabSession","closed","tabMax","autoRefresh","tabShow"]);return a.extend(this.config,i),this},d.prototype.menu=function(){var t=this,i=t.config;if(void 0!==i.data||void 0!==i.url)return void 0!==i.data&&"object"==typeof i.data?console.log("设置了data"):void 0!==i.url&&a.ajax({type:i.type,url:i.url,async:!1,dataType:"json",success:function(i,a,e){t.larryCompleteMenu(i.data)},error:function(t,i,a){r.error("系统错误:"+a,r.tit[1])},complete:function(){e.render()}}),t;r.error("系统错误: 请为菜单项配置数据源[data || url]",r.tit[1])},d.prototype.larryCompleteMenu=function(t){var i=this.config,a=u(i.top_menu,"top_menu"),e=u(i.left_menu,"left_menu");if("error"!==e)if("undefined"!=a){var r=c(t,"on");layui.data("larry_menu",{key:"navHtml",value:r}),a.html(r.top),e.html(r.left[0]),i.top_menu=a,i.left_menu=e}else{r=c(t,"off");layui.data("larry_menu",{key:"navHtml",value:r}),e.html(r),i.left_menu=e}},d.prototype.on=function(t,i,n){var o=this.config,l=function(t){var i={eventName:"",filter:""};if("string"!=typeof t)return void r.error("事件名设置错误，请参考LarryMS API文档.",r.tit[2]);var a=t.indexOf("(");return i.eventName=t.substr(0,a),i.filter=t.substring(a+1,t.indexOf(")")),i}(t),d=void 0!==i?i:"0";if("click"===l.eventName&&l.filter===o.topFilter)return o.left_menu.empty(),o.left_menu.attr("data-group",d),o.left_menu.html(layui.data("larry_menu").navHtml.left[d]),e.render("nav"),"success";"click"===l.eventName&&l.filter===o.leftFilter&&o.left_menu.find("li").each(function(){var t=a(this),i=t.find("dl");t.find(".grandson");o.spreadOne&&t.on("click",function(){t.hasClass("larryms-nav-itemed")&&t.siblings().removeClass("larryms-nav-itemed")}),i.length>0?i.children("dd").each(function(){var t=a(this);a(this).on("click",function(){if(!t.hasClass("grandson")){var i=a(this).children("a"),e=i.data("id"),r=i.data("url"),o=i.children("i:first").data("font"),l=i.children("i:first").data("icon"),s=i.children("cite").text();n({elem:i,field:{id:e,href:r,font:o,icon:l,title:s,group:d}})}})}):t.on("click",function(){var i=t.children("a"),a=i.data("id"),e=i.data("url"),r=i.children("i:first").data("font"),o=i.children("i:first").data("icon"),l=i.children("cite").text();n({elem:i,field:{id:a,href:e,font:r,icon:o,title:l,group:d}})})})},d.prototype.tabInit=function(){var t=this.config;return $container=u(t.tab_elem,"tab_elem"),t.tab_elem=$container,o.titleBox=$container.children("#larryms_title").children("ul.larryms-tab-title"),o.contentBox=$container.children(".larryms-tab-content"),o.tabFilter=$container.attr("lay-filter"),o.tabCtrBox=$container.find("#buttonRCtrl"),this},d.prototype.exists=function(t,i,e){var r={tabIndex:-1,pageIndex:void 0,pflag:0,id:0,pages:"nav"};void 0===o.titleBox&&this.tabInit();return o.titleBox.find("li").each(function(n,o){var l=a(this).children("cite"),d=a(this).data("id"),s=a(this).attr("id"),c=a(this).data("url"),f=a(this).attr("lay-id");if(void 0!==i)r.pages="nav",l.text()===t&&d===i?r.tabIndex=n:void 0!==d&&d===i||l.text()===t&&"larryms_home"===s&&(r.tabIndex=0);else{if(r.pages="page",l.text()===t)return c===e?(r.tabIndex=n,r.pflag=n,r.id=f):r.pageIndex=n,r;r.pageIndex=-1}}),r},d.prototype.getTabId=function(t){var i=-1;void 0===o.titleBox&&this.tabInit();return o.titleBox.find("li").each(function(e,r){a(this).children("cite").text()===t&&(i=a(this).attr("lay-id"))}),i},d.prototype.getCurrentTabId=function(){var t=this.config;return a(t.tab_elem).find("ul.larryms-tab-title").children("li.layui-this").attr("lay-id")},d.prototype.tabAdd=function(t){var n=this,d=n.config,s="",c="",f=n.exists(t.title,t.id,t.href);if(-1==f.tabIndex){if("undefined"!==d.tabMax){var u=o.titleBox.children("li").length,h=d.tabMax.tipMsg||"为了保障系统流畅运行，只允许同时打开"+d.tabMax+"个选项卡，或请设置允许新增选项卡个数";if("number"==typeof d.tabMax&&u===d.tabMax)return void r.error(h,r.tit[1]);if(("object"==typeof d.tabMax||"string"==typeof d.tabMax)&&u===d.tabMx.max)return void r.error(h,r.tit[1])}d.tabSession?n.session(function(t){var a=JSON.parse(t.getItem("tabMenu")),e=new Array;for(i=0;i<a.length;i++)e[i]=a[i].id;l=Math.max.apply(null,e),l++}):(console.log(d.tabSession),l++),null==f.pageIndex&&(void 0!==t.font?void 0!==t.icon&&(c+='<i class="'+t.font+" "+t.icon+'" data-icon="'+t.icon+'"></i>'):c+='<i class="larry-icon '+t.icon+'" data-icon="'+t.icon+'"></i>',c+="<cite>"+t.title+"</cite>",d.closed&&(c+='<i class="layui-icon layui-unselect layui-tab-close" data-id="'+l+'">&#x1006;</i>'),s='<iframe src="'+t.href+'" id="ifr'+l+'" data-group="'+t.group+'" data-id="'+t.id+'" lay-id="'+l+'" name="ifr_'+l+'" class="larryms-iframe"></iframe>',e.tabAdd(o.tabFilter,{title:c,content:s,id:l,larryID:t.id,url:t.href,group:t.group,pages:f.pages}),n.tabChange(l),n.tabAuto(0),n.pageEffect(5,!0)),n.pageEffect(l,Math.ceil(5*Math.random())),d.closed&&o.titleBox.find("li").children("i.layui-tab-close[data-id="+l+"]").on("click",function(){n.tabDelete(a(this).parent("li").attr("lay-id")),n.tabAuto(1)}),d.tabSession&&n.session(function(i){var a=JSON.parse(i.getItem("tabMenu"))||[],e={title:t.title,href:t.href,font:t.font,icon:t.icon,closed:d.closed,group:t.group,id:l,larryID:t.id};a.push(e),i.setItem("tabMenu",JSON.stringify(a)),i.setItem("currentTabMenu",JSON.stringify(e))})}else if(f.pflag)o.titleBox.find("li[lay-id="+f.id+"]").click(),n.autoRefresh(f.id),o.tabCtrBox.find("#tabCtrD").click(),n.tabAuto(0);else{var y=n.getTabId(t.title);n.tabChange(y),n.autoRefresh(y),n.tabAuto(0)}},d.prototype.pageEffect=function(t,i){i},d.prototype.recoveryTab=function(t){var i=this.config,r=this.exists(t.title,t.id,t.href);if(-1==r.tabIndex){var n="";void 0!==t.font?void 0!==t.icon&&(n+='<i class="'+t.font+" "+t.icon+'" data-icon="'+t.icon+'"></i>'):n+='<i class="larry-icon '+t.icon+'" data-icon="'+t.icon+'"></i>',n+="<cite>"+t.title+"</cite>",i.closed&&(n+='<i class="layui-icon layui-unselect layui-tab-close" data-id="'+t.id+'">&#x1006;</i>');var l='<iframe src="'+t.href+'" id="ifr'+t.id+'" data-group="'+t.group+'" data-id="'+t.LarryID+'" lay-id="'+t.id+'" name="ifr_'+t.id+'" class="larryms-iframe"></iframe>';e.tabAdd(o.tabFilter,{title:n,content:l,id:t.id,larryID:t.larryID,url:t.href,font:t.font,icon:t.icon,group:t.group,closed:t.closed,pages:r.pages})}else this.session(function(t){"0"!==JSON.parse(t.getItem("currentTabMenu")).id&&a("#larryms_home").removeClass("layui-this")})},d.prototype.tabChange=function(t,i,r){i=i||"off",r=r||"nav";if(this.config.tabSession&&this.session(function(i){var a=JSON.parse(i.getItem("currentTabMenu"));if(!a)return!1;if(a.id!=t)for(var e=JSON.parse(i.getItem("tabMenu")),r=0;r<e.length;r++)if(e[r].id==t){i.setItem("currentTabMenu",JSON.stringify(e[r]));break}}),"on"===i){var n=a(this.config.top_menu),o=a(this.config.left_menu),l=a('#larry_tab_title li[lay-id="'+t+'"]'),d=l.data("id"),s=l.data("group");if("larryms-home"===d)var c=l.children("cite").text();var f=o.find("a");function u(t,i,e,r,n){return void 0!==i&&i===r?(e.find(".larryms-this").removeClass("larryms-this"),e.find(".larryms-nav-itemed").removeClass("larryms-nav-itemed"),e.find(".grandsoned").removeClass("grandsoned"),a(t).parents("dd").hasClass("grandson")?(a(t).parents("li").addClass("larryms-nav-itemed"),a(t).parents("dd.grandson").addClass("grandsoned"),a(t).parent("dd").addClass("larryms-this")):!a(t).parents("dd").hasClass("grandson")&&a(t).parent("dd").length?(a(t).parents("li").addClass("larryms-nav-itemed"),a(t).parent("dd").addClass("larryms-this")):a(t).parent("li").addClass("larryms-this"),!1):"larryms-home"===r&&void 0!==i&&a(t).children("cite").text()===n?(e.find(".larryms-this").removeClass("larryms-this"),a(t).parent("li").addClass("larryms-this"),!1):void 0}0==f.length&&(n.children("li").eq(s).click(),l.click()),a.each(f,function(t,i){var e=a(i).data("group"),r=a(i).data("id"),o=a(".larryms-nav-tree");void 0!==e&&e===s?u(i,r,o,d,c):e!==s&&void 0!==e&&(n.children("li").eq(s).click(),l.click(),u(i,r,o,d,c))})}e.tabChange(this.config.tabFilter,t,r).render()},d.prototype.tabDelete=function(t){this.config.tabSession&&this.session(function(i){for(var a=JSON.parse(i.getItem("tabMenu")),e=0;e<a.length;e++)a[e].id==t&&a.splice(e,1);i.setItem("tabMenu",JSON.stringify(a)),JSON.parse(i.getItem("currentTabMenu")).id==t&&i.setItem("currentTabMenu",JSON.stringify(a.pop()))});var i=e.tabDelete(this.config.tabFilter,t).render();this.tabChange(i.larryElem.LarryLayID,"on"),this.tabAuto(1)},d.prototype.tabAuto=function(t){a("#larryms_title").each(function(){var t=a(this),i=t.children(".larryms-tab-title"),e=i.find(".layui-this"),r=(i.children("#larryms_home"),t.find(".larryms-btn-default")),o=0;i.find("li").each(function(t,i){o+=parseInt(a(i).outerWidth(!0))}),i.find("li")[0]&&a(window).off("resize").on("resize",function(){var l=parseInt(t.outerWidth(!0)-264),d=parseInt(e.outerWidth(!0)),s=parseInt(e.position().left+1),c=parseInt(i.css("marginLeft")),f=l-o;if(o>l){if(r.removeClass("hide"),t.addClass("larryms-tab-auto"),c+s<=0)f=0-s;else l+Math.abs(c)-s-d<=0?f=l-s-d:(f=l-s-d)>0&&(f=0);i.css({marginLeft:f})}else r.addClass("hide"),t.removeClass("larryms-tab-auto"),i.css({marginLeft:0});a(".larryms-btn-default").off("click").on("click",function(){if(o>l){var t=parseInt(i.css("marginLeft"));"goLeft"===a(this).attr("id")&&(0!==Math.abs(t)?t+l<0?i.css({marginLeft:t+l}):i.css({marginLeft:0}):n.tips("已滚动到最左侧了",a(this),{tips:[1,"#FF5722"]})),"goRight"===a(this).attr("id")&&(Math.abs(t)!==o-l?Math.abs(t)+l>=o-d?i.css({marginLeft:l-o}):i.css({marginLeft:t-l/2}):n.tips("已滚动到最右侧了",a(this),{tips:[1,"#FF5722"]}))}})}).resize()})},d.prototype.tabCtrl=function(t){var i=this,e=i.config,n=i.getCurrentTabId();switch(t){case"positionCurrent":var o=a(e.tab_elem).find("ul.layui-tab-title").children("li.layui-this"),l=a(e.tab_elem).find('iframe[lay-id="'+n+'"]').attr("src"),d=o.children("i:first").data("font"),s=o.children("i:first").data("icon"),c=o.data("group"),f=o.data("id"),u={title:o.children("cite").text(),href:l,font:d,icon:s,group:c,id:f};i.tabAdd(u),i.tabAuto(0);break;case"closeCurrent":n>0?i.tabDelete(n):r.error("默认首页不能关闭的哦！",r.tit[0]);break;case"closeOther":(y=(h=a(e.tab_elem).find("ul.layui-tab-title").children("li")).length)>2?h.each(function(){var t=a(this).attr("lay-id");t!==n&&void 0!==t&&"0"!==t&&i.tabDelete(t)}):2==y?r.error("【默认首页】不能关闭，当前暂无其他可关闭选项卡！",r.tit[0]):r.error("当前暂无其他可关闭选项卡！",r.tit[0]);break;case"closeAll":var h,y;(y=(h=a(e.tab_elem).find("ul.layui-tab-title").children("li")).length)>1?h.each(function(){var t=a(this).attr("lay-id");t>0&&i.tabDelete(t)}):r.error("当前暂无其他可关闭选项卡！",r.tit[0]);break;case"refreshAdmin":r.confirm("您确定要重新加载系统吗！",function(){location.reload()},function(){})}},d.prototype.render=function(){var t=this,i=t.config,e=void 0!==i.top_menu?i.top_menu:"#larryms_top_menu",r=void 0!==i.left_menu?i.left_menu:"#larryms_left_menu";void 0!==i.top_menu&&a(e).on("click","li",function(){var t=a(this).children("a").data("group");tab.on("click("+i.topFilter+")",t),a(r).off("mouseenter",s).one("mouseenter",s)}),a(r).one("mouseenter",s);var n=null==layui.data("larryms").systemSet||layui.data("larryms").systemSet.tabCache;n||(i.tabSession=n,sessionStorage.removeItem("tabMenu"),sessionStorage.removeItem("currentTabMenu")),t.session(function(e){if(i.tabSession)if(e.getItem("tabMenu")){var r=JSON.parse(e.getItem("tabMenu"));a.each(r,function(i,a){t.recoveryTab(a)});var n=JSON.parse(e.getItem("currentTabMenu"));n?(t.tabChange(n.id,"on"),t.tabAuto(1)):(t.tabChange(r[0].id,"on"),t.tabAuto(1)),l=r.length}else{var o=a("#larry_tab_title li").eq(0);if(o.length){var d=JSON.parse(e.getItem("tabMenu"))||[],s={font:o.children("i").data("font"),icon:o.children("i").data("icon"),title:null==o.find("cite").text()?o.find("cite").text():"后台首页",href:o.data("url"),id:o.attr("lay-id"),LarryID:o.data("id"),closed:!1};d.push(s),e.setItem("tabMenu",JSON.stringify(d)),e.setItem("currentTabMenu",JSON.stringify(s))}}}),a("#larry_tab").on("click","#larry_tab_title li i.layui-tab-close",function(){i.closed&&(t.tabDelete(a(this).parent("li").attr("lay-id")),t.tabAuto(1))}),a("#larry_tab").on("click","#larry_tab_title li",function(){var i=a(this).attr("lay-id");t.tabChange(i,"on"),t.autoRefresh(i)})},d.prototype.autoRefresh=function(t){if(this.config.autoRefresh){var i=o.contentBox.find(".layui-tab-item").children("iframe[data-id="+t+"]");i.attr("src",i.attr("src"))}},d.prototype.session=function(t){if(!window.sessionStorage)return!1;t(window.sessionStorage)},d.prototype.test=function(){console.log("LarryTab-test")},window.tab=new d,window.top==window.self&&(tab.render(),a("#larryms_refresh").off("click").on("click",function(){a("#larry_tab_content").children(".layui-show").children("iframe").attr("src",a("#larry_tab_content").children(".layui-show").children("iframe").attr("src"))}),a("body").on("selectstart",function(){return!1}),a("#buttonRCtrl").find("dd").each(function(){a(this).on("click",function(){var t=a(this).children("a").attr("data-eName");tab.tabCtrl(t)})})),t("larryTab",function(t){return tab.set(t)})})}});