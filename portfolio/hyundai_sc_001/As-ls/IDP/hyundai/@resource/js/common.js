//윈도우 팝업


function winPopupSize(url, popWidth, popHeight) {
    var newName = 0;
    var winHeight = $(window).height(); // 현재창의 높이
    var winWidth = document.body.clientWidth;   // 현재창의 너비
    var winX = window.screenX || window.screenLeft || 0;// 현재창의 x좌표
    var winY = window.screenY || window.screenTop || 0; // 현재창의 y좌표

    var popX = winX + (winWidth - popWidth) / 2;
    var popY = winY + (winHeight - popHeight) / 2;
    window.open(url, newName, "width=" + popWidth + "px,height=" + popHeight + "px,top=" + popY + ",left=" + popX + ",scrollbars=yes")

}

$(document).ready(function () {


//a 태그 빈주소 처리
$('a[href="#"]').click(function (e) {
    e.preventDefault();
});

// 디자인 form요소 적용
$('select, input[type=radio], input[type=checkbox], #input[type=file]#inputFile').uniform({
    fileDefaultHtml: '',
    fileButtonHtml: '파일첨부'
});


$(function () {
    $(".input-search input:disabled").each(function () {
        $(this).parent().addClass('disabled');
    });
    $(this).removeAttr('disabled');
    $(this).parent(".input-search").removeClass('disabled');
});


//gnb
$('.gnb .depth01').hover(function () {
    var eq = $('.depth01').index(this);

    $('.header-wrap').addClass('active');
    $('.gnb .depth01').removeClass('active');
    $('.gnb .depth01:eq(' + eq + ')').addClass('active');

}, function () {
});


$('#header').hover(function () {
}, function () {
    $('.gnb .depth01').removeClass('active');
    var cnt = 0;
    $('.gnb .depth02').find('li').each(function (eq) {
        if ($(this).hasClass('active')) {
            cnt++;
            $(this).parent('ul').parent('.depth01').addClass('active');
        }
    });

    if (cnt == 0) $('.header-wrap').removeClass('active');
});


    /*  $('.depth01').hover(function () {
     var eq = $('.depth01').index(this);
     $('.depth01').removeClass('active');
     $('.depth01:eq(' + eq + ')').addClass('active');

     }, function () {});

     $('#header').hover(function(){},function(){
     $('.depth01').removeClass('active');
     var cnt= 0;
     $('.depth02 ul').find('li').each(function(eq){
     if($(this).hasClass('active')){
     cnt++;
     $(this).parent('ul').parent('.depth02').parent('.depth01').addClass('active');
     }
     });
     });
     */


// hr-list open

$('.hr-list dt').each(function () {

    var $target = $('.hr-list dt')
    $('dd:not(:first)').css('display', 'none');
    $target.click(function (e) {

        if ($('+dd', this).css('display') == 'none') {
            $('dd').slideUp(250);
            $('+dd', this).slideDown(250);
            $target.removeClass('active');
            $(this).addClass('active');
        }
    })

});


// 탭
$('.tab li a').each(function () {

    var this_href = $(this).attr('href');
    var li_active = $(this).parent("li").hasClass("active");

    if(li_active === true){
     $(this_href).css("display","block");
 }
 else{
    $(this_href).css('display', 'none');
}

$(this).click(function (e) {
    e.preventDefault();
            //탭활성화
            $(this).parent('li').addClass('active').siblings('li').removeAttr('class');
            //타켓 디스플레이
            $(this_href).css('display', 'block').siblings('.tab-cont').css('display', 'none');
            // 프레임 사이즈 조절
            // mainFrameResize();

        });

});

//탭 large
$('.tab.large').each(function () {
    var divide = $(this).find('li').size();
    $(this).find('li').each(function () {
        $(this).css('width', parseFloat(100 / divide) + '%');
    });
});


//top버튼
$(".btn-top").addClass("btn-scrolldown").addClass("scroll");

$(".btn-top").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('btn-scrolldown')) {
        var offset = $("#footer").offset().top;
        $("html, body").stop().animate({scrollTop: offset}, 400, function () {
                //$('.btn-top').removeClass('btn-scrolldown').700('scroll');
            });
    } else {
        $("html, body").stop().animate({scrollTop: 0}, 400, function () {
                //$('.btn-top').addClass('btn-scrolldown').addClass('scroll');

            });
    }
});


