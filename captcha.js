const apiUrl = 'https://075d9249.eu-gb.apigw.appdomain.cloud/captcha/action';
var confirmation;
var json;

function getCAPTCHA(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      json = xmlHttp.response;//JSON.parse(this.responseText);
      addPicture();
    }
  xmlHttp.open("GET", apiUrl, true); // true for asynchronous 
  hmlHttp.responseType = 'json';
  xmlHttp.send();
}

function addPicture(){
  var img = document.createElement("img");
  confirmation = "checker";//json.nonce;
  img.src = "http://users.jyu.fi/~jejopakk/ties4560/captcha/captchatest.png";//json.picture;
  var src = document.getElementById("b2"); 
  src.appendChild(img);
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
