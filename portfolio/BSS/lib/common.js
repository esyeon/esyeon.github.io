$(document).ready(function () {

    $('a').on('click', function (e) {
        e.preventDefault();
    })

    $('.menu_list > li').on('click', function () {
        var $this = $(this);

        $this.addClass('active').siblings().removeClass('active');

    })



    $('.accordion_list').on('click', function () {
        var $this = $(this);

        if ($this.hasClass('open')) {
            $this.removeClass('open')
        } else {
            $this.addClass('open').siblings().removeClass('open');
        }

    })

    $('.tab-menu ul li').on('click', function () {
        var activeTab = $(this).attr('data-tab');

        $('.tab-menu ul li').removeClass('active');
        $('.tab-cnt').removeClass('current');
        $(this).addClass('active');
        $('#' + activeTab).addClass('current');
    })

    $('.tab-list ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    $('.btn-top').on('click', function () {

        $('html, body').stop().animate({scrollTop: '0'}, 680);
    })

    var fileTarget = $('.filebox .upload-hidden');
    fileTarget.on('change', function () {
        console.log('dddd')
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name').val(filename);
    });

    $('.m-menu').on('click', function () {
        $('body').addClass('overflow')
        $('nav').addClass('open');
        $('.m-dim').addClass('open');

    })

    $('.btn-close').on('click', function () {
        $('body').removeClass('overflow');
        $('nav').removeClass('open');
        $('.m-dim').removeClass('open');

    })

    $('.m-dim').on('click', function () {
        $('body').removeClass('overflow');
        $('nav').removeClass('open');
        $(this).removeClass('open');

    })



    $(window).scroll(function () {
        var $aside = $('aside');
        // var $secondSectionoffset = $('.second-section').offset().top;

        if ($(window).scrollTop() >= 500) {
            $aside.addClass('show');

        } else if ($(window).scrollTop() < 500) {
            $aside.removeClass('show');
        }


    });
    if ($('.slick-banner').length > 0) {
        $('.slick-banner').slick({
            autoplay: true, // 자동 플레이
            autoplaySpeed: 3000, // 자동 플레이 시 슬라이드 속도
            arrows: false, // 좌우 버튼
            dots: true,  // 인디케이터 생성
            draggable: true, // 마우스 드래그 시 슬라이드 기능 활성화
            infinite: true, // 무한 루프
            initialSlide: 0, // 슬라이드 첫 시작 인덱스
            pauseOnHover: true, // 마우스 오버 시 일시 정지
            speed: 300,  // 슬라이드 속도
            swipe: true, // 스와이프 기능 활성화
            touchThreshold: 10, // 슬라이드 민감도(화면 n/1 드래그 시 슬라이드 작동)
        });
    }
    if ($('.slick-album').length > 0) {
        $('.slick-album').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: true,
            draggable: true,
            infinite: true,
            initialSlide: 0,
            speed: 300,
            pauseOnHover: true,
            swipe: true,
            accessibility: false,
            touchThreshold: 10,

        });
    }
    if ($('.slick-center-album').length > 0) {
        $('.slick-center-album').slick({
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 1500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            speed: 1500,
            index: 1,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        centerMode: true,
                        centerPadding: '0',
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }
            ]

        });
    }



})