$(window).on('scroll', function () {
    var wScrollTop = $(window).scrollTop();

        //var maxHeight = $(document).height() - $(window).height() - $('#footer').height();
        if (wScrollTop > 0) {
            $('.btn-top').removeClass('btn-scrolldown').removeClass('scroll');
        } else {
            $('.btn-top').addClass('btn-scrolldown').addClass('scroll');
            $(".btn-top").css({'bottom': "50px", position: ""});
        }
    }).trigger("scroll");

    // button
    $(document).on('mousedown', 'button, input[type="button"], input[type="submit"]', function (e) {
        e.preventDefault();
    });

    // select
    $('.select-label').click(function () {
        $(this).parents('.data-down').toggleClass('active');
    });
    $('.select-list li').click(function () {
        $(this).parents('.select-list').siblings('.select-label').text($(this).text());
        $(this).parents('.data-down').removeClass('active');
    });


    //layer popup center
    jQuery.fn.center = function () {
        this.css("position", "absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + 500 + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        return this;
    }
    //layer popup open
    $('.open-laypop').each(function () {
        var $target = $(this).attr("href");
        $(this).click(function (e) {
            e.preventDefault();
            $('.layer-popup').hide();
            $($target).fadeIn(200).center();
            $('.dimmed').show();
            $('.layer-popup').append("<div class='dimmed'></div>");
        });
    });

    // layer popup close
    $('.layer-pop .pop-close, .layer-pop .dimmed').click(function () {
        $('.dimmed').hide();
        $('.layer-pop').hide();
    });


// mss header team menu
$('.select-team .current').click(function () {
    $(this).parent('.select-team').toggleClass('active');
});


//전체메뉴 열림
$('.all-menu').click(function () {
    $('.menu-wrap').addClass('active');
    return false;
});
//전체메뉴 닫음
$('.menu-wrap .btn-close').click(function () {
    $('.menu-wrap').removeClass('active');
    return false;
});

try {
        //로딩
        var circle = new Sonic({

            width: 100,
            height: 100,

            stepsPerFrame: 1,
            trailLength: 1,
            pointDistance: .025,

            strokeColor: '#05E2FF',

            fps: 20,

            setup: function () {
                this._.lineWidth = 2;
            },
            step: function (point, index) {

                var cx = this.padding + 50,
                cy = this.padding + 50,
                _ = this._,
                angle = (Math.PI / 180) * (point.progress * 360);

                this._.globalAlpha = Math.max(.5, this.alpha);

                _.beginPath();
                _.moveTo(point.x, point.y);
                _.lineTo(
                    (Math.cos(angle) * 35) + cx,
                    (Math.sin(angle) * 35) + cy
                    );
                _.closePath();
                _.stroke();

                _.beginPath();
                _.moveTo(
                    (Math.cos(-angle) * 32) + cx,
                    (Math.sin(-angle) * 32) + cy
                    );
                _.lineTo(
                    (Math.cos(-angle) * 27) + cx,
                    (Math.sin(-angle) * 27) + cy
                    );
                _.closePath();
                _.stroke();

            },
            path: [
            ['arc', 50, 50, 40, 0, 360]
            ]

        });

        circle.play();
        $('#loading .wrap .bar').append(circle.canvas);
        $('#loading').append("<div class='dimmed'></div>").hide();

        //로딩
        var circle2 = new Sonic({

            width: 100,
            height: 100,

            stepsPerFrame: 1,
            trailLength: 1,
            pointDistance: .025,

            strokeColor: '#05E2FF',

            fps: 20,

            setup: function () {
                this._.lineWidth = 2;
            },
            step: function (point, index) {

                var cx = this.padding + 50,
                cy = this.padding + 50,
                _ = this._,
                angle = (Math.PI / 180) * (point.progress * 360);

                this._.globalAlpha = Math.max(.5, this.alpha);

                _.beginPath();
                _.moveTo(point.x, point.y);
                _.lineTo(
                    (Math.cos(angle) * 35) + cx,
                    (Math.sin(angle) * 35) + cy
                    );
                _.closePath();
                _.stroke();

                _.beginPath();
                _.moveTo(
                    (Math.cos(-angle) * 32) + cx,
                    (Math.sin(-angle) * 32) + cy
                    );
                _.lineTo(
                    (Math.cos(-angle) * 27) + cx,
                    (Math.sin(-angle) * 27) + cy
                    );
                _.closePath();
                _.stroke();

            },
            path: [
            ['arc', 50, 50, 40, 0, 360]
            ]

        });

        circle2.play();
        $('#extraLoading .wrap .bar').append(circle2.canvas);
        $('#extraLoading').append("<div class='dimmed'></div>").hide();
    } catch (e) {
        // 통합결재(구) 문제로 인해 수정
        //console.log("loading Error");
    }

    // 20171212, IE 팝업에서 새로 스크롤 발생 시 가로 스크롤도 함께 생기는 문제 수정.
    if (navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("Trident") >= 0) { // IE가 문제이므로 IE만 동작.
        if ($("body").find("div").hasClass("window-popup")) { // IE면서 팝업화면일 경우 가로스크롤 생기는 문제
            //$.logger("팝업 맞다");
            $(".window-popup").parents("body").css("overflow-x", "hidden");
        }
    }

    //hrr 전용

// handler라는 핸들러 사용(이벤트 전파 방지)
var handler = function (e) {
    e.preventDefault();
};

// 레이어 팝업: 열기
function popupOpen() {
    $('html, body').on('mousewheel DOMMouseScroll', handler);
    $('body').addClass('popup-open');
    $('.dimmed').addClass('active').fadeIn(200);
    $('.layer-popup').addClass('open').fadeIn(250);
}

// 레이어 팝업: 닫기
function popupClose() {
    $('html, body').off('mousewheel DOMMouseScroll', handler);
    $('body').removeClass('popup-open');
    $('.dimmed').removeClass('active').fadeOut(200);
    $('.layer-popup').removeClass('open').fadeOut(250);
}

function popdimClose() {

    $('html, body').off('mousewheel DOMMouseScroll', handler);
    $('body').removeClass('popup-open');
    $('.dimmed').removeClass('active').fadeOut(200);
    $('.layer-popup').removeClass('open').fadeOut(250);
}

// 레이어 팝업: 열기 버튼 클릭 시
$('.btn-popup-open').on('click', function () {
    popupOpen();

});
//레이어 팝업 닫기버튼 클릭시 닫기
$('.layer-popup .pop-close').on('click', function () {
    popupClose();
});

//레이어 dim 클릭시 닫기
$('.dimmed').on('click', function () {
    popdimClose();
})

// 윈도우 팝업 하단 닫기/취소
$(".btn-close").click(function () {
    window.close();
});

// dropdown: 옵션 리스트 영역 여닫기
$('.dropdown-box > a , button').click(function () {
    var $drop = $(this).parent('.dropdown-box');
    $drop.attr('tabindex', 1).focus();
    $drop.toggleClass('active');
});

// dropdown: 포커스 아웃 시 옵션 리스트 영역 닫기
$('.button-group > .dropdown-box').focusout(function () {
    $(this).removeAttr('tabindex');
    $(this).removeClass('active');
});

// dropdown type : 옵션 리스트 영역 여닫기 HRR-0060, HRR-0270
$('td:not(.require) .step-box:not(.complete,.un-complete,.other) > a').on('click', function () {
    var $drop = $(this).parent('.step-box');
    var $tr = $drop.parent().parent('tr');


    if ($drop.hasClass('active')) {
        $tr.removeClass('on');
        $drop.removeClass('active');

    } else {
        $tr.addClass('on').siblings().removeClass('on');
        $drop.addClass('active').siblings().removeClass('active');
    }

});

// dropdown type : 그 외 클릭시 리스트 닫기 HRR-0060, HRR-0270, HRR-0370
$('html').on('click', function (e) {

    if ($(e.target).eq(0).parents('.step-box').length === 0 || $(e.target).eq(0).hasClass('step-box')) {
        $('tr.on').removeClass('on');
        $('.step-box.active').removeClass('active');
    }
    if ($(e.target).eq(0).parents('.dropdown-sorting').length === 0 || $(e.target).eq(0).hasClass('dropdown-sorting')) {
        $('.dropdown-sorting.active').removeClass('active');
    }

});
// 아코디언 여닫기
$('.accordion .btn-accordion').on('click', function () {
    var $li = $(this).parent('li');

    if ($li.hasClass('selected') === true) {
        $li.removeClass('selected');
    } else {
        $li.addClass('selected').siblings('li').removeClass('selected');
    }

});

//말줄임
if ($('.ellipsis').length > 0) {
    $('.ellipsis.r1').ellipsis({
        lines: 1
    });
    $('.ellipsis.r2').ellipsis({
        lines: 2
    });
    $('.ellipsis.r3').ellipsis({
        lines: 3
    });
}


$('.field-box > li > .title-box > button').on('click', function () {
    var $li = $(this).parents('li');

    $li.addClass('active').siblings().removeClass('active');
});


// HRR-0370
$('.btn-sorting').on('click', function () {
    var $toggle = $(this).parent('.dropdown-sorting');
    $toggle.toggleClass('active');

})
// HRR-0370
$('.sorting-wrap .list > ul > li > a').on('click', function () {
    var $li = $(this).parent('li');
    $li.toggleClass('selected');
});


//라디오 체크시 컨텐츠 변경 / 경력 경로 추가 팝업
$('.input-wrap ul li .label , .radio').on('click', function () {

    var $li = $(this).parent('li');
    var $index = $li.index();
    var $target = $li.parents('.input-wrap').next('.section-wrap').children('.target');

    $target.eq($index).addClass('show').siblings().removeClass('show');
});
/// 경력 경로 추가 팝업 input[type="search"]
$('.input-search-area input[type="search"]').keyup(function () {
    var value = $(this).val();
    var inputSearcharea = $('.input-search-area');

    if (value === '') {
        inputSearcharea.removeClass('on')
    } else {
        inputSearcharea.addClass('on')
    }

})
// 추천학습 솔루션 table 안 아코디언
$(".tr-solution a").on("click", function () {
    var $tr = $(this).parents(".tr-solution");

    if ($tr.hasClass("open")) {
        $tr.removeClass('open');
    } else {
        $tr.addClass('open').siblings().removeClass('open');

    }
    if ($('.ellipsis').length > 0) {
        $('.ellipsis.r1').ellipsis({
            lines: 1
        });
        $('.ellipsis.r2').ellipsis({
            lines: 2
        });
        $('.ellipsis.r3').ellipsis({
            lines: 3
        });
    }

});

//학습 결과 업로드 등록버튼 클릭시 수정 및 삭제 버튼 활성화
$('.input-wrap .btn-add').on('click', function () {
    var $this = $(this);
    var $parent = $this.parents('.input-wrap');

    $parent.addClass('edit');
    if ($parent.hasClass('edit')) {
        $this.text('수정');
    }
})

//학습 결과 업로드 증빙첨부 HRR-0440
$('.insert-wrap .insert .select').on('click', function () {

    var $type = $('.insert-wrap .insert .select option:selected').attr('data-target');

    switch ($type) {
        case "file":
        $('fieldset').show();
        $('.input-url').hide();
        break;
        case "url":
        $('fieldset').hide();
        $('.input-url').show();
        break;
    }

});

// 추천학습 솔루션 슬라이드
$('.solution-slide ul:not(.addexp,.only-txt)').bxSlider({
    pager: false,
    controls: true,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    slideWidth: 220,
    slideHeight: 285,
    slideMargin: 24
});

// 경력경로 카드 3개 이상 일때, 좌우 버튼 생성
function animateClick() {

    if ($('.auto-slide li').length > 3) {
        $('.animate-click').addClass('active');
    } else {
        $('.animate-click').removeClass('active');
    }
}

function addCareer1() {

        //버튼 호출
        animateClick();

        // 경력경로 입력 박스 수
        var careerBox = $('.career-slide-add ul li');
        var _html = '<li>'
        _html += '<div class="career-plus-box">'
        _html += '<button class="career-plus">추가</button>'
        _html += '</div>' //career-plus-box end
        _html += '<div class="white-box">'
        _html += '<div class="year-area"><input id="" class="input-text type02" type="text" value="" style=" width:92px"> 년</div>'
        _html += '<div class="add-career">'
        _html += '<div class="button-area">'
        _html += '<button type="button" class="btn type01 small route-career" title="경로 입력">경로 입력</button><button type="button" class="btn type01 small del-career">삭제</button>'
        _html += '</div>' //button-area end
        _html += '</div>' //add-career end
        _html += '</div>' //white-box end
        _html += '</li>' //li end

        var _html2 = '<li class="next">'
        _html2 += '<div class="career-plus-box">'
        _html2 += '<button class="career-plus">추가</button>'
        _html2 += '</div>'
        _html2 += '<div class="white-box">'
        _html2 += '<div class="year-area"><input id="" class="input-text type02" type="text" value="" style=" width:92px"> 년</div>'
        _html2 += '<div class="add-career">'
        _html2 += '<div class="button-area">'
        _html2 += '<button type="button" class="btn type01 small route-career" title="경로 입력">경로 입력</button><button type="button" class="btn type01 small del-career">삭제</button>'
        _html2 += '</div>' //button-area end
        _html2 += '</div>' //add-career end
        _html2 += '</div>' //white-box end
        _html2 += '<div class="career-plus-box-after">'
        _html2 += '<button class="career-plus2">추가</button>'
        _html2 += '</div>'
        _html2 += '</li>' //li end

        // 경력경로 입력 박스 뒷쪽에 붙는 플러스 버튼
        var careerPlusAfterhtml = '<div class="career-plus-box-after"><button class="career-plus2">추가</button></div>';

        // 가장 마지막에 위치한 경력 경로 입력 박스에 뒷 플러스 버튼 추가하기
        careerBox.last().addClass('next').append(careerPlusAfterhtml);


        // 경력 경로 입력 박스 앞쪽 플러스 버튼 클릭 시 생기는 입력 박스
        $(document).on("click", ".career-plus-box", function () {
            var careerLi = $(this).parents('li');

            careerLi.before(_html);
            animateClick();

        });
        // 경력 경로 입력 박스 뒷쪽 플러스 버튼 클릭 시 생기는 입력 박스
        $(document).on('click', '.career-plus-box-after', function () {
            var careerLi = $(this).parents('li');

            careerLi.children('.career-plus-box-after').remove();
            careerLi.removeClass('next').after(_html2);
            animateClick();
        });

        //경력경로 삭제 버튼 클릭시
        $(document).on("click", ".del-career", function () {

            var $li = $(this).parents('li');
            var $liPrev = $('.career-slide-add ul li.next').prev();
            var careerLiIdx = $li.parent('ul').children('li').length;
            // 경력경로 입력 박스 뒷쪽에 붙는 플러스 버튼
            var careerPlusAfterhtml = '<div class="career-plus-box-after"><button class="career-plus2">추가</button></div>';

            if (careerLiIdx > 3) {
                $li.remove();
                if ($li.hasClass('next')) {
                    $liPrev.addClass('next').append(careerPlusAfterhtml);
                    $('.animate-click').addClass('active');
                }
            } else {
                alert('최소 3개 이상의 경력 경로 수립이 필요합니다');
                $('.animate-click').removeClass('active');
            }
        });

    }

//btn-prev-arrow / btn-next-arrow 클릭 스크롤 이동
var clickSlide = function (target) {
    // var theCurrent;

    // $('.animate-click a', target).on('click', function (e) {
    //     theCurrent = $(target).find('li.current');

    //     var autoSlide = $('.auto-slide li').outerWidth();

    //     if ($(this).hasClass('btn-prev-arrow')) {
    //         $('.auto-slide').animate({scrollLeft: '-=' + autoSlide}, 200);
    //     } else if ($(this).hasClass('btn-next-arrow')) {
    //         $('.auto-slide').animate({scrollLeft: '+=' + autoSlide}, 200);
    //     }

    //     e.preventDefault();
    //     e.stopPropagation();
    // });
   $(".animate-click .btn-prev-arrow").on("click", function (e) {
    e.preventDefault();

    // var step = $(".auto-slide li.active").outerWidth();
    // console.log(step);

    $(".auto-slide").stop().animate({
      scrollLeft: "-=" + 344 + "px"
    }, 200);

    if ($(".auto-slide li.active").prev().length != 0) {
      $(".auto-slide li.active").removeClass("active").prev("li").addClass("active");
    } else {
      return false;
    }
  })

  $(".animate-click .btn-next-arrow").on("click", function (e) {
    e.preventDefault();

    // var step = $(".auto-slide li.active").outerWidth();
    // console.log(step);

    $(".auto-slide").stop().animate({
      scrollLeft: "+=" + 344 + "px"
    }, 200);

    if ($(".auto-slide li.active").next().length != 0) {
      $(".auto-slide li.active").removeClass("active").next("li").addClass("active");
    } else {
      return false;
    }

})

};





if ($('.career-slide-add').length > 0) {
    addCareer1();
    clickSlide();
}


// $('.career-slide.default ul').bxSlider({
//     controls: true,
//     pager: false,
//     minSlides: 3,
//     maxSlides: 3,
//     slideWidth: 300,
//     slideMargin: 46,
//     moveSlides: 1,
//     infiniteLoop: false,
//     hideControlOnEnd: true
// });

var careerRoute = function (target) {

    $('.animate-click a', target).on('click', function (e) {

        var _liMarginLleftValue = parseInt($('.auto-slide li:nth-of-type(2)').css('margin-left'));
        var autoSlide = $('.auto-slide li').outerWidth() + _liMarginLleftValue;

        if ($(this).hasClass('btn-prev-arrow')) {
            $('.auto-slide').animate({scrollLeft: '-=' + autoSlide}, 200);
        } else if ($(this).hasClass('btn-next-arrow')) {
            $('.auto-slide').animate({scrollLeft: '+=' + autoSlide}, 200);
        }

        e.preventDefault();
        e.stopPropagation();
    });
};

if ($('.career-slide.default').length > 0) {
    careerRoute();
    animateClick();
}

//경력경로 경로 입력 버튼 클릭 시 나오는 경력 경로 추가 팝업 호출
$(document).on("click", ".route-career", function () {
    winPopupSize('HRR-0280.html', 980, 750);
});


// 인기 솔루션 슬라이드
$('.recommend-learn ul.recommend-list').bxSlider({
    controls: true,
    pager: false,
    minSlides: 6,
    maxSlides: 6,
    slideWidth: 150,
    slideHeight: 180,
    slideMargin: 22,
    moveSlides: 1
});

// 분야/연차 정보 입력 팝업 bxslider
$('.field-slide ul').bxSlider({
    pager: false,
    controls: true,
    maxSlides: 4,
//  moveSlides: 1
});

// 분야/연차 정보 입력 팝업 분야 선택시
$('.field-slide li a').on('click', function () {
    var $div = $(this).parent('div');
    var $ul = $div.parents('ul');

    $ul.find('div.active').removeClass('active');
    $div.addClass('active').siblings().removeClass('active');

});

//별점
$('.star-score > span').on('click', function () {
    $(this).parent().children('span').removeClass('active');
    $(this).addClass('active').prevAll('span').addClass('active');
});

// 경력 경로 추가 관련
$('.btn-career > button').on('click', function () {
    $('.btn-career').toggleClass('modify');
        //   $('.career-slide.add ul li').addClass('selected');
    });

$('.add-career').on('click', function () {
    $(this).parent('li').find('.modify-area').addClass('on');
});

// 아이콘 북마크
$('.bookmark').on('click', function () {
    $(this).toggleClass('on');
});

// e-Catalog 검색 시 포커스
$(".e-catalog-search .input-text").focus();

// e-Catalog 검색 2뎁스
$('.e-catalog-search .tab-wrap li').on('click', function () {
    var $twoDepth = $(this).children(".two-depth");
    var $searchInfo = $(".search-info");
    var $checkLength = $('.tab-wrap li.active .two-depth ul li input[type="checkbox"]:checked').length;

    if ($twoDepth.length === 0) {
        $searchInfo.css("margin-top", "0");
    }
    else {
        $searchInfo.css("margin-top", "50px");
        console.log('ddd');
        if ($checkLength === 0) {
            $twoDepth.addClass("error");
            $searchInfo.css("margin-top", "80px");
        }
        else {
            $twoDepth.removeClass("error");
        }
    }

});

// HRR-0340 학습계획 추가 팝업 셀렉트
$('.solution-label').click(function () {
    $(this).parents('.data-down').toggleClass('active');
    $('.select-ment').toggleClass('show');
});

$('.solution-list li').not('.disabled').click(function () {
    var numTit = $(this).children('.num-tit');
    var period = $(this).children('.period-box');

    $(this).parents('.solution-list').siblings('.solution-label').text($(numTit).text());
    $('.result-list').addClass('list-up').html($(period).html());
    $(this).parents('.data-down').removeClass('active');

    if ($('.result-list').hasClass('list-up')) {
        $('.select-ment').css("display", "none");
        $('.btn.add-plan').attr('disabled', false);
    }
    else {
        $('.btn.add-plan').attr('disabled', true);

    }

});

// HRR- 380 솔루션 유형 선택
$('.category-area li a').on('click', function () {
    $(this).parent('li').addClass('selected').siblings().removeClass('selected');
});


$(".bar, .bar-top").on('mouseenter',function () {
		var this_height=$(this).siblings(".bar-info").outerHeight();
    $(this).siblings(".bar-info").css("display", "block");
});
$(".bar, .bar-top").on('mouseleave',function () {
    $(this).siblings(".bar-info").css("display", "none");
});


    // HRR-160 플로팅 버튼 실행
    function stickButton() {

        var scrollTop = $(window).scrollTop();
        var _defaultOffTop = $('.test-list').offset().top;
        var _pointOfftTop = $('.floating-area').offset().top;
        var _pointHeight = $('.floating-area').height();
        var _finish = _defaultOffTop - _pointOfftTop + 5;
        var _floatingMove = scrollTop + _finish;

        $('.button-container').css('top', _floatingMove);

        if (_floatingMove > _pointHeight) {
            $('.button-container').css('top', _pointHeight);
        }
    }

    //조건문 실행
    if ($('.floating-area').length > 0) {
        stickButton();
    }

    //스크롤시 실행
    $(window).scroll(function () {
        if ($('.floating-area').length > 0) {
            stickButton();
        }
    });

    //리사이징시 실행
    $(window).resize(function () {
        if ($('.floating-area').length > 0) {
            stickButton();
        }
    });

    //리더 페이지
    //HRR-0610
    $('.leader-recommend-learn ul.recommend-list').bxSlider({
        controls: true,
        pager: false,
        minSlides: 5,
        maxSlides: 5,
        slideWidth: 150,
        slideHeight: 180,
        slideMargin: 22,
        moveSlides: 1
    });


    function Avg(){
        var  myAvg = $('.tooltip.my-average');
        var  allAvg = $('.tooltip.overall-average');

        if ($(myAvg).css('left') === ("100%")){
           $(myAvg).css('margin-left', '-101px');
       }else if($(myAvg).css('left') === ("0%")){
        $(myAvg).css('margin-left', '0');
    }

    if ($(allAvg).css('left') === ("100%")){
        $(allAvg).css('margin-left', '-78px')
    }else if($(allAvg).css('left') === ("0%")){
        $(allAvg).css('margin-left', '0');
    }
}
if($(".growth-target").children("#tab2").css("display","block")){
  Avg();
}


});
//document.ready end


