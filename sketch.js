const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var rect1, rect2;

var shortrect1, shortrect2;

var longrect;

var elongrect1,elongrect2;



function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

  rect1 = new Rect(425,200,225);
  rect2 = new Rect(625,200,225);
  
  shortrect1 = new Rect(475,250,200);
  shortrect2 = new Rect(575,250,200);

  longrect = new Rect(525,50,300);

  elongrect1 = new Rect(390,200,375);
  elongrect2 = new Rect(660,100,375);
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  
  ground.display();

  rect1.display();
  rect2.display();

  shortrect1.display();
  shortrect2.display();

  longrect.display();

  elongrect1.display();
  elongrect2.display();



  drawSprites();
}