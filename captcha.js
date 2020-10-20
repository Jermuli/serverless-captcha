const apiUrl = 'https://075d9249.eu-gb.apigw.appdomain.cloud/captcha/action';
var confirmation;

function getCAPTCHA(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status == 200) {
	    var responseData = JSON.parse(xmlHttp.responseText);
      	addPicture(responseData);
    }
  });
  xmlHttp.open("GET", apiUrl, true);
  xmlHttp.setRequestHeader("Content-Type", "application/json");
  xmlHttp.send();
}

function addPicture(responseData){
  confirmation = responseData.picture;
  var image = new Image();
  image.src = confirmation;
  document.getElementById("b2").appendChild(image);
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
			var jsonTemp = JSON.parse(xhttp.responseText);
      		isHuman(jsonTemp);
  		}
	});
	var data = {"text" : document.getElementById("t1").value, "picture" : confirmation};
	xhttp.open("POST", apiUrl, true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify(data));
}
