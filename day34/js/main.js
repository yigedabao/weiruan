//配置模块文件 并重命名
requirejs.config({
	paths:{
		"jquery" : "jquery-1.11.1",
		"cm":"common"
	}
})
//调用上面引入的模块功能
requirejs(["jquery","cm"],function($,cmObj){//回调函数中的参数 指向了依赖的模块
	//直接操作页面元素   调用jquery中的所有的功能
	$("body").css("background","teal");
	var res = cmObj.add([1,2,3,4,5]);
	alert( res );
})
