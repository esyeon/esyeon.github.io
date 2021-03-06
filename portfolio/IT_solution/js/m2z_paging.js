var PagingUtil = function(){
	this.curPage = 1;
	this.pageSize = 10;
	this.blockSize = 10;
	this.totalRecord = 10;
	this.firstRow = 0;
	this.lastRow = 0;
	this.totalPage = 1;
	this.firstPage = 1;
	this.lastPage = 1;
	this.descNo = 1;
	this.imageRoot = '';
	this.move_url = '';
	this.href_str = '';
	this.pagingAreaId = 'paging';
	this.callScriptFunc = 'movePaging';
};
/*
 * pageSize : 페이징 숫자 표시 갯수
 * blockSize : 한페이지에 노출되는 게시물 수
 * */
PagingUtil.prototype = {
	initPaging : function(curPage , pageSize, blockSize , totalRecord , pagingAreaId , callScriptFunc){
		this.curPage = curPage;
		this.pageSize = pageSize;
		this.blockSize = blockSize;
		this.totalRecord = totalRecord;
		this.firstRow = ((parseInt(this.curPage)*parseInt(this.pageSize))-parseInt(this.pageSize))+1;
		this.lastRow = parseInt(this.firstRow) + (parseInt(this.pageSize) -1);
		
		if(this.lastRow>this.totalRecord) this.lastRow = this.totalRecord;
		//this.totalPage = parseInt(this.totalRecord/this.pageSize);
		this.totalPage = Math.ceil(parseInt(this.totalRecord)/parseInt(this.blockSize));
		
		//this.firstPage = parseInt(this.curPage)-((parseInt(this.curPage)-1)%parseInt(this.blockSize));
		this.firstPage = parseInt(this.curPage)-((parseInt(this.curPage)-1)%parseInt(this.pageSize));
		this.lastPage  = parseInt(this.firstPage) + (parseInt(this.pageSize) -1);
		 
		if(this.lastPage > this.totalPage) this.lastPage = this.totalPage;
		
		this.descNo = parseInt(this.totalRecord) - (parseInt(this.curPage)-1)*parseInt(this.pageSize);
		this.pagingAreaId = pagingAreaId;
		this.callScriptFunc = callScriptFunc;
	},
	
	getMoveBlockStrHref : function(){
		var userScriptFunc = this.callScriptFunc;
		getMoveBlockStrDefaultHref = function( flag , imgOption , movePage){
			var href_str = "";
			 if(flag==-2){
				 href_str +="<a href=javaScript:"+userScriptFunc+"('"+movePage+"'); class='first'>처음";
			 }else if(flag==-1){
				 href_str +="<a href=javaScript:"+userScriptFunc+"('"+movePage+"'); class='prev'>이전";
			 }else if(flag==1){
				 href_str +="<a href=javaScript:"+userScriptFunc+"('"+movePage+"'); class='next'>다음";
			 }else if(flag==2){
				 href_str +="<a href=javaScript:"+userScriptFunc+"('"+movePage+"'); class='last'>마지막";
			 }
			 href_str +="</a>";
			 return href_str;
		};
		
		var href = '';
		var movePage = this.curPage;
		if(this.curPage>this.blockSize){
			 movePage = 1;
			 href += getMoveBlockStrDefaultHref( -2, "",  movePage );
		 }else{
			 href += "<a href='javaScript:"+userScriptFunc+"(\"1\");' class='first'>처음</a>";
		 }
		 if(this.curPage>1){
			 /*movePage = this.firstPage - this.blockSize;
			 if(this.firstPage==1){
				 movePage = 1;
			 }*/
			 movePage = this.curPage - 1
			 href += getMoveBlockStrDefaultHref( -1, "",  movePage );
		 }else{
			 href += "<a href='#none' class='prev'>이전</a>";
		 }
		 
		 href += '<ul>';
		 if(this.lastPage<1){
			 href += "<li><strong>1</strong></li>";
		 }else{
			 for(var i=this.firstPage;i<=this.lastPage;i++){
				 if(this.curPage == i) {
					 href += "<li><strong>"+i+"</strong></li>";
				 } else {
					 href += "<li><a href='javaScript:"+userScriptFunc+"(\""+i+"\");'>" + i + "</a></li>";
				 }
			 }
		 }
		 href += '</ul>';
		
		 if(this.curPage<this.totalPage){
			 /*movePage = this.lastPage + 1 ;*/
			 movePage = Number(this.curPage) + 1; 
			 /*if(this.lastPage==this.totalPage){
				 movePage = this.lastPage;
			 }*/
			 
			 href += getMoveBlockStrDefaultHref( 1, "",  movePage );
			 
			 if(this.lastPage<this.totalPage){
				movePage = this.totalPage ;
				href += getMoveBlockStrDefaultHref( 2, "",  movePage );
			 }else{
				href +=  "<a class='last' href='#none'>마지막</a>";
			 }
		 }else{
			 href +=  "<a href='#none' class='next'>다음</a>";
			 href +=  "<a href='#none' class='last'>마지막</a>";
		 }
		 
		 href += '';
		 
		 $('#'+this.pagingAreaId).html(href);
	}
};