var tom,tomImg1,tomImg2,tomImg3,tomImg4;
var jerry,jerryImg1,jerryImg2,jerryImg3,jerryImg4;
var bg,bgImg
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    tomImg1 = loadAnimation("images/cat1.png")
    tomImg2 = loadAnimation("images/cat2.png")
    tomImg3 = loadAnimation("images/cat3.png")
    tomImg4 = loadAnimation("images/cat4.png")
    jerryImg1 = loadAnimation("images/mouse1.png")
    jerryImg2 = loadAnimation("images/mouse2.png")
    jerryImg3 = loadAnimation("images/mouse3.png")
    jerryImg4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping",tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryImg1);
    jerry.scale = 0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.velocityX = 0;
    tom.addAnimation("tomSitting",tomImg4) 
    tom.changeAnimation("tomSitting")
    tom.x = 300;

    jerry.addAnimation("jerryLooking",jerryImg4) 
      jerry.changeAnimation("jerryLooking") 

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX = -3
      tom.addAnimation("tomRunning",tomImg2) 
      tom.changeAnimation("tomRunning") 

      jerry.addAnimation("jerryTeasing",jerryImg3) 
      jerry.changeAnimation("jerryTeasing") 
  }   

}
