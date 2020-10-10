var car,wall,speed, weight,deformation ;
function setup() {
  createCanvas(800,400);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  
  wall=createSprite(760, 200, 60, height/2);
  car=createSprite(50, 200, 50, 50);
}

function draw() {
  background("black"); 
 if(keyDown("space")) {
  car.velocityX=speed;
 }
  

  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX=0;
    deformation=0.5 * weight * speed * speed/22509;
    if(deformation <180 && deformation>100) {
      car.shapeColor=color(230,230,0);
    }
    if(deformation>179) {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<99) {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
  textSize(20);
  text("Deformation: "+deformation,200, 50);
  text("Weight: "+weight,0,50)
  text("Speed: "+speed,540,50)
}