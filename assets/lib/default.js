

$(document).ready(function () {

    var $headerHeight = $('header').outerHeight();
    var $slideWidth = $('.slide').width();
    var $Count = $('.slide li').length
    var $idx = 0;


    $('.main .btn-next').on('click',function(){
        $('.slide li').eq($idx).removeClass('on').children('img').animate({
            left: -$slideWidth
        },400).parent().next().addClass('on').children('img').css({
            left: $slideWidth
        }).stop().animate({
            left: 0
        })

        $idx++;

        if($idx == $Count){
            $idx = 0;

            $('.slide li').eq($idx).addClass('on').children('img').animate({
                left:  $slideWidth
            }).css({
                left: -$slideWidth
            }).stop().animate({
                left: 0
            })
        }
    });
    $('.main .btn-prev').on('click',function(){
        $('.slide li').eq($idx).removeClass('on').children('img').animate({
            left: $slideWidth
        },400).parent().prev().addClass('on').children('img').css({
            left: -$slideWidth
        }).stop().animate({
            left: 0
        })

        $idx--;

        if($idx < 0){
            $idx = $Count-1;

            $('.slide li').eq($idx).children('img').css({
                left : -$slideWidth
            }).stop().animate({
                left: 0
            }).parent().addClass('on').siblings().removeClass('on')
        }
    });

    // function load(Parent, Count) {
    //     var lists = Parent + " .list:not(.view)";
    //     var listsLength = $(lists).length;
    //     var totallists;
    //     if (Count < listsLength) {
    //         totallists = Count;
    //     } else {
    //         totallists = listsLength;
    //         $('.block-more').hide()
    //         alert("마지막 프로젝트 리스트입니다.");
    //     }
    //     $(lists + ":lt(" + totallists + ")").addClass("view");
    // }
    //
    // load('.portfolio_list', '4');
    //
    // $(".block-more a").on("click", function () {
    //     load('.portfolio_list', '4');
    // })

    $('.portfolio_list .list').slice(0,4).addClass('view');

    $('.block-more a').on('click',function(e){
        e.preventDefault();
        $(".list:hidden").slice(0,4).addClass('view');

        if($(".list:hidden").length == 0){
            alert("마지막 프로젝트 리스트입니다.");
            $('.block-more').hide();
        }

    })


    var birthday = new Date("1994/06/29");
    var today = new Date();
    var Age = today.getFullYear() - birthday.getFullYear() + 1;

    $('.age').text(Age + "세")
  


    $(window).scroll(function(){
        var $li = $('nav li');
        var $content = $('.scroll');


        $content.each(function(idx){

            var $target = $content.eq(idx);
            var $calcHeight = $target.offset().top - $headerHeight;
            var $sectionFirstTop = $('.portfolio_wrap').offset().top - $headerHeight;

            if ($calcHeight <= $(window).scrollTop()) {
                $li.eq(idx).addClass('active').siblings().removeClass('active');
            }else if($sectionFirstTop > $(window).scrollTop()){
                $li.removeClass('active');
            }
        })


        if ( $(this).scrollTop() > 200 ) {
            $( '.btn_top' ).fadeIn();
        } else {
            $( '.btn_top' ).fadeOut();
        }
    })

    $('.btn_top').on('click',function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },500)
    })

    $('nav > ul > li > a').on('click',function(e){
        var $this = $(this);
        var $li = $this.parent();
        var $liIdx = $li.index();
        var $sectionIdx = $('.scroll').eq($liIdx);
        var $offsetTop = $sectionIdx.offset().top - $headerHeight;

        $('html, body').stop().animate({
            'scrollTop' : $offsetTop
        },500)
        e.preventDefault()
    })

    $('.btn_down').on('click',function(e){
        var $sectionFirstTop = $('.portfolio_wrap').offset().top - $headerHeight;
        $('html, body').stop().animate({
            'scrollTop' : $sectionFirstTop
        },750)
        e.preventDefault()
    })

    $('.empty').on('click',function(){
        alert("해당 사이트는 내부시스템이므로 비공개용 프로젝트입니다")
    })


    $('.btn_mobile_menu').on('click',function(e){
        var $this = $(this);
        e.preventDefault()

        var $header = $this.parent();
        $header.toggleClass('mini');
    })

    $('.dim_mobile').on('click',function(e){
        var $this = $(this);
        var $header = $this.parent();
        $header.removeClass('mini');
        e.preventDefault()
    })


    //카카오 map API
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.590622, 127.035805), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);
});






