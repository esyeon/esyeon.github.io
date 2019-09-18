/***** 개발 관련 Script *****/
var divice = "pc";
if($(window).width() <= 768){
	var divice = "mo";
} 

/* 공유 및 프린트 */
function sendSns(sns, url, txt){
	var o;
	var _url = encodeURIComponent(url);
	var _txt = encodeURIComponent(txt);
	var _br  = encodeURIComponent('\r\n');

	switch(sns)
	{
		case 'facebook':
			o = {
				method:'popup',
				url:'http://www.facebook.com/sharer.php?u=' + _url
			};
			break;

		case 'twitter':
			o = {
				method:'popup',
				url:'http://twitter.com/intent/tweet?text=' + _txt + '&url=' + _url
			};
			break;

		case 'me2day':
			o = {
				method:'popup',
				url:'http://me2day.net/posts/new?new_post[body]=' + _txt + _br + _url + '&new_post[tags]=epiloum'
			};
			break;

		case 'kakaotalk':
			o = {
				method:'web2app',
				param:'sendurl?msg=' + _txt + '&url=' + _url + '&type=link&apiver=2.0.1&appver=2.0&appid=dev.epiloum.net&appname=' + encodeURIComponent('Epiloum 개발노트'),
				a_store:'itms-apps://itunes.apple.com/app/id362057947?mt=8',
				g_store:'market://details?id=com.kakao.talk',
				a_proto:'kakaolink://',
				g_proto:'scheme=kakaolink;package=com.kakao.talk'
			};
			break;

		case 'kakaostory':
			o = {
				method:'web2app',
				param:'posting?post=' + _txt + _br + _url + '&apiver=1.0&appver=2.0&appid=dev.epiloum.net&appname=' + encodeURIComponent('Epiloum 개발노트'),
				a_store:'itms-apps://itunes.apple.com/app/id486244601?mt=8',
				g_store:'market://details?id=com.kakao.story',
				a_proto:'storylink://',
				g_proto:'scheme=kakaolink;package=com.kakao.story'
			};
			break;

		case 'band':
			o = {
				method:'web2app',
				param:'create/post?text=' + _txt + _br + _url,
				a_store:'itms-apps://itunes.apple.com/app/id542613198?mt=8',
				g_store:'market://details?id=com.nhn.android.band',
				a_proto:'bandapp://',
				g_proto:'scheme=bandapp;package=com.nhn.android.band'
			};
			break;

		default:
			alert('지원하지 않는 SNS입니다.');
			return false;
	}

	switch(o.method)
	{
		case 'popup':
			var w = 550;
			var h = 420;
			var leftPos=(screen.width-w)/2;
			var topPos=(screen.height-h)/2-100;
			window.open(o.url, sns, "width="+w+",height="+h+",left="+leftPos+",top="+topPos);
			break;

		case 'web2app':
			if(navigator.userAgent.match(/android/i))
			{
				// Android
				setTimeout(function(){ location.href = 'intent://' + o.param + '#Intent;' + o.g_proto + ';end'}, 100);
			}
			else if(navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i))
			{
				// Apple
				setTimeout(function(){ location.href = o.a_store; }, 200);
				setTimeout(function(){ location.href = o.a_proto + o.param }, 100);
			}
			else
			{
				alert('이 기능은 모바일에서만 사용할 수 있습니다.');
			}
			break;
	}
}
function pstPrint() {
	//window.open('/common/js/print.jsp','print','width=100px;height=500px');
	window.print();
	return;
}

/* 탭 네비게이션 ---------------------------------------- */
function tabMenu(tabName){
	var tabId = $(tabName);
	var tabs = tabId.find('.tab_links');
	var tab_content = tabId.find('.tab_contents');
	var activeTab = tabs.find('.active').attr("title");
	tab_content.find('.tab_content').hide();
	tab_content.find('.' + activeTab).show();

	tabs.find('.tab').click(function(){
		tabs.find(".tab").removeClass("active");
		$(this).addClass("active");
		tab_content.find('.tab_content').hide();
		var currentTab = $(this).attr("title");
		tab_content.find('.' + currentTab).fadeIn()
	});
}

/* placeholder ---------------------------------------- */
function placeholder(){
	
	if ( $('.placehol').parent().parent().find("input").val() != "" ) {		
		$('.placehol').parent().find("label").hide();
	}
	
	$('.placehol').bind("focusin click", function(){
		$(this).parent().find("label").hide();
	}).bind("focusout", function(){
		if ( $(this).parent().find("input").val() == "" ) {
			$(this).parent().find("label").show();
		}
		if ( $(this).parent().find("textarea").val() == "" ) {
			$(this).parent().find("label").show();
		}
	});
}

/* Show Hide Disply Toggle 토글 --------------------------- */
function togglelayer(){
	$('.btnToggle').bind("focusin click", function(){
		$(this).parent().find(".toggle_content").toggle();
	})
}
function showlayer(target){
	$(target).css("display", 'block');
}
function hidelayer(target){	
	$(target).css("display", 'none');
}

/* src 주소변경 ---------------------------------------- */
function replaceSrc(target,src){
	$(target).attr("src", src);
}

