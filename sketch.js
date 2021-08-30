const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//game variables
var eng, world;
var bgImg;
var snowmanImg, boyImg, girlImg;
var snowman, boy, girl;
var snows=[];


function preload(){
  ///loading imgs.....
  bgImg= loadImage("BgImg.jpg")
  snowmanImg = loadImage("snow-man.png")
  boyImg = loadImage("boy.png")
  girlImg = loadImage("Girl.png")
}


function setup() {

  createCanvas(1200,500);

  eng = Engine.create();
  world = eng.world;

  ground = new Ground(600,500,1200,30);

  //creating game sprites
  snowman = createSprite(600,370,30,30);
  snowman.addImage("snowman",snowmanImg);
  snowman.scale=0.5

  boy = createSprite(440,380,30,30);
  boy.addImage("boy",boyImg);
  boy.scale=0.4

  girl = createSprite(760,380,30,30);
  girl.addImage("girl",girlImg);
  girl.scale=0.4
}

function draw() {

  background(bgImg); 
  Engine.update(eng);

  ground.display();

//spawning snows...  
if(frameCount%80 === 0){
  snows.push(new snow(random((0,1190),(0,490)),40,20))
}

//displaying snow
for(var s =0; s<snows.length; s++){
  snows[s].display();
}

drawSprites();
}