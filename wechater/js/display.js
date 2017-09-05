$(function(){

	/*  先让点赞和评论区  都隐藏   */
	$(".good").hide();
	
	/* 点击事件 */
	$(".share").click(function(){
		var control = $(this).find(".good");
		$(control).toggle(100)
	});
	
	$(".more-mont").hide();
	
	/* 点击事件 */
	$(".more").click(function(){
		var control = $(this).find(".more-mont");
		$(control).toggle(100)
	});
	$(".yuan").click(function(){
		var control = $(this).find(".chat-more");
		$(control).toggle(100)
	});

});

