var win = {
		w: $(window).width(),
		h: $(window).height()
	},
	ModalHelper = function(e) {
		var i;
		return {
			afterOpen: function() {
				i = document.scrollingElement.scrollTop, document.body.classList.add(e), document.body.style.top = -i + "px"
			},
			beforeClose: function() {
				document.body.classList.remove(e), document.scrollingElement.scrollTop = i
			}
		}
	}("modal-open");

function swiperSlideTo(i, t, a) {
	try {
		i.slideTo(t, a)
	} catch(e) {
		i.swipeTo(t, a)
	}
}

$(function() {
	//引用公共部分
	$(".footer-wrap").load("public/footer.html", function() {
		$(".footer .wechat-code img").attr('src', 'images/201905181322149118.png')
	});
	$(".copyright").load("public/copyright.html");
	$("#sm-modal").load("public/GlobalMenu.html");
	$(".sitefloat-bar").load("public/ToTop.html");
	//swiper banner 响应式
	$(window).resize(function() {
		var winWid = $(window).width(),
			winHei = $(window).height(),
			t = 768 < winWid ? 512 : parseInt(winWid / 3 / 459 * 512);
		banner_h = 768 < winWid ? 500 < winHei ? winHei : 500 : .8 * winWid, $("#swiper1,#swiper1 .swiper-container.banner-swiper,.video-bg").height(banner_h), 0 < $(".hx-box-cont").length && $(".hx-box-cont,.hx-box-cont li").height(t)
	});

	//主页面的滚动条动画效果
	+
	function() {
		var e = $(window),
			n = .8 * e.height();
		var lineGrps = $(".line-group,.ani-group");
		lineGrps.length && e.scroll(function() {
			var a = e.scrollTop();
			lineGrps.each(function(e) {
				var i = $(this),
					t = i.offset().top - a;
				t < n && !i.hasClass("active") ? i.addClass("active") : n <= t && i.hasClass("active") && i.removeClass("active")
			})
		});
		var i = $(".animated.scroll"),
			s = "ani-hide",
			t = function() {
				var n = e.scrollTop(),
					o = .8 * e.height();
				i.each(function() {
					var e = $(this),
						i = e.offset().top - n,
						t = e.data("animated-in") + " ",
						a = e.data("animated-out") + " ";
					i < o ? e.hasClass(s) && e.removeClass(a + s).addClass(t) : e.hasClass(s) || e.removeClass(t).addClass(a + s)
				})
			};
		i.length && (e.scroll(t), t())
	}()

	/*PC 多语种切换  */
	$(".header-wrap .language").click(function() {
		$(this).addClass("opened");
	}).mouseleave(function() {
		$(".language").removeClass("opened")
	})

	$(window).scroll(function() {
		/*导航*/
		var $winScrolltop = $(window).scrollTop();
		var t, a = !1;
		if(0 < $("#subNavFixd").length && (a = !0), a) var $subNavOffsetTop = $("#subNavFixd").offset().top;
		120 < $winScrolltop ? $(".header-wrap").addClass("top-white-bg") : $(".header-wrap").removeClass("top-white-bg");
		t = $winScrolltop > $subNavOffsetTop - $(".header-wrap").height();
		t ? $(".header-wrap").addClass("top-hide") : $(".header-wrap").removeClass("top-hide")
		/*第二屏辅助导航*/
		880 < $winScrolltop ? ($("#subNavFixd").addClass("nav-fxed"), $(".J-cont-0").addClass("mt90")) : ($("#subNavFixd").removeClass("nav-fxed"), $(".J-cont-0").removeClass("mt90"));
		/*toTop*/
		$winScrolltop > win.h ? $(".sitefloat-bar").addClass("show") : $(".sitefloat-bar").removeClass("show");
	});
	$("body,html").on("click", "#J-return-btn", function() {
		var e = $(window).scrollTop(),
			i = parseInt(e / 2);
		//console.log(e,i);
		$("body,html").animate({
			scrollTop: 0
		}, i, "swing");
	})
	/*全局菜单弹出框*/
	var l = "",
		r = "";
	setTimeout(function() {
		$(".menu-btn").click(function() {
			clearTimeout(l), $(".siteMap-wrap").addClass("on");
			r = setTimeout(function() {
				ModalHelper.afterOpen()
			}, 2e3);
			$("body,html").css({
				"overflow-y": "hidden"
			});
		});
	},1000)

	setTimeout(function() {
		$(".btn-smClose").click(function() {
			clearTimeout(r), $(".siteMap-wrap").removeClass("on");
			l = setTimeout(function() {
				ModalHelper.beforeClose()
			}, 2e3);
			$("body,html").css({
				"overflow-y": "auto"
			});
		})
	}, 500)

	/*第二屏辅助导航*/
	$("#subNavFixd .mob-item-menu").click(function() {
		var h = 0,
			$drop = $("#subNavFixd .mob-item-drop");
		$drop.hasClass("opened") ? ($drop.removeClass("opened"), h = 1) : ($drop.addClass("opened"), h = 0);
	})
	/*锚记链接*/
	var d = $(".sub-nav a").click(function(e) {
		var i = $(this),
			t = d.index(this),
			a = $(".J-cont-" + t).offset().top,
			n = $(window).scrollTop();
		distance = n < a ? a - n : n - a, duration = parseInt(distance / 2.5),
			$(this).addClass("cur ").siblings().removeClass("cur "),
			$("html,body").animate({
				scrollTop: a
			}, duration, "swing")
	})
});

