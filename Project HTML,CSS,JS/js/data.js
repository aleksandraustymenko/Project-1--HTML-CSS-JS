function piszData(){
	let d = new Date;
	let dd=d.getDate()
	let mm=d.getMonth()+1;
	let yyyy= d.getFullYear();
	let data="";
	
	data+=(dd<10? "0" : "") + dd;
	data += "-" + (mm < 10 ? "0" : "") + mm;
	data+="-" + yyyy;
		

	document.getElementById("data").innerHTML = "Aktualna data: " + data;
	
}

window.onload = piszData;