//file upload
function showUrl() {
    var allFiles = document.getElementById("upload");
    if ('files' in allFiles) {

        // 업로드 파일 5개보다 많을 경우
        if (allFiles.files.length > 5) {
            // alert("최대 5개까지 업로드 가능합니다");
            window.open("HRR-0400-2.html", "첨부 불가 팝업", "width=800, height=250, toolbar=no, menubar=no, scrollbars=no, resizable=yes");

            allFiles.value = "";
            return false;
        }

        // 업로드 파일 5개 이내 시
        else if (allFiles.files.length > 0) {
            for (var i = 0; i < allFiles.files.length; i++) {
                document.getElementById('file_in').innerHTML += '<div class="fileWrap"><span>' + allFiles.files[i].name + '</span>' + '<button type="button" class="btn_file_remove">X</button>' + '</div>';
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
            placeholder_on();
        });
    }

    //5개 이상 stack 했을 경우
    if ($('#filePath .fileWrap').length > 5) {
        $('#filePath span:last-child').remove();
        alert("최대 5개까지 업로드 가능합니다");
        return false;
    }
}

//윈도우 팝업
function win_popup(e, width, height) {
	var url = e.href;
	window.open(url, 'newWindow', 'width=' + width + ', height=' + height + ',top=0, left=0,toolbar=0, status=0, menubar=0, scrollbars=1, resizable=0,');
}

