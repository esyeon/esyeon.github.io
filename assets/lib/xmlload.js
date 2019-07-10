//xml load

var APP = APP || {};
var APP = {
    //project data
    pjData : function(){
        $.get("../assets/lib/all.xml", function(data){
            $(data).find('pjList').each(function(){
                var $pjList = $(this);
                var $siteUrl = $pjList.find('siteUrl').text();
                var $pjthumb = $pjList.find('pjthumb').text();
                var $pjName = $pjList.find('pjName').text();
                var $pjDate = $pjList.find('pjDate').text();
                var $pjWork = $pjList.find('pjWork').text();


                if($siteUrl == ""){
                    var listObj = '<a href="javascript:void(0)" class="default">';
                    listObj += '<p>내부보안사이트이므로 해당 링크가 없습니다</p>';


                }else{
                    listObj = '<a href="' + $siteUrl + '" class="thumb" target="_blank" title="새창 열림">';

                }
                if($pjthumb == ""){
                    $('.default').find('img').remove();

                }else{
                    listObj += '<img src="../assets/image/thumb/' + $pjthumb + '"/>';
                }
                listObj += '<div class="detail_wrap">';
                listObj += '<div class="detail">';
                listObj += '<P class="project_name">' + $pjName + '</P>';
                listObj += '<P class="date"><span>참여기간 : </span>' + $pjDate + '</P>';
                listObj += '<P class="work"><span>수행업무 : </span>' + $pjWork + '</P>';
                listObj += '</div>';
                listObj += '</div>';
                listObj += '</a>';

                $('.portfolio_list').append($(listObj));
            })
        })
    }
}

$(function() {
    APP.pjData();
});
