$(function(){
	var index=0;
	var $imgrolls=$("#jnImageroll div a");
	$imgrolls.css('opacity','0.7');
	var len=$imgrolls.length;
	var adtimer=null;
	$imgrolls.mouseover(function(){
		index=$imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();
	$("#jnImageroll").hover(function(){
		if(adtimer){
			clearInterval(adtimer);
		}
	},function(){
		adtimer=setInterval(function(){
			showImg(index);
			index++;
			if(index==len){index=0;}
		},2000)
	}).trigger("mouseleave");
})
function showImg(index){
	var $rollobj=$("jnImageroll");
	var $rolllist=$rollobj.find("div a");
	var newhref=$rolllist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href",newhref).find("img").eq(index).stop(true,true).fadeIn()
	.siblings().fadeOut();
	$("#jnImageroll div a").removeClass("chos").css('opacity','0.7').eq(index).addClass("chos").css('opacity','1')
}
