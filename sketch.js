// this is my tower siedge 1 project, hope you like it :)

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var spring;
var ground;
var groundHovering;

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

 
  polygon = new Polygon(0,0,20);

  spring = new Projectile(ball.body,{x:200,y:200});

  ground = new Platform(400,390,800,20);

  groundHovering = new Platform(550,160,200,20);
  
}

function draw() {
  background(247, 223, 178);
  Engine.update(engine);
  

  polygon.display();
  spring.display();
  ground.display();
  groundHovering.display();
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}
