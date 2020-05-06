var fixedRect, movingRect;
var box1 , box2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(600, 100, 50 , 50);
  box2 = createSprite(700, 100 ,50 ,50);

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
 
 
  istouching(movingRect , box1); 
  
  drawSprites();

}
