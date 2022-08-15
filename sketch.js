var box,boxImg;
var rectangle,rectangleImg; 
var climberImg,climber,climbersGroup; 
var invisibleBlockGroup,invisibleBlock; 
var backgroundImg,background; 
var gameState = "play" 



function preload(){
backgroundImg = loadImage("Background.png"); 
climberImg = loadImage("climber.png"); 
boxImg = loadImage(box.png); 
crystalSound = loadSound("crystalgems.wav");
}

function setup() {
 createCanvas(600,600) 
 crystalSound.loop(); 
 background = createSprite(300,300); 
 background.addImage("background",backgroundImg); 
 background.velocityY = 1; 

 climbersGroup = new Group(); 
 invisibleBlockGroup = new Group(); 
 
 box = createSprite(200,200,50,50); 
 box.scale = 0.5; 
 box.addImage("box",boxImg);
}

function draw() {
 background(200,200) 
 if (gameState === "play" ){
    if (background > 400){
        background.y = 300
    }  

   if (keydown("left_arrow")){
    box.x = box.x - 3
   } 
    
   if (keydown("right_arrow")){
    box.x = box.x + 3; 
   } 

   if (keydown("space")){
    box.velocityY = -5;
   } 

   box.velocityY = box.velocityY + 0.8; 

   if (invisibleBlockGroup.isTouching(box)){
    box.destroy(); 
   } 

   spawnDoors(); 
   drawSprites();

 } 

 if (gameState === "end"){
    stroke("yellow"); 
    Fill("yellow"); 
    textSize(30); 
    text("Game Over", 230,250);
 }
     
} 

function spawnDoors(){
    if (frameCount % 240 === 0){
        var door = createSprite(200,-50); 
        door.addImage(doorImg);  

        var invisibleBlock = createSprite(200,15); 
        invisibleBlock.width = climber.width; 
        invisibleBlock.height = 2; 

        door.x = Math.round(random(120,440)); 
        door.velocityY = 1; 

        invisibleBlock.x = door.x; 
        invisibleBlock.velocityY = 1; 

        box.depth = door.depth; 
        box.depth +- 1; 

        door.lifetime = 800; 
        climber.lifetime = 800; 
        invisibleBlock.lifetime = 800; 

        doorsGroup.add(door); 
        climbersGroup.add(climber); 

        invisibleBlock.debug = true; 
        invisibleBlockGroup.add(invisibleBlock);
         
    } 
}