const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myEngine, myWorld;

var player, enemy, obstacle, obstacle2;
var playerImg, backgroundImg, enemyImg, obstacleImg, obstacle2Img;

function preload() {
  playerImg = loadImage("images/sonic.png");
  backgroundImg = loadImage("images/background.png");
  enemyImg = loadImage("images/police.png");
  obstacleImg = loadImage("images/obs1.png");
  obstacle2Img = loadImage("images/obs2.png");
}

function setup() {

  createCanvas(displayWidth,displayHeight);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  player_options = {
    isStatic:true,
  }
  player = Bodies.rectangle(displayWidth/2, displayHeight-50, 75, 75, player_options);
  World.add(myWorld, player);

  enemy_options = {
    isStatic:true,
  }
  enemy = Bodies.rectangle(displayWidth/4, displayHeight-100, 100, 100, enemy_options);
  World.add(myWorld, enemy);

  obstacles_options = {
    isStatic:true,
  }

  obstacle = Bodies.rectangle(displayWidth/3, displayHeight-75, 100, 100, obstacles_options);
  World.add(myWorld, obstacle);

  obstacle2 = Bodies.rectangle(displayWidth/5, displayHeight-75, 100, 100, obstacles_options);
  World.add(myWorld, obstacle2);
}

function draw() {
  background(backgroundImg);  

  imageMode(CENTER);
  image(playerImg, player.position.x, player.position.y, 75, 75);

  imageMode(CENTER);
  image(enemyImg, enemy.position.x, enemy.position.y, 100, 100);

  imageMode(CENTER);
  image(obstacleImg, obstacle.position.x, obstacle.position.y, 100, 100);

  imageMode(CENTER);
  image(obstacle2Img, obstacle2.position.x, obstacle2.position.y, 100, 100);

  enemyProperties();
  obstacleProperties();

  drawSprites();
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    player.position.y = player.position.y - 50;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x = player.position.x + 50;
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.position.x = player.position.x - 50;
  }
}

function enemyProperties() {

  enemy.position.x = player.position.x;
  enemy.position.y = player.position.y + 100;
  var caught = Matter.SAT.collides(player, enemy);

  if (caught.collided) {


    player.position.x = displayWidth/2;
    player.position.y = displayHeight - 5;

  }

}

function obstacleProperties() {

  playerBounds = player.bounds;
  obstacleBounds = obstacle.bounds;
 console.log(playerBounds) ;
   
  /*var collision1 = Matter.SAT.collides(obstacle, player);
  var collision2 = Matter.SAT.collides(obstacle2, player);
  
  if (collision1.collided || collision2.collided) {

    player.position.x = displayWidth/2;
    player.position.y = displayHeight - 5;

  }*/

}
