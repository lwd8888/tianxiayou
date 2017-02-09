$(function(){
	var x=10;
	var y=20;
	var x1=10;
	var y1=20;
	$("#jnNoticeInfo a.tooltip").mouseover(function(e){
		this.myTitle=this.title;
		this.title='';
		var tooltip="<div id='tooltip'>"+this.myTitle+"</div>";
		$("body").append(tooltip);
		$("#tooltip").css({"top":(e.pageY+y)+"px","left":(e.pageX+x)+"px"}).show(fast);
	}).mouseout(function(){
		this.title=this.myTitle;
		$("#tooltip").remove()
	}).mousemove(function(e){
		$("#tooltip").css({"top":(e.pageY+y)+"px","left":(e.pageX+x)+"px"}).show(fast);
	})
	
	$("#jnBrandList a.JS_live").mouseover(function(e){
		this.myTitle1=this.title;
		this.title="";
		var imgTitle1=this.myTitle1?"<br>"+this.myTitle1:"";
		var tooltip1="<div id='tooltip1'><img src='"+this.href+"'alt='产品预览图'>"+imgTitle1+"</div>";
		$("body").append(tooltip1);
		$("#tooltip1").css({
			'position': 'absolute', 
			"top":(e.pageY+y1)+"px",
			"left":(e.pageX+x1)+"px"}).show("fast");}).mouseout(function(){
			this.title=this.myTitle1;
			$("#tooltip1").remove();
			}).mousemove(function(e){
				$("#tooltip1").css({
					'position': 'absolute', 
					"top":(e.pageY+y1)+"px",
					"left":(e.pageX+x1)+"px"
					})
				})
})
