//윈도우 팝업
function win_popup(e, width, height) {
	var url = e.href;
	window.open(url, 'newWindow', 'width=' + width + ', height=' + height + ',top=0, left=0,toolbar=0, status=0, menubar=0, scrollbars=1, resizable=0,');
}

function win_popup_close() {
	self.close();
};


//부문선택 팝업
$(function () {
  var total_li = $(this).closest('.selectList').find('li:not(.radioBtn)').length;
  var btn_on = $(this).closest('.selectList').find('.btnOne.on').length;


  //부문 개별선택
  $('.selectList .btnOne').on('click', function (e) {
    var total_li = $(this).closest('.selectList').find('li:not(.radioBtn)').length;
    var this_group = $(this).closest('.selectList').find('.btnOne.on').length + 1;
    var all_Choice = $(this).parent('li').siblings('.radioBtn').find('label').text();
    var class_string = $(this).closest('.sector').attr('class')
    var this_class = class_string.substring(class_string.length, class_string.length - 2);

    if (!($(this).hasClass('on'))) {

      $(this).addClass('on');
      var this_btn = $(this).clone();
      var clickBtn = $(this).attr('data-part');

      $('.selected .mCSB_container').append(this_btn);

      if (this_group == total_li) {
        $('.selected').find('.btnOne').remove();
        if ($('selected .btnOne').attr('data-part') == clickBtn) {
          $(this).remove();
        }


        $(this).parent('li').siblings('.all.radioBtn').find('.allcheck').prop('checked', true);

        if ($(this).closest('.sector').hasClass('s1')) {
          $('.selected .mCSB_container').append('<span class="btnOne total_selected ' + this_class + '">' + all_Choice + '</span>');
        } else if ($(this).closest('.sector').hasClass('s2')) {
          $('.selected .mCSB_container').append('<span class="btnOne total_selected ' + this_class + '">' + all_Choice + '</span>');
        } else if ($(this).closest('.sector').hasClass('s3')) {
          $('.selected .mCSB_container').append('<span class="btnOne total_selected ' + this_class + '">' + all_Choice + '</span>');
        }
      }
      $('.section').find('.warning').css('visibility', 'hidden');
    } else {

      var btn_on = $(this).closest('.selectList').find('.btnOne.on').length;
      var btn_left = $('.selected').find('.btnOne.on');

      $(this).parent('li').siblings('.radioBtn').find('.allcheck').prop('checked', false);
      if (total_li == btn_on) {
        $('.selected .total_selected').remove();
        var all_sector = $(this).parent('li').siblings('li').find('.btnOne.on').clone();
        $('.selected .mCSB_container').append(all_sector)
      }

      $(this).removeClass('on');
      var clickBtn = $(this).attr('data-part');
      $('.selected .btnOne').each(function () {
        if ($(this).attr('data-part') == clickBtn) {
          $(this).remove();
        }
      })
    }

    var total_sel = $('.selectList .btnOne.on').length;
    $('.ch_count').text(total_sel);
    if (total_sel < 1) {
      $('.section').find('.warning').css('visibility', 'visible');
    }
  });

  //전체부문 선택
  $('.allcheck').change(function () {
    var all_sector = $(this).closest('.selectList').find('.btnOne');
    var class_string = $(this).closest('.sector').attr('class')
    var this_class = class_string.substring(class_string.length, class_string.length - 2);
    
    if ($(this).is(":checked")) {

      $('.section').find('.warning').css('visibility', 'hidden');
      all_sector.removeClass('on')
      all_sector.addClass('on');

      var allchk = $(this).closest('.selectList').find('.btnOne').clone();
      var all_Choice = $(this).siblings('label').text();

      //$('.selected .btnOne').remove();
      $('.selected .mCSB_container').append('<span class="btnOne total_selected ' + this_class + '">' + all_Choice + '</span>');

      var sel = $('.selectList .btnOne.on').length;
      $('.ch_count').text(sel);
    } else {
      
      $('.selected .btnOne').each(function() {
        if($(this).hasClass(this_class)){
          $(this).remove();
        }
        
        all_sector.removeClass('on')
        var sel = $('.selectList .btnOne.on').length;
        $('.ch_count').text(sel)
      });
      if ($('.ch_count').text() == 0) {
        $('.section').find('.warning').css('visibility', 'visible');
      }
    }
  });
})


