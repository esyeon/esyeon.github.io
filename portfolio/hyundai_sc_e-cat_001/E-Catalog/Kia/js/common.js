$(document).ready(function () {

    //gnb
  $('.hd_top .btnGnb').on('click', function () {
    $('.search').css('z-index', '0');
    $('.mask').addClass('open')
    $('.layer.gnb').slideDown();
    $('.header.cop').css('z-index', '1002')
    $('.layer.gnb>.innerWrap').fadeIn();
  })

  $('.header .mask').on('click', function () {
    $('.layer').slideUp();
    //$('.innerWrap').fadeOut();
    $('.mask').removeClass('open');
    $('.search').css('z-index', '9999');
    $('.header.cop').css('z-index', '1000')
  })

  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });

  // gnb
  $(".menu>li").on('click', function (){
    var all_li = $('.menu>li');
    var dep2_allchk = $(this).find('input[type=checkbox]');

    all_li.removeClass('on');
    $('.all_view').removeClass('on');
    $(this).addClass('on');
    $('.hd_bot .dep2').hide();

    if ($(this).find('.dep2').length == 1) {
      $(this).find('.dep2').show();
      $('.dep2Bg').show();

    } else {
      $('.dep2Bg').hide();
    }
  });

  //Cop 메인 전체보기 메뉴
  $('.all_view').on('click', function () {
    $(this).addClass('on');
    $(".hd_bot .menu>li").removeClass('on')
  })

  //dep2 checkbox 초기화
  $('.hd_bot .menu>li>a').on('click', function () {
    var this_li = $(this).closest('li');
    var this_chk = $(this).closest('li').find('.chkbox');

    if (!this_li.hasClass('on')) {
      this_chk.prop('checked', false)
    }
  })


  // 상단검색창 focus 검색어 영역 노출
  $('.hd_top .search input').focus(function () {
    $('.layer.Layer_sch,.layer.Layer_sch .innerWrap').slideDown();
    $('.mask').addClass('open');
    $('.header.cop').css('z-index', '1002')
  })

  //상단검색 자동완성영역
  $('.hd_top .search input').on('keyup', function () {
    //영문,한글만 입력할 경우 show
    var _char = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\*]+$/;
    var ip = $(this).val();
    if (_char.test(ip)) {
      $(this).closest('.search').find('.auto-complete').show();
    }
  })

  $('.hd_top .search input').blur(function () {
    $(this).closest('.search').find('.auto-complete').hide();
  });

  //솔루션 안내영역 업다운
  $('.problem .ask').on('click', function () {
    function slideDown(target) {
      slideUp();
      $(target).addClass('active').next('.answer').slideDown();
    }

    function slideUp() {
      $('.problem .ask').removeClass('active').next('.answer').slideUp();
    }
    $(this).hasClass('active') ? slideUp() : slideDown(this);

  });

  // 찜하기button toggle class
  $('.btnKeep').on('click', function () {
    $(this).toggleClass('off');
  });

  //label click scroll prevent
  $('label').click(function (e) {
    e.preventDefault();
    var For = $(this).attr('for');
    $('#' + For).trigger('click');
  });

  //Header My영역 마우스오버
  $('.myArea').hover(function () {
    $(this).find('.dropdown').stop().fadeToggle();
  });

  /* Menu 클릭시 scroll 이동*/
  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.hd_bot .menu .m a').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('.menu li').each(function () {
        $(this).removeClass('on');
      })
      $(this).parent().addClass('on');

      var target = this.hash,
        // menu = target;
        $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 270
      }, 1000, function () {
        window.location.hash = target - 270;
        $(document).on("scroll", onScroll);
      });
    });
    onScroll();
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    var header_Hight = $('.header').height();
    $('.hd_bot .menu .m a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top - header_Hight <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.menu li').removeClass("on");
        currLink.parent('li').addClass("on");
      } else {
        currLink.removeClass("on");
      }
    });
  }

  //scroll animation
  function scrollToggle() {
    $('.header.main .headerWrap').css('overflow', 'hidden');
    setTimeout(function () {
      $('.headerWrap').css('overflow', '');
    }, 300);
  }

  //스크롤 이동 시 헤더변화
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 90) {

      /*메인*/
      $('.header').addClass("move");
      $('.headerWrap .bx-wrapper').fadeOut(250);
      $('.container.main').css('padding-top', '180px');
      scrollToggle();
      $('.header').addClass('move');
      $('.container').addClass('move');
    } else if (scrollTop < 100) {

      $('.headerWrap .bx-wrapper').fadeIn(250);
      $('.headerWrap').removeClass("move");
      $('.container.main').css('padding-top', '498px');

      $('.header').removeClass('move');
      $('.container').removeClass('move');
      $('.header .hd_mid h2').fadeIn('move');

      //전문가분야sorting close
      $('.sort_select').find('.dropdown').hide();
      $('.sort_down ').removeClass('active');
    }

    //wing_banner start
    if ($('.wing_banner').length > 0) {
      wingStart();
    }
  });

  //sub wing_banner start
  function wingStart() {

    var _doTop = $(document).scrollTop();
    var _sideoffset = $('.side').offset().top - 50; //'50' gap margin
    var _reSearchHeight = $('.re_search').outerHeight();
    var _cloudHeight = $('.artcle.cloud').outerHeight();
    var _fixheight = _sideoffset + _reSearchHeight + _cloudHeight;
    var _wingFixed = $('.wing_banner');

    if (_doTop > _fixheight) {
      _wingFixed.addClass('fixed');
    } else {
      _wingFixed.removeClass('fixed');
    }
  }

  //공유하기 열기/ 닫기
  $(function () {
    var menu = $('.funcBtn .btnShare', this).next('.dropdown');
    var s_menu = $('.sort_select .sort_down');

    $(document).mouseup(function (e) {
      if (!menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.removeClass('active');
        menu.hide();
        $('.btnShare').removeClass('active')
      }
    });

    $(document).mouseup(function (e) {
      if (!s_menu.is(e.target) && s_menu.has(e.target).length === 0) {
        s_menu.removeClass('active');
        s_menu.next('.dropdown').hide();
      }
    });

    $('.btnShare').on('click', function () {
      $(this).next('.dropdown').slideDown();
      $(this).addClass('active')
      //menu.toggleClass('active');
    });
  });

  //sort 버튼 dorpdown에서 클릭시 텍스트 교체
  $('.sort_select .downlist a').on('click', function () {
    var now = $(this).text();
    $(this).closest('.sort_select').find('.sort_down').empty().text(now);
    $('.dropdown').fadeOut();
    $(this).closest('.sort_select').find('.sort_down').removeClass('active');
  })

  //side 영역 Height
  $(".side").height($(".content").height() + 30);

  if ($('.banner_slide').length > 0) {
    //side 영역 배너
    $('.banner_slide').bxSlider({
      mode: 'fade',
      controls: false,
      pager: true,
      auto: true,
      infiniteLoop: true
    });
  }

  if ($('#card_list').length > 0) {
    //솔루션 슬라이드(id)
    $('#card_list').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 4,
      maxSlides: 4,
      slideWidth: 240,
      slideMargin: 27,
      hideControlOnEnd: true,
      infiniteLoop: false
      //preventDefaultSwipeY: false
    });
  }

  if ($('.card_list.s2').length > 0) {
    //솔루션 슬라이드(class)
    $('.card_list.s2').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 4,
      maxSlides: 4,
      slideWidth: 240,
      slideMargin: 27,
      hideControlOnEnd: true,
      infiniteLoop: false
      //preventDefaultSwipeY: false
    });
  }

  if ($('.recentSol').length > 0) {
    // 최근 본 솔루션 슬라이드
    $('.recentSol').bxSlider({
      mode: 'vertical',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 3,
      maxSlides: 3,
      hideControlOnEnd: true,
      infiniteLoop: false
    });
  }


  if ($('.sec.knowledgeCat > .expertList ul').length > 0) {
    //질문자 슬라이드
    $('.sec.knowledgeCat > .expertList ul').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 3,
      maxSlides: 3,
      moveSlides: 3,
      slideMargin: 35,
      slideWidth: 220,
      hideControlOnEnd: true,
      infiniteLoop: false
      //preventDefaultSwipeY: false
    });
  }

  if ($('.questionerList ul').length > 0) {
    
    //질문자 슬라이드
    $('.questionerList ul').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 5,
      maxSlides: 5,
      moveSlides: 5,
      slideMargin: 9,
      slideWidth: 138,
      hideControlOnEnd: true,
      infiniteLoop: false
      //preventDefaultSwipeY: false
    });
  }

  if ($('.tutorSlide').length > 0) {
    //강사소개 슬라이드
    $('.tutorSlide').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 3,
      maxSlides: 3,
      moveSlides: 3,
      slideWidth: 337,

      hideControlOnEnd: true,
      infiniteLoop: false
      //preventDefaultSwipeY: false
    });
  }

  //헤더 텍스트메뉴 슬라이드 (지식인, Cop 메인)
  function flickingMenus() {
    var menus = $(".flicking .menu");
    var menuWidth = menus.parent().outerWidth();
    var menupage = Math.ceil(menus[0].scrollWidth / menuWidth);
    var currPage = 1;

    function btn_move_click() {
      if (currPage < 2) {
        $('.slider_btn .prev').addClass("disabled");
        $('.slider_btn .next').removeClass("disabled");
      } else if (currPage == menupage) {
        $('.slider_btn .prev').removeClass("disabled");
        $('.slider_btn .next').addClass("disabled");
      } else {
        $('.slider_btn .prev').removeClass("disabled");
        $('.slider_btn .next').removeClass("disabled");
      }
    }
    btn_move_click(); //버튼 클릭함수

    if (menupage > 1) {
      $(".slider_btn .next").click(function () {
        currPage < menupage && menus.stop(true).animate({
          "margin-left": -menuWidth * currPage
        }, "fast") && currPage++;

        btn_move_click(); //버튼 클릭함수
      });

      $(".slider_btn .prev").click(function () {
        currPage > 1 && menus.stop(true).animate({
          "margin-left": -menuWidth * (currPage - 2)
        }, "fast") && currPage--;

        btn_move_click(); //버튼 클릭함수
      });
    }
  }

  //flicking 체크 후, 함수 실행
  if ($('.flicking').length > 0) {
    flickingMenus();
  }

  if ($('.field_card_box > ul > li').length > 2) {

    $('.field_card_box ul:not(.question)').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      slideWidth: 446,
      hideControlOnEnd: true,
      infiniteLoop: true
    });
  }

  // ECAT-0960 검색결과 리스트
  if ($('.mass_list').length > 0) {
    //질문자 슬라이드
    $('.mass_list').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideMargin: 0,
      hideControlOnEnd: true,
      infiniteLoop: false
      //preventDefaultSwipeY: false
    });
  }

  if ($('.cop_list .reqCard').length > 0) {
    //CoP 메인Ecat540 학습자 슬라이드
    $('.cop_list .reqCard').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 3,
      maxSlides: 3,
      moveSlides: 1,
      slideMargin: 30,
      slideWidth: 222,
      hideControlOnEnd: true,
      infiniteLoop: false
    });
  }

  if ($('.popular_list .pop_slide').length > 0) {
    //CoP 메인Ecat540 학습자 슬라이드
    $('.pop_slide').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,

      hideControlOnEnd: true,
      infiniteLoop: false
    });
  }


  //스크롤바 effect
  if ($('.scrolling').length > 0) {
    $('.scrolling').mCustomScrollbar({
      theme: "dark",
      mouseWheelPixels: 100
    });
  }

  //공유하기, 솔루션 sort 버튼 클릭 Dropdown 노출
  $('.sort_down').click(function () {
    $(this).toggleClass('active')
    $(this).next('.dropdown').slideToggle();
  })

  $(function () {

    if ($('.ellipsis').length > 0) {
      $('.ellipsis.r1').ellipsis({
        lines: 1
      });
      $('.ellipsis.r2').ellipsis({
        lines: 2
      });
    }
  })

  //관련 사이트
  $('.util_btn').find('.btn_inner').on('click', function () {
    $(this).toggleClass('on')
    $(this).next('.select_list').slideToggle(100);
  })

  //ECAT-0830
  $('.sorting_wrap .list > ul > li > a').on('click', function () {
    var $li = $(this).parent('li');
    $li.toggleClass('selected');
  });
  // 지식인 - 문의 탭
  $('.tab > li > a').each(function () {

    var this_href = $(this).attr('href');
    $(this_href).css('display', 'none').siblings('.tab_cont').first().css('display', 'block');

    $(this).click(function (e) {
      e.preventDefault();

      $(this).parent('li').addClass('active').siblings('li').removeClass('active');
      $(this_href).css('display', 'block').siblings('.tab_cont').css('display', 'none');
      shave('.elli2', 40);
    });
  });

  if ($('.satisfaction ul').length > 0) {
    //만족도 평가 슬라이드 ECT-0930
    $('.satisfaction ul').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 4,
      maxSlides: 4,
      moveSlides: 4,
      slideMargin: 28,
      slideWidth: 218,
      hideControlOnEnd: true,
      infiniteLoop: false
      //preventDefaultSwipeY: false
    });
  }
  if ($('.answer_wait ul').length > 0) {
    //전문가 답변대기 슬라이드 ECT-0930
    $('.answer_wait ul').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 4,
      maxSlides: 4,
      moveSlides: 4,
      slideMargin: 28,
      slideWidth: 218,
      hideControlOnEnd: true,
      infiniteLoop: false
      //preventDefaultSwipeY: false
    });
  }


