var menuJs={
	
	menu : function(aClick,act,act02,act03,act04,act05){
	isTouchWebkit = "ontouchstart" in window && "WebKitCSSMatrix" in window;
	if ( isTouchWebkit )
	{
		var child_count = 0;
		var aClick = aClick;
		$(aClick).click(function()
		{
			if($(this).parent().parent().parent() != null && $(this).attr('class').indexOf('selected') < 0)
			{
				$(this).parent().parent().parent().children('li').each(function()
				{
					if($(this).children('span').children('.has_child').attr('class') != null)
					{
						if($(this).children('span').children('.has_child').attr('class').indexOf('selected') >= 0 )
						{
							$(this).children('span').children('.has_child').removeClass('selected');
							$(this).children('ul').hide();
						}
					}
				});
			}
			
			if($(this).attr('class').indexOf('selected') < 0 )
			{
				$(this).addClass('selected');
				
				child_count = $(this).parent().parent().children('ul').children('li').length
				$(this).parent().parent().children('ul').animate({'height':'toggle'}, 100 + (child_count * 60), 'swing', function(){});
			}
			else
			{
				$(this).removeClass('selected');
				child_count = $(this).parent().parent().children('ul').children('li').length;
				$(this).parent().parent().children('ul').animate({'height':'toggle'}, (child_count * 100), 'swing', function(){});
			}
		});
	}
	else
	{
		$('.lnb li:nth-child('+ act + ') a').addClass("hover");
		$('.lnb .depth2 li a').removeClass("hover");
		$('.lnb li:nth-child('+ act + ') .depth2').show();
		$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .dep2_tit').addClass("selected");

		$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3').show();
		$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') a').addClass("selected");
				
		$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4').show();
		$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4 li a').removeClass("selected");
		$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4 li:nth-child('+ act04 + ') a').addClass("selected");
				
		$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4 li:nth-child('+ act04 + ') .depth5').show();
		$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4 li:nth-child('+ act04 + ') .depth5 li a').removeClass("selected");
		$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4 li:nth-child('+ act04 + ') .depth5 li:nth-child('+ act05 + ') a').addClass("selected");
		var aClick = aClick;
		$(aClick).click(function()
		{
			//$('.depth3').hide();
			//$('.lnb .depth2 li a').removeClass("on");
			//$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .dep2_tit').addClass("on");
			//$('.lnb li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') a').addClass("on");
			if($(this).parent().parent().parent() != null && $(this).attr('class').indexOf('selected') < 0)
			{
				$(this).parent().parent().parent().children('li').each(function()
				{
					if($(this).children('span').children('.has_child').attr('class') != null)
					{
						if($(this).children('span').children('.has_child').attr('class').indexOf('selected') >= 0 )
						{
							$(this).children('span').children('.has_child').removeClass('selected');
							$(this).children('ul').hide();
						}
					}
				});
			}
			
			if($(this).attr('class').indexOf('selected') < 0 )
			{
				$(this).addClass('selected');
				
				child_count = $(this).parent().parent().children('ul').children('li').length;
				$(this).parent().parent().children('ul').animate({'height':'toggle'}, 100 + (child_count * 60), 'swing', function(){});
			}
			else
			{
				$(this).removeClass('selected');
				
				child_count = $(this).parent().parent().children('ul').children('li').length;
				$(this).parent().parent().children('ul').animate({'height':'toggle'});
				//$('.depth3').hide();
				//$('.depth2 a').removeClass('selected');
			}
		});
	}

}}; 

/* Superfish v1.4.8 - jQuery menu widget */
(function($){
	/* hoverIntent by Brian Cherne */
	$.fn.hoverIntent = function(f,g) {
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );
		var cX, cY, pX, pY;
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				pX = cX; pY = cY;
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};
		var handleHover = function(e) {
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			var ev = jQuery.extend({},e);
			var ob = this;

			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			if (e.type == "mouseover") {
				pX = ev.pageX; pY = ev.pageY;
				$(ob).bind("mousemove",track);
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}
			} else {
				$(ob).unbind("mousemove",track);
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};
		return this.mouseover(handleHover).mouseout(handleHover);
	};
})(jQuery);

;(function($){
	$.fn.superfish = function(op){
		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				$('.depth2_list').slideDown();
				$('#gnbMenu').addClass('hover');
			},
			out = function(){}
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
			})
		}).each(function() {			
		});
	};
	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){};
	sf.c = {};
	sf.defaults = {};	
})(jQuery);

