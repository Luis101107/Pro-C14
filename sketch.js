var sueloInvisible;
var trex ,trex_running;
var tero ,tero_fly;
var suelo, sueloImg;
var Cloud;
var Cactus, Cactus1;
var Cactus2;
var Cactus3;
var Cactus4;
var Cactus5;
var Cactus6;
function preload(){
 trex_running = loadAnimation ("trex1.png", "trex3.png", "trex4.png")
sueloImg = loadImage ("ground2.png");
tero_fly = loadAnimation ("tero1.png", "tero2.png")
Cloud = loadImage ("cloud.png")
Cactus1 = loadImage ("obstacle1.png")
Cactus2 = loadImage ("obstacle2.png")
Cactus3 = loadImage ("obstacle3.png")
Cactus4 = loadImage ("obstacle4.png")
Cactus5 = loadImage ("obstacle5.png")
Cactus6 = loadImage ("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite (50, 150);
 trex.addAnimation ("running",trex_running);
 tero = createSprite (300, 90, 10, 10)
 tero.addAnimation ("fly",tero_fly)
 trex.scale = 0.5;
 suelo = createSprite(300, 150)
 suelo.addImage("floor",sueloImg);
 suelo.velocityX = -3;
 sueloInvisible = createSprite (50, 168, 600, 20);
 sueloInvisible.visible = false;
}

function draw(){
  background("white")
 
  if(keyDown("space")&& trex.y >= 90){
   trex.velocityY = -10
 } 

  if(suelo.x <0){
   suelo.x = sueloInvisible.width/2; 
  }

trex.velocityY = trex.velocityY +0.8;
trex.collide (sueloInvisible);
SpawnClouds ();
Obstaculo ();
drawSprites();
}

function SpawnClouds(){
  if(frameCount %60 === 0){
    var Nube = createSprite (600, 20, 40, 10);
    Nube.addImage(Cloud)
    Nube.velocityX = -5;
    Nube.y = Math.round(random(10,60));
    Nube.depth = trex.depth;
    trex.depth = trex.depth +1;
    Nube.lifetime = 125;
  }
}

function Obstaculo(){
  if(frameCount %60 === 0){
    Cactus = createSprite (600, 150);
    Cactus.velocityX = -9
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1: Cactus.addImage (Cactus1)
      break;
      case 2: Cactus.addImage (Cactus2)
      break;
      case 3: Cactus.addImage (Cactus3)
      break;
      case 4: Cactus.addImage (Cactus4)
      break;
      case 5: Cactus.addImage (Cactus5)
      break;
      case 6: Cactus.addImage (Cactus6)
      break;
    }
  Cactus.scale = 0.65
  Cactus.lifetime = 67;
  }
}