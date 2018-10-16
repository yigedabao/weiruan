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


//轮播图
$("#banner").mouseenter(function() {
	$(this).find('span').css("display", "block");
})
$("#banner").mouseleave(function() {
	$(this).find('span').css("display", "none");
})


var index = 0;
var timer = null;
animate();
autoPlay();

$(".button_left").click(function() {
	index--;
	if(index === -1) {
		index = $("#banner ul li").length - 1;
	}
	animate();
	oLaniamte();
})
$(".button_right").click(function() {
	index++;
	if(index === $("#banner ul li").length) {
		index = 0;
	}
	animate();
	oLaniamte();
})
$("#banner").find("span").mousedown(function(){
	$(this).css("box-shadow","3px 3px 10px black inset");
})
$("#banner").find("span").mouseup(function(){
	$(this).css("box-shadow","3px 3px 10px black");
})

function animate() {
	var num = 1115;
	if(index == 0) {
		$("#banner ul").animate({
			left: 0
		});
	} else if(index == $("#banner ul li").length - 1) {
		$("#banner ul").animate({
			left: -num
		});
	} else {
		$("#banner ul").animate({
			left: -(index + 1) * num
		});
	}
}
//console.log($("#banner ol li")[0]);
var ciricle = 0;
function oLaniamte() {
	ciricle ++;
	if(ciricle > $("#banner ol li").length - 1){
		ciricle = 0;
	}
	for(var i = 0; i < $("#banner ol li").length; i++) {
		$("#banner ol li")[i].className="";
	}
	$("#banner ol li")[ciricle].className="current";
}



function autoPlay() {
	timer = setInterval(function() {
		index--;
		if(index === -1) {
			index = $("#banner ul li").length - 1;
		}
		animate();
		oLaniamte();
	}, 5000);
}


//遮罩弹出关闭
//遮罩关闭
$(".close").click(function(){
	$("#zhezhao").css("display","none");
})
$(".close").mouseenter(function(){
	$(this).css("cursor","pointer");
})
//遮罩弹出
$("#subscription_btn").click(function(){
	$("#zhezhao").css("display","block");
})
//表单正则验证
function ze(obj,z){
	$(".dy_btn").click(function(){
		var re = z;
		var res = obj.val();
		if(!(re.test(res))){
			$(".loader").html("请检查您的资料填写格式");
			obj.css("border-color","red");
		}else{
			$(".loader").html("");
			obj.css("border-color","#cccccc");
			location.href="https://www.microsoftstore.com.cn/successfully-subscibed";
		}
	})
}

ze($(".name"),/\w/);
ze($(".tel"),/1(3|5|7|8)[\d]{9}/);
ze($(".email"),/^\w+@\w+\.[a-z]{2,3}(\.[a-z]{2,3})?$/);


//登录
$(".login_border").find("a").click(function(){
	$(".loginContent").toggle(1);
	$(".login_border").toggleClass("login_border_click");
})
$(".login").click(function(){
	location.href = "login.html";
})


//创建账号页面点击转换
$(".create_btn_1").click(function(){
	$(".create_input_1").css("display","none");
	$(".create_input_2").css("display","block");
	$(".create_input_3").css("display","none");
})
$(".create_btn_2").click(function(){
	$(".create_input_1").css("display","none");
	$(".create_input_2").css("display","none");
	$(".create_input_3").css("display","block");
})
$(".create_btn_3").click(function(){
	$(".create_input_1").css("display","block");
	$(".create_input_2").css("display","none");
	$(".create_input_3").css("display","none");
})
