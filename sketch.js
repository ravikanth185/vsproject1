var car;
var wall;
var speed;
var weight;
var collided;


function setup() {
  createCanvas(1600,400);
  car=createSprite(100, 200, 50, 50);
  wall=createSprite(1250,200,60,200);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  car.shapeColor=(255)

 

}

function draw() {
  background(80,80,80);  
  var  deformation=0.5*weight*speed*speed/22500

  if(car.x-wall.x<car.width/2+wall.width/2 && 
    wall.x-car.x<car.width/2+wall.width/2 ){
      
      car.velocityX=0

      if( deformation < 80){
        car.shapeColor=("green")
      }
      if( deformation > 80 && deformation < 180){
        car.shapeColor=("orange")
      }
      if( deformation > 180){
        car.shapeColor=("red")
      }
}
  drawSprites();
}