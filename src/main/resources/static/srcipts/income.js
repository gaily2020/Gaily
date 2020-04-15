function income() {
	window.location.href = "income.html";
}

function back() {
	window.location.href = "index.html";
}

//查询收入总金额
function sum(){
	//获取请求参数
	var start_date = $("#start_date").val().trim();
	start_date = start_date.replace(/[^0-9]/g, "");
	var end_date = $("#end_date").val().trim();
	end_date = end_date.replace(/[^0-9]/g,"");
	if(start_date == "" | end_date== ""){
		alert("请输入查询的日期区间");
	}
	$.ajax({
		url : path+"/income/sum.do",
		type : "post",
		data : {"start_date":start_date,"end_date":end_date},
		dataType : "json",
		error : function(){
			alert("查询收入总金额失败!");
		},
		success : function(result){
			if(result.status == 0){
				//若多次点击查询,需要清空上一次的查询记录
				$("#query_table").empty();
				var sum = result.data;
				sum = sum[0]["totalSalary"];
				var tr = "";
				tr +="<table><thead><tr><th>收入总金额</th></tr></thead><tbody>";
				console.log(sum);
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
				url : path + "/income/check.do",
				type : "post",
				data : {"start_date" : start_date,"end_date" : end_date},
				dataType : "json",
				error : function() {
					alert("查询收入记录失败");
				},
				success : function(result) {
					if (result.status == 0) {
						//若多次点击查询,需要清空上一次的查询记录
						$("#query_table").html("");
						var income = result.data;
						var tr = "";
						tr +="<table><thead><tr><th>序号</th><th>日期</th><th>收入来源</th><th>收入金额</th><th>备注信息</th></tr></thead><tbody>";
						for(var i=0;i<income.length;i++){
							tr +="<tr><td>"+income[i].id+"</td><td>"+income[i].date
							+"</td><td>"+income[i].incomeSource+"</td><td>"+income[i].salary+"</td><td>" +
									'<input type="button" id="edit_btn" value=编辑></input> '+
									"</td></tr>";
						}
						//遍历完成后
						tr += "</tbody></table>"
//						$("#query_span").html(tr);	
						// 转换成jQuery对象
						var $tr = $(tr);
						// 将表格追加到body中
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
	var incomeSource = $("#incomeSource").val().trim();
	var salary = $("#salary").val().trim();
	alert(date + " ," + incomeSource + " ," + salary);
	var ok = true;
	if(date == ""){
		alert("请输入日期");
	}
	if (incomeSource == "") {
		ok = false;
		// $("#incomeSource_span").html("消费原因不能为空");
		alert("请输入消费原因");
	}
	if (salary == "") {
		ok = false;
		// $("#salary_span").html("消费金额不能为空");
		alert("请输入消费金额");
	}
	if (ok) {
		$.ajax({
			url : path + "/income/add.do",
			type : "post",
			data : {
				"date" : date,
				"incomeSource" : incomeSource,
				"salary" : salary
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

}

