//The traffic light elements from over
//at the HTML
document.getElementById('stpbtn').onclick = TurnRed;
document.getElementById('slwbtn').onclick = TurnYellow;
document.getElementById('gobtn').onclick
= TurnGreen;

//Calling functions for each light.
function TurnRed() {
  clearLights();
  document.getElementById('stplight').style.backgroundColor = "red";
}

function TurnYellow() {
  clearLights();
  document.getElementById('slwlight').style.backgroundColor = "yellow";
}

function TurnGreen() {
  clearLights();
  
  document.getElementById('golight').style
  .backgroundColor = "green";
}

function clearLights() {
  document.getElementById('stplight').style.backgroundColor = "black";
  document.getElementById('slwlight').style.backgroundColor = "black";
  document.getElementById('golight').style.backgroundColor = "black";
}