/*학습리뷰 내글 수정 영역*/

  // 학습리뷰 내글 수정 버튼
	$(document).on('click', '.review_edit.my_reply .btnText.modi', function () {
		var my_view = $(this).closest('.first_write');
		var _thisText = my_view.find('.reply>p').text(); //text 값 저장

		var add_html = '<div class="write my_reply">';
		add_html += '<div class="Msg">';
		add_html += '<textarea class="msgWrite"></textarea>';
		add_html += '<div class="chekcByte"><span class="count">0</span>byte</div></div>';
		add_html += '<div class="editBtn">';
		add_html += '<button class="btnPoint btn_modify">수정</button>';
		add_html += '<button class="btnPoint btn_cancle">취소</button></div>';
		add_html += '<span class="display-none-data" style="display:none;"></span>';
		add_html += '</div>';

		my_view.append(add_html);
		my_view.find('.msgWrite').text(_thisText).focus(); //text 값 대입
		my_view.find('.reply_info').remove(); //수정 영역 삭제
		my_view.find('.display-none-data').text(_thisText); //취소 버튼을 위해 텍스트값 저장

	});

  // 학습리뷰 내글 취소 버튼
	$(document).on('click', '.review_edit.my_reply .btn_cancle', function () {

		var _cancelParent = $(this).closest('.first_write');
		var _thisText = _cancelParent.find('.display-none-data').text();

		var add_html = '<div class="reply_info">';
		add_html += '<div class="reply"><p></p>';
		add_html += '<div class="chekcByte"><span class="count"></span>byte</div>';
		add_html += '<div class="text_button">';
		add_html += '<button class="btnText modi"><span class="inTxt">수정</span></button>';
		add_html += '<button class="btnText del"><span class="inTxt">삭제</span></button></div></div>';
		add_html += '<div class="reply_view_btn">';
		add_html += '<button type="button" class="btnPoint num_reply" onclick="popup(6)">댓글 4</button>';
		add_html += '</div>';

		_cancelParent.append(add_html);
		_cancelParent.find('.reply>p').text(_thisText);
		_cancelParent.find('.write.my_reply').remove();
	});

  //학습리뷰 내글 수정모드에서 등록
	$(document).on('click', '.review_edit.my_reply .btn_modify', function () {

		var _modifyParent = $(this).closest('.first_write');
		var _modifyValue = _modifyParent.find('textarea').val();

		var html = '<div class="reply_info">';
		html += '<div class="reply"><p></p>';
		html += '<div class="chekcByte"><span class="count">15</span>byte</div>';
		html += '<div class="text_button">';
		html += '<button class="btnText modi"><span class="inTxt">수정</span></button>';
		html += '<button class="btnText del"><span class="inTxt">삭제</span></button></div></div>';
    html += '<div class="reply_view_btn">';
		html += '<button type="button" class="btnPoint num_reply" onclick="popup(6)">댓글 4</button>';
		html += '</div>';
		_modifyParent.append(html);

		_modifyParent.find('.reply>p').text(_modifyValue); //textarea의 수정된 value 값 대입
		_modifyParent.find('.write.my_reply').remove(); //수정 영역 삭제
	});


