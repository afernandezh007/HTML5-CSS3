$(document).ready(function(){
	$.ajax({
			url: "/api/tasks/",			
			success:function(data){
				console.log("TASK LIST",data);
				var html = "";
				for( var i in data){
					var task = data[i];
					html +="<li>"+ task.task+"</li>";
				}
				$("#tasks-list").html(html);
			},
			error: function(data){
				console.log("TASK LIST ERROR!",data);
			}
		});
})