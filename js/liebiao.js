//ajax调用json列表清单
$.ajax({
	type: "get",
	url: "../json/lb_1.json",
	async: true,
	success: function(json) {
		var conStr = '';
		for(var i = 0; i < json.length; i++) {
			conStr += `<li>
							<a href="#">
								<h3>${json[i].name}</h3>
								<img src="../img/${json[i].url}"/>
								<p>${json[i].main}<span>立即购买></span></p>
							</a>
						</li>`
			$("#lb_banner_top ul").html(conStr)
		}
	}
});

$.ajax({
	type: "get",
	url: "../json/lb_2.json",
	async: true,
	success: function(json) {
		var conStr = '';
		for(var i = 0; i < json.length; i++) {
			conStr += `<li>
					<a href="#">
						<img src="../img/${json[i].url}"/>
						<div class="box">
							<h3>${json[i].name}</h3>
							<p>${json[i].main}</p>
						</div>
						<span>${json[i].price}</span>
						<div class="lb_star"><img src="../img/stars.png"<i>${json[i].num}</i></div>
					</a>
				</li>`
			$("#lb_main").find("ul").html(conStr)
		}
	}
});