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
        },750)

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
            }else if($sectionFirstTop >= $(window).scrollTop()){
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

        $header.toggleClass('mini')
        return false;
    })




});

function addElement(){
    var newImg = document.createElement('img');
    var srcNode = document.createAttribute('src');
    srcNode.value = "../assets/image/lsy_logo.png";
    var heightNode= document.createAttribute('height');
    heightNode.value = '100';
    newImg.setAttributeNode(srcNode);
    newImg.setAttributeNode(heightNode);
    document.getElementById('main').appendChild(newImg);
}

