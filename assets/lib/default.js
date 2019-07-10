$(document).ready(function () {
    var $windowScrollTop = $(window).scrollTop();
    var $headerHeight = $('header').outerHeight();

    $('a').on('click',function(e){
        e.preventDefault()
    })
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

    })

    $('.dim_mobile').on('click',function(){
        var $this = $(this);
        var $header = $this.parent();
        $header.removeClass('mini');

    })
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.203118, 127.057757), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch('경기 화성시 동탄공원로 21-12', function(result, status) {

        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">카카오맵 마커 사용</div>'
            });
            infowindow.open(map, marker);
            console.log(infowindow);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        }
    });

});




