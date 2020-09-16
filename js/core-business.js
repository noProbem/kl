$(function(){
	$(".header-wrap").load("public/header.html",function(){
		$(".nav-box .order-drop .order-drop-con a").css("background-image","url(images/arrow-r.png)");
		$(".nav li").eq(1).find("a").addClass("cur");
	});
	
	var n = new Swiper(".hexagon-con", {
		effect: "fade",
		fadeEffect: {
			crossFade: !0
		},
		noSwiping: !0,
		on: {
			init: function() {
				swiperAnimateCache(this), swiperAnimate(this)
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this)
			}
		}
	}),
	e = $(".hexagon-nav li").click(function() {
		var i = $(this);
		idx = e.index(this), i.addClass("cur").siblings().removeClass("cur"), swiperSlideTo(n, idx, 600)
	})
	
})