/*학습자 리뷰 댓글 수정 영역*/

	//댓글 수정 버튼
	$(document).on('click', '.review_edit .btnText.modi', function () {

		var _thisParent = $(this).closest('.first_write');
		var _thisValue = _thisParent.find('.reply').text(); //text 값 저장

		var html = '<div class="write re_write">';
		html += '<div class="Msg">';
		html += '<textarea class="msgWrite"></textarea>';
		html += '<div class="chekcByte"><span class="count">0</span>byte</div></div>';
		html += '<div class="editBtn">';
		html += '<button class="btnPoint btn_modify">수정</button>';
		html += '<button class="btnPoint btn_cancle">취소</button></div>';
		html += '<span class="display-none-data" style="display:none;"></span>';
		html += '</div>';

		_thisParent.append(html);
		_thisParent.find('.msgWrite').text(_thisValue).focus(); //text 값 대입
		_thisParent.find('.reply_info').remove(); //수정 영역 삭제
		_thisParent.find('.display-none-data').text(_thisValue); //취소 버튼을 위해 텍스트값 저장

	});

	//수정 컴펌 버튼
	$(document).on('click', '.review_edit .btn_modify', function () {

		var _modifyParent = $(this).closest('.first_write');
		var _modifyValue = _modifyParent.find('textarea').val();

		var html = '<div class="reply_info">';
		html += '<div class="reply"></div>';
		html += '<div class="text_button">';
		html += '<button class="btnText modi"><span class="inTxt">수정</span></button>';
		html += '<button class="btnText del"><span class="inTxt">삭제</span></button></div></div>';

		_modifyParent.append(html);

		_modifyParent.find('.reply').text(_modifyValue); //textarea의 수정된 value 값 대입
		_modifyParent.find('.re_write').remove(); //수정 영역 삭제
		$(".my_reply .num_reply").css("display", "inline-block");

	});

	//취소 버튼 클릭
	$(document).on('click', '.review_edit .btn_cancle', function () {

		var _cancelParent = $(this).closest('.first_write');
		var _textData = _cancelParent.find('.display-none-data').text();

		var html = '<div class="reply_info">';
		html += '<div class="reply"></div>';
		html += '<div class="text_button">';
		html += '<button class="btnText modi"><span class="inTxt">수정</span></button>';
		html += '<button class="btnText del"><span class="inTxt">삭제</span></button></div></div>';

		_cancelParent.append(html);
		_cancelParent.find('.re_write').remove();
		_cancelParent.find('.reply').text(_textData);
		$(".my_reply .num_reply").css("display", "inline-block");

	});

	/*학습자 리뷰 대댓글 영역*/
	//댓글 수정 버튼
	$(document).on('click', '.first_after .btnText.modi', function () {

		var _thisParent = $(this).closest('.first_after');
		var _thisValue = _thisParent.find('.reply').text(); //text 값 저장

		var html = '<div class="write re_write">';
		html += '<div class="Msg">';
		html += '<textarea class="msgWrite"></textarea>';
		html += '<div class="chekcByte"><span class="count">0</span>byte</div></div>';
		html += '<div class="editBtn">';
		html += '<button class="btnPoint btn_modify">수정</button>';
		html += '<button class="btnPoint btn_cancle">취소</button></div>';
		html += '<span class="display-none-data" style="display:none;"></span>';
		html += '</div>';

		_thisParent.append(html);
		_thisParent.find('.msgWrite').text(_thisValue).focus(); //text 값 대입
		_thisParent.find('.reply_info').remove(); //수정 영역 삭제
		_thisParent.find('.display-none-data').text(_thisValue); //취소 버튼을 위해 텍스트값 저장
	});

	//수정 컴펌 버튼
	$(document).on('click', '.review_edit .btn_modify', function () {

		var _modifyParent = $(this).closest('.first_after');
		var _modifyValue = _modifyParent.find('textarea').val();

		var html = '<div class="reply_info">';
		html += '<div class="reply"></div>';
		html += '<div class="text_button">';
		html += '<button class="btnText modi"><span class="inTxt">수정</span></button>';
		html += '<button class="btnText del"><span class="inTxt">삭제</span></button></div></div>';

		_modifyParent.append(html);
		_modifyParent.find('.reply').text(_modifyValue); //textarea의 수정된 value 값 대입
		_modifyParent.find('.re_write').remove(); //수정 영역 삭제
	});

	//취소 버튼 클릭
	$(document).on('click', '.review_edit .btn_cancle', function () {

		var _cancelParent = $(this).closest('.first_after');
		var _textData = _cancelParent.find('.display-none-data').text();

		var html = '<div class="reply_info">';
		html += '<p class="reply"></p>';
		html += '<div class="text_button">';
		html += '<button class="btnText modi"><span class="inTxt">수정</span></button>';
		html += '<button class="btnText del"><span class="inTxt">삭제</span></button></div></div>';

		_cancelParent.append(html);
		_cancelParent.find('.re_write').remove();
		_cancelParent.find('.reply').text(_textData);
	});

	//항목 삭제(댓글 / 대댓글 분리 삭제)
	$(document).on('click', '.review_edit .btnText.del', function () {

		var _reviewInfo = $(this).closest('.my_reply');
		var _afterParent = $(this).closest('.first_after');
		var _thisParent = $(this).closest('.first_write');
		var _confirm = confirm("댓글을 삭제하시겠습니까?");

		if (_reviewInfo.length > 0) {
			if (_confirm) {
				_reviewInfo.remove();
			} else {
				return false;
			}
		}

		if (_afterParent.length > 0) {

			if (_confirm) {
				_afterParent.remove();
				_reviewInfo.remove();

			} else {
				return false;
			}
		} else {
			if (_confirm) {
				_thisParent.remove();
			} else {
				return false;
			}
		}
	});


    //ECAT-0243 txt수정 클릭시
    $(document).on('click', '.my_review_info .btnText.modi', function () {
        var _thisParent = $(this).closest('.my_review_info');
        var _thisValue = _thisParent.find('.reply').text(); //text 값 저장

        var html = '<div class="write re_write">';
        html += '<div class="Msg">';
        html += '<textarea class="msgWrite"></textarea>';
        html += '<div class="chekcByte"><span class="count">0</span>byte</div></div>';
        html += '<div class="editBtn">';
        html += '<button class="btnPoint btn_modify">수정</button>';
        html += '<button class="btnPoint btn_cancle">취소</button></div>';
        html += '<span class="display-none-data" style="display:none;"></span>';
        html += '</div>';

        _thisParent.append(html);
        _thisParent.find('.msgWrite').text(_thisValue).focus(); //text 값 대입
        _thisParent.find('.result_box').remove(); //수정 영역 삭제
        _thisParent.find('.display-none-data').text(_thisValue); //취소 버튼을 위해 텍스트값 저장
    })

    //ECAT-0243 수정 컴펌 버튼
    $(document).on('click', '.my_review_info .btn_modify', function () {

        var _modifyParent = $(this).closest('.my_review_info');
        var _modifyValue = _modifyParent.find('textarea').val();

        var html = '<div class="result_box">';
        html += '<div class="reply"></div>';
        html += '<div class="text_button">';
        html += '<button class="btnText modi"><span class="inTxt">수정</span></button>';
        html += '<button class="btnText del"><span class="inTxt">삭제</span></button></div>';
        html += '<div class="chekcByte"><span class="count">38</span>byte</div></div>'

        _modifyParent.append(html);
        _modifyParent.find('.reply').text(_modifyValue); //textarea의 수정된 value 값 대입
        _modifyParent.find('.re_write').remove(); //수정 영역 삭제
    });

    //ECAT-0243 취소 버튼 클릭
    $(document).on('click', '.my_review_info .btn_cancle', function () {

        var _cancelParent = $(this).closest('.my_review_info');
        var _textData = _cancelParent.find('.display-none-data').text();

        var html = '<div class="result_box">';
        html += '<div class="reply"></div>';
        html += '<div class="text_button">';
        html += '<button class="btnText modi"><span class="inTxt">수정</span></button>';
        html += '<button class="btnText del"><span class="inTxt">삭제</span></button></div>';
        html += '<div class="chekcByte"><span class="count">38</span>byte</div></div>'

        _cancelParent.append(html);
        _cancelParent.find('.re_write').remove();
        _cancelParent.find('.reply').text(_textData);
    });

    //ECAt-0243 삭제 버튼 클릭시 팝업 닫힘
    $(document).on('click', '.my_review_content .btnText.del', function () {

        var _parent = $(this).closest('.my_review_content');
        var _reSultBOx = _parent.find('.result_box');
        var _reviewEdit = _parent.find('.review_edit');
        var _confirm = confirm("아래 대댓글도 함께 삭제하시겠습니까?");

        if (_parent.length > 0) {

            if (_confirm) {
                popclose();
            } else {
                return false;
            }
        }

    });
});
// document ready


//최근 검색어 - 검색어 저장 켜기/끄기
$(function () {
  $('.save_word.off').on('click', function () {
    $('.search_word_Off').fadeIn();
    $(this).fadeOut();
    $('.save_word.on').fadeIn()
  })
 

  $('.save_word.on').on('click', function () {
    $(this).fadeOut();
    $('.search_word_Off').fadeOut()
    $('.save_word.off').fadeIn()

  })
})


/*Gnb & 솔루션검색 close*/
function layerClose() {
  $('.layer').slideUp();
  $('.layer .innerWrap').fadeOut();
  $('.search').css('z-index', '9999');
  $('.header.cop').css('z-index', '1001')
}

//Esc키 이벤트
$(document).keyup(function (e) {
  if (e.keyCode == 27) { // escape key maps to keycode `27`
    $('.layer').slideUp();
    //$('.innerWrap').fadeOut();
    e.target.blur();

    $(this).find('.dep2').stop().fadeOut()
    $('.dep2Bg').hide()
  }
});

// 학습리뷰- 댓글 클릭시 입력창 show
$(function () {
  $('.btnText.btnAdd').on('click', function () {
    if ($(this).next('.replyCancle').length == 0) {
      $(this).hide();
      $(this).closest('.first_write').siblings('.write').slideDown();
      $(this).parent('.text_button').append('<button class="btnText replyCancle"><span class="inTxt">취소</span></button>');
      $(this).closest('.first_write').siblings('.write').find('.msgWrite').focus();
    }
  });


  $(document).on('click', '.replyCancle', function () {
    $(this).parent('.text_button').find('.btnAdd').show();
    $(this).closest('.first_write').siblings('.write').fadeOut('fast');
    $(this).remove();
  })
})


//학습자료 테이블 더보기
$(function () {
  $('.tbl_updown .btn_more').on('click', function () {

    function slideDown(target) {
      slideUp();
      $(target).addClass('up').parent('.td').next('.moreCont').slideDown();
    }

    function slideUp() {
      $('.tbl_updown .btn_more').removeClass('up').parent('.td').next('.moreCont').slideUp();
    }

    $(this).hasClass('up') ? slideUp() : slideDown(this);
  });
})


//수강신청 클릭시 스크롤 이동
$(function () {
  $('.scroll_down').on('click', function () {
    var scroll_po = $('.sc_subject').first().offset().top - 350;

    $('html, body').animate({
      scrollTop: scroll_po
    }, 500);
  })
})


$(function () {
  $('.starRev span').click(function () {
    $(this).parent().children('span').removeClass('on');
    $(this).addClass('on').prevAll('span').addClass('on');
    return false;
  });
})


//레이어팝업 호출
function popup(t) {

  if (t == 1) {
    $('#popup1').before('<div id="mask"></div>');
    $('#popup1').fadeIn();
  }
  if (t == 2) {
    $('#popup2').before('<div id="mask"></div>');
    $('#popup2').fadeIn();
  }
  if (t == 3) {
    $('#popup3').before('<div id="mask"></div>');
    $('#popup3').fadeIn();
  }
  if (t == 4) {
    $('#popup4').before('<div id="mask"></div>');
    $('#popup4').fadeIn();
  }
  if (t == 5) {
    $('#popup5').before('<div id="mask"></div>');
    $('#popup5').fadeIn();

  }
  if (t == 6) {
    $('#popup6').before('<div id="mask"></div>');
    $('#popup6').fadeIn();

  }


  $('#mask').fadeTo("slow", 0.9);
  $('html, body').css({
    'overflow': 'hidden'
  });
  $('.terms_mask').css({
    'display': 'none'
  });
  if($('.with_solution .search_area').length > 0){
      shave('.elli2', 40);
  };
}

// 약관동의 팝업열기
function termsOpen() {
  $('.popup_terms').before('<div class="terms_mask"></div>');
  $('html, body').css({'overflow': 'hidden'});
  $('.terms_mask').fadeTo("slow", 0.9);
  if ($('.terms_mask').css('display') == "block") {
    $('html, body').css({
      'overflow': 'hidden'
    });
  }

  $.fn.center = function () {
    this.css({
      'position': 'fixed',
      'left': '50%',
      'top': '50%'
    });
    this.css({
      'margin-left': -this.outerWidth() / 2 + 'px',
      'margin-top': -this.outerHeight() / 2 + 'px'
    });

    return this;
  }
$(".popup_terms").center();
}

// 약관동의 팝업닫기
function termsClose() {
  $('.terms_detail').fadeOut();
  $('html, body').css({
    'overflow': 'auto'
  });
}


// 브라우저 창 사이즈 조절할 때도 항상 중앙 정렬
$(window).resize(function () {
  wrapWindowByMask();
});

