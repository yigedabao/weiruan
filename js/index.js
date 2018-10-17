

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
$("#banner").find("span").mousedown(function() {
	$(this).css("box-shadow", "3px 3px 10px black inset");
})
$("#banner").find("span").mouseup(function() {
	$(this).css("box-shadow", "3px 3px 10px black");
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
	ciricle++;
	if(ciricle > $("#banner ol li").length - 1) {
		ciricle = 0;
	}
	for(var i = 0; i < $("#banner ol li").length; i++) {
		$("#banner ol li")[i].className = "";
	}
	$("#banner ol li")[ciricle].className = "current";
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
$(".close").click(function() {
	$("#zhezhao").css("display", "none");
})
$(".close").mouseenter(function() {
	$(this).css("cursor", "pointer");
})
//遮罩弹出
$("#subscription_btn").click(function() {
	$("#zhezhao").css("display", "block");
})
//表单正则验证
function ze(obj, z) {
	$(".dy_btn").click(function() {
		var re = z;
		var res = obj.val();
		if(!(re.test(res))) {
			$(".loader").html("请检查您的资料填写格式");
			obj.css("border-color", "red");
		} else {
			$(".loader").html("");
			obj.css("border-color", "#cccccc");
			location.href = "https://www.microsoftstore.com.cn/successfully-subscibed";
		}
	})
}

ze($(".name"), /\w/);
ze($(".tel"), /1(3|5|7|8)[\d]{9}/);
ze($(".email"), /^\w+@\w+\.[a-z]{2,3}(\.[a-z]{2,3})?$/);




