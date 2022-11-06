//bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let raio = diametro/2;

let veloxbolinha = 6;
let veloybolinha = 6;

//raquete
let xraquete = 5;
let yraquete = 150;
let largura = 90;
let comprimento = 10;

let veloxraquete = 5;
let veloyraquete = 5;

//raquete oponente
let xoponenteraquete = 585;
let yoponenteraquete = 150;

//placar
let pontos = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  placar();
  bolinha(xbolinha,ybolinha,diametro);
  movbolinha();
  verificaborda();
  raquete(xraquete,yraquete,comprimento,largura);                           raquete(xoponenteraquete,yoponenteraquete,comprimento,largura);
  movraquete();
  verificacolisao();
  verificacolisaoOponente();
  movraqueteoponente();  
}

function placar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));

  // placar
  rect(270, 10, 40, 20);
  fill(255);
  text(pontos, 290, 26);
}
function bolinha(x,y,d){
  circle(x,y,d)
}
function raquete(x,y,c,l){
  rect(x,y,c,l)
}
function movbolinha(){
  xbolinha += veloxbolinha;
  ybolinha += veloybolinha;
}
function verificaborda(){
  if(xbolinha + raio > width || xbolinha - raio < 0){
    veloxbolinha *= -1;
  }
   if(ybolinha + raio > height || ybolinha - raio < 0){
    veloybolinha *= -1;
  }
}
function movraquete(){
  if (keyIsDown(UP_ARROW) && yraquete > 0) {
    yraquete -= 8;
  }

  if (keyIsDown(DOWN_ARROW) && yraquete < height - largura) {
    yraquete += 8;
  }
}
function verificacolisao(){
  if(xbolinha - raio < xraquete + comprimento && ybolinha - raio < yraquete + largura && ybolinha + raio > yraquete){
    veloxbolinha *= -1;
    pontos += 1;
  }
}
function verificacolisaoOponente(){
  if(xbolinha - raio > xoponenteraquete - comprimento && ybolinha - raio < yoponenteraquete + largura && ybolinha + raio > yoponenteraquete){
    veloxbolinha *= -1;
  }
}
function movraqueteoponente(){
  yoponenteraquete = ybolinha - largura/2;
}