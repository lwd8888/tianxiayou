$(function(){
	$("#jnBrandTab li").click(function(){
		$(this).addClass("chos1").siblings().removeClass("chos1");
		var index=$("#jnBrandTab li").index(this);
		showBrandList(index);
		return false;
	}).eq(0).click();
	function showBrandList(index){
	var rollWidth=$("#jnBrandList").find("li").outerWidth();
	rollWidth=rollWidth*4;
	$("#jnBrandList").stop(true).animate({left:-rollWidth*index},1000)
}
})
