/*
var header1 = document.createElement("h1");
// var addCalss = document.getElementsByTagName("h1")[0].setAttribute("class", "damocalss");
var herotext = document.createTextNode("Hello rafik..!");
header1.appendChild(herotext);

var wrapper = document.getElementById("div");
wrapper.appendChild(header1);
document.getElementsByTagName("h1")[0].setAttribute("class", "damocalss");

var itemoption = document.getElementById("itemoption");

function myFunction(){
	document.getElementById("output").value = itemoption.options[itemoption.selectedIndex].text;
}


	
function myFunction(){
	//document.getElementById("itemlist").reset();

	var userData = document.getElementById("output").value = itemoption.options[itemoption.selectedIndex].text;
	
	for (let i = 1; i<=userData; i++){
		var listItem = document.createElement("li");
		var listItemText = document.createTextNode("Just a text line...!");
		listItem.appendChild(listItemText);

		var showme = document.getElementById("itemlist");
		showme.appendChild(listItem);
	} 
	document.getElementById("itemlist").reload();
}


*/




window.myFunction();
function myFunction(){
	var userData = document.getElementById("output").value = itemoption.options[itemoption.selectedIndex].text;
	window.removeList();
		for (let i = 1; i<=userData; i++){
			var listItem = document.createElement("li");
			var listItemText = document.createTextNode("Just a text line...!");
			listItem.appendChild(listItemText);
		
			var showme = document.getElementById("itemlist");
			showme.appendChild(listItem);
		} 
	
	
}
function removeList(){
	const olList = document.getElementById("itemlist");
	while(olList.hasChildNodes()) {
		olList.removeChild(olList.firstChild);
	}
}