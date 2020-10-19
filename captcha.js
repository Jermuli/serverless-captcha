const apiUrl = 'https://075d9249.eu-gb.apigw.appdomain.cloud/captcha/action';
var confirmation;
var json;

function getCAPTCHA(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      json = JSON.parse(this.responseText);
      addPicture();
    }
  xmlHttp.open("GET", apiUrl, true); // true for asynchronous 
  xmlHttp.send();
}

function addPicture(){
  var img = document.createElement("img");
  //confirmation = json.nonce;
  img.src = json.picture;
  var src = document.getElementById("b2"); 
  src.appendChild(img);
}

function isHuman(jsonTemp){
  if(jsontTemp.passed == true){
    document.getElementById("h1").innerHTML = "You are human";
  }else{
    document.getElementById("h1").innerHTML = "You could be robot";
  }
}

function sendCAPTCHA(){
 	var xhttp = new XMLHttpRequest();
	xhttp.addEventListener("readystatechange", function () {
  		if (this.readyState === 4 && this.status == 200) {
			jsonTemp = JSON.parse(this.responseText);
      			isHuman(jsonTemp);
  		}
	});
	var data = {text : getElementById("b2").value, nonce : confirmation};
	
	xhttp.open("POST", apiUrl, true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.setRequestHeader("Cache-Control", "no-cache");
	xhttp.send(JSON.stringify(data));
}