function wrapWindowByMask() {
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  // $('.popup').center();
  $('#mask').css({
    'width': maskWidth,
    'height': maskHeight
  });
}

if ($('.popup').css('display') == "block") {
  var this_pop
}


//팝업닫기
function popclose() {
  $('.popup').fadeOut();
  $('#mask').remove();
  $('.selectList .btnOne').removeClass('on');
  $('.selected .btnOne').remove();
  $('#allcheck').prop('checked', false)

  var total_sel = $('.selected li.on').length;
  $('.ch_count').text(total_sel);
  $('html, body').css({
    'overflow': 'auto'
  });
  $('.popup_terms').fadeOut();
  $('.terms_mask').remove();
}


//솔루션 강의실 - 학습목차
$(function () {
  $('.tblContents .btn_more').on('click', function () {
    if ($(this).closest('.tr').next('.tr.subject').length > 0) {
      $(this).toggleClass('up')
      $(this).closest('.tr').next('.tr.subject').slideToggle();
    }
  })
})

//솔루션 강의실
function fnMove(seq) {
  var offset = $("#spot" + seq).offset();
  $('html, body').animate({
    scrollTop: offset.top - 110
  }, 400);
}

$(function () {
  var p_length = $('.topInfoBox').find('p').length
  if (p_length == 1) {
    $('.topInfoBox').css('padding', '35px 0 34px');
  } else if (p_length == 2) {
    $('.topInfoBox').css('padding', '24px 0');
  }
})


//  >>>>>>>>>>>>>>>>>>>>> 팝업_솔루션요청 부문분야 선택버튼 downdrop <<<<<<<<<<<<<<<<<<<<<<<

//학습자 분야 정보 있을 경우/선택 완료 시
$(function () {
  $('.showArea .btnBasic.re_choice').on('click', function () {

    $('.hiddenArea').slideToggle();

    var text = $(this).children('span').text();
    $('.showArea .btnBasic span').text(
      text == "다시 선택하기" ? "선택취소" : "다시 선택하기");
  });

  //학습자 분야 정보 없을 경우
  $('.showArea .btnBasic.no_info').on('click', function () {
    $('.hiddenArea').slideToggle();

    var text = $(this).children('span').text();
    $('.showArea .btnBasic span').text(
      text == "선택하기" ? "선택취소" : "선택하기");
  });
});

$(function(){
  $(".period-off .btn-reset").on("click", function(){
    $(".period-reset").toggleClass("show");
    if($(".period-reset").hasClass("show")){
      $(this).parent(".period-off").css("margin-bottom","100px");
      $(this).text("재설정 취소")
    }else{
      $(this).parent(".period-off").css("margin-bottom","0");
      $(this).text("재설정")
    }
  })
})

/*솔루션 요청 탭*/
$(document).ready(function () {
  TabsMenu();
  tabMenuSlider();
});

function TabsMenu() {
  var $menu = $('.tab_btn'),
    $contWrap = $('.tabs_content_wrap'),
    _content = '.tab_contents',
    curr = 'current';

  if (!$menu.length) {
    return
  }
  $(_content).css('display', 'none');
  $contWrap.each(function () {
    var activeContent = $menu.find('a' + '.' + curr).attr('href');
    $(this).find('div' + activeContent).css('display', 'block');

  });
  $menu.on('click', 'a', function () {
    if (!$(this).hasClass(curr)) {
      $(this).addClass(curr).closest('li').siblings('li').find('.' + curr).removeClass(curr);
      $($(this).attr('href')).css('display', 'block').siblings('div' + _content).css('display', 'none');
    }
    this.blur();
    return false;
  });
};

function tabMenuSlider() {
  var $tabmenu = $('.tab_btn'),
    $contWrap = $('.tabs_content_wrap'),
    $sliderClass = $('.selectSlider'),
    config = {
      maxSlides: 5,
      slideWidth: 101,
      slideMargin: 15,
      infiniteLoop: false,
      hideControlOnEnd: true,
      controls: true,
      pager: false
    };


  var sliders = new Array();
  $($sliderClass).each(function (i, slider) {
    var len = $(slider).find('> li').length;
    if (len < 1) {
      sliders[i] = $(slider).addClass('nonslider');
    } else {
      sliders[i] = $(slider).bxSlider(config);
    }
  });

  if (!$tabmenu.length) {
    return
  }
  $contWrap.each(function () {
    if ($(this).find('div.tab_contents').is(':first')) {
      slider.reloadSlider(config);
    }
  });
  $tabmenu.on('click', ' a', function (e) {
    var _target = $(this).attr('href');

    if ($(_target).css('display') === 'block') {
      $.each(sliders, function (i, slider) {
        if (!slider.hasClass('nonslider')) {
          slider.reloadSlider(config);
        }
      });
    }
    e.preventDefault();
  });
}

$(document).ready(function () {
  TabsMenu2();
  tabMenuSlider2();
});


function TabsMenu2() {
  var $menu2 = $('.tab_btn.s2'),
    $contWrap2 = $('.tabs_content_wrap.s2'),
    _content2 = $('.tab_contents.s2'),
    curr2 = 'current'

  if (!$menu2.length) {
    return
  }
  $(_content2).css('display', 'none');
  $contWrap2.each(function () {
    var activeContent = $menu2.find('a' + '.' + curr2).attr('href');
    $(this).find('div' + activeContent).css('display', 'block');
  });
  $menu2.on('click', 'a', function () {
    if (!$(this).hasClass(curr)) {
      $(this).addClass(curr).closest('li').siblings('li').find('.' + curr2).removeClass(curr);
      $($(this).attr('href')).css('display', 'block').siblings('div' + _content2).css('display', 'none');
    }
    this.blur();
    return false;
  });
};

function tabMenuSlider2() {
  var $tabmenu2 = $('.tab_btn.s2'),
    $contWrap2 = $('.tabs_content_wrap.s2'),
    $sliderClass2 = $('.selectSlider2'),
    config2 = {
      minSlides: 3,
      maxSlides: 3,
      slideWidth: 179,
      slideMargin: 16,
      infiniteLoop: false,
      hideControlOnEnd: true,
      controls: true,
      pager: false
    };

  var sliders2 = new Array();
  $($sliderClass2).each(function (i, slider2) {
    var len = $(slider2).find('> li').length;
    if (len < 1) {
      sliders2[i] = $(slider2).addClass('nonslider');
    } else {
      sliders2[i] = $(slider2).bxSlider(config2);
    }
  });

  if (!$tabmenu2.length) {
    return
  }
  $contWrap2.each(function () {
    if ($(this).find('div.tab_contents.s2').is(':first')) {
      slider2.reloadSlider(config2);
    }
  });
  $tabmenu2.on('click', ' a', function (e) {
    var _target2 = $(this).attr('href');

    if ($(_target2).css('display') === 'block') {
      $.each(sliders2, function (i, slider2) {
        if (!slider2.hasClass('nonslider')) {
          slider2.reloadSlider(config2);
        }
      });
    }
    e.preventDefault();
  });
}

//솔루션요청팝업 부문선택 active
$(function () {
  var all_div = $('.selectSlider li>div');
  $('.selectSlider li>div').on('click', function () {
    all_div.removeClass('active')
    $(this).addClass('active');
  })
})

$(function () {
  var all_div = $('.selectSlider2 li>div');
  $('.selectSlider2 li>div').on('click', function () {
    all_div.removeClass('active')
    $(this).addClass('active');
  })
})

//Cop개설 Url 입력
$(function () {
  $('.cop_apply_form .article3 .btnBasic').on('click', function () {
    if($('.mapWrite').css('display')=="none"){
      $(this).closest('.people').next('.mapWrite').stop().slideDown();
      var text = $(this).children('span').text();
      $(this).children('span').text(
      text == "URL 입력" ? "URL 입력 취소" : "URL 입력");
    }
  });
});
$(document).ready(function () {
  $(document).mouseup(function (e) {
    var container = $("#mapWrite");
    if (container.has(e.target).length === 0) {
      if ($('#map_url').val() == '') {
        container.slideUp();
        $('.article3 .btnBasic').children('span').text('URL 입력');
      }
    }
  });
})

/*Cop 검색결과 직접입력 노출/비노출*/
$(function () {
  $(document).on('click', '.article5 .btnBasic.byself', function () {
    $(this).closest('.article5').find('.areaBox.self').slideToggle();
    $(this).closest('.rightBtn').find('.filebox').toggleClass('hide');
    var text = $(this).children('span').text();
    $(this).children('span').text(
      text == "직접입력" ? "직접입력 취소" : "직접입력");
  })


  //운영계획
  $('.tbl_opt .rowAdd').on('click', function () {
    var row = "<tr>";
    row += '<td><label for="" class="blind">일정</label><input type="text"></td>';
    row += '<td><label for="" class="blind">주제</label><input type="text"></td>';
    row += '<td><label for="" class="blind">학습내용</label><input type="text"></td>';
    row += '<td><label for="" class="blind">장소</label><input type="text" class="input_loca"><button type="button" class="btnX"></button></td>';
    row += '</tr>';
    $(".tbl_opt table").append(row);
  })
})

$(document).on('click', '.tbl_opt .btnX', function () {
  $(this).closest('tr').remove();
});

// 0130 함께 들으면 좋은 솔루션 추가 영역 관련
$(document).on('click', '.add_solution_box .btnX', function () {
  $(this).closest('li').remove();
  if($(".add_solution_box li").length === 0){
    $(".add_solution_box").remove();
  }
});

// 마이페이지- 업다운
$(function () {
  $('.dropDownBox .visable_Area').on('click', function () {
    function slideDown(target) {
      slideUp();
      $(target).addClass('active').next('.hidden_Area').slideDown();
    }

    function slideUp() {
      $('.dropDownBox .visable_Area').removeClass('active').next('.hidden_Area').slideUp();
    }
    $(this).hasClass('active') ? slideUp() : slideDown(this);

    if ($('.elli2').length > 0) {
      shave('.elli2', 40);
    }
  });
});


