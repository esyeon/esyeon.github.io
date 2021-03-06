// $.ajax({
//
//     type:"POST"
//
//     ,url: "https://esyeon.github.io/html/index.html"
//
//     ,dataType:"html"
//
//     ,success:function(res){
//
//     }
//
//     ,beforeSend:function(){
//
//
//         $('.wrap-loading').removeClass('display-none');
//
//     }
//
//     ,complete:function(){
//
//         $('.wrap-loading').addClass('display-none');
//
//
//     }
//
//     ,error:function(e){
//
//
//     }
//
//     ,timeout:100000
//
// });


$(document).ready(function () {
    var $windowScrollTop = $(window).scrollTop();
    var $headerHeight = $('header').outerHeight();


    $('.btn_top').on('click',function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },500)
    })

    $('nav > ul > li > a').on('click',function(){
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

    $('.btn_down').on('click',function(){
        var $sectionFirstTop = $('.portfolio_wrap').offset().top - $headerHeight;
        $('html, body').stop().animate({
            'scrollTop' : $sectionFirstTop
        },750)
        e.preventDefault()
    })

    $('.empty').on('click',function(){
        alert("해당 사이트는 내부시스템이므로 비공개용 프로젝트입니다")
    })

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

    $('.btn_mobile_menu').on('click',function(){
        var $this = $(this);
        var $header = $this.parent();

        $header.toggleClass('mini');
        e.preventDefault()
    })

    $('.dim_mobile').on('click',function(){
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