/* 팝업 윈도우---------------------------------------- */
var popup={
	open : function(name, url, width, height, scroll){
		// 센터 정렬
		var windowX = (screen.width - width) / 2;
		var windowY = (screen.height - height) / 2;
		window.open(url, name, 'top='+windowY+',left='+windowX+',width='+width+',height='+height+',scrollbars='+scroll+',resizable=no,toolbar=no,location=no,status=no,menubar=no');
	},
	img : function(img){
		img1 = new Image();
		img1.src = (img);
		if((img1.width != 0)&&(img1.height != 0)){
			W = img1.width;
			H = img1.height;
			var windowX = (screen.width - W) / 2;
			var windowY = (screen.height - H) / 2;
			O = "top="+windowY+",left="+windowX+",width="+W+",height="+H+",scrollbars=auto";
			imgWin = window.open("pop_winImg","",O);
			imgWin.document.write("<html><head><title>:*:*:*: 이미지 상세보기 :*:*:*:*:*:*:</title></head>");
			imgWin.document.write("<body topmargin=0 leftmargin=0>");
			if(img1.width >= screen.width){
				imgWin.document.write("<img src="+img+" width='100%' onclick='self.close()' style='cursor:pointer;' title ='클릭하시면 창이 닫힙니다.'>");
			} else {
				imgWin.document.write("<img src="+img+" onclick='self.close()' style='cursor:pointer;' title ='클릭하시면 창이 닫힙니다.'>");
			};
			imgWin.document.write("</body></html>");
			imgWin.document.close();
			pop_winImg.winResize();
		} else {
			controller="imgControll('"+img+"')";
			intervalID=setTimeout(controller,20);
		}
	},
	close : function(){ self.close(); return false; },
}

/* 윈도우 자동 사이즈 조정 및 화면 중앙정렬---------------------------------------- */
function winResize() {
	var Dwidth = parseInt(document.body.scrollWidth);
	var Dheight = parseInt(document.body.scrollHeight);
	var marginY = 0;
	var marginX = 0;
	var divEl = document.createElement("div");
	divEl.style.position = "absolute";
	divEl.style.left = "0px";
	divEl.style.top = "0px";
	divEl.style.width = "100%";
	divEl.style.height = "100%";
	document.body.appendChild(divEl);
	window.resizeBy(Dwidth - divEl.offsetWidth + marginX, Dheight - divEl.offsetHeight + marginY);
	document.body.removeChild(divEl);
	// 센터 정렬
	var windowX = (screen.width - Dwidth) / 2;
	var windowY = (screen.height - Dheight) / 2;
	window.moveTo(windowX, windowY);
}



/*
 * 2016-04-21 유영철 추가
 */
//validate 함수 모믕
/* 
 * 이메일 검증
 * obj JQurry의 Html 객체
 * req 필수 항목 여부 true, false
 */
function chk_email(obj, req){
	var str = obj.val();
	var objName = typeof obj.attr('alt') == "undefined" ? obj.attr('id') : obj.attr('alt');
	if(req && str.length == 0){
		alert(objName + "은 필수 항목 입니다.");
		return false;
	}
	if(str.length > 0){		
		var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
		if( ! regExp.test(str) ) {
			alert(objName + "은 이메일 형식이 아닙니다.");
			return false;
		}
	}
	return true;
}

/* 
 * 전화번호 검증
 * obj JQurry의 Html 객체
 * req 필수 항목 여부 true, false
 */
function chk_telno(obj, req){
	var str = obj.val();
	var objName = typeof obj.attr('alt') == "undefined" ? obj.attr('id') : obj.attr('alt');
	if(req && str.length == 0){
		alert(objName + "은 필수 항목 입니다.");
		return false;
	}	
	if(str.length > 0 && str.length < 12){
		alert(objName + "은 전화번호 형식이 아닙니다.");
		return false;
	}
	if(str.length > 0){
		var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;		
		if( ! regExp.test(str) ) {
			alert(objName + "은 전화번호 형식이 아닙니다.");
			return false;
		}
	}
	return true;
}



/*
 * 필수 값
 * obj JQurry의 Html 객체
 * req 필수 항목 여부 true, false
 */
function chk_require(obj){
	var str = obj.val();
	var objName = typeof obj.attr('alt') == "undefined" ? ( obj.attr('title') == "undefined" ? obj.attr('id') : obj.attr('title') ) : obj.attr('alt');
	if(str.length == 0){
		alert(objName + "은 필수 항목 입니다.");
		return false;
	}
	return true;
}

/* 
 * 날짜 검증
 * obj JQurry의 Html 객체
 * req 필수 항목 여부 true, false
 */
function chk_date(obj, req){
	var str = obj.val();
	var objName = typeof obj.attr('alt') == "undefined" ? ( obj.attr('title') == "undefined" ? obj.attr('id') : obj.attr('title') ) : obj.attr('alt');
	if(req && str.length == 0){
		alert(objName + "은 필수 항목 입니다.");
		return false;
	}
	
	if(str.length > 0){
		// 날자 형식인지 확인 
		var regex = /^(\d{4})-(\d{2})-(\d{2})$/; 
		if(!regex.test(str)) {
			alert(objName + "은 날자 형식이 아닙니다.");
			return false;
		}
		try{
			var d = new Date(str);
			var strArr = str.split('-');
			if ( ( parseInt(strArr[1]) == (1+d.getMonth()) ) &&  
					(parseInt(strArr[2]) == d.getDate()) &&  
					(parseInt(strArr[0]) == d.getFullYear() ) ){
				return true;
			}else{
				alert(objName + "은 날자 형식이 아닙니다.");
				return false;
			}
		}
		catch(e){
			alert(objName + "은 날자 형식이 아닙니다.");
			return false;
		}
	}
	return true;	
}

/*
 * obj radio name
 * objName 명칭
 */
function chk_radio(obj, objName){
	try
	{
		var radio = document.getElementsByName(obj);
		for( i = 0 ; i < radio.length ; i++ ){
			if( radio[i].checked ) return true;
		}
		alert(objName + '을 선택해 주세요.');
		return false;
	}
	catch(e){
		return false;
	}
}

