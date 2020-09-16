$(function(){
	//swiper banner 初始化
	var mySwiper = new Swiper ('.banner-swiper', {
	    effect : 'fade',
	    loop: true,
	    autoplay: {
		  delay:26e3,
		},
	    pagination: {
	      el: '.swiper-pagination',
		  clickable :true,
	    },
	    //swiperAnimate初始化
	    on: {
			init: function() {
				swiperAnimateCache(this);//隐藏动画元素 
				swiperAnimate(this);	//初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this);	//每个slide切换结束时也运行当前slide动画
			},
			sliderMove: function() {
				this.touches.diff;
			}
		}
	});
	//swiper banner	分页
	var $pause = $("<span class='control-auto pause-btn'></span>");
	$("#swiper1 .swiper-pagination").append($pause);
	$pause.click(function(){
		$pause.hasClass("pause-btn") ? ($pause.addClass('play-btn').removeClass('pause-btn'),mySwiper.autoplay.stop()) : ($pause.addClass('pause-btn').removeClass('play-btn'),mySwiper.autoplay.start());
	});
	//swiper banner	新闻滚动模块
	var swiper2 = new Swiper("#swiper2", {
		direction: "vertical",
		init: false,
		watchOverflow:true,
		noSwiping: !0,
		loop:true,
		speed: 1e3,
		autoplay: {
			delay: 3e3,
			disableOnInteraction: false
		}
	});
	$("#swiper2").mouseover(function() {
		swiper2.autoplay.stop()
	}).mouseleave(function() {
		swiper2.autoplay.start()
	});
	//手机端新闻滚动模块
	var swiper3 = new Swiper("#swiper3", {
		direction: "vertical",
		init:false,
		watchOverflow: true,
		iOSEdgeSwipeDetection:true,
		allowTouchMove:false,
		passiveListeners:false,
		noSwiping:true,
		loop:true,
		speed: 1e3,
		autoplay: {
			delay: 3e3,
			disableOnInteraction:false
		}
	});

	function n() {
		768 < $(window).width() ? (swiper2.update(), swiper2.init()) : (swiper3.update(), swiper3.init());
	}
	n(), $(window).resize(n);
})
