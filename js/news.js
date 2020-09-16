$(function(){
	$(".header-wrap").load("public/header.html",function(){
		$(".nav-box .order-drop .order-drop-con a").css("background-image","url(images/arrow-r.png)");
	});
	
	$("#newsList").load("news/list-3.html");
	//getHotList(1) ;
	
})
/*function getNewsList(__id__) {
    $.get("news/list-3-" + __id__ + ".html", function (data, status) {
        $("#newsList").html(data);
    });
}
function getHotList(__id__) {
	$.ajax({
		type: "POST",
	 	url: 'news/list-3-' + __id__ + '.html',
	 	dataType: "text",
	 	data: {
			"isHot": 1
	 	},
	 	success: function (data, textStatus) {
		 $("#hotList").html(data);
	 	},
	});
}*/