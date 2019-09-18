var checkWidth = function() {
	var browserWidth = $(window).width();
	var $body = jQuery('body');
	if (browserWidth <= 650 ) {
	 $body.removeClass('uiWeb');
	 $body.removeClass('uiMobile');
	 $body.addClass('uiMobile');	
	 // $("#gnbMenu li ul").hide();
	 // $("#gnbMenu").hide();
	 $("#gnbMenu .depth2_list").show();

	// $(".total_search input[type=text]").css({'display':'none'}) ;
	 //$(".total_search .btn_totalSearch").css({'display':'none'}) ;
	 
	}else{
	   $body.removeClass('uiWeb');
	   $body.removeClass('uiMobile');
	   $body.addClass('uiWeb');
	   $("#gnbMenu").show();
	   $("#gnbMenu li ul").hide();

	   $(".uiWeb .total_search input[type=text]").css({'display':'inline-block'}) ;
	   $(".uiWeb .total_search .btn_totalSearch").css({'display':'inline-block'}) ;
	}

};

 jQuery(document).ready(function() {
	checkWidth();
	$(window).resize(checkWidth);
});



