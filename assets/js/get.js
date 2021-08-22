function bisa() {
                                    fetch("https://api.apispreadsheets.com/data/15916/").then(res=>{
                                    if (res.status === 200){
                                        // SUCCESS
                                        res.json().then(data=>{
                                            var data1= Object.values(data);
                                            var yourData= Object.values(data1[0]);
                                            let textox="";
                                        for(let i in yourData){
                                            var doto = Object.values(yourData[i]); //disini kalo mau ganti data
                                            textnama = doto[0]; //jenis data
                                            textwish = doto[5]; //jenis data
                                            textox += "<div><strong>"+textnama+"</strong><p>"+textwish+"</p><hr></div>";
                                            console.log(i);
                                            document.getElementById("keren").innerHTML = textox;
                                        }
                                        
                                        }).catch(err => console.log(err))
                                    }
                                    else{
                                        // ERROR
                                    }
                                })
}