//cop 강의실- 댓글알림
$(function () {
  $('.notice.reply a').on('click', function () {
    $(this).toggleClass('active')
    $(this).next('.board').slideToggle()
  })
  $('.notice.reply .row').on('click', function () {
    $(this).closest('.board').fadeOut();
  })
})

//cop 학습목적 - 더보기
$(function () {
  $('.l-purpose .more-view').on('click', function () {
    $(this).toggleClass('active')
    $(this).closest('.l-purpose').find('.dropdown').slideToggle();

    var text = $(this).text();
    $(this).text(text == "더 보기" ? "접기" : "더 보기");
  })
})


//솔루션 상세- Cop 호스트소개
$(function () {
  $('.join_apply .btn_join').on('click', function () {
    $(this).next('.downlist').slideToggle();
  })
  $('.join_apply .downlist a').on('click', function () {
    $(this).closest('.downlist').fadeOut();
  })
  $('html').click(function (e) {
    if (!$(e.target).hasClass("btn_join")) {
      $('.join_apply .downlist').closest('.downlist').fadeOut();
    }
  });
})

// 슬라이드4개 이하시 버튼 hidden
$(function () {
  $('.solution_card').each(function () {
    var min_li = $(this).find('.card_list').children('li').length;

    if (min_li < 5) {
      $(this).find('.bx-controls-direction').hide()
    }
  });
})


//E-CAT 1150
$(function () {
  //부문 선택 슬라이드 E-CAT 1150
  if ($('.interest_field_slider ul').length > 0) {
    var slider_field = $('.interest_field_slider ul').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      hideControlOnEnd: true,
      infiniteLoop: false
    });
  }
  
  //분야 선택 슬라이드 E-CAT 1150
  if ($('.interest_select_slider ul').length > 0) {
  var slider_select= $('.interest .interest_select_slider>ul').bxSlider({
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      hideControlOnEnd: true,
      infiniteLoop: false
    });
  }
  
  $('.interest_btn').on('click', function () {
    $('.hiddenArea').slideToggle();
    var text = $(this).children('span').text();

    $('.interest_btn span').text(
      text == "관심부문 추가하기" ? "관심부문 닫기" : "관심부문 추가하기");

    if ($('.interest_field_slider ul').length > 0) {
      slider_field.reloadSlider();
      
      //부문 선택 selected
      $('.interest_field_slider ul li a').on('click', function () {
        var $div = $(this).parent();

        $('.interest_field_slider ul li div.selected').removeClass('selected');
        $div.addClass('selected').siblings().removeClass('selected');
      })
    }
    
      slider_select.reloadSlider();

      //분야 마우스 오버시
      $('.interest_select_slider a').on('mouseenter', function () {
        var $divHover = $(this).parent();
        var $divTextall = $('.all');
        $divHover.addClass('hover');
        $divTextall.removeClass('hover');
      })

      $('.interest_select_slider ul li div').on('mouseleave', function () {
        var $divHover = $(this);
        $divHover.removeClass('hover');
      })
  })
})

//E-CAT 1150 관심분야 선택후 추가버튼 클릭시 목록에 노출
  $(function(){
     
    $('.interest_select_slider .subject').not('.all').on('click', function() {
      
    var choose_tit = $(this).find('a').text();
    var insert='';
    $('.interest_select_slider .all').removeClass('selected')
    
    /*분야선택 해제*/
    if($(this).hasClass('selected')){
      $(this).closest('.subject').removeClass('selected');
      var this_btn =$(this).find('a').text();
      $(document).find('.item_box .pick_field').each(function(){
        if($(this).attr('data-title') == this_btn){
          $(this).remove();
          }
        })
      /*분야선택*/
    } else {
      $(this).closest('.subject').addClass('selected');
      var insert = '<span class="pick_field" data-title="' + choose_tit + '">'+choose_tit +'</span>';
      $('.my_field .item_box').append(insert);
      
      $('.item_box .pick_field').each(function(){
        $('.pick_field:contains("전체")').remove();
      })
    }
  })
    
  //분야 전체 클릭시 나머지 해제
  $('.interest_select_slider .all').on('click', function() {

    if($(this).hasClass('selected')){
       $(this).closest('.subject.all').removeClass('selected');
        var this_btn =$(this).find('a').text();
        $(document).find('.item_box .pick_field').each(function(){
          if($(this).attr('data-title') == this_btn){
            $(this).remove();
            }
          })
          
      } else{
        var $ul = $(this).closest('ul');
        var $div = $ul.find('.subject');
        var this_btn =$(this).find('a').text();
        var all_select =$(document).find('.item_box .pick_field');

        $div.removeClass('selected');
        $(this).closest('.subject.all').addClass('selected');

         $(this).closest('.subject').addClass('selected');
          var insert = '<span class="pick_field" data-title="' + this_btn + '">'+this_btn +'</span>';
          $('.my_field .item_box').append(insert);

       $(document).find('.item_box .pick_field').each(function(){
        if($(this).attr('data-title') == this_btn){
          all_select.not($(this)).remove();
          } 
        })
      }
    })
      
    $('.btnWrap.field_add .request').on('click', function(){
      $('.hiddenArea').slideUp();
        $('.interest_btn span').text("관심부문 추가하기");
        insert=null;
    })
      
      $('.btnWrap.field_add .cancle').on('click', function(){
        $('.hiddenArea').slideUp();
        $('.interest_btn span').text("관심부문 추가하기");
      })
  })


//E-CAT 0970
$(function () {

  $('.que_choice_btn').on('click', function () {
    $('.hiddenArea').slideToggle();
    var text = $(this).children('span').text();

    $('.que_choice_btn span').text(text == "선택 하기" ? "선택 취소" : "선택 하기");

    if ($('.interest_field_slider ul').length > 0) {
      //부문 선택 슬라이드 E-CAT 0970
      $('.interest_field_slider ul').bxSlider({
        mode: 'horizontal',
        controls: true,
        pager: false,
        auto: false,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        hideControlOnEnd: true,
        infiniteLoop: false
      });


      //부문 선택 selected
      $('.interest_field_slider ul li a').on('click', function () {
        var $div = $(this).parent();
        $('.interest_field_slider ul li div.selected').removeClass('selected');
        $div.addClass('selected').siblings().removeClass('selected');
      })
    }

    if ($('.interest_select_slider ul').length > 0) {
      //분야 선택 슬라이드 E-CAT 0970
      $('.interest_select_slider ul').bxSlider({
        mode: 'horizontal',
        controls: true,
        pager: false,
        auto: false,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        hideControlOnEnd: true,
        infiniteLoop: false
      });


      //분야 클릭시 2개까지 선택
      $('.interest_select_slider ul>li>div').on('click', function () {
        var $div = $(this);
        var $select = $('.interest_select_slider div.selected').length;

        if ($div.hasClass('selected') === false && $select === 2) {
          $('.error_msg').show();
          return;
        }
        $div.toggleClass('selected');
        $('.error_msg').hide();

      });
      //분야 마우스 오버시
      $('.interest_select_slider ul li div a').on('mouseenter', function () {
        var $divHover = $(this).parent();
        var $divTextall = $('.all');
        $divHover.addClass('hover');
        $divTextall.removeClass('hover');
      })

      $('.interest_select_slider ul li div').on('mouseleave', function () {
        var $divHover = $(this);
        $divHover.removeClass('hover');
      })
    }

  })

  //온라인문의, 오프라인문의 라디오 선택시
  $('.que_type_01 .tab_radio li').on('click', function () {

    var $type = $('.que_type_01 .tab_radio li>input:checked').attr('data-target');

    switch ($type) {
      case "online":
        $('.guide_wrap').show();
        $('.offline_wrap').hide();
        break;
      case "offline":
        $('.guide_wrap').hide();
        $('.offline_wrap').show();
        break;
    }
  })
})

  //E-CAT 순서변경 리스트
$(function(){
  if ($('.sortable').length > 0) {
    $(".sortable").sortable({
      handle: ".icon_drag"
    });
  }
})

// 지식인
$(function () {

  // Q영역 댓글 보기
  $('.question_area .btn_comment').on('click', function () {
    function slideDown(target) {
      slideUp();
      $(target).addClass('open').parent('.button_area').next('.comment_area').slideDown();
    }

    function slideUp() {
      $('.question_area .btn_comment').removeClass('open')
        .parent('.button_area').next('.comment_area').slideUp();
    }
    $(this).hasClass('open') ? slideUp() : slideDown(this);
  });

  // 날짜 장소 변경
  $('.change_box .btn_chg').on('click', function () {
    var detail = $('.chg_detail');

    function slideDown(target) {
      slideUp();
      $(target).addClass('selected').parent('.change_box').next(detail).slideDown();
    }

    function slideUp() {
      $('.change_box .btn_chg').removeClass('selected')
        .parent('.change_box').next(detail).slideUp();
    }
    $(this).hasClass('selected') ? slideUp() : slideDown(this);
  });

  $('.change_plan button.btn_chg').on('click', function () {
    $(this).parent('.chg_detail').slideUp()
      .siblings(".change_box").children(".btn_chg").removeClass("selected");
  });

  // A 영역 댓글
  $('.answer_area .btn_comment').on('click', function () {
    function slideDown(target) {
      slideUp();
      $(target).addClass('up').parent('.button_area')
        .siblings('.comment.reply_list').slideDown();
    }

    function slideUp() {
      $('.answer_area .btn_comment').removeClass('up')
        .parent('.button_area').siblings('.comment.reply_list').slideUp();
    }
    $(this).hasClass('up') ? slideUp() : slideDown(this);
  });

  // 질문자 평가
  $('.bottom_area a.evaluate').on('click', function () {
    function slideDown(target) {
      slideUp();
      $(target).addClass('clicked').parent('.bottom_area')
        .children('.comment.evaluate_list').slideDown();
      $('.bottom_area a.evaluate.before').text("질문자 평가 취소");
    }

    function slideUp(target) {
      $('.bottom_area a.evaluate').removeClass('clicked')
        .parent('.bottom_area').children('.comment.evaluate_list').slideUp();
      $('.bottom_area a.evaluate.before').text("질문자 평가");
    }
    $(this).hasClass('clicked') ? slideUp() : slideDown(this);
  });

  // 좋아요 숫자
  $(".btn_like").on('click', function () {
    var input_num = $(".btn_like > input").val();
    var like_num = Number(input_num);

    if (!$(this).hasClass('good')) {
      $(this).addClass('good').children($("input")).val(like_num + 1);
    } else {
      $(this).removeClass('good').children($("input")).val(like_num - 1);
    }
  });
})

