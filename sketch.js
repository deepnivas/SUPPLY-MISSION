var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	

	box1 = createSprite(500, 610, 5,100);
	box1.shapeColor=color("red")

	box2 = createSprite(300,610, 5,100);
	box2.shapeColor=color("blue")

	box3 = createSprite(400,657, 200,5);
	box3.shapeColor=color("green")



	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.3});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	
	
	


	var packageSprite_options ={
        restitution: 1
    }

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box3);
	 

	Engine.run(engine);
  

}

function draw() {
	rectMode(CENTER);
	background(0);
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	drawSprites();
	keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	console.log("down")
	Matter.Body.setStatic(packageBody, false);
	   
	
  }
}



