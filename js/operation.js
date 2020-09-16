$(function() {
	$(".header-wrap").load("public/header.html", function() {
		$(".nav-box .order-drop .order-drop-con a").css("background-image", "url(images/arrow-r.png)");
		$(".nav li").eq(2).find("a").addClass("cur");
	});
	var n = new Swiper(".warehousing-tab-con", {
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
	e = $(".warehousing-tab li").click(function() {
		var i = $(this);
		idx = e.index(this), e.find("a").removeClass("cur"), i.find("a").addClass("cur");
		try {
			swiperSlideTo(n, idx, 600)
		} catch(i) {
			n.swipeTo(idx, 600)
		}
	})
})