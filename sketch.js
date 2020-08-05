//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var player , player_running 

var banana , banana_img 

var obstacle , obstacle_img

var background , background_img

var score

var ground

var obstaclesgroup , foodgroup


function preload(){
  
background_img = loadImage("jungle.png");
  
player_running =
loadAnimation("monkey_01png","monkey_02png","monkey_03png","monkey_04png","monkey_05png","monkey_06png","monkey_07png","monkey_08png","monkey_09png","monkey_10png" );
  
banana_img = loadImage ("banana.png");
obstacle_img = loadImage ("stone.png");
  
}



function setup() {
  createCanvas(600, 200);
  
player = createSprite  ( 200,150, 60, 40 );
player.addAnimation ("running",player_running)
  
 background = (600,200)
 background.addImage("background ", background_img)
 background.x = background.width /2;

 
   ground = createSprite(200,180,400,20);
    ground.x = ground.width /2;
  
  ObstaclesGroup = new Group();
  foodgroup = new Group();
}

function draw() {
  background(220);
  stroke ("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  if(gameState === PLAY){    
    
     if(keyDown("space") && player.y >=159) {
     player.velocityY = -12 ;
     }     
     
     player.velocityY = player.velocityY + 0.8;
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    spawnBanana();
    spawnObstacles();
    
    if(ObstaclesGroup.isTouching(player)){      
      gameState = END;     
    }
    if ( foodgroup.istouching (player)){
    score = score + 2;
    }
  
  } else if(gameState === END) {
  
   text (" game over" ,100,50 ); 
   ground.velocityX = 0;
    player.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    
    
    ObstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);  
  }  
  
  player.collide(invisibleGround);  
  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 + 3*score/100); 
    
    //generate random obstacles
    var score = Math.round(score(1,6));
    switch(rand) {
      case 10: player.scale = 0.12;
              break;
      case 20: player.scale = 0.14;
              break;
      case 30: player.scale = 0.16;
              break;
      case 40: player.scale = 0.18;
              break;
  
      default:break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}
    
function spawnBanana(){                            
  if(frameCount % 60 === 0) {
    var banana = createSprite(400,125,5,20);
    banana.velocityX = -(6 + 3*score/100); 
   foodGroup.add(banana); 
   foodgroup.lifetime = 300;
  }
}