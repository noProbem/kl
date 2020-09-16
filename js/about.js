$(function(){
	$(".header-wrap").load("public/header.html",function(){
		$(".nav-box .order-drop .order-drop-con a").css("background-image","url(images/arrow-r.png)");
		$(".nav li").eq(0).find("a").addClass("cur");
	});
	
	//公司历史
	var imgSwitch = new Swiper(".history-img", {
		direction: "vertical",
		mousewheel: !0,
		speed: 600,
		nested: !0,
		resistanceRatio: 0,
		on: {
			slideChangeTransitionEnd: function() {
				$(".history-control li").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
				console.log(this.activeIndex);
				6 < this.activeIndex ? $(".history-top-logo").addClass("switch") : $(".history-top-logo").removeClass("switch");
			}
		}
	});
	var n = $(".history-control li").click(function() {
		var idx = n.index(this);
		$(this).addClass("active").siblings().removeClass("active");
		swiperSlideTo(imgSwitch, idx, 600);
	});
	//资质荣誉
	var o = new Swiper(".honor-swiper", {
		longSwipesRatio: .2,
		spaceBetween: 20,
		loop: !1,
		on: {
			slideChangeTransitionEnd: function() {
				$(".honor-tab a").eq(this.activeIndex).addClass("active").siblings().removeClass("active")
			}
		}
	});
	//宣传资料&宣传视频
	a = new Swiper(".propaganda-swiper", {
		longSwipesRatio: .2,
		spaceBetween: 20,
		on: {
			slideChangeTransitionEnd: function() {
				$(".propaganda-tab a").eq(this.activeIndex).addClass("active").siblings().removeClass("active")
			}
		}
	}),
	t = $(".propaganda-tab a").click(function() {
		var e = $(this);
		idx = t.index(this), e.addClass("active").siblings().removeClass("active"), swiperSlideTo(a, idx, 600)
	});
})
