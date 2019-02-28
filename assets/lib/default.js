$(document).ready(function () {
    var lastScrollTop = 0;

    // //a 이벤트 방지
    // $('a').click(function (e) {
    //     e.preventDefault()
    // })
    //

    // gnb
    // $('.side-num > ul > li > a').on('click', function () {
    //     var $li = $(this).parent();
    //     var numIdx = $li.index();
    //
    //     $li.addClass('on').siblings().removeClass('on').removeAttr('style');
    //     if ($li.hasClass('on')) {
    //         $('.side-num > ul > li.on').prev('li').css({'margin-bottom': '219px'});
    //     }
    //
    // })
    //
    // $(window).on('scroll', function() {
    //     $('article').each(function() {
    //         if($(window).scrollTop() >= $(this).offset().top) {
    //             var id = $(this).attr('id');
    //
    //             $('.side-num li a[href=#'+id+']').addClass('on');
    //         }
    //     });
    // });

    $('#nav nav a').on('click', function(event) {
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('scroll', function() {
        $('.target').each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('#nav nav a').removeClass('active');
                $('#nav nav a[href=#'+ id +']').addClass('active');
            }

        });
    });
});