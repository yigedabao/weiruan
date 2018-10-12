//自定义模块功能
define(function(){
	return {
		checkName :function(strName){
			var reg = /^\w{3,8}$/;
			if( reg.test( strName ) ){
				return true;
			}else{
				return false;
			}
		},
		checkPwd : function(strPwd){
			var reg = /^.{6,}$/;
			if( reg.test( strPwd ) ){
				return true;
			}else{
				return false;
			}
		},
		checkQpwd : function(oldPwd,newPwd){
			if( oldPwd === newPwd ){
				return true;
			}else{
				return false;
			}
		}
	}
})