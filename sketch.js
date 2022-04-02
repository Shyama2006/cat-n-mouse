var bgImg;
var cat;
var mouse;
var catImg1,catImg2,catImg3,catImg4;
var mouseImg1,mouseImg2,mouseImg3,mouseImg4;


function preload() {
//load the images here

bgImg.loadImage("garden.png");

catImg1.loadAnimation("cat1.png");
catImg2.loadAnimation("cat2.png");
catImg3.loadAnimation("cat3.png");
catImg4.loadAnimation("cat4.png");

mouseImg1.loadAnimation("mouse1.png");
mouseImg2.loadAnimation("mouse2.png");
mouseImg3.loadAnimation("mouse3.png");
mouseImg4.loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,600);
    cat.addAnimation("catSitting",catImg1);

    mouse = createSprite(200,200);
    mouse.addAnimation("mouseStanding",mouseImg1);
}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.velocityX=0;
     cat.addAnimation("catLastImage",catImg3);
     cat.changeAnimation("catLastImage");
     cat.x=300;
     cat.scale=0.2;


    }
     
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    
  }
  

}
