//自定义模块
define(function(){
	//模块暴露  返回对象
	return {
		add : function(arr){ //计算数组中所有数的和
			return  eval( arr.join("+")	);
		},
		max : function(arr){ //计算数组中的最大值
			return Math.max.apply(null,arr);
		}
	}
})
