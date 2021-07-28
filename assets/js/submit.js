   function bang (){
			$.ajax({
				url:"https://api.apispreadsheets.com/data/15883/",
				type:"post",
				data:$("#myForm").serializeArray(),
				success: function(){
					location.reload();
				},
				error: function(){
					alert("There was an error :(")
				}
			});
		}