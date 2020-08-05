var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600, 200, 80, 50);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x <= movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2){
    fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  console.log(movingRect.width/2+fixedRect.width/2);
  console.log(movingRect.x - fixedRect.x);
  drawSprites();
}