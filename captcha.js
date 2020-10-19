const apiUrl = 'https://075d9249.eu-gb.apigw.appdomain.cloud/captcha/action';
var confirmation;
var json;

function getCAPTCHA(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      json = JSON.parse(xmlHttp.responseText);
      addPicture();
    }
  xmlHttp.open("GET", apiUrl, true); // true for asynchronous 
  xmlHttp.send();
}

function addPicture(){
  var elem = document.createElement("img");
  confirmation = json.nonce;
  elem.src = json.picture;
  document.getElementById("b2").appendChild(elem);
}

function isHuman(jsonTemp){
  if(jsonTemp.passed == true){
    document.getElementById("h1").innerHTML = "You are human";
  }else{
    document.getElementById("h1").innerHTML = "You could be robot";
  }
}

function sendCAPTCHA(){
 	var xhttp = new XMLHttpRequest();
	xhttp.addEventListener("readystatechange", function () {
  		if (this.readyState === 4 && this.status == 200) {
			jsonTemp = JSON.parse(xhttp.responseText);
      			isHuman(jsonTemp);
  		}
	});
	var data = {"text" : document.getElementById("b2").value, "nonce" : confirmation};
	
	document.getElementById("b1").innerHTML = document.getElementById("b2").value;
	
	xhttp.open("POST", apiUrl, true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify(data));
}
