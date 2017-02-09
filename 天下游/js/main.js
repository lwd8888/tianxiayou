/*loadingjpg.js*/
;(function() {
	var $img = $("img")
	$img.lazyload({
		placeholder: "img/noimage.jpg",
		effect: "fadeIn",
		event: "sporty",
		failurelimit: 10,
		threshold: 200
	});
	$(window).bind("load", function() {
		var timeout = setTimeout(function() {
			$("img").trigger("sporty")
		}, 2000);
	});
})()
/*banner.js*/
;(function() {
	$(".tu li").first().show().siblings().hide();
	$(".shu li").first().addClass("active");
	$(".shu li").hover(function() {
			$(this).addClass("active").siblings().removeClass("active");
			var index = $(this).index();
			i = index;
			$(".tu li").eq(index).fadeIn().siblings().fadeOut();
		})
		//左边函数 左边--
	function movel() {
		i--;
		if(i == -1) {
			i = 4;
		}
		shuli();
		tuli()
	}

	function shuli() {
		$(".shu li").eq(i).addClass("active").siblings().removeClass("active");
	}

	function tuli() {
		$(".tu li").eq(i).fadeIn().siblings().fadeOut();
	}
	//动画函数  右边++
	var i = 0;
	var t = setInterval(move, 2500);

	function move() {
		i++;
		if(i == 5) {
			i = 0;
		}
		shuli();
		tuli()
	}
	//悬浮到out停动画
	$(".out").hover(function() {
			clearInterval(t);
		}, function() {
			t = setInterval(move, 2500);
		})
		//右边按钮
	$(".right").click(function() {
			move();
		})
		//左边按钮
	$(".left").click(function() {
		movel();
	})
})()
/*ld_left.js*/
;(function() {
	var i = 0;
	var index;
	$(" .ld_left ul li").hover(function() {
		$(this).find("a").stop().animate({
			left: "70px"
		}, 200);
		$(this).find("span").stop().animate({
			left: "5px"
		}, 200);
		$(this).addClass('red');
		index = $(this).index();
		$(this).parents(".ld_left").next().find(".it_r").eq(index).show();
	}, function() {
		index = $(this).index();
		$(this).find("a").stop().animate({
			left: "65px"
		}, 200);
		$(this).find("span").stop().animate({
			left: "0px"
		}, 200);
		$(this).removeClass('red');
		$(this).parents(".ld_left").next().find(".it_r").eq(index).hide();
	});
	$(" .ld_left").hover(function() {
		$(this).next().show();
		$(this).next().stop().animate({
			left: '230'
		}, 200);
		$(".int").hover(function() {
			i = index;
			var $that = $(" .ld_left ul li");
			$that.eq(i).addClass('red');
			$that.eq(index).find("a").stop().animate({
				left: "70px"
			}, 200);
			$that.eq(index).find("a").addClass('black')
			$that.eq(index).find("span").stop().animate({
				left: "5px"
			}, 200);
			$(this).show();
			$(this).stop().animate({
				left: '230'
			}, 200);
			$(this).find(".it_r").eq(i).show();
		}, function() {
			var $that = $(" .ld_left ul li");
			$(this).hide();
			$(this).stop().animate({
				left: '230'
			}, 200);
			$(this).find(".it_r").eq(i).hide();
			$that.eq(i).removeClass('red');
			$that.eq(index).find("a").stop().animate({
				left: "65px"
			}, 200);
			$that.eq(index).find("a").removeClass('black')
			$that.eq(index).find("span").stop().animate({
				left: "0px"
			}, 200);
		})
	}, function() {
		$(this).next().stop().animate({
			left: '225px'
		}, 200);
		$(this).next().hide();
	})
})()

/*sousou.js*/
;(function() {
	$(".seaImg").click(function(e) {
		$(this).hide();
		$(".search").animate({
			width: '230px'
		}, 200)
		e.stopPropagation();
	})
	$("input.seaTxt").focus(function(e) {
		$("label.txt").hide()
	})
	$("input.seaTxt").click(function(e) {
		e.stopPropagation();
	})
	$("label.txt").click(function(e) {
		e.stopPropagation();
	})
	$(document).click(function() {
		$(".search").animate({
			width: '0px'
		}, 200, function() {
			$(".seaImg").fadeIn();
			$("input.seaTxt").val("");
			$("label.txt").show();
		})
	})
})()
/*louti.js*/
;(function() {
	$("#loutinav ul li").not(".last").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	})
	var mark = 1;
	$("#loutinav ul li").not(".last").click(function() {
		mark = 2;
		$("#loutinav ul li").find("span").removeClass("active");
		$(this).find("span").addClass("active");

		var $index = $(this).index();
		var $top = $("#ma .louti").eq($index).offset().top - 100;
		$("body,html").stop(true).animate({
			scrollTop: $top
		}, 500, function() {
			mark = 1;
		})
	})
	$(window).scroll(function() {
		var gg = $(".main").offset().left - $("#loutinav").width();
		if(mark == 1) {
			var $t = $(this).scrollTop();
			if($t > 410) {
				$("#loutinav").show();
				$("#loutinav").css({
					"left": gg - 5
				})
			} else {
				$("#loutinav").hide();
			}
			var $obj = $("#ma .louti");
			$obj.each(function() {
				var $index = $(this).index();
				var $height = $obj.eq($index).offset().top + $(this).height() / 2;
				//				document.title=$t+"--"+$height;
				if($t < $height) {
					$("#loutinav ul li").find("span").removeClass("active");
					$("#loutinav ul li").eq($index).find("span").addClass("active");
					return false;
				}
			})
		}
	})
	$("#loutinav ul li.last").click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 200, function() {
			mark = 1;
		})
	})
})()
/*temai.js*/
;(function() {
	$(".temai").each(function() {
		$(this).find("ul li").first().addClass("active")
	})
	$(".louti").each(function() {
		$(this).find(".dapai").first().show();
	})
	$(".temai").each(function() {
		var $li = $(this).find("ul li");
		var dapai = $(this).next().find(".dapai")
		var $this = $(this);
		$li.hover(function() {
			$(this).addClass("active").siblings().removeClass("active")
			var index = $(this).index();

			dapai.eq(index).show().siblings().hide()

		})
	})
})()
/*boxDom.js*/
;(function($) {
	$.fn.box = function(options) {
		var defaults = {
			imgDom: ".imgDom",
			btnleft: ".bt_l",
			btnright: ".bt_r",
			li: ".imgDom>li",
		}
		var options = $.extend(defaults, options);
		this.each(function() {
			var _this = $(this);
			var index = 0;
			var width = _this.width();
			var len = _this.find(options.li).length;
			var imd = _this.find(options.imgDom);

			function mm(dd) {
				dd.stop().animate({
					left: -width * index
				}, 1000)
			}
			_this.siblings(options.btnleft).on('click', function() {
				index++;
				if(index > len - 1) {
					index = 0;
				}
				mm(imd)
			})
			_this.siblings(options.btnright).on('click', function() {
				index--;
				if(index < 0) {
					index = len - 1;
				}
				mm(imd)
			})
		})
		return this;
	}
	$(".boxDom").box()
})(jQuery)