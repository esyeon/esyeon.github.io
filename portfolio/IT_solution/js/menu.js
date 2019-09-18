/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */
;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					$('#gnbMenu .sf-breadcrumb').addClass('sfHover');
					$('body').removeClass('body_hover');
					$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
				.filter('li:has(ul)').removeClass(o.pathClass);
				$('body').addClass('body_hover');
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'current',
		pathLevels	: 1,
		delay		: 100,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: false,
		dropShadows : false,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','visible');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
				$('body').addClass('body_hover');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);

var menuJs={	
	menu : function(target,aClick,act,act02,act03,act04,act05){
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
		$(''+ target + ' li:nth-child('+ act + ') a').addClass("selected");
		$(''+ target + ' .depth2 li a').removeClass("selected");
		$(''+ target + ' li:nth-child('+ act + ') .depth2').show();
		$(''+ target + ' li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .dep2_tit a').addClass("selected");

		$(''+ target + ' li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3').show();
		$(''+ target + ' li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') a').addClass("selected");
				
		$(''+ target + ' li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4').show();
		$(''+ target + ' li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4 li a').removeClass("selected");
		$(''+ target + ' li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4 li:nth-child('+ act04 + ') a').addClass("selected");
				
		$(''+ target + ' li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4 li:nth-child('+ act04 + ') .depth5').show();
		$(''+ target + ' li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4 li:nth-child('+ act04 + ') .depth5 li a').removeClass("selected");
		$(''+ target + ' li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') .depth4 li:nth-child('+ act04 + ') .depth5 li:nth-child('+ act05 + ') a').addClass("selected");
		var aClick = aClick;
		$(aClick).click(function()
		{
			//$('.depth3').hide();
			//$(''+ target + '.depth2 li a').removeClass("on");
			//$(''+ target + 'li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .dep2_tit').addClass("on");
			//$(''+ target + 'li:nth-child('+ act + ') .depth2 li:nth-child('+ act02 + ') .depth3 li:nth-child('+ act03 + ') a').addClass("on");
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

