
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Ground;
var Tree;
var stoneImg;
var boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var launchar;
var treeImg;

function preload()
{
	boyImg = loadImage("images/boy.png");
	treeImg = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1100, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Tree = createSprite(850,340);
	Tree.addImage(treeImg);
	Tree.scale = 0.4;
	Ground = new ground(550,600,1100,25);
	
	mango1 = new Mango(900,275,85);
	mango2 = new Mango(770,175,70);
	mango3 = new Mango(900,150,60);
	mango4 = new Mango(1000,220,90);
	mango5 = new Mango(700,280,75);
	mango6 = new Mango(800,300,55);
	mango7 = new Mango(1075,300,80);
	
	boy = createSprite(200,510,10,10);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	stoneImg = new Stone(150,390,50);

	

    launchar = new Launcher(stoneImg.body,{x:150,y:450});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Ground.display();
  launchar.display();

  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stoneImg.display();

  detectCollision(stoneImg,mango1);
  detectCollision(stoneImg,mango2);
  detectCollision(stoneImg,mango3);
  detectCollision(stoneImg,mango4);
  detectCollision(stoneImg,mango5);
  detectCollision(stoneImg,mango6);
  detectCollision(stoneImg,mango7);

  keyPressed();
  
 }

function mouseDragged(){
	Matter.Body.setPosition(stoneImg.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	launchar.fly();
}

function detectCollision(lstone,lmango){
  pos1 = lstone.body.position;
  pos2 = lmango.body.position;

  var distance = dist(pos1.x,pos1.y,pos2.x,pos2.y);

  if(distance<=lstone.r+lmango.r){
	  Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneImg.body, {x: 145, y: 450});
		launchar.attach(stoneImg.body);
	}
}

