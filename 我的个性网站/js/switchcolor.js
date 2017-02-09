$(function(){
$(".color_change ul li img").click(function(){
	$(this).addClass("hhover").parent().siblings().find("img").removeClass("hhover");
	var alt=$(this).attr("alt");
	$(".color_change strong").text(alt);
	var index=$(this).index(this);
	var jqimg=$(".jqzoom").find("img").attr("jqimg");
	var i=jqimg.lastIndexOf("/");
	var unit=jqimg.substring(i);
	var qian=jqimg.substring(0,i);
	var i1=unit.indexOf("_");
	var unit1=unit.substring(i1);
	var ys=$(this).eq(index).attr("ys");
	var newjqimg=qian+"/"+ys+unit1;
	$(".jqzoom").find("img").attr("jqimg",newjqimg);
	
	var jqsrc=$(".jqzoom").find("img").attr("src");
	var ii=jqsrc.lastIndexOf("/");
	var unitt=jqsrc.substring(ii);
	var qiann=jqsrc.substring(0,ii);
	var ii1=unit.indexOf("_");
	var unitt1=unitt.substring(ii1);
	var ys=$(this).eq(index).attr("ys");
	var newjqsrc=qiann+"/"+ys+unitt1;
	
	$(".jqzoom").find("img").attr("src",newjqsrc);

})

})