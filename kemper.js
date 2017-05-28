//JavaScript
var y = new Date().getFullYear();
document.getElementById("year").innerHTML = y;

//form validation

function valid() {
	var name = document.forms["emailForm"]["fName"].value;
		if(name === null || name === "") {
		  alert("Please Fill In Name");
		  return false;
		}
	var mail = document.forms["emailForm"]["fEmail"].value;
		if(mail === null || mail === "") {
		  alert("Please Fill In Email");
		  return false;
		}
	var txt = document.forms["emailForm"]["fTxt"].value;
		if(txt === null || txt === "") {
		  alert("Please Fill In Text");
		  return false;
		}
}