/*
 * obj checkbox name
 * altStr 명칭
 */
function chk_checkbox(obj, altStr){
	try
	{	
		var check = document.getElementById(obj);
		
		if(!check.checked){
			alert(altStr);
			return false;
		}
		return true;
	}
	catch(e){
		return false;
	}
}

/*
 * obj JQurry의 Html 객체
 * req 필수 항목 여부 true, false
 * type : img, doc, zip , all
 */
function chk_file(obj, req, type){
	var str = obj.val();
	var objName = typeof obj.attr('alt') == "undefined" ? obj.attr('id') : obj.attr('alt');
	if(req && str.length == 0){
		alert(objName + "은 필수 항목 입니다.");
		return false;
	}
	
	if(str.length > 0){		
		if(! chk_fileext(obj, objName, type )) return false;
		
		if (str.indexOf("'") != -1){
	 		alert(objName + "파일 이름에 \"'\" 문자를 사용할 수 없습니다."); 
	 		return false; 		
	 	} 	
	 	if (str.indexOf("&") != -1){ 		
	 		alert(objName + "파일 이름에 \"&\" 문자를 사용할 수 없습니다."); 	
	 		return false; 		
	 	} 
	 	if (str.indexOf("+") != -1){ 		
	 		alert(objName + "파일 이름에 \"+\" 문자를 사용할 수 없습니다."); 	
	 		return false; 		
	 	}
	}
 	return true;
}

function chk_fileext(obj, objName, type ){
	var file = obj.val().split('\\').pop();
	file = file.substring(file.lastIndexOf(".") + 1).toLowerCase();
	if(type == 'img'){
		if($.inArray(file, ['gif','png','jpg','jpeg']) == -1) {
			alert(objName + '는 gif, png, jpg, jpeg 파일만 업로드 할수 있습니다.');
			obj.val('');
			return false;
		}
		else{
			return true;
		}
	}
	
	if(type == 'doc'){
		if($.inArray(file, ['doc','docx','xls','xlsx','ppt','pptx', 'hwp','txt' ]) == -1) {
			alert(objName + '는 doc, docx, xls,xlsx, ppt, pptx, hwp, txt 파일만 업로드 할수 있습니다.');
			obj.val('');
			return false;
		}
		else{
			return true;
		}
	}
	
	if(type == 'zip'){
		if($.inArray(file, ['zip']) == -1) {
			alert(objName + '는 zip 파일만 업로드 할수 있습니다.');
			obj.val('');
			return false;
		}
		else{
			return true;
		}
	}
	return true;	
}

/*
 * obj JQurry의 Html 객체
 * req 필수 항목 여부 true, false
 * minLng 최소 값 숫자
 */
function chk_length ( obj, req, minLng ){
	// 맥스 값을 설정 한다.
	
	var maxLng = 0;
	var str = obj.val();
	var maxLng = typeof obj.attr('maxlength') == 'undefined' ? 20 : obj.attr('maxlength');
	var objName = typeof obj.attr('alt') == "undefined" ? ( obj.attr('title') == "undefined" ? obj.attr('id') : obj.attr('title') ) : obj.attr('alt');
	
	if(req && str.length == 0){
		alert(objName + "은 필수 항목 입니다.");
		return false;
	}
	
	// 값의 길이를 가지고 온다.
	var valLength = chk_len(str);
	
	if (valLength > maxLng){		
		alert(objName + " 값의 길이는 " + minLng + "~" + maxLng + "Byte 이어야 합니다. [" + valLength + "]bytes");		
		return false;
	}else{
		return true;
	}
	return true;
}

/*
 * 문자열 Byte를 가지고 온다.
 */
function chk_len(str){
	var i, j = 0;
	for (i = 0; i < str.length; i++){
		val = escape(str.charAt(i)).length;
		if (val == 6){
			j++;
		}
		j++;
	}	
	return j;
}


/*
 * 레이업 팝업 오픈
 * layerDivId: 레이어 팝업 div 의 id , width : 팝업 사이즈
 */
function gfn_openLayerPop(layerDivId,width){
	$.blockUI({ message: $('#' + layerDivId), css: { width:width + 'px',cursor:'default' } });
}	

/*
 * 레이어 팝업 닫기
 */    
function gfn_closeLayerPop(){
	$.unblockUI();
}	

/*
* 천체 선택 및 해제
* objName 컨트롤 아이디
* 토글링 타겟 명
*/
function fn_checkAll(obj, targetName)
{	
	try
	{
		if(obj != null || $("input[name=" + targetName +"]") != null || typeof $("input[name=" + targetName +"]") != 'undefined' )
		{
			if (obj.checked) {
		        $("input[name=" + targetName +"]").prop("checked",true);
		    } else {
		        $("input[name=" + targetName +"]").prop("checked",false);
		    }
		} 
		else
		{
			alert('선택할 대상이 없습니다.') ;
		}
	}
	catch(e)
	{
		alert('오류가 발생 하였습다.') ;
	}
}

/*
 * ajax 처리 
 */  	
function gfn_callAjax(pUrl,pForm,pCallback)
{	
	// submit	
	$.ajax({
		type : "POST",
		url : pUrl,
		dataType : "json",
		data : pForm.serialize(),
		processData : false,
		cache : false,
		success : function(data){
			pCallback(data);
		},
		error : function(error) {
			alert(error);
			return;
		}
	});
}

