var runner,runningAnimation;
var backgroundImage;
var robber,


function preload(){
runningAnimation=loadAnimation("runner1.png","runner2.png","runner3.png","runner4.png")
backgroundImage=loadImage("forest.jpg");
}

function setup() {
  createCanvas(800,400);
  runner=createSprite(100,300);
  runner.addAnimation("running",runningAnimation);
  runner.scale=0.25
}

function draw() {
  background(backgroundImage);
  drawSprites();
}