$(document).ready(function(){
	$('#gnbMenu > ul').superfish({animation:{height:'show'}, speed: 200, delay: 500});
	$('.uiWeb #gnbMenu').mouseleave(function(){
		$(".uiWeb .gnb .depth2_list").slideUp();
		$('.uiWeb #gnbMenu').removeClass('hover');
	});
	$('.uiWeb #gnbMenu a').focus(function(){
		$('.uiWeb .depth2_list').slideDown();
		$('.uiWeb #gnbMenu').addClass('hover');
	});
	$('.lnb a').focus(function(){
		$(".gnb .depth2_list").hide();
		$('#gnbMenu').removeClass('hover');
	});

	$('#dMbody a').focus(function(){
		$(".gnb .depth2_list").hide();
		$('#gnbMenu').removeClass('hover');
	});
});

var menuGnbJs={
	menuGnb : function(gnbClick){
	isTouchWebkit = "ontouchstart" in window && "WebKitCSSMatrix" in window;
	if ( isTouchWebkit )
	{
		var child_count = 0;
		var gnbClick = gnbClick;
		$(gnbClick).click(function()
		{
			if($(this).parent().parent().parent() != null && $(this).attr('class').indexOf('selected') < 0)
			{
				$(this).parent().parent().parent().children('li').each(function()
				{
					if($(this).children('span').children('.has_child').attr('class') != null)
					{
						if($(this).children('span').children('.has_child').attr('class').indexOf('selected') >= 0 )
						{
							$(this).children('span').children('.has_child').removeClass('selected');
							//$(this).children('ul').hide();
						}
					}
				});
			}
			
			if($(this).attr('class').indexOf('selected') < 0 )
			{
				$(this).addClass('selected');
				
				child_count = $(this).parent().parent().children('ul').children('li').length
				$(this).parent().parent().children('ul').animate({'height':'toggle'}, 100 + (child_count * 60), 'swing', function(){});
			}
			else
			{
				$(this).removeClass('selected');
				child_count = $(this).parent().parent().children('ul').children('li').length;
				$(this).parent().parent().children('ul').animate({'height':'toggle'}, (child_count * 100), 'swing', function(){});
			}
		});
	}
	else
	{
		var gnbClick = gnbClick;
		$(gnbClick).click(function()
		{	
			
			if($(this).parent().parent().parent() != null && $(this).attr('class').indexOf('selected') < 0)
			{
				$(this).parent().parent().parent().children('li').each(function()
				{
					if($(this).children('span').children('.has_child').attr('class') != null)
					{
						if($(this).children('span').children('.has_child').attr('class').indexOf('selected') >= 0 )
						{
							$(this).children('span').children('.has_child').removeClass('selected');
							//$(this).children('ul').hide();
						}
					}
				});
			}
			
			if($(this).attr('class').indexOf('selected') < 0 )
			{
				$(this).addClass('selected');
				
				child_count = $(this).parent().parent().children('ul').children('li').length;
				$(this).parent().parent().children('ul').animate({'height':'toggle'}, 100 + (child_count * 60), 'swing', function(){});
			}
			else
			{
				$(this).removeClass('selected');
				child_count = $(this).parent().parent().children('ul').children('li').length;
				$(this).parent().parent().children('ul').animate({'height':'toggle'});
			}
		});
	}
}}; 

// tab
var jsCreate = {
	toggleList : function($obj){
		var obj = $obj[0];
		obj.reset = function(){
			obj.t = $obj.find(".aLink"), obj.btn = obj.t.find(".trigger"), obj.v = $obj.find(".memo");
			obj.v.eq(obj.v.length-1).addClass("last");
			if(obj.t.length==0) return;
			obj.btn.each(function(z){
				this.flag = (obj.t[z].className.match(/active/)) ? true : false;
				this.onclick = function(){
					var bThis = this;
					obj.t.each(function(i){
						if(z==i && !obj.btn[i].flag){
							obj.btn[i].flag = true, obj.btn[i].title = bThis.title.replace("프로필보기","프로필닫기");
							obj.t.eq(i).addClass("active");
							obj.v.eq(i).addClass("active");
							obj.t.eq(i).find("a").text('프로필닫기');
							
						}else{
							obj.btn[i].flag = false, obj.btn[i].title = bThis.title.replace("프로필닫기","프로필보기");
							obj.t.eq(i).removeClass("active");
							obj.v.eq(i).removeClass("active");
							obj.t.eq(i).find("a").text('프로필보기');
							
						}
					});
					return false;
				}
			});
		}
		obj.reset();
	},
	tabToggle : function(tabContainer){
		tabclick = $(tabContainer).find(".tabclick");
		$(tabContainer).find(".tab_navi + div:first").show();
		$(tabContainer).find(".tab_navi li:first .tabclick").addClass("on");
		tabclick.click(function(){
			var curObj = this;
			var $this = $(this);
			tabclick.each(function(){
				if(this==curObj){
					if(this.href.split("#").length>1) 
					$("#"+this.href.split("#")[1]).fadeIn(); 
					tabclick.removeClass("on");
					$this.addClass("on");					
				}else{
					if(this.href.split("#").length>1) 
					$("#"+this.href.split("#")[1]).css({'display':'none'}) ;
				}
			});
		})
	}
}


