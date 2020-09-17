
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,box1,box2,box3,paper


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	ground=new Ground(400,600,1000,10)
	box1=new DustBin(600,500,200,200)
	paper=new PaperObject(100,400,70)

}	

function draw() {
  background(255);
  Engine.update(engine);
  ground.display();
  box1.display(0);
  paper.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-350});
	}
}





