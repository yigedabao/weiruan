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