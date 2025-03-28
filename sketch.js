function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("green");
  fill("#F7F5F4");
  circle(200,200,300); // rosto
  fill("rgb(249,4,4)");
  circle(150,150,60); // olho esquerdo
  circle(250,150,60); //olho direito
  line(150,240,250,235); // boca
  fill("#795548");
  triangle(200,200,180,220,220,220); //nariz
  line(123,115,178,113); //sobrancelha esquerda
  line(226,116,279,106); // sobrancelha direita
  //circle(150,150,10); // pupila esquerda
 //circle(250,150,10); // pupila direita
  
  olhoX = map(mouseX,0,400,130,150);
  olhoY = map(mouseY,0,400,130,170);
  
  circle(olhoX,olhoY,10); // nova pupila esquerda
  circle(olhoX+100,olhoY,10); // nova pupila direita
  
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
  }
  
}
