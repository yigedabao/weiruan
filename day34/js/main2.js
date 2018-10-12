//配置模块文件并重命名
requirejs.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"vd" : "validate"
	}
})

//调用模块功能
requirejs(["jquery","vd"],function($,vd){
	//$("body").css("background","teal");
	//具体验证功能  操作页面元素 调用底层具体功能
	$("form").submit(function(){
		if( flagName ){
			return true;
		}else{
			return false;
		}
	})
	//为每一个验证元素添加失去焦点事件
	//验证用户名
	var flagName = null;
	$("#uname").blur(function(){
		var strName = $(this).val();
		if( vd.checkName( strName ) ){
			$("#s1").html( "正确" );
			flagName = true;
		}else{
			$("#s1").html("由3--8个字母或数字或下划线组成");
			flagName = false;
		}
	})
	
	var flagPwd = null;
	$("#upwd").blur(function(){
		
	})
})
 