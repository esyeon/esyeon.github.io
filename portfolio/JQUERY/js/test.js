$(document).ready(function(){
    var $menuLi = $('.nav-menu li');

    $('a').on('click',function(e){
        e.preventDefault();
    })
    $('section').each(function(idx){
        var $target = $('section').eq(idx);
        var $targetOffsetTop = $target.offset().top;

        if($(window).scrollTop() >= $targetOffsetTop){
            $menuLi.eq(idx).addClass('active').siblings().removeClass('active');
        }
    })

    $(window).scroll(function() {

        $('section').each(function (idx) {
            var $target = $('section').eq(idx);
            var $targetOffsetTop = $target.offset().top;

            if ($(window).scrollTop() >= $targetOffsetTop) {
                $menuLi.eq(idx).addClass('active').siblings().removeClass('active');
            }
        })

        if ($(window).scrollTop() > 200) {
            $('.btn-top').fadeIn()
        } else {
            $('.btn-top').fadeOut()
        }
    })


    $('.nav-menu li').on('click',function(){
        var $liIdx = $(this).index();
        var $sectionIdx = $('section').eq($liIdx);
        var $sectionOffsetTop = $sectionIdx.offset().top;
        // console.log($sectionoffSetTop)

        $('html , body').stop().animate({
            'scrollTop' : $sectionOffsetTop
        },500)

    })

    $('.btn-top').on('click',function(){
        $('html , body').stop().animate({
            'scrollTop' : 0
        },500)
    });

    var $idx = 0;
    var $slideWidth = $('.slidebanner ul').width();
    var $slideTarget = $('.slidebanner ul li');
    // var ran = Math.floor(Math.random() * $slideTarget.length)

    $slideTarget.eq($idx).addClass('on').siblings().removeClass('on')
    $slideTarget.eq($idx).children('img').css('display','block')


    $('.slidebanner .next').on('click',function(){

        $slideTarget.eq($idx).removeClass('on').children('img').animate({
            'left': -$slideWidth
        }).parent().next().addClass('on').children('img').css({
            'display':'block',
            'left' : $slideWidth
        }).stop().animate({
            'left': 0
        })

        $idx ++;

        if($idx == $slideTarget.length) {

            $idx = 0;
            $slideTarget.eq($idx).addClass('on').children('img').animate({
                'left': $slideWidth
            }).css({
                'display': 'block',
                'left': -$slideWidth
            }).stop().animate({
                'left': 0
            })
        }

    })


    $('.slidebanner .prev').on('click',function(){
        $slideTarget.eq($idx).removeClass('on').children('img').animate({
            'left': $slideWidth
        }).parent().prev().addClass('on').children('img').css({
            'display': 'block',
            'left': -$slideWidth
        }).stop().animate({
            'left' :0
        })


        $idx --;

        if($idx < 0){

            $idx = $slideTarget.length-1;


            $slideTarget.eq($idx).children('img').css({
                'display': 'block',
                'left': -$slideWidth
            }).stop().animate({
                'left': 0
            }).parent().addClass('on').siblings().removeClass('on')
        }
    })

   var setIn = setInterval(function(){
       $('.slidebanner .next').click()
   },4500)

    $slideTarget.on('mouseenter',function(){
        clearInterval(setIn)
    }).mouseleave(function(){
        setIn = setInterval(function(){
            $('.slidebanner .next').click()
        },4500)
    })

    $('.slidebanner ul li a').on('click',function(){
        var $current = $(this).parent().index();
        var $currentOn =  $('.slidebanner ul li.on').index();

        if($current > $currentOn){
            $slideTarget.eq($currentOn).removeClass('on').children('img').animate({
                'left': -$slideWidth
            })
            $slideTarget.eq($current).addClass('on').children('img').css({
                'display':'block',
                'left': $slideWidth
            }).stop().animate({
                 'left': 0
             })
        }else if($current < $currentOn){
            $slideTarget.eq($currentOn).removeClass('on').children('img').animate({
                'left': $slideWidth
            })
            $slideTarget.eq($current).addClass('on').children('img').css({
                'display':'block',
                'left': -$slideWidth
            }).stop().animate({
                'left': 0
            })
        }
    })

    $(function(){
        let idx = 0
        let liLen = $('.fadebanner ul li').length-1
        let li = $('.fadebanner ul li')
        // console.log(idx,liLen)

        function fade(){
            idx++
            $('.fadebanner ul li.on img').stop().fadeOut(1000).parent().removeClass('on').next().addClass('on').children('img').fadeIn(1000)
            //   console.log(idx,liLen)

            if(idx > liLen){
                // console.log("첫번쨰로 돌아옴")
                idx=0
                li.eq(0).addClass('on').children('img').fadeIn(1000)

            }
        }

        let fadeSet = setInterval(function(){
            fade()
        }, 4500)

        li.mouseenter(function(){
            clearInterval(fadeSet)
        }).mouseleave(function(){
            fadeSet = setInterval(function(){
                fade()
            }, 4500)

        })


        $('.fadebanner ul li a').on('click' ,function(){
            let idx_a = $(this).parent().index();
            let idx_on = $('.fadebanner ul li.on').index();
                // console.log(liLen)
            //
            if(idx_a > idx_on){
                console.log(idx_a + '작다')
                li.eq(idx_on).removeClass('on').children('img').fadeOut(1000)
                li.eq(idx_a).addClass('on').children('img').fadeIn(1000)
            }else if(idx_a < idx_on){

                li.eq(idx_a).addClass('on').children('img').fadeIn(1000)
                li.eq(idx_on).removeClass('on').children('img').fadeOut(1000)
            }



        })

    })

    $('.movie-view ul li a').on('click', function(){


        var href = $(this).attr('href');
        var add = 'https://www.youtube.com/embed/'+ href +'?rel=0&amp;controls=0&amp; showinfo=0" frameborder="0" allowfullscreen'
        $('.view iframe').attr('src',add)
        // console.log(href,add)
        $(this).children('img').fadeTo(500,0.3).parents('li').siblings().find('img').fadeTo(500,1)

    })


});




