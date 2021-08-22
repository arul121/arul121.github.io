   function bang (){
			$.ajax({
				url:"https://api.apispreadsheets.com/data/15916/",
				type:"post",
				data:$("#myForm").serializeArray(),
				success: function(){
					location.reload();
          $('#myForm')[0].reset();
				},
				error: function(){
					alert("There was an error :(")
				}
			});
		}