function fn_downFileIdx(fileIdx, encFileIdx)
{
	// submit
	var form;
    //document 에 from element 생성 전송 방식은 post 보낼곳은 modify
    form = document.createElement( "form");
    form.method = "post";
    form.action = "/cmm/FileDown.do";
    
    //submit 보낼 input 배열 변수 생성 세개의 변수를 생성
     var input = new Array();
     input[0] = document.createElement("input");
     $(input[0]).attr("type","hidden");
     $(input[0]).attr('name','fileIdx');
     $(input[0]).attr("value",fileIdx);
     form.appendChild(input[0]);
     input[1] = document.createElement("input");
     $(input[1]).attr("type","hidden");
     $(input[1]).attr('name','encFileIdx');
     $(input[1]).attr("value",encFileIdx);
     form.appendChild(input[1]);
     
     //스크립트로 생성된 form 을 body element에 append 한 후 생선된 form을 modify에 submit 한다.
     document.body.appendChild(form);
     form.submit();
}

function fn_fileDelte(fileIdx, encFileIdx, fileNm){
	// submit
	var form;
    //document 에 from element 생성 전송 방식은 post 보낼곳은 modify
    form = document.createElement("form");
    form.name = "fileForm";
    
    sendUrl = "/cmm/FileDel.do";
    
    //submit 보낼 input 배열 변수 생성 세개의 변수를 생성
     var input = new Array();
     input[0] = document.createElement("input");
     $(input[0]).attr("type","hidden");
     $(input[0]).attr('name','fileIdx');
     $(input[0]).attr("value",fileIdx);
     form.appendChild(input[0]);
     input[1] = document.createElement("input");
     $(input[1]).attr("type","hidden");
     $(input[1]).attr('name','encFileIdx');
     $(input[1]).attr("value",encFileIdx);
     form.appendChild(input[1]);
     
	$.ajax({
		type : "POST",
		url : sendUrl,
		dataType : "json",
		data : fileForm.serialize(),
		processData : false,
		cache : false,
		success : function(data){
			
			if(data.retCd == '00000') {
				// 성공시 처리
				alert(data.retMsg);
				$(fileNm).innerHTML = "";
			} else {
				// 미성공시 처리
				alert(data.retMsg);
			}
		},
		error : function(error) {
			alert(error);
		}
	});
}

function pstTwitter(msg, url) {	
	var href = "http://twitter.com/home?status=" + encodeURIComponent(msg) + " " + encodeURIComponent(url);
	var a = window.open(href, 'twitter', '');
	return;
}

function pstFaceBook(msg, url) {
	var href = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(url) + "&t=" + encodeURIComponent(msg);
	var a = window.open(href, 'facebook', '');
	return;
}

function pstPrint() {
	//window.open('/common/js/print.jsp','print','width=100px;height=500px');
	window.print();
	return;
}

function setCookie(name, value, expiredays){
	var todayDate = new Date();
	todayDate.setDate (todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";" ;

}


function CheckPassWord(ObjUserID, ObjUserPassWord, objUserPassWordRe)
{
	//alert("chk=" + ObjUserID.value + ", " + objUserPassWordRe);
	//alert("chk=" + ObjUserPassWord.value + ", " + objUserPassWordRe.value);
	
    if(ObjUserPassWord.value != objUserPassWordRe.value)
    {
        alert("입력하신 비밀번호와 비밀번호확인이 일치하지 않습니다");
        return false;
    }
 
    if(ObjUserPassWord.value.length<9 || ObjUserPassWord.value.length > 16)
    {
        alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 9~16자리로 입력해주세요.");
        return false;
    }
 
    if(!ObjUserPassWord.value.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/))
    {
        alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 9~16자리로 입력해주세요.");
        return false;
    }
    
    if(ObjUserID.value.indexOf(ObjUserPassWord.value) > -1)
    {
        alert("비밀번호에 아이디를 사용할 수 없습니다.");
        return false;
    }
    
    var SamePass_0 = 0; //동일문자 카운트
    var SamePass_1 = 0; //연속성(+) 카운드
    var SamePass_2 = 0; //연속성(-) 카운드
    
    var chr_pass_0;
    var chr_pass_1;
    
    for(var i=0; i < ObjUserPassWord.value.length; i++)
    {
        chr_pass_0 = ObjUserPassWord.value.charAt(i);
        chr_pass_1 = ObjUserPassWord.value.charAt(i+1);
        
        //동일문자 카운트
        if(chr_pass_0 == chr_pass_1)
        {
            SamePass_0 = SamePass_0 + 1
        } 
        //연속성(+) 카운드
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1)
        {
            SamePass_1 = SamePass_1 + 1
        }
        
        //연속성(-) 카운드
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1)
        {
            SamePass_2 = SamePass_2 + 1
        }
    }
    if(SamePass_0 > 1)
    {
        alert("동일문자를 3번 이상 사용할 수 없습니다.");
        return false;
    }
   
    if(SamePass_1 > 2 || SamePass_2 > 2 )
    {
        alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
        return false;
    }
    //alert(SamePass_0 + ", " + SamePass_1 + ", " + SamePass_2);
    
    return true;
}


function fn_isLogin(){
	alert('회원이십니까? 회원이 아니실 경우 회원가입 후 이용시 다양한 공연정보 및 할인혜택을 제공받으실 수 있습니다.');
	window.location.href = "/member/login.do";
}

function isValidJuminObj(obj) {

	
	var str = deleteHyphen(obj.value);

	if( !isValidJumin(str) ) {
//            obj.focus();
		if (window.event) {
			window.event.returnValue = false;
		}
		return	false;
	}
	obj.value = str;
 
	return	true;
}

