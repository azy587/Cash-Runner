var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var end,endImg


function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg = loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
 end = createSprite(200,100,20,20)
  end.addImage(endImg)
  end.scale = 0.6
 
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
boy.setCollider("circle",0,0,500)

  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  if(gameState === PLAY){
     path.velocityY = 4;
    createCash();
    createDiamonds();
    createJwellery();
    createSword()
    end.visible = false
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection + 50
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection + 100
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection + 150
    }else{
      
     }
    

      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        gameState = END 
    }
  }else if (gameState === END) {
    path.velocityY = 0
    boy.visible = false
    end.visible = true
    cashG.destroyEach() 
    diamondsG.destroyEach()
    jwelleryG.destroyEach()
    
    
   }

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 70 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 4;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 90 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 4;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 110 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 4;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 4;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}