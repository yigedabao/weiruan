//=====================详情页========================
//当前位置划过效果
$("#current_pos").find("a").hover(function() {
	$(this).css("text-decoration", "underline");
}, function() {
	$(this).css("text-decoration", "none");
})
//图片选项卡
$(".small_pic").find("a").click(function() {
	$(this).css("border-bottom", "2px solid #3a9cd7");
	$(this).siblings().css("border-bottom", "0");
})

//放大镜
$(".big_pic").hover(function(){
	$("#eye").css("display","block");
	$("#small_box").css("display","block");
},function(){
	$("#eye").css("display","none");
	$("#small_box").css("display","none");
})




function fdj(index) {
	var oBox = document.getElementById('box');
	var oEye = document.getElementById('eye');
	var oMark = document.getElementById('mark');
	var oSmall = document.getElementById('small_box');
	var oImg = oEye.getElementsByTagName('img')[index];
	oMark.onmousemove = function(evt) {
		let e = evt || window.event;
		let left = e.offsetX - oSmall.offsetWidth / 2;
		let top = e.offsetY - oSmall.offsetHeight / 2;
		if(left <= 0) {
			left = 0;
		} else if(left > oMark.offsetWidth - oSmall.offsetWidth) {
			left = oMark.offsetWidth - oSmall.offsetWidth;
		}
		if(top <= 0) {
			top = 0;
		} else if(top > oMark.offsetHeight - oSmall.offsetHeight) {
			top = oMark.offsetHeight - oSmall.offsetHeight;
		}
		oSmall.style.left = left + 'px';
		oSmall.style.top = top + 'px';

		let pX = left / (oMark.offsetWidth - oSmall.offsetWidth);
		let pY = top / (oMark.offsetHeight - oSmall.offsetHeight);

		oImg.style.left = -pX * (oImg.offsetWidth - oEye.offsetWidth) + 'px';
		oImg.style.top = -pY * (oImg.offsetHeight - oEye.offsetHeight) + 'px';
	}
}

//吸顶效果
$(window).scroll(function() {
	let sTop = $(window).scrollTop();
	if(sTop > 717) {
		$("#stairs").css({"position":"fixed","top":"71px","z-index":"9999"});
	} else {
		$("#stairs").css("position", "");
	}

})
//图片选项卡效果
$minbtn = $(".small_pic a");
$imgs = $(".img");
$img2s = $(".img2");

var flag = true;

$minbtn.click(function(){
	flag = false;
	var index = $(this).index();
	$imgs.eq(index).css("z-index","9");
	$imgs.eq(index).siblings().css("z-index","0");
	$img2s.eq(index).css("z-index","9");
	$img2s.eq(index).siblings().css("z-index","0");
	fdj(index);
})

//楼梯效果
	//楼梯号
	$list = $("#stairs ul li");
	
	//所有的楼层
	$divs = $(".louti");
	
	//定义一个变量控制 滚动条代码的执行
	//假设值为true时  滚动条的代码可以执行
	var flag = true;
	//第一步 ：点击左侧的楼层号  根据下标找到对应的楼层
	$list.click(function(){
		flag = false;
		//获取当前操作的楼层号的下标
		var index = $(this).index();
		
		//根据下标查找对应的楼层  并获取给楼层相对于body顶部的距离  obj.offset().top
		var t = $divs.eq(index).offset().top - 145 + 'px';
		
		//设置页面滚走的距离为 t （当前index对应的楼层相对于body距离）
		$("body,html").animate({ scrollTop:t },1000,function(){
			//动画完成后 将flag的值重新设置为true  滚动条代码可以被触发
			flag = true;
		});
	})
	
	

	

