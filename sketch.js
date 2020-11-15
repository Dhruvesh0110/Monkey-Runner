var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survivalTime = 0;

function preload() {
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(450,450);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(450,350,900,10);
  ground.velocityX = -4;
  
}

function draw() {
  
  background(1000);
  
  if(keyDown("space")) {
      monkey.velocityY = -12;
    }
   
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if (ground.x < 0) {
    ground.x = ground.x/2;
  }
  
  spawnBananas();
  spawnObstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 130,50);
  
  //monkey.debug = true;
  
  drawSprites();
}

function spawnBananas() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(450,150,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 160;
  }
}

function spawnObstacles() {
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(180,333,20,20);
    obstacle.x = Math.round(random(170,450));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 100;
  }
}


