var cubo;

function setup() {
  createCanvas(800,600);
  cubo = createSprite(200, 200, 30, 30);
  cubo.shapeColor = "gray";
}

function draw() 
{
  background("yellow");

  if (keyDown ("d")){
  cubo.x = cubo.x +5;
  }
  if (keyDown ("a")){
    cubo.x = cubo.x -5;
  }
  if (keyDown ("w")){
    cubo.y = cubo.y -5;
  }
  if (keyDown ("s")){
    cubo.y = cubo.y +5;
  }    
  if (keyDown("right")){
    background("red");
  }
drawSprites ();

}



