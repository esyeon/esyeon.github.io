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
		this.firstPage = parseInt(this.curPage)-((parseInt(this.curPage)-1)%parseInt(this.blockSize)); 
		//this.lastPage = parseInt(this.firstPage) + (parseInt(this.blockSize) -1);
		this.lastPage = parseInt(this.firstPage) + (parseInt(this.pageSize) -1);
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
				 href_str +="<a href=javaScript:"+userScriptFunc+"('"+movePage+"'); class='first'><img src='/ibuilder/template/theme_skin/theme100/images/common/paging_first.png' alt='처음으로' />";
			 }else if(flag==-1){
				 href_str +="<a href=javaScript:"+userScriptFunc+"('"+movePage+"'); class='prev'><img src='/ibuilder/template/theme_skin/theme100/images/common/paging_prev.png' alt='이전' />";
			 }else if(flag==1){
				 href_str +="<a href=javaScript:"+userScriptFunc+"('"+movePage+"'); class='next'><img src='/ibuilder/template/theme_skin/theme100/images/common/paging_next.png' alt='다음' />";
			 }else if(flag==2){
				 href_str +="<a href=javaScript:"+userScriptFunc+"('"+movePage+"'); class='last'><img src='/ibuilder/template/theme_skin/theme100/images/common/paging_last.png' alt='마지막으로' />";
			 }
			 href_str +="</a>";
			 return href_str;
		};
		
		//var href = '<ul>';
		var href = '';
		var movePage = this.curPage;
		if(this.curPage>this.blockSize){
			 movePage = 1;
			 href += getMoveBlockStrDefaultHref( -2, "",  movePage );
		 }else{
			 href += "<a href='#none' class='first'><img src='/ibuilder/template/theme_skin/theme100/images/common/paging_first.png' alt='처음으로' /></a>";
		 }
		 if(this.curPage>1){
			 movePage = this.firstPage - this.blockSize;
			 if(this.firstPage==1){
				 movePage = 1;
			 }
			 href += getMoveBlockStrDefaultHref( -1, "",  movePage );
		 }else{
			 href += "<a href='#none' class='prev'><img src='/ibuilder/template/theme_skin/theme100/images/common/paging_prev.png' alt='이전' /></a>";
		 }
		 
		 //href += '<ul>';
		 if(this.lastPage<1){
			 href += "<a href='#;' class='num active'>1</a>";
		 }else{
			 for(var i=this.firstPage;i<=this.lastPage;i++){
				 if(this.curPage == i) {
					 href += "<a href='#;' class='num active'>"+i+"</a>";
				 } else {
					 href += "<a href='javaScript:"+userScriptFunc+"(\""+i+"\");' class='num'>" + i + "</a>";
				 }
			 }
		 }
		 //href += '</ul>';
		
		 if(this.curPage<this.totalPage){
			 movePage = this.lastPage + 1 ;
			 if(this.lastPage==this.totalPage){
				 movePage = this.lastPage;
			 }
			 
			 href += getMoveBlockStrDefaultHref( 1, "",  movePage );
			 
			 if(this.lastPage<this.totalPage){
				movePage = this.totalPage ;
				href += getMoveBlockStrDefaultHref( 2, "",  movePage );
			 }else{
				href +=  "<a class='last' href='#none'><img src='/ibuilder/template/theme_skin/theme100/images/common/paging_last.png' alt='마지막으로' /></a>";
			 }
		 }else{
			 href +=  "<a href='#none' class='next'><img src='/ibuilder/template/theme_skin/theme100/images/common/paging_next.png' alt='다음' /></a>";
			 href +=  "<a href='#none' class='last'><img src='/ibuilder/template/theme_skin/theme100/images/common/paging_last.png' alt='마지막으로' /></a>";
		 }
		 
		 //href += '</ul>';
		 
		 $('#'+this.pagingAreaId).html(href);
	}
};