//cop 개설 첨부파일 업로드
function show_uploadFile() {

  var allFiles = document.getElementById("file_add");
  if ('files' in allFiles) {
    document.getElementById('rightBtn').innerHTML += '<div class="uploadFile"><span class="upload_file_name">' + allFiles.files[0].name + '</span>' + '<button type="button" class="upload_file_remove">X</button>' + '</div>';
    allFiles.value = "";
  }
  $('#rightBtn').find('.filebox').addClass('hide')
  $('#rightBtn').find('.btnBasic.byself').addClass('hide');

  //삭제버튼시
  $('.upload_file_remove').on('click', function () {
    $(this).closest('.uploadFile').remove();
    $('.filebox').removeClass('hide');
    $('.btnBasic.byself').removeClass('hide');
  });
}


//file upload
function showUrl() {
  var allFiles = document.getElementById("upload");
  if ('files' in allFiles) {

    // 업로드 파일 5개보다 많을 경우
    if (allFiles.files.length > 5) {
      alert("최대 5개까지 업로드 가능합니다");
      allFiles.value = "";
      return false;
    }

    // 업로드 파일 5개 이내 시
    else if (allFiles.files.length > 0) {
      for (var i = 0; i < allFiles.files.length; i++) {
        document.getElementById('filePath').innerHTML += '<div class="fileWrap"><span>' + allFiles.files[i].name + '</span>' + '<button type="button" class="btn_file_remove">X</button>' + '</div>';
        $('.filePath').addClass('none');
        placeholder_on();
      }
      allFiles.value = "";
    }

    //삭제 시 개수 체크, placeholder
    function placeholder_on() {
      if ($('.fileWrap').length > 0) {
        return false;
      } else {
        $('#filePath').removeClass('none');
      }
    }

    //삭제버튼시
    $('.btn_file_remove').on('click', function (e) {
      e.preventDefault;
      $(this).closest('.fileWrap').remove();
      $('.fileBtn').removeClass('dim');
      $('#upload').prop("disabled", false);
      placeholder_on();
    });
  }

  //5개 이상 stack 했을 경우
  if ($('#filePath .fileWrap').length > 5) {
    $('#filePath .fileWrap:last-child').remove();

    alert("최대 5개까지 업로드 가능합니다");
    return false;
  } else if ($('#filePath .fileWrap').length == 5) {
    $('.fileBtn').addClass('dim');
    $('#upload').prop("disabled", true);
  }
}

// popup file upload
function pop_addfile() {
  var allFiles = document.getElementById("pop_upload");
  if ('files' in allFiles) {

    // 업로드 파일 5개보다 많을 경우
    if (allFiles.files.length > 5) {
      alert("최대 5개까지 업로드 가능합니다");
      allFiles.value = "";
      return false;
    }

    // 업로드 파일 5개 이내 시
    else if (allFiles.files.length > 0) {
      for (var i = 0; i < allFiles.files.length; i++) {
        document.getElementById('pop_filePath').innerHTML += '<div class="pop_fileWrap"><span>' + allFiles.files[i].name + '</span>' + '<button type="button" class="pop_btn_file_remove">X</button>' + '</div>';
        $('.pop_filePath').addClass('none');
        placeholder_on();
      }
      allFiles.value = "";
    }

    //삭제 시 개수 체크, placeholder
    function placeholder_on() {
      if ($('.pop_fileWrap').length > 0) {
        return false;
      } else {
        $('#pop_filePath').removeClass('none');
      }
    }

    //삭제버튼시
    $('.pop_btn_file_remove').on('click', function (e) {
      e.preventDefault;
      $(this).closest('.pop_fileWrap').remove();
      $('.pop_fileBtn').removeClass('dim');
      $('#pop_upload').prop("disabled", false);
      placeholder_on();
    });
  }

  //5개 이상 stack 했을 경우
  if ($('#pop_filePath .pop_fileWrap').length > 5) {
    $('#pop_filePath .pop_fileWrap:last-child').remove();

    alert("최대 5개까지 업로드 가능합니다");
    return false;
  } else if ($('#pop_filePath .pop_fileWrap').length == 5) {
    $('.pop_fileBtn').addClass('dim');
    $('#pop_upload').prop("disabled", true);
  }
}


/* cop메인---게시판관리 보기,쓰기권한 */
$(function () {

  //보기권한 클릭시 쓰기권한 버튼 감추기
  function btn_write_hide() {
    $('.onoff.view').each(function () {
      if ($(this).hasClass('no')) {
        $(this).closest('td').next('td').find('.onoff.write').hide();
      }
    })
  }

  //보기권한 클릭시 쓰기권한 버튼 보이기
  function btn_write_show() {
    $('.onoff.view').each(function () {
      if (!$(this).hasClass('no') == true) {
        $(this).closest('td').next('td').find('.onoff.write').show();
      }
    })
  }


  //클래스  no가 있을경우 text "불가"로 변경
  function chg_txt() {
    $('.btnBasic.onoff').each(function () {
      if ($(this).hasClass('no')) {
        $(this).find('.inTxt').text('불가');
      }
    })
  }

  btn_write_hide();
  chg_txt();

  // 보기&쓰기 권한버튼 허용&불가 text replace
  $('.btnBasic.onoff').on('click', function () {

    if ($(this).hasClass('no')) {
      $(this).removeClass('no');
      btn_write_show();
    } else {
      $(this).addClass('no');
      btn_write_hide();
    }

    var text = $(this).children('.inTxt').text();
    if ($(this).children('.inTxt').text() == "허용") {
      $(this).children('.inTxt').text(text == "허용" ? "불가" : "허용");
    } else if ($(this).children('.inTxt').text() == "불가") {
      $(this).children('.inTxt').text(text == "불가" ? "허용" : "불가");
    }
    $('.btnBasic.all-write').prop('disabled', false);
  })


  // 전체 쓰기 허용 버튼
  $('.btnBasic.all-write').on('click', function () {
    $('.setup table .onoff.write').removeClass('no');

    chg_txt();
    $('.onoff.write').find('.inTxt').text('허용');

    var text = $(this).children('.inTxt').text();
    if ($(this).children('.inTxt').text() == "쓰기 전체 허용") {
      $(this).children('.inTxt').text(text == "쓰기 전체 허용" ? "쓰기 전체 불가" : "쓰기 전체 허용");

    } else if ($(this).children('.inTxt').text() == "쓰기 전체 불가") {
      $(this).children('.inTxt').text(text == "쓰기 전체 불가" ? "쓰기 전체 허용" : "쓰기 전체 불가");
      $('.onoff.write').find('.inTxt').text('불가');
      $('.onoff.write').addClass('no');
    }

    chg_txt();
  })


  // 전체 보기 허용 버튼
  $('.btnBasic.all-view').on('click', function () {

    $('.setup table .onoff.view').removeClass('no');

    chg_txt();
    $('.onoff.view').find('.inTxt').text('허용');

    var text = $(this).children('.inTxt').text();
    if ($(this).children('.inTxt').text() == "보기 전체 허용") {
      $(this).children('.inTxt').text(text == "보기 전체 허용" ? "보기 전체 불가" : "보기 전체 허용");
      $('.onoff.write').show();
      $('.btnBasic.all-write').prop('disabled', false);

    } else if ($(this).children('.inTxt').text() == "보기 전체 불가") {
      $(this).children('.inTxt').text(text == "보기 전체 불가" ? "보기 전체 허용" : "보기 전체 불가");
      $('.onoff.view').find('.inTxt').text('불가');
      $('.onoff.view').addClass('no');
      $('.onoff.write').hide();
      $('.btnBasic.all-write').prop('disabled', true)
    }

  })
})

// cop메인- 학습자관리 체크박스
$(function () {
  var tbl = $(".checkbox_tbl");
  $('.all_check', tbl).click(function () {
    if ($(this).is(":checked")) {
      $(":checkbox", tbl).prop("checked", true);
    } else {
      $(":checkbox", tbl).prop("checked", false);
    }
  });
})

/*약간동의 관심분야 동작*/
function termSliderArea() {
  if ($('.popup_terms').length > 0) {
    termSlider1()
    termSlider2()
    //부문 선택 selected
    $('.terms_field_slider ul li a').on('click', function () {
      var $div = $(this).parent();
      $('.terms_field_slider ul li div.selected').removeClass('selected');
      $div.addClass('selected').siblings().removeClass('selected');
    })

    //분야 클릭시 복수 selected
    $('.terms_select_slider ul>li>div').on('click', function () {
      var $div = $(this);

      $div.toggleClass('selected');
    });
    //분야 마우스 오버시
    $('.terms_select_slider a').on('mouseenter', function () {
      var $divHover = $(this).parent();
      var $divTextall = $('.all');
      $divHover.addClass('hover');
      $divTextall.removeClass('hover');
    })

    $('.terms_select_slider ul li div').on('mouseleave', function () {
      var $divHover = $(this);
      $divHover.removeClass('hover');
    })

    //분야 전체 클릭시 나머지 해제
    $('.terms_select_slider .all').on('click', function () {
      var $li = $(this).parent();
      var $ul = $li.parent();
      var $div = $ul.find('div');

      $div.removeClass('selected');
    })

  }
  if ($('.sortable').length > 0) {
    $(".sortable").sortable({
      handle: ".icon_drag"
    });
  }
}

