$(function() {
	$(".header-wrap").load("public/header.html", function() {
		$(".nav-box .order-drop .order-drop-con a").css("background-image", "url(images/arrow-r.png)");
		$(".nav li").eq(3).find("a").addClass("cur");
	});
	var e = new Swiper(".S-hexagon-con", {
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
	o = $(".S-hexagon-nav li").click(function() {
		var i = $(this);
		idx = o.index(this), i.addClass("cur").siblings().removeClass("cur"), swiperSlideTo(e, idx, 600)
	}),
	n = $(".C-list li").click(function() {
		n.index(this);
		var i = $(this);
		ModalHelper.afterOpen();
		var e = i.data("imgurl");
		$(".J-honor-pop .pop-honor-img").html('<img src="' + e + '" id="popImg" />'), $("#popTil").html(i.data("poptil")), $(".pop-bg").fadeIn(), $(".pop-box").addClass("active")
	});
	$("body").on("click", ".pop-bg,.close-pop", function() {
		ModalHelper.beforeClose(), $(".pop-box").removeClass("active"), $(".pop-bg").fadeOut(1e3)
	})
})