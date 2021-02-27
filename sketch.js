
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3;
var ground;
var paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 ground=createSprite(400,680,800,20)
 log1=createSprite(600,615,20,150)
 log2=createSprite(500,615,20,150)
 log3=createSprite(550,680,100,20)
 log1.shapeColor=color("red")
 log2.shapeColor=color("red")
 log3.shapeColor=color("red")
 paper=createSprite(100,670,10,10)

	engine = Engine.create();
	world = engine.world;
 paper=Bodies.circle(100,670,10,{restitution:0,isStatic:false,friction:0.5,density:1.2})
 World.add(world,paper)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  drawSprites();
 
}
function keypressed(){
	if(keycode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



