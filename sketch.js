var wall;
var car;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1300, 200, 60, height/2);
  wall.shapeColor = 80,80,80

}

function draw() {
  background(255,255,255);  
  drawSprites();

  if (car.x - wall.x < wall.width/2 +car.width/2 &&
    wall.x -car.x < wall.width/2 + car.width/2 &&
    car.y - wall.y <wall.height/2 + car.height/2 &&
    wall.y - car.y < wall.height/2 + car.height/2){
  
     var Deformation = (0.5*weight*speed*speed)/22500

   if(Deformation >= 180) {
    car.velocityX = 0
    car.shapeColor = "red"
    
   }
   else if(Deformation >= 100 && Deformation <= 179) {
    car.velocityX = 0
    car.shapeColor = "yellow"


   }
  else if(Deformation <= 99){
    car.velocityX = 0
    car.shapeColor = "green"

  }
 }
}