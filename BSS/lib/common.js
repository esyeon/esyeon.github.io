$(document).ready(function() {

    $('a').on('click',function(e){
        e.preventDefault();
    })
    $('.slick-banner').slick({
        infinite: true, //양방향 무한 모션
        speed: 300, // 슬라이드 스피드
        autoplay: false, //자동플레이 유무( false시 자동플레이 안됨 )
        autoplaySpeed: 3000, // 자동플레이 스피드
        slidesToShow: 1, //한 화면에 보여줄 아이템수
        slidesToScroll: 1, // 한번에 슬라이드 시킬 아이템 개수
        arrows: false, //좌우 화살 버튼 노출 여부 ( false 시 안보임 )
        dots:true,
    });

    $('.slick-album').slick({
        infinite: true, //양방향 무한 모션
        speed: 300, // 슬라이드 스피드
        autoplay: false, //자동플레이 유무( false시 자동플레이 안됨 )
        autoplaySpeed: 3000, // 자동플레이 스피드
        slidesToShow: 2, //한 화면에 보여줄 아이템수
        slidesToScroll: 2, // 한번에 슬라이드 시킬 아이템 개수
        arrows: false, //좌우 화살 버튼 노출 여부 ( false 시 안보임 )
        dots:true,
    });

    $('.slick-center-album').slick({
        centerMode: true,
        slidesToShow: 5,
        speed: 1500,
        index: 1,
        focusOnSelect:true,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,

    });

    $('.m-menu').on('click',function(){
        $(this).addClass('open');
        $('.m-dim').addClass('open');

    })


    $('.m-dim').on('click',function(){
        $(this).removeClass('open');
        $('.m-menu').removeClass('open');

    })
})



