const apiUrl = 'https://075d9249.eu-gb.apigw.appdomain.cloud/captcha/action';
var confirmation;
//var json;

function getCAPTCHA(){
  var xmlHttp = new XMLHttpRequest();
  hmlHttp.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status == 200) {
	var responseData = JSON.parse(xmlHttp.responseText);
      	addPicture(responseData);
    }
  });
  xmlHttp.open("GET", apiUrl, true);
  xmlHttp.send();
}

function addPicture(reseponseData){
  confirmation = responseData.picture;
  var image = new Image();
  image.src = confirmation;
  document.getElementById("b2").appendChild(image);
  /*var can = document.createElement("CANVAS"); //document.getElementById('canvas1');
  var ctx = can.getContext('2d');

  var img = new Image();

  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  }

  img.src = json.picture;
  document.getElementById("b2").appendChild(elem);
  var elem = document.createElement("img");
  confirmation = json.nonce;
  elem.src = json.picture;
  document.getElementById("b2").appendChild(elem);*/
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
	var data = {"text" : document.getElementById("t1").value, "picture" : confirmation};
	
	xhttp.open("POST", apiUrl, true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify(data));
}
