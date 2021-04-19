var gameState = 0;

var player, plrIMG;

var grnd, grndIMG;

var bomb, bombIMG;

var map1, map1IMG;

var teleporter;

var sound1;

function preload(){
grndIMG = loadImage("bigbgd.png");
plrIMG2 = loadAnimation("player7right.png");
plrIMG = loadAnimation("player7left.png");
bombIMG = loadImage("bomb0.png");
bombIMG = loadImage("bomb0.png");
sound1 = loadSound("teleport_sound0.mp3");
map1IMG = loadImage("map1.png");
}

function setup() {
  createCanvas(1800,1400);
  grnd = createSprite(700, 600, 50, 50);
  grnd.addImage(grndIMG);
  grnd.scale = 1.5;
  
  plr = createSprite(600, 400, 50, 50);
  plr.addAnimation("plrstand", plrIMG2);
  plr.addAnimation("plrstand2", plrIMG);
  plr.scale = 1;

  bomb = createSprite(700, 1000, 50, 50);
  bomb.addImage(bombIMG);
  bomb.scale = 1;

  map1 = createSprite(700, 600, 50, 50);
  map1.addImage(map1IMG);
  map1.scale = 1;

  teleporter = createSprite(100, 400, 50, 50);
}

function draw() {
  background(0,0,0);    

if(keyDown(UP_ARROW)){
plr.y = plr.y-5;
}

if(keyDown(DOWN_ARROW)){
  plr.y = plr.y+5;
  }

  if(keyDown(LEFT_ARROW)){
    plr.changeAnimation("plrstand2", plrIMG);
    plr.x = plr.x-5;
    }

    if(keyDown(RIGHT_ARROW)){
      plr.changeAnimation("plrstand", plrIMG2);
      plr.x = plr.x+5;
      }

      if(keyWentDown("e")){
      sound1.play();
      gameState === 1;
      }

      if(gameState === 0){
        map1.scale = 0.00000000000000000001;
      }

  drawSprites();
}