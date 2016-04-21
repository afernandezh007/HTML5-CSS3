$(document).ready(function(){

	$("#add-task-form").on("submit",function(evt){
		var taskName = $("#task").val();

		$.ajax({
			type:"post",
			url: "/api/tasks/",
			contentType:"application/json",
			data: JSON.stringify({"task":taskName}),
			success:function(data){
				console.log("TASK SAVED!",data);
			},
			error: function(data){
				console.log("TASK ERROR!",data);
			}
		});

		return false;//hace como preventdefault
	});

});