/* img over */
function imgMenuOver(containderID) {
	var objwrap = document.getElementById(containderID);
	
	if (objwrap != null) {
		var imgMenu = objwrap.getElementsByTagName("a");
		for (i=0; i<imgMenu.length; i++) {
			if(imgMenu[i].getElementsByTagName("img").length == 0) continue;
	
			if (imgMenu[i].getElementsByTagName("img")[0].src.indexOf("_on.png") != -1 ) {
				continue;
			}
			imgMenu[i].onmouseover = function() {
				subImage = this.getElementsByTagName("img")[0];
				if (subImage.src.indexOf("_on.png") != -1) return false;
				subImage.src = subImage.src.replace("_off.png","_on.png");
			}
			imgMenu[i].onfocus = function() {
				subImage = this.getElementsByTagName("img")[0];
				if (subImage.src.indexOf("_on.png") != -1) return false;
				subImage.src = subImage.src.replace("_off.png","_on.png");
			}
			imgMenu[i].onmouseout = function() {
				subImage = this.getElementsByTagName("img")[0];
				subImage.src = subImage.src.replace("_on.png", "_off.png");
			}
			imgMenu[i].onblur = function() {
				subImage = this.getElementsByTagName("img")[0];
				subImage.src = subImage.src.replace("_on.png", "_off.png");
			}
		}
	}
}

$(window).scroll(function()  {  
	var dHeightH = $('header').outerHeight();
	var dHeightC = $('#contents').outerHeight();
	var dHeightQ = $('.quick_menu').outerHeight();
	var dHeightT = dHeightH + dHeightC - dHeightQ - 200;
	
	if($(window).scrollTop()  > dHeightT){  
		$('.quick_menu').stop();   
		
	}else if($(window).scrollTop()  < dHeightT || $(window).scrollTop() == dHeightT){
		$('.quick_menu').animate({top:$(window).scrollTop() + "px" },{queue: false, duration: 250});   
	}
		 
});  

$(window).scroll(function(){
	var scrollHeight = $(window).scrollTop() ;
	if (scrollHeight > 170){
		$('.btn_top').addClass('fix'); 
	}else{  
		$('.btn_top').removeClass('fix'); 
	}
});

/* font */
function wdSetFontSize(a) {
 var defaultFontSize = 1;//em
 var minFontSize = 1;//em
  var maxFontSize = 2.2;//em
 try{
	 obj = document.getElementById("contents");
	 var objFontSize = obj.style.fontSize;

 }catch(e){
	 obj = document.getElementById("contents");
	 var objFontSize = obj.style.fontSize;

 }
 if (!objFontSize) { objFontSize = parseFloat(defaultFontSize)+"em"; }
 var checkFontSize = (Math.round(12*parseFloat(objFontSize))+(a*4))/12;
 if (checkFontSize >= maxFontSize) { 
	 checkFontSize = maxFontSize; obj.style.fontSize = maxFontSize;; 
	}
 else if (checkFontSize <= minFontSize) { checkFontSize = minFontSize; obj.style.fontSize = checkFontSize+"em";}
 else { obj.style.fontSize = checkFontSize+"em"; }

}
function wdSetFontSizeDefault() {
 var defaultFontSize = 1;//em
 var minFontSize = .9;//em
 var maxFontSize = 2.2;//em
 try{
	 obj = document.getElementById("contents");
	 var objFontSize = obj.style.fontSize;

 }catch(e){
	 obj = document.getElementById("contents");
	 var objFontSize = obj.style.fontSize;

 }
 if (!objFontSize) { objFontSize = parseFloat(defaultFontSize)+"em"; }
 obj.style.fontSize = "1em";
}

$(document).ready(function(){
	if (!$("#defaultFont").length) {
		return;
	}
});


$(document).ready(function(){
	$("#biggerFont").click(function(){
		wdSetFontSize(+1);
	});

	$("#defaultFont").click(function(){
		wdSetFontSizeDefault();
	});

	$("#smallFont").click(function(){
		wdSetFontSize(-1);
	});
});