// HRR-0130 말줄임
$(function(){
  $(".field-box .title-box .expert_name").each(function () {

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
         var elliLength = 25;		//체크할 글자수
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
        var elliLength = 22;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
  });
  })


// HRR-0390 말줄임
$(function(){
  $(".plan-select .step02 .field-slide span.detail").each(function () {

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
         var elliLength = 40;		//체크할 글자수
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
        var elliLength = 39;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
  });
})

// HRR-0390 말줄임
$(function(){
  $(".field-slide ul div a .tit").each(function () {

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
         var elliLength = 40;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }
      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 17; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
      //혼합
      else{
        var elliLength = 15;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
  });
})


// 0180
$(function(){
  $(".tit-area.ellip01").each(function () {

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
         var elliLength = 15;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }
      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 15; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
      //혼합
      else{
        var elliLength = 17;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
  });
})

//0320
$(function(){
  $(".tit-area.ellip02").each(function () {

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
         var elliLength = 15;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }
      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 15; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
      //혼합
      else{
        var elliLength = 17;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
  });
})

//0330
$(function(){
  $(".tit-area.ellip03").each(function () {

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
         var elliLength = 15;		//체크할 글자수
          if( $(this).text().length >= elliLength ){
            $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
          }
      }
      //한글+공백
      else if(regExp5.test(text) == true){
        var elliLength = 15; //체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
      //혼합
      else{
        var elliLength = 15;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
  });
})

//0360
$(function(){
  $(".tit-area.ellip04").each(function () {

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
         var elliLength = 15;		//체크할 글자수
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
      //혼합
      else{
        var elliLength = 14;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
  });
})

//0420
$(function(){
  $(".tit-area.ellip05").each(function () {

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
         var elliLength = 15;		//체크할 글자수
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
      //혼합
      else{
        var elliLength = 19;		//체크할 글자수
        if( $(this).text().length >= elliLength ){
          $(this).text( $(this).text().substr(0,elliLength) + '...')		//지정할 글자수 이후 표시할 텍스트
        }
      }
  });
})

