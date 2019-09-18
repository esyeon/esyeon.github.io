		// 의료진 상세 팝업
		function fn_doctorDetailPop(deptCode, doctId, doctCode) {

			if (deptCode == "" || doctId == "" || doctCode == "") {
				alert("필수 값 오류");
				return;
			}
			
			$.ajax({
				  'type': 'GET'
		        , 'url': '/medical/doctorDetailPopAjax.do?deptCode=' + deptCode + "&doctId=" + doctId + "&doctCode=" + doctCode
				, 'success' : function(data) {
					$("#popDe_profile").html(data);
					$('#popDe_profile').show();
					$('body').css({overflow:'hidden'});
				}
				,'error' : function( x,e ){
	                if(x.status==0){                
	                    alert('You are offline!!\n Please Check Your Network.');                
	                }else if(x.status==404){                
	                    alert('Requested URL not found.');                
	                }else if(x.status==500){                
	                    alert('Internel Server Error.');                
	                }else if(e=='parsererror'){                
	                    alert('Error.nParsing JSON Request failed.');                
	                }else if(e=='timeout'){                
	                    alert('Request Time out.');                
	                }else {                
	                    alert('Unknow Error.n'+x.responseText);                
	                }
				}
			}); 
			
		}
		
		// 의료진 상세 팝업 : 진료예약 화면에서 선택 
		function fn_doctorDetailPopByAppForm(deptCode, doctId, doctCode) {

			if (deptCode == "" || doctId == "" || doctCode == "") {
				alert("필수 값 오류");
				return;
			}
			
			$.ajax({
				  'type': 'GET'
		        , 'url': '/medical/doctorDetailPopAjax.do?appForm=Y&deptCode=' + deptCode + "&doctId=" + doctId + "&doctCode=" + doctCode
				, 'success' : function(data) {
					$("#popDe_profile").html(data);
					$('#popDe_profile').show();
				}
				,'error' : function( x,e ){
	                if(x.status==0){                
	                    alert('You are offline!!\n Please Check Your Network.');                
	                }else if(x.status==404){                
	                    alert('Requested URL not found.');                
	                }else if(x.status==500){                
	                    alert('Internel Server Error.');                
	                }else if(e=='parsererror'){                
	                    alert('Error.nParsing JSON Request failed.');                
	                }else if(e=='timeout'){                
	                    alert('Request Time out.');                
	                }else {                
	                    alert('Unknow Error.n'+x.responseText);                
	                }
				}
			}); 
			
		}
		
		// 의료진 상세 팝업 닫기
		function fn_closeDoctorDetailPop() {
			$('.layerpop').hide();
			$("#popDe_profile").html("");
			$('body').css({overflow:'visible'});
		}
		
		// 진료 예약
		function fn_medicalApplication(deptCode, doctId, doctCode) {
			$("#deptCodeApp").val(deptCode);
			$("#doctIdApp").val(doctId);
			$("#doctCodeApp").val(doctCode);
			$('#appFrm').attr('action', '/medical/application.do');
			$('#appFrm').submit();
		}
		
		// 예약 접수 변경 대기
		function fn_updateApp(doctCode, doctId, deptCode, appDate, appTime, patientId) {
			
			if (!confirm("진료예약 정보를 변경하시겠습니까?")) { return; }
			
		}
		
		// 예약 취소
		function fn_cancelApp(doctCode, doctId, deptCode, appDate, appTime, patientId) {
			
			if (!confirm("진료예약을 취소하시겠습니까?")) { return; }
			
			$.ajax({
				  'type': 'GET'
		        , 'url': '/medical/medicalAppCancelProcAjax.do?deptCode=' + deptCode + "&doctId=" + doctId + "&doctCode=" + doctCode + "&appDate=" + appDate + "&appTime=" + appTime + "&patientId=" + patientId
				, 'success' : function(data) {
					
					if (data.result == "OK") {
						alert("취소되었습니다.");
						location.reload();
					} else {
						alert(data.resultMsg);
					}
				}
				,'error' : function( x,e ){
	                if(x.status==0){                
	                    alert('You are offline!!\n Please Check Your Network.');                
	                }else if(x.status==404){                
	                    alert('Requested URL not found.');                
	                }else if(x.status==500){                
	                    alert('Internel Server Error.');                
	                }else if(e=='parsererror'){                
	                    alert('Error.nParsing JSON Request failed.');                
	                }else if(e=='timeout'){                
	                    alert('Request Time out.');                
	                }else {                
	                    alert('Unknow Error.n'+x.responseText);                
	                }
				}
			});
			
		}
		
		// SMS 인증번호 받기 - OCS
		function fn_smsAuthCheck() {
			
			if ($.trim($("#appPhone02").val()) == "" || $.trim($("#appPhone03").val()) == "") {
				alert("예약자 휴대전화번호를 입력해주세요.");
				return;
			}
			
			var appPhone = $("#appPhone01").val() + $("#appPhone02").val() + $("#appPhone03").val();
			$("#smsPhone").val(appPhone);
			
			$.ajax({
				  'type': 'POST'
				, data : $("#appFrm").serialize()
		        , 'url': '/medical/smsAuthCheckAjax.do'
				, 'success' : function(data) {
					
					if (data.resultCode == "OK") {
						$("#smsAuthNumber").val(data.returnSMSNumber);
						alert("인증번호가 전송되었습니다.");
						$("#authText").text("");
					} else {
						alert(data.resultMsg);
					}

				}
				, 'error' : function( x,e ){
	                if(x.status==0){                
	                    alert('You are offline!!\n Please Check Your Network.');                
	                }else if(x.status==404){                
	                    alert('Requested URL not found.');                
	                }else if(x.status==500){                
	                    alert('Internel Server Error.');                
	                }else if(e=='parsererror'){                
	                    alert('Error.nParsing JSON Request failed.');                
	                }else if(e=='timeout'){                
	                    alert('Request Time out.');                
	                }else {                
	                    alert('Unknow Error.n'+x.responseText);                
	                }
				}
			});
			
		}
		
		// SMS 인증번호 받기 - OCS - 인증 확인
		function fn_smsAuthCheckConfirm() {
			
			if ($.trim($("#smsAuthNumber").val()) == "") {
				alert("인증요청을 먼저 해 주세요.");
				return;
			}
			
			if ($.trim($("#phoneAuthNumber").val()) == "") {
				alert("인증 확인 번호를 입력해주세요.");
				return;
			}
			
			$.ajax({
				  'type': 'POST'
				, 'data' : $("#appFrm").serialize()
		        , 'url': '/medical/smsAuthCheckConfirmAjax.do'
				, 'success' : function(data) {
					
					if (data.resultCode == "OK") {
						
						alert("인증되었습니다.");
						
						$("#phoneAuthCheckBtn01").hide();
						$("#phoneAuthCheckBtn02").hide();
						
						$("#checkValue").val(data.checkValue);

						//document.getElementById("appPhone01").readOnly = true;
						document.getElementById("appPhone02").readOnly = true;
						document.getElementById("appPhone03").readOnly = true;
						
						$("#authText").text("");
						
						document.getElementById("phoneAuthNumber").readOnly = true;
						
					} else {
						alert(data.resultMsg);
					}

				}
				, 'error' : function( x,e ){
	                if(x.status==0){                
	                    alert('You are offline!!\n Please Check Your Network.');                
	                }else if(x.status==404){                
	                    alert('Requested URL not found.');                
	                }else if(x.status==500){                
	                    alert('Internel Server Error.');                
	                }else if(e=='parsererror'){                
	                    alert('Error.nParsing JSON Request failed.');                
	                }else if(e=='timeout'){                
	                    alert('Request Time out.');                
	                }else {                
	                    alert('Unknow Error.n'+x.responseText);                
	                }
				}
			});
			
		}
		
		// 실명인증
		function fn_ncCheck(formId, callType) {
			
			$.ajax({
				  'type': 'POST'
				, async: false // ture: 비동기, false: 동기
				, 'data' : $("#" + formId).serialize()
		        , 'url': '/medical/nc_Ajax.do'
				, 'success' : function(data) {
					
					alert(data.resultMsg);
					//alert(data.resultCode + " / " + data.resultMsg);
					
					if (data.resultCode == "OK") {
						
						if (callType == "A") {
							$("#patientNameSpan").text($.trim($("#patientName").val()));
							$("#popDe_real_01").css("display", "block");
						} else if (callType == "B") {
							var appPhone = $("#appPhone01").val() + "-" + $("#appPhone02").val() + "-" + $("#appPhone03").val();
							$("#appPhoneSpan").text(appPhone);
							$("#patientNameSpan").text($.trim($("#patientName").val()));
							
							$("#popDe_real_01").css("display", "block");
						} else if (callType == "C") {
							$('#appFrm').attr('action', '/medical/applicationMngList.do');
							$('#appFrm').submit();
						}
						
						$("#checkUserKey").val(data.checkUserKey);
						
					}
				}
				,'error' : function( x,e ){
	                if(x.status==0){                
	                    alert('You are offline!!\n Please Check Your Network.');                
	                }else if(x.status==404){                
	                    alert('Requested URL not found.');                
	                }else if(x.status==500){                
	                    alert('Internel Server Error.');                
	                }else if(e=='parsererror'){                
	                    alert('Error.nParsing JSON Request failed.');                
	                }else if(e=='timeout'){                
	                    alert('Request Time out.');                
	                }else {                
	                    alert('Unknow Error.n'+x.responseText);                
	                }
				}
			});
			
		}
	