//吸顶效果
$(window).scroll(function() {
	let sTop = $(window).scrollTop();
	if(sTop > 84) {
		$("#nav_wrap").css("position", "fixed");
		$("#nav_wrap").css("top", "0");
		$("#nav_wrap").css("z-index", "9999");
	} else {
		$("#nav_wrap").css("position", "");
	}
	//回到顶部按钮显示 
	if(sTop > 400) {
		$("#Global_ScrollToTop").css("display", "block");
	} else {
		$("#Global_ScrollToTop").css("display", "none");
	}

})
//点击出现下拉菜单
$("#nav").find('a').eq(1).click(function() {
	$("#yingjian").slideToggle(300);
	$("#ruanjian").slideUp(300);
})
$("#nav").find('a').eq(7).click(function() {
	$("#ruanjian").slideToggle(300);
	$("#yingjian").slideUp(300);
})
//点击回到顶部
$("#Global_ScrollToTop").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 500);
})
//划过事件
$(".a_hover,.nav_right").find('a').hover(function() {
	$(this).css("text-decoration", "underline");
}, function() {
	$(this).css("text-decoration", "none");
})

$("#mainContainer ul").eq(0).find('a').hover(function() {
	$(this).css("text-decoration", "underline");
}, function() {
	$(this).css("text-decoration", "none");
})

//登录
$(".login_border").find("a").click(function() {
	$(".loginContent").toggle(1);
	$(".login_border").toggleClass("login_border_click");
})
$(".login").click(function() {
	location.href = "login.html";
})