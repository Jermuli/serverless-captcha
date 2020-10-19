const apiUrl = 'https://075d9249.eu-gb.apigw.appdomain.cloud/captcha/action';
var nonce;

function getCAPTCHA(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      var json = JSON.parse(this.responseText);
      addPicture(json);
    }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send();
}

function addPicture(json){
  var img = document.createElement("img");
  nonce = json.nonce;
  img.src = json.picture;
  var src = document.getElementById("b2"); 
  src.appendChild(img);
}

function isHuman(json){
  if(json.passed == true){
    document.getElementById("h1").innerHTML = "You are human";
  }else{
    document.getElementById("h1").innerHTML = "You could be robot";
  }
}

function sendCAPTCHA(){
  var xhttp = new XMLHttpRequest();
	xhttp.addEventListener("readystatechange", function () {
  		if (this.readyState === 4 && this.status == 200) {
			json = JSON.parse(this.responseText);
      			isHuman(json);
  		}
	});

	xhttp.open("POST", url, true);
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.setRequestHeader("Cache-Control", "no-cache");
}
