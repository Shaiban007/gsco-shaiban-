var car;
var wall;
var speed;
var weight;



function setup() {
  createCanvas(900,400);

  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50, 220, 50,50);
  car.shapeColor="white"
  car.velocityX=speed;
  wall=createSprite(800,200,10,height/2)
  wall.shapeColor="green"
}

function draw() {
  background("pink"); 
  
  drawSprites();
if(wall.width-car.width < (car.width+wall.width)/2){
 

var deformation=0.5*weight*speed*speed/22509;

if(deformation<180 && deformation>100){
car.shapeColor=color(230,230,0)

}
if(deformation>180){
  car.shapeColor=color(255,0,0)
  
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0)
    
    
    }
   
  
  }
  if(car.isTouching(wall)){
 car.velocityX=0;

  }

}