// 주민번호 검사
function isValidJumin(str) {
	var tmp = 0;	
	var birthday; 

	if (str.length != 13) {
		return	false;
	}

	var sex = str.substring(6, 7);

	if (sex == 1 || sex == 2) {
		birthday = "19" + str.substring(0, 6);
	} else if (sex == 3  || sex == 4) {
		birthday = "20" + str.substring(0, 6);
	} else {
		return	false;
	}
 
	if (!isDate(birthday)) {
		return	false;
	} 

	for (var i = 0; i < 12 ; i++) {
		tmp = tmp + ((i%8+2) * parseInt(str.substring(i,i+1)));
	}

	tmp = 11 - (tmp %11);
	tmp = tmp % 10;

	if (tmp != str.substring(12, 13)) {
		return	false;
	}
	  
	return	true;
}
    
// 주민번호 2
function isValidDiffJuminObj(obj_1,obj_2,errorMessage) {	
	if( obj_1 != null && obj_2 != null)
	{
		if(! isValidJumin(obj_1.value + obj_2.value) )
		{
			alert(errorMessage);
			try{obj_1.focus();}
			catch(e){}
			return false;
		}
		return true;
	}
	return false;
}

function deleteHyphen(str) {

    var temp = '';
	if(str == "") return temp;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == '-') {
            continue;
        } else {
            temp += str.charAt(i);
        }
    }
    return	temp;
}   



function isDate(date) {    	
    if (date == null || date.length != 8) {
        return	false;
    }

    //if ( !isNumber(date) == false ) {
    //    return	false;
    //} 

    var year  = eval(date.substring(0, 4));
    var month = eval(date.substring(4, 6));
    var day   = eval(date.substring(6, 8));

    if (month > 12 || month < 1) {
        return	false;
    }
    if (day > 31 || day < 1){
        return	false;
    }

    var totalDays;

    switch (eval(month)){

        case 1 :
            totalDays = 31;
            break;
        case 2 :
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
                totalDays = 29;
            else
                totalDays = 28;
            break;
        case 3 :
            totalDays = 31;
            break;
        case 4 :
            totalDays = 30;
            break;
        case 5 :
            totalDays = 31;
            break;
        case 6 :
            totalDays = 30;
            break;
        case 7 :
            totalDays = 31;
            break;
        case 8 :
            totalDays = 31;
            break;
        case 9 :
            totalDays = 30;
            break;
        case 10 :
            totalDays = 31;
            break;
        case 11 :
            totalDays = 30;
            break;
        case 12 :
            totalDays = 31;
            break;
    }

    if (day > totalDays) {
        return	false;
    }

    return	true;
}
function isNumber(num) {    		
    var re = /^(\d+)$/; 
    if (re.test(num)) {
        return	true;
    } 
    return	false; 
}        
function isNumeric(obj, val){		
	if(obj.value == "" || obj.value == null) return;
	if(isNaN(obj.value)){
		window.alert("숫자만 입력가능합니다.");
		obj.value = val;
		obj.focus();
	}
}


/**
 * 입력값이 NULL인지 체크
 */
function isNull(input) {
    if (input.value == null || input.value == "") {
        return true;
    }
    return false;
}

/**
 * 입력값에 스페이스 이외의 의미있는 값이 있는지 체크
 */
function isEmpty(input) {
    if (input.value == null || input.value.replace(/ /gi,"") == "") {
        return true;
    }
    return false;
}

/**
 * 입력값에 특정 문자(chars)가 있는지 체크
 * 특정 문자를 허용하지 않으려 할 때 사용
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert("이름 필드에는 특수 문자를 사용할 수 없습니다.");
 *     }
 */
function containsChars(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) != -1)
           return true;
    }
    return false;
}

/**
 * 입력값이 특정 문자(chars)만으로 되어있는지 체크
 * 특정 문자만 허용하려 할 때 사용
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         alert("혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
 *     }
 */
function containsCharsOnly(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) == -1)
           return false;
    }
    return true;
}

/**
 * 입력값이 알파벳인지 체크
 * 아래 isAlphabet() 부터 isNumComma()까지의 메소드가
 * 자주 쓰이는 경우에는 var chars 변수를
 * global 변수로 선언하고 사용하도록 한다.
 * ex) var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 *     var lowercase = "abcdefghijklmnopqrstuvwxyz";
 *     var number    = "0123456789";
 *     function isAlphaNum(input) {
 *         var chars = uppercase + lowercase + number;
 *         return containsCharsOnly(input,chars);
 *     }
 */