function termSlider1() {
  var $tabmenu = $('.tab_btn'),
    $sliderClass = $('.terms_field_slider ul'),
    config = {
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 5,
      maxSlides: 5,
      moveSlides: 1,
      hideControlOnEnd: true,
      infiniteLoop: false
    };

  var sliders = new Array();

  $($sliderClass).each(function (i, slider) {
    var len = $(slider).find('> li').length;
    if (len < 1) {
      sliders[i] = $(slider).addClass('nonslider');
    } else {
      sliders[i] = $(slider).bxSlider(config);
    }

  });

  $tabmenu.on('click', ' a', function () {
    var _target = $(this).attr('href');
    var _menu = $(".step_btn").children("li a");

    if (!$(_target).hasClass("show")) {
      $(_target).addClass('show').siblings().removeClass('show').css("display", "none");
    }
    if ($(_target).css('display') === 'block') {
      $.each(sliders, function (i, slider) {
        if (!slider.hasClass('nonslider')) {
          slider.reloadSlider(config);
        }
      });
    }
  });
}

function termSlider2() {
  var $tabmenu = $('.tab_btn'),
    $sliderClass = $('.terms_select_slider ul'),
    config = {
      mode: 'horizontal',
      controls: true,
      pager: false,
      auto: false,
      minSlides: 3,
      maxSlides: 3,
      moveSlides: 1,
      hideControlOnEnd: true,
      infiniteLoop: false
    };

  var sliders = new Array();

  $($sliderClass).each(function (i, slider) {
    var len = $(slider).find('> li').length;
    if (len < 1) {
      sliders[i] = $(slider).addClass('nonslider');
    } else {
      sliders[i] = $(slider).bxSlider(config);
    }
  });

  $tabmenu.on('click', ' a', function () {
    var _target = $(this).attr('href');

    if ($(_target).css('display') === 'block') {

      $.each(sliders, function (i, slider) {
        if (!slider.hasClass('nonslider')) {
          slider.reloadSlider(config);
        }
      });
    }
  });
}

/*약관동의 관심분야 동작*/
$(function () {
  termSliderArea();
})

$(function () {
  if ($('.field_card_box').length > 0) {
    var field_li = $('.field_card_box>ul>li').length;
    if (field_li == 1) {
      $('.field_card_box>ul>li').addClass('card_one');
    }
  }
})

$(function () {
  // 좋아요 숫자
  $('.counting .like').on('click', function () {
    var input_num = $(this).find('.highlight').text();
    var like_num = Number(input_num);
    if (!$(this).hasClass('good')) {
      $(this).addClass('good').find($(".highlight")).text(like_num + 1);
    } else {
      $(this).removeClass('good').find($(".highlight")).text(like_num - 1);
    }
  });
});


//cop메인 공지사항 게시판목록
$(function () {
  $('.board_seq li').on('click', function () {
    $('.board_seq li').removeClass('pick')
    $(this).addClass('pick');
  })
})

//cop게시글 정의 수정
$(function () {
  $('.contwrite .wrote_justify').on('click', function () {
    var cont_text = $(this).closest('.contwrite').children('p').text();
    $('.cop_w_edit').find('.write-2').children('textarea').text(cont_text).focus();
  })
})

/* profile tooltip*/
$(function () {

  $('.pf_hover').mouseover(function (e) {
    var this_tt = $(this).attr('data-tooltip');
    var name = $(this).text();
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;

    $(document).find('.profile_tooltip').not(this).hide();
    $(document).find('.profile_tooltip').find('.name').text(name);
    $(document).find('#' + this_tt).css({
      'position': 'fixed',
      'left': mouse_x,
      'top': mouse_y
    }).fadeIn();
  });


  /*지식인 header 이름툴팁*/
  $('.pf_hover.knw').mouseover(function (e) {
    var this_tt = $(this).attr('data-tooltip');
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
    var name = $(this).text();

    $(document).find('.profile_tooltip').find('.name').text(name);
    $(document).find('#' + this_tt).css({
      'position': 'fixed',
      'left': 'auto',
      'right': '250px',
      'top': mouse_y + 20
    }).fadeIn();
  })

  $('.pf_hover.right').mouseover(function (e) {
    var this_tt = $(this).attr('data-tooltip');
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
    var name = $(this).text();

    $(document).find('.profile_tooltip').find('.name').text(name);
    $(document).find('#' + this_tt).css({
      'position': 'fixed',
      'left': 'auto',
      'right': '290px',
      'top': mouse_y + 50
    }).fadeIn();
  })

  $('html').click(function (e) {
    if (!$(e.target).hasClass(".profile_tooltip")) {
      $('.profile_tooltip').hide();
    }
  });
})

  //cop강의실 left메뉴 검색영역
  function searchWord() {
    
    var word1="본문";
    var word2="작성자";
    
    var sch_input = $('.classRoom_content .search .word_text').val();
    
    if(sch_input.indexOf(word1)!=-1){ //검색input에 "본문" 글자가 남아있을때
			sch_input='';
      var find_word = sch_input.split(':');
      $('.classRoom_content .search .word_text').val(find_word[1]);
    } 
    else if(sch_input.indexOf(word2)!=-1){ //검색input에 "작성자" 글자가 남아있을때
      sch_input='';
			var find_word = sch_input.split(':');
      $('.classRoom_content .search .word_text').val(find_word[1]);
    } 
   
    $('.classRoom_content .search').addClass('on');
    $('.classRoom_content .search .search-sim').show();
    $('.classRoom_content .search .search-sim li:first-child').addClass('selected');
  }

 
  $(function(){
       
    $('.classRoom_content .search .word_text').on("keydown", function(e){
      
      if (!(e.which == 13 || e.keycode == 13 || e.which == 46 || e.keycode == 46 )) {
        
        var $listItems = $('.classRoom_content .search .search-sim li');
        var key = (e.keyCode ? e.keyCode : e.which),
        $selected = $listItems.filter('.selected'),
        $current;
        searchWord();
        
        if($('.search .search-input.delete').length<1){
          $(this).closest('.search').find('.search-input.sch_btn').hide();
          $(this).closest('.search').find('.word_text').after('<button class="search-input delete">삭제</button>');
        }
        
      // 키보드 방향키로 검색어 선택
        if ( key != 40 && key != 38 ) return;
        $('.search .search-sim li').removeClass('selected');

        if ( key == 40 ) { // Down key
          if ( ! $selected.length || $selected.is(':last-child')) {
            $current = $listItems.eq(0);
          }
          else {
            $current = $selected.next();
          }
        }
        else if ( key == 38 ){ // Up key
          if ( ! $selected.length || $selected.is(':first-child')) {
             $current = $listItems.last();
          }
          else {
            $current = $selected.prev();
          }
        }
        $current.addClass('selected');
			}
       //엔터키 실행시 검색어 선택
       else if(e.which == 13 || e.keycode == 13) {
        if($('.classRoom_content .search .search-sim .selected').length >0){
          var select_txt=$('.classRoom_content .search .search-sim .selected').text();
          $('.classRoom_content .search .word_text').val(select_txt);
          $('.classRoom_content .search .search-sim').hide();
         }
        $('.classRoom_content .search .search-sim li').removeClass('selected');
      }
    }).keyup(function(){
      var first_chr = $('.classRoom_content .search .word_text').val();
      $('.classRoom_content .search .search-sim .word').text(first_chr); 
      
      //커서 문자끝에 위치
      if (this.createTextRange) {
      var range = this.createTextRange(); 
      range.move('character', this.value.length); 
      range.select(); 
      }
      else if (this.selectionStart || this.selectionStart== '0') this.selectionStart = this.value.length; 
    });

 //esc키 검색영역 닫기
$('.classRoom_content .word_text,.classRoom_content .file_search_input').keyup(function(e) {
  if (e.which == 27 || e.keycode == 27) {
		$('.classRoom_content .search-sim').hide();
  }
});

  $('.classRoom_content .search .search-sim li').on('click', function () {
    var selection = $(this).find('a').text();
    $(this).closest('.search').find('.word_text').val(selection);
    $(this).closest('.search-sim').hide();
    $(this).closest('.search').find('.search-input.sch_btn').hide();
    $(this).closest('.search').find('.word_text').after('<button class="search-input delete">삭제</button>');
    $('.search .search-sim li').removeClass('selected');
  });

	//검색영역 단어삭제버튼
  $(document).on('click', '.classRoom_content .search .search-input.delete', function () {
    $(this).siblings('.word_text').val('');
    $(".classRoom_content .search").removeClass("on")
    $('.classRoom_content .search .search-input.delete').remove();
    $('.classRoom_content .search-input.sch_btn').show();
    $('.classRoom_content .search .search-sim li').removeClass('selected')
  })

  $('.classRoom_content .search .word_text').on('change', function () {
    if($(this).val()==''){
      $('.classRoom_content .search .search-input.delete').remove();
      $('.classRoom_content .search-input.sch_btn').show();
     }
  });
  
  $('html').click(function (e) {
    if (!$(e.target).hasClass(".search-sim")) {
      $('.search-sim').hide();
    }
  });
})

/*--------------------------------------------------------------------*/