//선택부문 삭제
$(document).on('click', '.selected .btnOne', function () {

  $(this).remove();
  var removeBtn = $(this).attr('data-part');

  $('.sector .selectList li').each(function () {
    if ($(this).find('.btnOne').attr('data-part') == removeBtn) {
      $(this).find('.btnOne').removeClass('on');
    }
  })

  var total_sel = $('.selected .btnOne').length;
  $('.ch_count').text(total_sel);
  if (total_sel < 1) {
    $('.section').find('.warning').css('visibility', 'visible');
  }
});

$(document).on('click', '.selected .btnOne.total_selected', function () {
  $('.selectList .btnOne').removeClass('on');
  $('.selectList .all.radioBtn').find('.allcheck').prop('checked', false);
})


/*성장로드맵*/
$(function () {
	$('.field a').on('click', function (e) {
		e.preventDefault;
		$('.field a').removeClass('selected');
		$(this).addClass('selected');
	})

})

/*학습결과보고서 첨부파일count*/
$(function () {
	var file_count = $('.attachBox .attach_file').length;
	$('.sectionTit .fileCnt').text(file_count);
})

/*학습추가계획 select*/
$(function () {
	$('.selectedZone').on('click', function () {
		// $(this).next('.select_list').fadeToggle();
		// $(this).toggleClass('on');
		//console.log($(this).parent($('.select_Drop')));
		$(this).parent($('.select_Drop')).toggleClass('open')
	});

	$('.select_list li').not('.dim').on('click', function () {
		var getData = $(this).find('.left').text(); //차수
		var getData2 = $(this).find('.right').html(); //기간
		$(this).closest('.select_Drop').find('.selectedZone').text(getData);
		$(this).closest('.select_Drop').removeClass("open");

		$('.notice-iconTxt').hide();
		$(this).closest($('.chasu')).find('.choice_result').html(getData2);
		$('.pop_btnArea.chasuAdd').find('.pop_ok').removeClass('dim').removeAttr("disabled");
	});


	$(document).mouseup(function (e) {
		var container = $(".select_Drop.open");
		if (container.has(e.target).length === 0) {
			container.removeClass('open');
		}
	});
});



/*메일로 공유 검색추가*/
$(function () {
	var count_num = $('.peopleList .idv').length;
	$('.sectionTit .chosenCount').text(count_num);

	$('.idv .delete').on('click', function () {
		$(this).closest('.idv').remove();

		var count_num = $('.peopleList .idv').length;
		$('.sectionTit .chosenCount').text(count_num);
	})
})

$(function () {
	$('.report_box').first().find('.cop_top').addClass('show').next('.hidden_cont').show();
	$('.report_box .cop_top').on('click', function () {
		function slideDown(target) {
			slideUp();
			$(target).addClass('show').closest('.report_box').find('.hidden_cont').slideDown();
		}
		function slideUp() {
			$('.report_box .cop_top').removeClass('show').closest('.report_box').find('.hidden_cont').slideUp();
		}
		$(this).hasClass('show') ? slideUp() : slideDown(this);
	});

})
$(function () {
	$(".hover_button .btnBasic:first-child").on('click',function(){
		$(this).toggleClass('on');
		if($(this).hasClass('on')){
			$(this).text('솔루션 추가 취소')
		}else{
			$(this).text('솔루션 추가');
		}
	})
})

$(function(){

    // 상단검색창 focus 검색어 영역 노출
    $('.with_solution .search input').focus(function () {
//		$('.layer.Layer_sch,.layer.Layer_sch .innerWrap').slideDown();
        //$('.mask').addClass('open');
        $('.header.cop').css('z-index', '1002')
    })

    //상단검색 자동완성영역
    $('.with_solution .search input').on('keyup', function () {
        //영문,한글만 입력할 경우 show
        var _char = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\*]+$/;
        var ip = $(this).val();
        if (_char.test(ip)) {
            $(this).closest('.search').find('.auto-complete').show();
        }
    })

    $('.with_solution .search input').blur(function () {
        $(this).closest('.search').find('.auto-complete').hide();
    });

})