function isAlphabet(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 대문자인지 체크
 */
function isUpperCase(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 소문자인지 체크
 */
function isLowerCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값에 숫자만 있는지 체크
 */
function isNumber(input) {
    var chars = "0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳,숫자로 되어있는지 체크
 */
function isAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳,숫자,:,/,~,.._ 로 되어있는지 체크
 */
function isAlphaNumPlus(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:/~._";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,대시(-)로 되어있는지 체크
 */
function isNumDash(input) {
    var chars = "-0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,콤마(,)로 되어있는지 체크
 */
function isNumComma(input) {
    var chars = ",0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값에서 콤마를 없앤다.
 */
function removeComma(input) {
    return input.value.replace(/,/gi,"");
}

/**
 * 입력값이 사용자가 정의한 포맷 형식인지 체크
 * 자세한 format 형식은 자바스크립트의 'regular expression'을 참조
 */
function isValidFormat(input,format) {
    if (input.value.search(format) != -1) {
        return true; //올바른 포맷 형식
    }
    return false;
}

/**
 * 입력값이 이메일 형식인지 체크
 */
function isValidEmail(input) {
//    var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

/**
 * 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크
 */
function isValidPhone(input) {
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}

/**
 * 선택된 라디오버튼이 있는지 체크
 */
function hasCheckedRadio(input) {
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) return true;
        }
    } else {
        if (input.checked) return true;
    }
    return false;
}

/**
 * 선택된 체크박스가 있는지 체크
 */
function hasCheckedBox(input) {
    return hasCheckedRadio(input);
}

/**
 * 입력값의 바이트 길이를 리턴
 * Author : Wonyoung Lee
 */
function getByteLength(input) {
    var byteLength = 0;
    for (var inx = 0; inx < input.value.length; inx++) {
        var oneChar = escape(input.value.charAt(inx));
        if ( oneChar.length == 1 ) {
            byteLength ++;
        } else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
        } else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        }
    }
    return byteLength;
}

/**
 * 입력한 값이 날짜유형인지 체크
 */
function checkDateType(v_date, flag)
{
    return true;
}

/**
 * 유효한 날짜인지 체크
 */
function checkDate(v_year,v_month,v_day )
{
	var err=0
	if ( v_year.length != 4) err=1
	if ( v_month.length != 1 &&  v_month.length !=  2 ) err=1
	if ( v_day.length != 1  &&  v_day.length !=  2) err=1


	r_year = eval(v_year) ;
	r_month = eval(v_month);
	r_day = eval(v_day)  ;

	if (r_month<1 || r_month>12) err = 1
	if (r_day<1 || r_day>31) err = 1
	if (r_year<0 ) err = 1


	if (r_month==4 || r_month==6 || r_month==9 || r_month==11){
		if (r_day==31) err=1
	}

	// 2,윤년체크
	if (r_month==2){
		var g=parseInt(r_year/4)

		if (isNaN(g)) {
			err=1
		}
		if (r_day>29) err=1
		if (r_day==29 && ((r_year/4)!=parseInt(r_year/4))) err=1
	}

	if (err==1)
	{
		return false
	}
	else
	{
   return true;
	}
}


//사업자등록번호체크
function isRegNumber(input)
{
    var num= input.value.substring(0,3) + input.value.substring(4,6) + input.value.substring(7,12);

    var w_c,w_e,w_f,w_tot
    w_c=num.charAt(8)*5       // 9번째자리의 숫자에 5를 곱한다.
    w_e=parseInt((w_c/10),10) // 10으로 나누고 10진수 형태의 숫자형으로 만든당..나눈몫
    w_f=w_c % 10              // 10으로 나눈 나머지....
    w_tot=num.charAt(0)*1
    w_tot+=num.charAt(1)*3
    w_tot+=num.charAt(2)*7
    w_tot+=num.charAt(3)*1
    w_tot+=num.charAt(4)*3
    w_tot+=num.charAt(5)*7
    w_tot+=num.charAt(6)*1
    w_tot+=num.charAt(7)*3
    w_tot+=num.charAt(9)*1
    w_tot+=(w_e+w_f)

	  if ((w_tot % 10))         // 10으로 나누어 지면 true를 그렇지 않으면 false를 반환합니당..
    {
       return true;
    }
    else
    {
      return false;
    }
}


//주민등록번호 체크
function regitNumberCheck(regitNum1, regitNum2)
{
    errfound = false;
    var str_jumin1 = regitNum1.value;
    var str_jumin2 = regitNum2.value;
    var checkImg='';


    var i3=0
    for (var i=0;i<str_jumin1.length;i++)
    {
        var ch1 = str_jumin1.substring(i,i+1);
        if (ch1<'0' || ch1>'9') { i3=i3+1 }
    }
    if ((str_jumin1 == '') || ( i3 != 0 ))
    {
        error(regitNum1,'없는 주민등록번호 입니다. 다시 입력해 주세요!!');
        return false;
    }



    var i4=0
    for (var i=0;i<str_jumin2.length;i++)
    {
        var ch1 = str_jumin2.substring(i,i+1);
        if (ch1<'0' || ch1>'9') { i4=i4+1 }
    }
    if ((str_jumin2 == '') || ( i4 != 0 ))
    {
      error(regitNum2,'없는 주민등록번호 입니다. 다시 입력해 주세요!!');
        return false;
    }

    if(str_jumin1.substring(0,1) < 0)
    {
        error(regitNum2,'없는 주민등록번호 입니다. 다시 입력해 주세요!!');
        return false;
    }

/*    if(str_jumin2.substring(0,1) > 2)
    {
        error(regitNum2,'없는 주민등록번호 입니다. 다시 입력해 주세요!!');
        return false;
    }
*/
    if((str_jumin1.length != 6) || (str_jumin2.length != 7))
    {
        error(regitNum2,'없는 주민등록번호 입니다. 다시 입력해 주세요!!');
        return false;
    }

    if ((str_jumin1 == '72') || ( str_jumin2 == '18'))
    {
        error(regitNum1,'없는 주민등록번호 입니다. 다시 입력해 주세요!!');
        return false;
    }

    var f1=str_jumin1.substring(0,1)
    var f2=str_jumin1.substring(1,2)
    var f3=str_jumin1.substring(2,3)
    var f4=str_jumin1.substring(3,4)
    var f5=str_jumin1.substring(4,5)
    var f6=str_jumin1.substring(5,6)
    var hap=f1*2+f2*3+f3*4+f4*5+f5*6+f6*7
    var l1=str_jumin2.substring(0,1)
    var l2=str_jumin2.substring(1,2)
    var l3=str_jumin2.substring(2,3)
    var l4=str_jumin2.substring(3,4)
    var l5=str_jumin2.substring(4,5)
    var l6=str_jumin2.substring(5,6)
    var l7=str_jumin2.substring(6,7)
    hap=hap+l1*8+l2*9+l3*2+l4*3+l5*4+l6*5
    hap=hap%11
    hap=11-hap
    hap=hap%10
 /*
    if (hap != l7)
    {
      error(regitNum1,'없는 주민등록번호 입니다.\n다시 입력해 주세요!!');
        return false;
    }

 */
    //var i9=0 
    //return true;
    //if (!errfound)
    //        submit();
}

function error (elem,text) {
    if (errfound) return;
    window.alert(text);
    elem.select();
    elem.focus();
    errfound=true;
}
    function fn_Zipcode(){
    	var width	= 448;
        var height	= 280;
        var left = screen.width/2 - width/2 ;
        var top  = screen.height/2 - height/2 ;
        winObject	= window.open("/common/jsp/zipcode_search.jsp", "ZIPCODE", "left=" + left + ",top=" + top + ",toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=yes,resizable=yes,copyhistory=1,width=" + width + ", height="+height);
        winObject.focus();
    }
    function fn_Alert(obj, msg){
    	window.alert(msg);
    	obj.focus();
    } 
	
    function isEmail (strEmail) {

        var checkTLD=1;
        var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
        var emailPat=/^(.+)@(.+)$/;
        var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
        var validChars="\[^\\s" + specialChars + "\]";
        var quotedUser="(\"[^\"]*\")";
        var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
        var atom=validChars + '+';
        var word="(" + atom + "|" + quotedUser + ")";
        var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
        var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
        var matchArray=strEmail.match(emailPat);

        if (matchArray==null) {
        //alert("이메일 주소가 정확하지 않습니다 (체크 @ and .'s)");
        return false;
        }
        var user=matchArray[1];
        var domain=matchArray[2];
        for (i=0; i<user.length; i++) {
        if (user.charCodeAt(i)>127) {
        //alert("잘못된 이메일 주소를 입력 하셨습니다.");
        return false;
           }
        }
        for (i=0; i<domain.length; i++) {
        if (domain.charCodeAt(i)>127) {
        //alert("도메인 이름이 잘못 기제 되었습니다.");
        return false;
           }
        }

        if (user.match(userPat)==null) {
        //alert("이메일 조소가 아닙니다.");
        return false;
        }
        var IPArray=domain.match(ipDomainPat);
        if (IPArray!=null) {

        for (var i=1;i<=4;i++) {
        if (IPArray[i]>255) {
        //alert("IP주소가 틀립니다!");
        return false;
           }
        }
        return true;
        }

        var atomPat=new RegExp("^" + atom + "$");
        var domArr=domain.split(".");
        var len=domArr.length;
        for (i=0;i<len;i++) {
        if (domArr[i].search(atomPat)==-1) {
        //alert("도메인 이 존재 하지 않습니다.");
        return false;
           }
        }

        if (checkTLD && domArr[domArr.length-1].length!=2 &&
        domArr[domArr.length-1].search(knownDomsPat)==-1) {
        //alert("알려진 형식으로 끝이 나야합니다." + "country.");
        return false;
        }

        if (len<2) {
        //alert("Hostname이 틀립니다. !");
        return false;
        }

        return true;
    }		
	//좌우공백제거
    function trim(str) {
    	var count = str.length;
    	var len = count;
    	var st = 0;
    
    	while ((st < len) && (str.charAt(st) <= ' ')) {
    		st++;
    	}
    	while ((st < len) && (str.charAt(len - 1) <= ' ')) {
    		len--;
    	}
    
    	return ((st > 0) || (len < count)) ? str.substring(st, len) : str ;
    }
    function strip(str, str1) {

        var temp = '';
		if(str == "") return temp;
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) == str1) {
                continue;
            } else {
                temp += str.charAt(i);
            }
        }
        return	temp;
    }    
    function fcheck_usr_email(usr_email) { 
        invalidchars = " /:,;" 

        if ( usr_email == "") { 
            alert("E-Mail이 입력되지 않았습니다.") ;
            return false;
        } 
        for ( i = 0 ; i < invalidchars.length ; i++ ) { 
            badchar = invalidchars.charAt(i) 
            if ( usr_email.indexOf(badchar,0) > -1 ) { 
                //alert("E-Mail에 사용할 수 없는 문자가 입력되었습니다.");
                alert("올바른 E-Mail주소가 아닙니다.");
                return false;
            } 
        } 
        atpos = usr_email.indexOf("@",1) 
        if ( atpos == -1 ) { 
            //alert("E-Mail에 '@'가 존재하지 않습니다.") 
            alert("올바른 E-Mail주소가 아닙니다.");
            return false;
        } 
        if ( usr_email.indexOf("@",atpos+1) > -1 ) { 
            //alert("E-Mail에 2개 이상의 '@'가 존재합니다.") 
            alert("올바른 E-Mail주소가 아닙니다.");
            return false;
        } 
        periodpos = usr_email.indexOf(".",atpos) 
        if ( periodpos == -1 ) { 
            //alert("E-Mail에 메일서버명이 존재하지 않습니다.") 
            alert("올바른 E-Mail주소가 아닙니다.");
            return false;
        } 
        if ( periodpos + 3 > usr_email.length ) { 
            //alert("E-Mail의 메일서버명은 최소 2자리 이상입니다.") 
            alert("올바른 E-Mail주소가 아닙니다.");
            return false;
        } 

        // email를 소문자로 전환하여 비교한다. 
        //usr_email = usr_email.toLowerCase() 
        //alert(usr_email) 
        //atpos = usr_email.indexOf("hanmail.net",1) + usr_email.indexOf("daum.net",1) 
        //alert(atpos) 
        //if ( atpos != -2 ) 
        //{ 
        //alert("E-mail 주소에 한메일(hanmail.net/daum.net) 계정은 입력이 불가합니다.") 
        //return 
        //} 
        return true 
    } 
    //특수문자 입력 방지
    function IsSpec(checkStr) {
    	//var checkOK = "!#^*'~☆★@$%&()+/:;[{<>\|";
    	var checkOK = "!#^*☆★$%&+:;[{<>\|";
    	for (i = 0;  i < checkStr.length;  i++) {
    		ch = checkStr.charAt(i);
    		for (j = 0;  j < checkOK.length;  j++)
    			if (ch == checkOK.charAt(j)) {
    				return (false);
    				break;
    			}					
    	}
    	return (true);
    }
    function check_Id(obj){
    
    	if(obj.value.length < 4 || obj.value.length > 20){
    		alert("아이디는 4~20자의 영문,숫자만 사용하실 수 있습니다.");
    		return false;
    	} else {
    	    return true;
        }
    }
    function check_Passwd(obj){
    	if(obj.value.length < 9 || obj.value.length > 16){
    		alert("비밀번호는 9~16자의 영문,숫자만 사용할 수 있습니다.");
    		return false;
    	} else {
    	    return true;
    	}
    }
    
    function passFocus(obj1, obj2, len){ 
        if( obj1.value.length==len ){
            obj2.focus();
        }
    }
    function replaceAll(inStr , a , b)
    {
    	var tmpStr = inStr;
    	if(inStr != null)
    	{
    		for(i = 0 ; i < inStr.length ; i++)
    		{
    			tmpStr = tmpStr.replace(a , b);
    		}
    	}
    	return tmpStr;
    }
    
  //라디오 버튼의 체크된 값 알아오기
    function getCheckedValue(obj) {
        var checkedValue = "";
        for ( i=0; i<obj.length; i++ )  {
            if ( obj[i].checked == true )  {
                checkedValue = obj[i].value;
                break;
            }
        }
        return checkedValue;
    }
    
    
    function cfPrintBytes(printer, target, maxBytes){
    	$("#"+printer).css("text-align","right");
    	$("#"+printer).text("0 / "+maxBytes+" bytes");
    	
    	if($("#"+target).hasClass("easyui-textbox")){
    		$("#"+target).textbox('textbox').bind('keyup', function(e){
    			var byteSize = cfGetCharByteSize($("#"+target).textbox('getText'));
    			$("#"+printer).text(byteSize+" / "+maxBytes+" bytes");
    			if(byteSize>maxBytes){
    				$("#"+printer).css("color","red");
    			}else{
    				$("#"+printer).css("color","#000");
    			}
    		});
    		
    		if($("#"+target).textbox('getValue')!=""){
    			var byteSize = cfGetCharByteSize($("#"+target).textbox('getText'));
    			$("#"+printer).text(byteSize+" / "+maxBytes+" bytes");
    			if(byteSize>maxBytes){
    				$("#"+printer).css("color","red");
    			}else{
    				$("#"+printer).css("color","#000");
    			}
    		}
    		
    	}else{
    		$("#"+target).keyup(function(){
    			var byteSize = cfGetCharByteSize($("#"+target).val());
    			$("#"+printer).text(byteSize+" / "+maxBytes+" bytes");
    			if(byteSize>maxBytes){
    				$("#"+printer).css("color","red");
    			}else{
    				$("#"+printer).css("color","#000");
    			}
    		});
    		
    		if($("#"+target).val()!=""){
    			var byteSize = cfGetCharByteSize($("#"+target).val());
    			$("#"+printer).text(byteSize+" / "+maxBytes+" bytes");
    			if(byteSize>maxBytes){
    				$("#"+printer).css("color","red");
    			}else{
    				$("#"+printer).css("color","#000");
    			}
    		}
    	}
    }
    
    function cfGetCharByteSize(str) {
    	if (str == null || str.length == 0) return 0;

    	var strSize = 0;
    	for (var i = 0; i < str.length; i++) {
    		var charCode = str.charCodeAt(i);
    		
    		if(charCode >= 0x00000A && charCode <= 0x00000D){
    			strSize += 2;
    		} else if (charCode <= 0x00007F) {
    			strSize += 1;
    		} else if (charCode <= 0x0007FF) {
    			strSize += 2;
    		} else if (charCode <= 0x00FFFF) {
    			strSize += 3;
    		} else {
    			strSize += 4;
    		}
    	}
    	return strSize;
    }

    
    
  //숫자만 입력받기
    function showKeyCode(event) {
    	event = event || window.event;
    	var keyID = (event.which) ? event.which : event.keyCode;
    	//console.log("....keyID=" + keyID);	
    	//if( ( keyID >=48 && keyID <= 57 ) || ( keyID >=96 && keyID <= 105 ) )
    	if( ( keyID >=48 && keyID <= 57 ) || ( keyID >=96 && keyID <= 105 ) || (keyID==8 || keyID==9) )
    	{
    		return;
    	}
    	else
    	{
    		return false;
    	}
    }
    
  //maxlength 만큼 옮기면 다음으로 이동하기....
    function length_to_focus(field1,field2,len)
    {
    	var fld1 = document.getElementById(field1);
    	var fld2 = document.getElementById(field2);
    	if( fld1.value.length == len){
    		fld2.focus();
    	}
    }