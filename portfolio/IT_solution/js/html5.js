
/*! HTML5 Shiv vpre3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
  Uncompressed source: https://github.com/aFarkas/html5shiv  */
(function(a,b){function h(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function i(){var a=l.elements;return typeof a=="string"?a.split(" "):a}function j(a){var b={},c=a.createElement,f=a.createDocumentFragment,g=f();a.createElement=function(a){if(!l.shivMethods)return c(a);var f;return b[a]?f=b[a].cloneNode():e.test(a)?f=(b[a]=c(a)).cloneNode():f=c(a),f.canHaveChildren&&!d.test(a)?g.appendChild(f):f},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(a){return c(a),g.createElement(a),'c("'+a+'")'})+");return n}")(l,g)}function k(a){var b;return a.documentShived?a:(l.shivCSS&&!f&&(b=!!h(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),g||(b=!j(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g;(function(){var c=b.createElement("a");c.innerHTML="<xyz></xyz>",f="hidden"in c,f&&typeof injectElementWithStyles=="function"&&injectElementWithStyles("#modernizr{}",function(b){b.hidden=!0,f=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).display=="none"}),g=c.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var l={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:k};a.html5=l,k(b)})(this,document)



var checkWidth = function() {
	var browserWidth = $(window).width();
	var $body = jQuery('body');
	if (browserWidth <= 650 ) {
	 $body.removeClass('uiWeb');
	 $body.removeClass('uiMobile');
	 $body.addClass('uiWeb');	
	 $("#gnbMenu li ul").hide();
	  $("#gnbMenu").show();
	 $("#gnbMenu .depth2_list").hide();

	 $(".total_search input[type=text]").css({'display':'none'}) ;
	 $(".total_search .btn_totalSearch").css({'display':'none'}) ;
	 
	}else{
	   $body.removeClass('uiWeb');
	   $body.removeClass('uiMobile');
	   $body.addClass('uiWeb');
	   $("#gnbMenu").show();
	   $("#gnbMenu li ul").hide();

	   $(".total_search input[type=text]").css({'display':'inline-block'}) ;
	   $(".total_search .btn_totalSearch").css({'display':'inline-block'}) ;
	}

};

 jQuery(document).ready(function() {
	checkWidth();
	$(window).resize(checkWidth);
});


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
