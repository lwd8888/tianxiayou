$(function(){
	var $li=$("#skin li");
	$li.click(function(){
		switchSkin(this.id)
	})
	var cookie_skin=$.cookie("MyCssSkin")
	if(cookie_skin){
		switchSkin(cookie_skin);
	}
})
function switchSkin(skinName){
	$("#"+skinName).addClass("selected").siblings().removeClass("selected");
	$("#cssfile").attr("href","css/"+skinName+".css")
	$.cookie("MyCssSin",skinName,{path:'/',expires:10});
}
