$(function(){
$("ul.rating li").click(function(){
	var title=$(this).find("a").attr("title");
	alert("您给此商品的评分是："+title);
	var cl=$(this).attr("class")
	var sl=$(this).prevAll().attr("class")
	
	$(this).addClass(cl+"s");
	$(this).prevAll().addClass(sl+"s");
})
})