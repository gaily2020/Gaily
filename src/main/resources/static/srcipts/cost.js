function cost() {
	window.location.href = "cost.html";
}

function back() {
	window.location.href = "index.html";
}


// 查询消费总金额
function sum(){
	// 获取请求参数
	var start_date = $("#start_date").val().trim();
	start_date = start_date.replace(/[^0-9]/g, "");
	var end_date = $("#end_date").val().trim();
	end_date = end_date.replace(/[^0-9]/g,"");
	if(start_date == "" | end_date== ""){
		alert("请输入查询的日期区间");
	}
	$.ajax({
		url : path+"/cost/sum.do",
		type : "post",
		data : {"start_date":start_date,"end_date":end_date},
		dataType : "json",
		error : function(){
			alert("查询消费总金额失败!");
		},
		success : function(result){
			if(result.status == 0){
				// 若多次点击查询,需要清空上一次的查询记录
				$("#query_table").empty();
				var sum = result.data;
				sum = sum[0]["totalPrice"];
				var tr = "";
				tr +="<table><thead><tr><th>消费总金额</th></tr></thead><tbody>";
				
				tr +="<tr><td>"+sum+"</td></tr>";
				tr += "</tbody></table>"
				$("#query_table").html(tr);	
				
			}
		}
	});
	
}


// 按照日期查询消费记录
function check() {
	// 获取日期参数
	var start_date = $("#start_date").val().trim();
	start_date = start_date.replace(/[^0-9]/g, "");
	var end_date = $("#end_date").val().trim();
	end_date = end_date.replace(/[^0-9]/g, "");
	if(start_date == "" | end_date== ""){
		alert("请输入查询的日期区间");
	}
	$.ajax({
				url : path + "/cost/check.do",
				type : "post",
				data : {"start_date" : start_date,"end_date" : end_date},
				dataType : "json",
				error : function() {
					alert("查询消费记录失败");
				},
				success : function(result) {
					if (result.status == 0) {
						// 若多次点击查询,需要清空上一次的查询记录
						$("#query_table").empty();
						var cost = result.data;
						var tr = "";
						tr +="<table><thead><tr><th>序号</th><th>日期</th><th>消费原因</th><th>消费金额</th><th>备注信息</th></tr></thead><tbody>";
						for(var i=0;i<cost.length;i++){
							$(this).toggleClass('red'); 
							
							//查看map的KEY，map.key得到value
//							console.log(cost[i]);
							tr +="<tr><td>"+cost[i].id+"</td><td>"+cost[i].DATE
							+"</td><td>"+cost[i].COSTREASON+"</td><td>"+cost[i].price+"</td><td>" +
									'<input type="button" id="edit_btn" value=编辑></input> '+"</td></tr>";
						}
						// 遍历完成后
						tr += "</tbody></table>"
						// 转换成jQuery对象
						var $tr = $(tr);
						// 查询结果显示
						$("#query_table").append($tr);
					}

				}
			});
}

//按照消费原因和日期查询消费记录
function queryCostReason() {
	// 获取日期参数
	var start_date = $("#start_date").val().trim();
	start_date = start_date.replace(/[^0-9]/g, "");
	var end_date = $("#end_date").val().trim();
	end_date = end_date.replace(/[^0-9]/g, "");
	var costReason = $("#costReason").val().trim();
	if(start_date == "" || end_date== "" || costReason ==""){
		alert("请输入查询的日期区间和消费原因");
	}
	$.ajax({
				url : path + "/cost/queryCostReason.do",
				type : "post",
				data : {"start_date" : start_date,"end_date" : end_date,"costReason" : costReason},
				dataType : "json",
				error : function() {
					alert("查询消费记录失败");
				},
				success : function(result) {
					if (result.status == 0) {
						// 若多次点击查询,需要清空上一次的查询记录
						$("#query_table").empty();
						var cost = result.data;
						var tr = "";
						tr +="<table><thead><tr><th>序号</th><th>日期</th><th>消费原因</th><th>消费金额</th><th>备注信息</th></tr></thead><tbody>";
						for(var i=0;i<cost.length;i++){
							$(this).toggleClass('red'); 
							tr +="<tr><td>"+cost[i].id+"</td><td>"+cost[i].date
							+"</td><td>"+cost[i].costReason+"</td><td>"+cost[i].price+"</td><td>" +
									'<input type="button" id="edit_btn" value=编辑></input> '+"</td></tr>";
						}
						// 遍历完成后
						tr += "</tbody></table>"
						// 转换成jQuery对象
						var $tr = $(tr);
						// 查询结果显示
						$("#query_table").append($tr);
					}

				}
			});
}


// 添加消费记录
function add() {
	// 获取参数
	var date = $("#start_date").val().trim();
	date = date.replace(/[^0-9]/g, "");
	var costReason = $("#costReason").val().trim();
	var price = $("#price").val().trim();
	alert(date + " ," + costReason + " ," + price);
	
	var ok = true;
	if (date == "" || costReason == "" || price == "") {
		ok = false;
		// $("#costReason_span").html("消费原因不能为空");
		alert("新增时日期、消费原因、消费金额");
	}
	
	if (ok) {
		$.ajax({
			url : path + "/cost/add.do",
			type : "post",
			data : {
				"date" : date,
				"costReason" : costReason,
				"price" : price
			},
			dataType : "json",
			success : function(result) {
				if (result.status == 0) {
					alert(result.msg);

				} else if (result.status == 1) {

				}

			},
			error : function() {
				alert("添加消费记录失败");
			}
		});
	}
};

// 修改消费记录
function edit() {
	alert("123");
	
}