// cop 강의실- 파일명, 학습자검색
  function file_search() {

    var word1="파일명";
    var word2="학습자";
    
    var sch_input= $('.classRoom_content .find .file_search_input').val();
		 
    if(sch_input.indexOf(word1)!=-1){ //검색input에 "파일명" 글자가 남아있을때
			sch_input='';
      var find_word = sch_input.split(':');
      $('.classRoom_content .find .file_search_input').val(find_word[1]);
    } else if(sch_input.indexOf(word2)!=-1){ //검색input에 "학습자" 글자가 남아있을때
			sch_input='';
      var find_word = sch_input.split(':');
      $('.classRoom_content .find .file_search_input').val(find_word[1]);
    } 

    $('.classRoom_content .find').addClass('on');
    $('.classRoom_content .find .search-sim').show();
    $('.classRoom_content .find .search-sim li:first-child').addClass('selected');
  }

  //op강의실 방향키 up,down 스크립트
  $(function(){
    
    $('.classRoom_content .find .file_search_input').keydown(function(e){
      
      // 키보드 방향키로 검색어 선택
      if (!(e.which == 13 || e.keycode == 13 || e.which == 46 || e.keycode == 46)) {
        
        if($('.find .btn_sch.delete').length<1){
          $(this).closest('.find').find('.btn_sch.file').hide();
          $(this).closest('.find').find('.file_search_input').after('<button class="btn_sch delete">삭제</button>');
        }
        
        var $listItems = $('.classRoom_content .find .search-sim li');
        var key = e.keyCode,
        $selected = $listItems.filter('.selected'),
        $current;
        file_search();

        if ( key != 40 && key != 38 ) return;
        $('.find .search-sim li').removeClass('selected');

        if ( key == 40 ) { // Down key
          if ( ! $selected.length || $selected.is(':last-child')) {
            $current = $listItems.eq(0);
          }
          else {
            $current = $selected.next();
          }
        }
        else if ( key == 38 ){ // Up key
          if ( ! $selected.length || $selected.is(':first-child')) {
             $current = $listItems.next();
          }
          else {
            $current = $selected.prev();
          }
        }
        $current.addClass('selected');
			}
        //엔터키 실행시 검색어 선택
      else if(e.which == 13 || e.keycode == 13) {
        if($('.classRoom_content .find .search-sim .selected').length >0){
          var select_txt=$('.classRoom_content .find .search-sim li.selected').text();
          $('.classRoom_content .find .file_search_input').val(select_txt);
          $('.classRoom_content .find .search-sim').hide();
        }
        $('.classRoom_content .find .search-sim li').removeClass('selected');
      }
    }).keyup(function(){
      var first_chr = $('.classRoom_content .find .file_search_input').val();
      $('.classRoom_content .find .search-sim .word').text(first_chr); 
    });


  $('.classRoom_content .find .search-sim li').on('click', function () {
    var selection = $(this).find('a').text();
    $(this).closest('.find').find('.file_search_input').val(selection);
    $(this).closest('.search-sim').hide();
    $(this).closest('.find').find('.btn_sch.file').hide();
    $(this).closest('.find ').find('.file_search_input').after('<button class="btn_sch delete">삭제</button>');
    $('.classRoom_content .find .search-sim li').removeClass('selected');
  });

	//검색영역 단어삭제버튼
  $(document).on('click', '.classRoom_content .find .btn_sch.delete', function () {
    $(this).siblings('.file_search_input').val('');
    $(".classRoom_content .find").removeClass("on")
    $('.classRoom_content .find .btn_sch.delete').remove();
    $('.classRoom_content .find .btn_sch.file').show();
    $('.classRoom_content .find .search-sim li').removeClass('selected')
  });

  $('.classRoom_content .find .file_search_input').change(function () {
    if($(this).val()==''){
      $('.classRoom_content .find .btn_sch.delete').remove();
      $('.classRoom_content .find .btn_sch.file').show();
     }
  });
})

//메인 설정분야명 갯수 초과시 숫자노출
$(function () {
  $('.sch_nothing.other .recommend').each(function () {
    if ($(this).find('.field_name').length <= 3) {
      $(this).find('.field_name').css('float', 'none').css('display', 'inline-block');
    } else if ($(this).find('.field_name').length >= 5) {

      $(this).addClass('over');
      $(this).find('.field_name:nth-child(n+5)').hide();
      $(this).find('.over_count').show();
      var diff = $(this).find('.field_name').length - 4;
      $(this).find('.over_count span').text(diff)
    }
  })
})

//메인 솔루션 카드 말줄임
$(function(){
  $(".card_list.mainSlider .cardName").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

			//타입 체크
			if(regExp1.test(text) == true){
      }
       //영문
			else if(regExp2.test(text) == true){
        var elliLength = 26; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //영문+공백
			else if(regExp3.test(text) == true){
        var elliLength = 26;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글
			else if(regExp4.test(text) == true){
        var elliLength = 13; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 16; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+영문
      else if(regExp6.test(text) == true){
        var elliLength = 16; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //혼합
      else{
        var elliLength = 18;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
    });
})

//부문상세 솔루션 카드 말줄임
$(function(){
  $(".solution_card.part .cardName").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

    //타입 체크
    if(regExp1.test(text) == true){
    }
     //영문
    else if(regExp2.test(text) == true){
      var elliLength = 26; //체크할 글자수
      if( $(this).text().length >= elliLength ){
        $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
      }
    }

    //영문+공백
    else if(regExp3.test(text) == true){
       var elliLength = 26;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
    }

    //한글
    else if(regExp4.test(text) == true){
      var elliLength = 13; //체크할 글자수
      if( $(this).text().length >= elliLength ){
        $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
      }
    }

    //한글+공백
    else if(regExp5.test(text) == true){
      var elliLength = 16; //체크할 글자수
      if( $(this).text().length >= elliLength ){
        $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
      }
    }

    //한글+영문
    else if(regExp6.test(text) == true){
      var elliLength = 16; //체크할 글자수
      if( $(this).text().length >= elliLength ){
        $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
      }
    }

    //혼합
    else{
      var elliLength = 18;		//체크할 글자수
      if( $(this).text().length >= elliLength ){
        $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
      }
    }
  });
})

//마이페이지 학습관리 말줄임
$(function(){
  $(".learning-manage .card_list .cardName").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

			//타입 체크
			if(regExp1.test(text) == true){
      }
       //영문
			else if(regExp2.test(text) == true){
        var elliLength = 26; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //영문+공백
			else if(regExp3.test(text) == true){
         var elliLength = 26;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }

      //한글
			else if(regExp4.test(text) == true){
        var elliLength = 13; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 16; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+영문
      else if(regExp6.test(text) == true){
        var elliLength = 18; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //혼합
      else{
        var elliLength = 18;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
    });
})

//솔루션상세_공통 말줄임
$(function(){
  $(".s_similar .card_list .cardName").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

			//타입 체크
			if(regExp1.test(text) == true){
      }
       //영문
			else if(regExp2.test(text) == true){
        var elliLength = 26; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //영문+공백
			else if(regExp3.test(text) == true){
         var elliLength = 26;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }

      //한글
			else if(regExp4.test(text) == true){
        var elliLength = 13; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 16; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+영문
      else if(regExp6.test(text) == true){
        var elliLength = 18; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //혼합
      else{
        var elliLength = 18;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
    });
})

// 지식인 온라인문의 타이틀 말줄임
$(function(){
  $(".reqCard .title p").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

			//타입 체크
			if(regExp1.test(text) == true){
      }
       //영문
			else if(regExp2.test(text) == true){
        var elliLength = 20; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //영문+공백
			else if(regExp3.test(text) == true){
         var elliLength = 20;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }

      //한글
			else if(regExp4.test(text) == true){
        var elliLength = 30; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 22; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //혼합
      else{
        var elliLength = 24;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
    });
})

//COP메인 솔루션 카드 말줄임
$(function(){
  $(".cop-section .solution_card .cardName").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

			//타입 체크
			if(regExp1.test(text) == true){
      }
       //영문
			else if(regExp2.test(text) == true){
        var elliLength = 26; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //영문+공백
			else if(regExp3.test(text) == true){
         var elliLength = 26;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }

      //한글
			else if(regExp4.test(text) == true){
        var elliLength = 13; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 14; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+영문
      else if(regExp6.test(text) == true){
        var elliLength = 18; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //혼합
      else{
        var elliLength = 18;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
    });
})

// cop메인 cop목록 타이틀 말줄임
$(function(){
  $(".cop_list .reqCard .cardMid .title").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

			//타입 체크
			if(regExp1.test(text) == true){
      }

      //영문+공백
			else if(regExp3.test(text) == true){
         var elliLength = 35;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }

      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 35; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //혼합
      else{
        var elliLength = 35;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
    });
})

// 지식인 cop목록 타이틀 말줄임
$(function(){
  $(".content.knw_expert .reqCard .title").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

			//타입 체크
			if(regExp1.test(text) == true){
      }

      //영문+공백
			else if(regExp3.test(text) == true){
         var elliLength = 35;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }

      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 40; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //혼합
      else{
        var elliLength = 40;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
    });
})

// cop개설 부분,분야 선택 마우스 오버시 설명 말줄임
$(function(){
  $(".sol_req .selectSlider2 li>div .fieldExp").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

			//타입 체크
			if(regExp1.test(text) == true){
      }

      //영문+공백
			else if(regExp3.test(text) == true){
         var elliLength = 50;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }

      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 50; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //혼합
      else{
        var elliLength = 45;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
    });
})

// 지식인문의 분야명 설명 말줄임
$(function(){
  $(".knw_que_cont .interest_select_slider .txt").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

			//타입 체크
			if(regExp1.test(text) == true){
      }

      //영문+공백
			else if(regExp3.test(text) == true){
         var elliLength = 50;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }

      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 50; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //혼합
      else{
        var elliLength = 45;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
    });
})

// 솔루션강의실-사전사후 솔루션카드 말줄임
$(function(){
  $(".classRoom_content .solution_card .cardName").each(function () {

      var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])+$/;
      var text = $(this).text();		//체크할 텍스트
      var ellitype = 0;				//체크할 타입 초기화

    //타입 설정
    var regExp1 = /^[0-9]+$/; //숫자
    var regExp2 = /^[a-zA-Z]+$/; //영문
    var regExp3 = /^[a-zA-Z\s]+$/; //영문+공백
    var regExp4 = /^[가-힣]+$/; //한글
    var regExp5 = /^[가-힣\s]+$/; //한글+공백
    var regExp6 = /^[가-힣a-zA-Z]+$/; //한글+영문
    var regExp7 = /^[!@#$%^*+=-]+$/; // 특수문자

			//타입 체크
			if(regExp1.test(text) == true){
      }
       //영문
			else if(regExp2.test(text) == true){
        var elliLength = 26; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //영문+공백
			else if(regExp3.test(text) == true){
         var elliLength = 26;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }

      //한글
			else if(regExp4.test(text) == true){
        var elliLength = 16; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 18; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //한글+영문
      else if(regExp6.test(text) == true){
        var elliLength = 18; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }

      //혼합
      else{
        var elliLength = 18;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
    });
})

//로딩중 이미지
$(window).load(function() {
   $('.loading').hide(); 
   $('.loading').parent('div').css('position','relative'); 
  });

