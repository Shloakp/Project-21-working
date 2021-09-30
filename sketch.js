
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var grnd1,grnd2,grnd3;
var radius = 20;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
var ball_options={

isStatic:false,
restitution: 0.3,
friction :0,
density: 1.2,

}

grnd1 = new Ground(width/2,670,width,20);
grnd2 = new Ground (900,600,20,120);
grnd3 = new Ground(1150,600,20,120);

ball = Matter.Bodies.circle(100,100,20,ball_options);
World.add(world,ball);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
grnd1.show();
grnd2.show();
grnd3.show();

ellipse(ball.position.x,ball.position.y,radius,radius);


  drawSprites();
}


function keyPressed(){
	if(keyIsDown(RIGHT_ARROW)){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:62,y:0});
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0, y:-122});
	}
}