/* popup */
function popOpen(url,w,h,s){
	if (navigator.userAgent.indexOf('Chrome') > 0) {
		if (typeof(w) == 'string') w = parseInt(w);
		if (typeof(h) == 'string') h = parseInt(h);
		h = h + 2;
		w = w + 1;
		}
	 var l, t, objPopup
	 l = (screen.width-w)/2;
	 t = (screen.height-h)/2;
	 if(s==1 || s=="Y")
	 objPopup = window.open(url,'','width='+w+',height='+h+',left='+l+',top='+t+',resizable=0,scrollbars=1');
	 else if (s=="" || s==0 || s=="N" || !s || s=="0" )
	 objPopup = window.open(url,'','width='+w+',height='+h+',left='+l+',top='+t+',resizable=0,scrollbars=0,status=0');
	 else
	 objPopup = window.open(url,'','width='+w+',height='+h+',left='+l+',top='+t+',resizable=1,menubar=1,toolbar=1,scrollbars=1,status=1');
	 if (objPopup == null) {
	 alert("차단된 팝업창을 허용해 주십시오.");
	 }
	 return objPopup;
} 

// Tab Content
function initTabMenu(tabContainerID) {
	var tabContainer = document.getElementById(tabContainerID);
	var tabAnchor = tabContainer.getElementsByTagName("a");
	var i = 0;

	for(i=0; i<tabAnchor.length; i++) {
		if (tabAnchor.item(i).className == "tabclick")
			thismenu = tabAnchor.item(i);
		else
			continue;

		thismenu.container = tabContainer;
		thismenu.targetEl = document.getElementById(tabAnchor.item(i).href.split("#")[1]);
		thismenu.targetEl.style.display = "none";
		thismenu.imgEl = thismenu.getElementsByTagName("img").item(0);
		thismenu.onclick = function tabMenuClick() {
			currentmenu = this.container.current;
			if (currentmenu == this)
				return false;

			if (currentmenu) {
				currentmenu.targetEl.style.display = "none";
				if (currentmenu.imgEl) {
					currentmenu.imgEl.src = currentmenu.imgEl.src.replace("_on.gif", "_off.gif");
				} else {
					currentmenu.className = currentmenu.className.replace(" on", "");
				}
			}
			this.targetEl.style.display = "";
			if (this.imgEl) {
				this.imgEl.src = this.imgEl.src.replace("_off.gif", "_on.gif");
			} else {
				this.className += " on";
			}
			this.container.current = this;

			return false;
		};

		if (!thismenu.container.first)
			thismenu.container.first = thismenu;
	}
	if (tabContainer.first)
		tabContainer.first.onclick();
}

/* mobile */

$(document).ready(function(){
	if (!$(".total_search legend").length) {
		return;
	}
	$(".total_search legend").click(function(){
		$(".total_search input[type=text]").toggle();
		$(".total_search .btn_totalSearch").toggle();
	});

	if (!$(".total_search + h2").length) {
		return;
	}

	$(".total_search + h2").click(function(){
		$(".uiMobile #gnbMenu").toggle();
		$(this).toggleClass("active");
	});

	$("#gnbMenu .btn_triger").click(function(){
		$(".uiMobile #gnbMenu").toggle();
		$('.total_search + h2').removeClass("active");
	});
	
});


function layeropen(layerName)
{
 var layer = document.getElementById("mjcPop");
 var divs = layer.getElementsByTagName("div");
 var display_state;


 for (i = 0 ; i < divs.length ; i++ )
 {  
  display_state = divs[i].style.display;


  if (display_state == "block"){
   divs[i].style.display = "none";
   break;
  }
 }
 document.getElementById(layerName).style.display = "block";
}


function layerClose(parentObj)
{
 parentObj.style.display = "none";
}


$(document).ready(function(){
	var agt = navigator.userAgent.toLowerCase();
	if  (agt.indexOf("android") != -1 || agt.indexOf("ipad") != -1 || agt.indexOf("ipod") != -1 || agt.indexOf("IEMobile") != -1 || agt.indexOf("tablet") != -1)
	{
		isTouchWebkit = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch;
		if ( isTouchWebkit )
		{	
			$(".uiWeb #gnbMenu .depth1").click(function(){
			 setTimeout(function() {
			 $(".uiWeb #gnbMenu .btn_triger").css({'display':'inline-block'});
			 }, 500); 
			 })
			
			
			 $('.uiWeb #gnbMenu').mouseleave(function(){
				$(".uiWeb #gnbMenu .btn_triger").css({'display':'none'}) ;
				$('.uiWeb #gnbMenu').removeClass('hover');
			});

			$(".uiWeb #gnbMenu .btn_triger").click(function(){
				$(".uiWeb #gnbMenu .depth2_list").slideUp();
				$(".uiWeb #gnbMenu .btn_triger").css({'display':'none'}) ;
				$('.uiWeb #gnbMenu').removeClass('hover');
			});
		}
	}else{}; 
});
