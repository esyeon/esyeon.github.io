//숫자만 입력 체크 -  onkeydown="js_OnlyNumber(this)"
function js_OnlyNumber(obj)
{
	sFilter="[0-9]";
	if(sFilter)
	{
	  var sKey=String.fromCharCode(event.keyCode);
	  var re=new RegExp(sFilter);
	  // Enter는 키검사를 하지 않는다.
	  if(event.keyCode !=9 && event.keyCode!=37 && event.keyCode!=39 && event.keyCode!=8
		&& event.keyCode!= 46 && event.keyCode!= 96 && event.keyCode != 97 && event.keyCode != 98
		&& event.keyCode!= 99 && event.keyCode!= 100 && event.keyCode != 101 && event.keyCode != 102
		&& event.keyCode != 103 && event.keyCode != 104  && event.keyCode != 105
		&& sKey!="\r" && !re.test(sKey)) event.returnValue=false;
   // Enter 키가 먹지 않게 한다.
	  if (event.keyCode == 13){event.returnValue =false;}
	}
}

//숫자만 입력 체크 -  onkeydown="js_OnlyNumber(this)"
function js_OnlyNumberWidhEnter(obj)
{
	sFilter="[0-9]";
	if(sFilter)
	{
	  var sKey=String.fromCharCode(event.keyCode);
	  var re=new RegExp(sFilter);
	  // Enter는 키검사를 하지 않는다.
	  if(event.keyCode !=9 && event.keyCode!=37 && event.keyCode!=39 && event.keyCode!=8
		&& event.keyCode!= 46 && event.keyCode!= 96 && event.keyCode != 97 && event.keyCode != 98
		&& event.keyCode!= 99 && event.keyCode!= 100 && event.keyCode != 101 && event.keyCode != 102
		&& event.keyCode != 103 && event.keyCode != 104  && event.keyCode != 105
		&& sKey!="\r" && !re.test(sKey)) event.returnValue=false;
	}
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

/**
 * 입력값이 NULL인지 체크
 */
function movePgae(obj, target, action) {
    obj.target = target;
    obj.action = action;
    obj.submit();
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
 * 입력제한 특수문자 체크
 */
function checkInputSpecialChar(input) {
    var chars = "☆★♡♥`~!@#$%^&*()_+|,./;\'[]{}::\"?,";
    return containsCharsOnly(input,chars);
}

function checkSearchSpecialChar(input) {
    var chars = "~#$^&*+|;<>";
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
 * 입력값이 사용자가 정의한 포맷 형식인지 체크
 * 자세한 format 형식은 자바스크립트의 'regular expression'을 참조
 */
function isValidEmailValue(value) {
	var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
	if (value.search(format) != -1) {
        return true; //올바른 포맷 형식
    }
    return false;
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
    
    //alert("num="+num);

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
    
    //alert( "w_tot="+w_tot +", " + (w_tot % 10));

	  if ((w_tot % 10))         // 10으로 나누어 지면 true를 그렇지 않으면 false를 반환합니당..
    {
       return true;
    }
    else
    {
      return false;
    }
}

function CheckBizNo(obj)
{
	 var strXxx = "137137135";
	 var intKey = 0 ;
	 var strBizNo = obj.value;
	 
	 strBizNo = strBizNo.split("-").join("");
	 alert("strBizNo="+strBizNo);
	
	 if (strBizNo.length != 10) return false;
	 if (!CheckNumber(strBizNo)) return false;
	 
	 alert("1111111111");
	 
	 for (var i = 0; i < strXxx.length; i++)
	 {
		 intKey += strBizNo.charAt(i) * strXxx.charAt(i)
	 }
	
	 intKey += (strBizNo.charAt(8) * 5) / 10;
	 intKey = intKey % 10;	
	 intKey = (intKey == 0) ? 0 : 10 - intKey;
	 
	 alert("===="+(strBizNo.charAt(9) ) +", " + intKey );

	 return (intKey != strBizNo.charAt(9)) ? false : true;
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

    if(str_jumin2.substring(0,1) > 2)
    {
        error(regitNum2,'없는 주민등록번호 입니다. 다시 입력해 주세요!!');
        return false;
    }

    if((str_jumin1.length > 7) || (str_jumin2.length > 8))
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

    if (hap != l7)
    {
      error(regitNum1,'없는 주민등록번호 입니다.nn다시 입력해 주세요!!');
        return false;
    }

    var i9=0

    return true;
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

    function checkLength( o, msg, min, max ) {
	    if ( o.val().length > max || o.val().length < min ) {
	      o.addClass( "ui-state-error" );
	      alert(msg);
	      o.focus();
	      return false;
	    } else {
	      return true;
	    }
    }
    
    
    /*************** 문자열 길이 체크 *******************/
	function checkLengthStr( o, n, min, max )
	{
		if ( o.val().length > max || o.val().length < min )
		{
			if(max==min)
			{
				updateTips("'" + n + "'의 길이는 " + min + "자 입니다." );
			}
			else
			{
				updateTips("'" + n + "'의 길이는 " + min + "자 이상 " + max + "자 이하입니다." );
			}
			
			o.focus();
			return false;
		} else {
			return true;
		}
	}  
    function updateTips( t )
	{
		alert(t);
	}
	  
    /*************** 문자열 패턴 체크 *******************/
    function checkRegexp( o, regexp, n )
    {
    	if ( !( regexp.test( o.val() ) ) )
    	{
    		updateTips( n );
    		o.focus();
    		return false;
    	} else {
    		return true;
    	}
    }
 
    
    function printContent(div_id)
    {
    var DocumentContainer = document.getElementById(div_id);
    var html = '<html><head>'+
                   '<link href="/web/css/master.css" rel="stylesheet" type="text/css" />'+
                   '</head><body style="background:#ffffff;">'+
                   DocumentContainer.innerHTML+
                   '</body></html>';
    
        var WindowObject = window.open("", "PrintWindow",
        "width=830,height=700,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes");
        WindowObject.document.writeln(html);
        WindowObject.document.close();
        WindowObject.focus();
        WindowObject.print();
        //WindowObject.close();
        //document.getElementById('print_link').style.display='block';
    }    

    
    // 주어진 문자열이 비어있는지 검사한다.
    function IsEmpty(toCheck) { 

       var chkstr = toCheck + ""; 
       var is_Space = true; 
       
       if (( chkstr == "") || (chkstr == null)) 
           return false; 
           
       for (j = 0; is_Space && j < chkstr.length; j++) { 
           if (chkstr.substring(j, j+1) != " ") is_Space = false ; 
       } 
       
       return is_Space;
    } 
    
 // 주어진 문자열이 숫자로만 이루어져있는지 검사한다. 
    function IsInteger(st) {
         if (!IsEmpty(st)) {
             for (j = 0; j < st.length; j++) {
                 if (((st.substring(j, j+1) < "0") || (st.substring(j, j+1) > "9"))) 
                    return false; 
            }
         } else {
             return false; 
        }
     
        return true; 
    } 
    
    
    function isLength(value){
    	return value.length;
    }
   
    
 // 사업자 등록번호 검사
    function isBusinessNo(varCk1,varCk2,varCk3) {
     ckValue = new Array(10);
     if ( (isLength(varCk1)==3) && (isLength(varCk2)==2) && (isLength(varCk3)==5) ) {
      if ( (IsInteger(varCk1)) && (IsInteger(varCk2)) && (IsInteger(varCk3)) ) {
       ckValue[0] = ( parseFloat(varCk1.substring(0 ,1))  * 1 ) % 10;
       ckValue[1] = ( parseFloat(varCk1.substring(1 ,2))  * 3 ) % 10;
       ckValue[2] = ( parseFloat(varCk1.substring(2 ,3))  * 7 ) % 10;
       ckValue[3] = ( parseFloat(varCk2.substring(0 ,1))  * 1 ) % 10;
       ckValue[4] = ( parseFloat(varCk2.substring(1 ,2))  * 3 ) % 10;
       ckValue[5] = ( parseFloat(varCk3.substring(0 ,1))  * 7 ) % 10;
       ckValue[6] = ( parseFloat(varCk3.substring(1 ,2))  * 1 ) % 10;
       ckValue[7] = ( parseFloat(varCk3.substring(2 ,3))  * 3 ) % 10;
       ckTemp     = parseFloat(varCk3.substring(3 ,4))  * 5  + "0";
       ckValue[8] = parseFloat(ckTemp.substring(0,1)) + parseFloat(ckTemp.substring(1,2));
       ckValue[9] = parseFloat(varCk3.substring(4,5));
       ckLastid = ( 10 - ( ( ckValue[0]+ckValue[1]+ckValue[2]+ckValue[3]+ckValue[4]+ckValue[5]+ckValue[6]+ckValue[7]+ckValue[8] ) % 10 ) ) % 10;
       
       if ( (ckValue[9] != ckLastid) || ( varCk1=="000" && varCk2=="00" && varCk3=="00000" ) ) {
        alert ("잘못된 사업자등록번호입니다. 다시 확인해 주십시오");
        return false;
       } else {
        return true;
       }
      } else {
       alert("사업자등록번호는 숫자이어야 합니다.");
       return false;
      }
     } else {
      alert("사업자등록번호의 자릿수가 잘못 입력되었습니다.");
      return false;
     }
    }
    
    function fn_zip(){
    	var url = "/sym/ccm/zip/EgovCcmZipSearchPopup.do";
    	url = "/common/zipcode.jsp";
    	 window.open(url,'fn_zip','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes, resizable=no,copyhistory=no ,width=680, height=390');
    }

    
    function CehckPassWord(ObjUserID, ObjUserPassWord, objUserPassWordRe)
    {
    	//alert("chk=" + ObjUserID.value + ", " + objUserPassWordRe);
    	//alert("chk=" + ObjUserPassWord.value + ", " + objUserPassWordRe.value);
    	
    	var regExp1 = /[\d]{1,}/
        var regExp2 = /[a-z]{1,}/i
        var regExp3 = /^[a-zA-Z0-9]{10,15}$/
        var msg = "비밀번호는 문자, 숫자의 조합으로 10~15자리로 입력해주세요.";
         
        if(ObjUserPassWord.value != objUserPassWordRe.value)
        {
            alert("입력하신 비밀번호와 비밀번호확인이 일치하지 않습니다");
            return false;
        }
        
        if(!regExp1.test(ObjUserPassWord.value) || !regExp2.test(ObjUserPassWord.value)){ 
            alert(msg);
            return false;
        }
       　
        if(ObjUserPassWord.value.length<10)
        {
            alert(msg);
            return false;
        }
     
        //if(!ObjUserPassWord.value.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)){
        //    alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 8~12자리로 입력해주세요.");
        //    return false;
        //}
        
        if(ObjUserID.value.indexOf(ObjUserPassWord) > -1)
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
    
  //숫자만 입력-------------------------------------
    function onlynum(theField){
    	var inText = theField.value;
    	var ret;

    	for (var i = 0; i < inText.length; i++) {
    	    ret = inText.charCodeAt(i);
    		if (!((ret > 47) && (ret < 58)))  {
    			alert("숫자만 입력하세요.   ");
    			theField.value = "";
    			theField.focus();
    			return false;
    		}
    	}
    	//return true;
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
    
    
    // 통합홈페이지 2013-04-17 오후 5:16:32
    function win_newInfo(gubun)
    {
        var src = "";
        var domain = "";
        domain = "https://member.mjc.ac.kr";
        
        if( gubun == "M"){
        	// 마이페이지 
        	src = "/member/mypage.do?returnUrl=/member/mypage.do";
        }
        else if( gubun == "J"){
        	// 회원가입 
        	src = "/member/join.do";
        }
        else if( gubun == "S"){
        	// 아이디/비밀번호 찾기
        	src = "/member/searchId.do";
        }
        else if( gubun == "O"){
        	// 탈퇴
        	src = "/member/memberOut.do";
        }
        else if( gubun == "P"){
        	// 개인정보보호정책 
        	src = "/info/privacy.do";
        }
        else if( gubun == "C"){
        	// 통합회원 전환 안내  
        	src = "/member/combineInfo.do";
        }
        else if( gubun == "G"){
        	// 통합회원 전환 안내  
        	src = "/info/info.do";
        }
       
        src = domain + src;
        window.open(src, 'win_newInfo','scrollbars=yes,width=879,height=800');
    }
    
    function win_newInfoCancel(gubun, siteNum)
    {
        var src = "";
        var domain = "";
        domain = "https://member.mjc.ac.kr";
        
        if( gubun == "Os"){            
        	// 개별사이트 탈퇴
        	//src = "/member/memberOutSite.do?loginSiteNum="+siteNum;
        	alert("마이페이지에서 탈퇴하실 사이트를 해제하여 주십시요.");
        	src = "/member/mypage.do?returnUrl=/member/mypage.do";
        }
        src = domain + src;
        window.open(src, 'win_newInfo','scrollbars=yes,width=879,height=800');
    }
    

    
    // 입력 글자수 체크 
    function fncChkByte(obj, maxByte,title,gubun) {
    	var ls_str = obj.value;
    	var li_str_len = ls_str.length; 
    	var li_byte = 0;
    	var li_len = 0;
    	var ls_one_char = "";
    	var ls_str2 = "";

    	for ( var i=0; i< li_str_len; i++) {
    		ls_one_char = ls_str.charAt(i);

    		if (escape(ls_one_char).length > 4) {
    			li_byte += 2;
    		} else {
    			li_byte++;
    		}

    		if(li_byte <= maxByte) {
    			li_len = i + 1;
    		}
    	}
    	
    	if(gubun == 'C'){
    		$('#outlineNum').html(li_byte);
    	}

    	if(li_byte > maxByte) {
    		alert(title+"은(는) "+maxByte+"자 이상 쓸수 없습니다!");
    		ls_str2 = ls_str.substr(0, li_len);
    		obj.value = ls_str2;
    		fncChkByte(obj, 4000,title,gubun);
    	} else {
    		//document.getElementById('byteInfo').innerText = li_byte;
    	}
    	
    	
    }
    
    
    //사전 등록 번호
    var RegPerPatten = ",1111,2222,";
    // 지역 번호
    var RegLocPatten = ",02,051,053,032,062,042,052,044,031,033,034,041,063,061,054,055,064,";

    // 인터넷 번호
    var RegIntPatten = ",070,030,050,";

    // 대표번호
    var RegCeoPatten = ",1544,1644,1661,1800,1666,1688,1877,1566,1600,1670,1599,1800,1855,1588,";

    function OnCheckPhone(oTa) {  
    	var sMsg    = oTa.value ; 
    	var onlynum = "" ; 
    	var imsi=0; 
    	onlynum = RemoveDash2(sMsg);  //하이픈 입력시 자동으로 삭제함 
    	onlynum =  checkDigit(onlynum);  // 숫자만 입력받게 함 
    	var retValue = ""; 
    	
    	if(event.keyCode != 12 ) { 
    	    if(onlynum.substring(0,2) == 02) {  // 서울전화번호일 경우  10자리까지만 나타나교 그 이상의 자리수는 자동삭제 
    	        if (GetMsgLen(onlynum) <= 1) oTa.value = onlynum ; 
    	    	if (GetMsgLen(onlynum) == 2) oTa.value = onlynum + "-"; 
    	    	if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,3) ; 
    	    	if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,4) ; 
    	    	if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) ; 
    	    	if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) ; 
    	    	if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) + "-" + onlynum.substring(5,7) ; ; 
    	    	if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,8) ; 
    	    	if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) + "-" + onlynum.substring(5,9) ; 
    	    	if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
    	    	if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
    	    	if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
    	    } 
    	    else if(onlynum.substring(0,2) == 05 ) {  // 05로 시작되는 번호 체크 
    	        if(onlynum.substring(2,3) == 0 ) {  // 050으로 시작되는지 따지기 위한 조건문 
    	            if (GetMsgLen(onlynum) <= 3) oTa.value = onlynum ; 
    	        	if (GetMsgLen(onlynum) == 4) oTa.value = onlynum + "-"; 
    	        	if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,5) ; 
    	        	if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,6) ; 
    	        	if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) ; 
    	        	if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
    	        	if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) + "-" + onlynum.substring(7,9) ; ; 
    	        	if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,10) ; 
    	        	if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) + "-" + onlynum.substring(7,11) ; 
    	        	if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,12) ; 
    	        	if (GetMsgLen(onlynum) == 13) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,12) ; 
    	        } else { 
    	        	if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
    	        	if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
    	        	if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
    	        	if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
    	        	if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
    	        	if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
    	        	if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,8) ;
    	        	if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
    	        	if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
    	        	if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
    	        	if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
    	        } 
    	    } 
    	    else if(onlynum.substring(0,2) == 03 || onlynum.substring(0,2) == 04  || onlynum.substring(0,2) == 06  || onlynum.substring(0,2) == 07  || onlynum.substring(0,2) == 08 ) {  
    	        // 서울전화번호가 아닌 번호일 경우(070,080포함 // 050번호가 문제군요) 
    	        if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
    	    	if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
    	    	if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
    	    	if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
    	    	if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
    	    	if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
    	    	if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,8) ; ; 
    	    	if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
    	    	if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
    	    	if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
    	    	if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
    	
    	    } 
    	    else if(onlynum.substring(0,2) == 01) {  //휴대폰일 경우 
    	        if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
    	    	if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
    	    	if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
    	    	if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
    	    	if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
    	    	if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
    	    	if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,8) ; 
    	    	if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
    	    	if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
    	    	if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
    	    	if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
    	    } 
    	    else if(onlynum.substring(0,1) == 1) {  // 1588, 1688등의 번호일 경우 
    	        if (GetMsgLen(onlynum) <= 3) oTa.value = onlynum ; 
    	    	if (GetMsgLen(onlynum) == 4) oTa.value = onlynum + "-"; 
    	    	if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,5) ; 
    	    	if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,6) ; 
    	    	if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) ; 
    	    	if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
    	    	if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
    	    	if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
    	    	if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
    	    	if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
    	    } 	     
    	    else {
    	        if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
    	    	if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
    	    	if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
    	    	if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
    	    	if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
    	    	if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
    	    	if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8);
    	    }
    	} 
    } 

    


    function RemoveDash2(sNo) { 
	    var reNo = "" 
	    for(var i=0; i<sNo.length; i++) { 
	    	if ( sNo.charAt(i) != "-" ) { 
	    	    reNo += sNo.charAt(i) 
	    	} 
	    } 
	    return reNo 
    } 

    function GetMsgLen(sMsg) { // 0-127 1byte, 128~ 2byte 
	    var count = 0 
	    for(var i=0; i<sMsg.length; i++) { 
	        if ( sMsg.charCodeAt(i) > 127 ) { 
	            count += 2 
	        } 
	        else { 
	            count++ 
	        } 
	    } 
	    return count 
    } 

    function checkDigit(num) { 
	    var Digit = "1234567890"; 
	    var string = num; 
	    var len = string.length 
	    var retVal = ""; 
	
	    for (i = 0; i < len; i++) 
	    { 
	        if (Digit.indexOf(string.substring(i, i+1)) >= 0) 
	        { 
	            retVal = retVal + string.substring(i, i+1); 
	        } 
	    } 
	    return retVal; 
    } 
        
    
    function onlyNumber(event) {

        var key = window.event ? event.keyCode : event.which;    

        if ((event.shiftKey == false) && ((key  > 47 && key  < 58) || (key  > 95 && key  < 106)
        || key  == 35 || key  == 36 || key  == 37 || key  == 39  // 방향키 좌우,home,end  
        || key  == 8  || key  == 46 || key == 9) // del, back space
        ) {
            return true;
        }else {
            return false;
        }    
    }
    
	function facultyOpen(type, cocntents){
		window.open('/faculty/facultyIntro.do?facultyType=' + type + '&facultyContent=' + cocntents, 'FACULTY', 'resizable=yes scrollbars=yes width=780 height=780');
	}
	
	function facultyOpen(type, cocntents, divCode){
		window.open('/faculty/facultyIntro.do?facultyType=' + type + '&facultyContent=' + cocntents + '&divCode='+divCode, 'FACULTY', 'resizable=yes scrollbars=yes width=780 height=780');
	}	
	
	// 온에러이미지
	function fn_onErrorImage(obj, url, reqHeight, reqWidth) {
		obj.src = url;
		obj.height = reqHeight;
		obj.width = reqWidth;
	}
	
	function getSpace(cnt) {
        var spc = "";
        for (i = 0; i < cnt; i++) {
            spc += " ";
        } 
        return spc;
    } 
	
	function containsCharsOnlyTel(input,chars) {
	    for (var inx = 0; inx < input.value.length; inx++) {
	       if (chars.indexOf(input.value.charAt(inx)) == -1)
	           return false;
	    }
	    return true;
	} 
		
	function check(value) {
		for (var i=0; i < value.length; i++) {
			if( (value.charAt(i)== '<') || (value.charAt(i)== '>') || (value.charAt(i)== '*') || (value.charAt(i)== '※')  || (value.charAt(i)== '▒') || (value.charAt(i)== '#') ) {

				return false;
			}
		}
		return true;
	}

	// Ex) <a href="javascript:fn_fileDownload('파일명.txt', '파일경로');">다운로드</a>
	function fn_fileDownload(fileName, filePath)
	{
		if (fileName == "" || fileName == 'undefined' || fileName == null) {
			alert("파일명을 찾을 수 없습니다.");
			return;
		}
		
		if (filePath == "" || filePath == 'undefined' || filePath == null) {
			filePath = "";
		}
		
		fileName = escape(encodeURIComponent(fileName));
		
		location.href = "/resource/common/util/fileDownload.jsp?fileName=" + fileName + "&filePath=" + filePath;
	}
	
	function  is_filled( str_name ){
		var exec_text = "document.loginFrm." + str_name
		eval(exec_text).value = trim( eval(exec_text).value )
		if( eval(exec_text).value.length == 0 )
			return 0;
		else
			return 1;
	}

	function  trim( str ){
		var i, i_begin = 0, i_endin = -1;
		for( i = 0; i < str.length ; i++ ){
			if( str.charAt(i) != " " ){
				i_begin = i; break;
			}
		}

		if( i == str.length )
			return "" ;

		for( i = str.length - 1 ; i_begin <= i   ; i-- ){
			if( str.charAt(i) != " " ){
				i_endin = i; break;
			}
		}
		return ( i_endin == -1 )? str.substr( i_begin ) : str.substring( i_begin, i_endin+1 ) ;
	}
	
	function  cant_be_empty( str_field, str_name, max_len ){
		var exec_text = "document.loginFrm." + str_name;

		if( ! is_filled( str_name ) ){
			alert( "" + str_field + "" + "를 입력하여 주십시오!" );
			eval(exec_text).focus();
			return 1;
		}else{
			var len = eval(exec_text).value.length;
			if( max_len < len ){
				alert( "'" + str_field + "'" + " 문자열의 길이가\n허용범위(" + max_len + "자)를 넘어 "+ (len - max_len) +" 글자를 버립니다" );
				eval(exec_text).value = eval(exec_text).value.substr( 0, max_len );
				return 1;
			}
			return 0;
		}

		// sql Injection 방지를 위해 체크...
		if(eval(exec_text).value != ''){
			var eng=/^([a-zA-Z0-9]{4,20})$/;
			if(eng.test(trim(eval(exec_text).value)) == false){
				alert("잘못된 비밀번호 입니다.");
				eval(exec_text).focus();
				return 1;
			}
		}
	}
	function checkImageExt(str)
	 {
		// alert(str);
	     var IMG_FORMAT = "\.(bmp|gif|jpg|jpeg|png)$"; //문서만 첨부하게 하려면 이 부분 바꿔주시면 되겠죠? ^^
	     if((new RegExp(IMG_FORMAT, "i")).test(str)){
	    	 return true;
	     } 
	     return false;
	 }