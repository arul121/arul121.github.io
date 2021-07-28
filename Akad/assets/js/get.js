function bisa() {
    fetch("https://api.apispreadsheets.com/data/15883/").then(res=>{
	if (res.status === 200){
		// SUCCESS
		res.json().then(data=>{
			const yourData = data
		}).catch(err => console.log(err))
	}
	else{
		// ERROR
	}
})
}