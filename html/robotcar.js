var slider = document.getElementById("speedRange");
var output = document.getElementById("motorSpeed");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function moveup() {
  //myGamePiece.speedY = -1;
}

function movedown() {
  //myGamePiece.speedY = 1;
}

function moveleft() {
  //myGamePiece.speedX = -1;
}

function moveright() {
  //myGamePiece.speedX = 1;
}

function clearmove() {
  //myGamePiece.speedX = 0;
  //myGamePiece.speedY = 0;
}
