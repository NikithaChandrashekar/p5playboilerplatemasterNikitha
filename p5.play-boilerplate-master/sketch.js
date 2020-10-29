const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground, ball;

function setup(){
     createCanvas(800,400);
     engine = Engine.create();
     world = engine.world;
     var option_ground={
         isStatic:true
     }
     //create a body
     ground = Bodies.rectangle(400,350,800,40,option_ground);
     World.add(world,ground);
     var option_ball={
      restitution: 1.0
      }  
     ball = Bodies.circle(200,100,50,option_ball);
     World.add(world,ball);
  }
  function draw(){
      
    background("lavender");
  Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,40);
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50);
  }
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  var engine, world, ground, ball;
  function setup(){
     createCanvas(800,400);
     engine = Engine.create();
     world = engine.world;
     var option_ground={
         isStatic:true
     }
     //create a body
  
     ground = Bodies.rectangle(400,350,800,40,option_ground);
     World.add(world,ground);
     var option_ball={
      restitution: 1.0
      }  
     ball = Bodies.circle(200,100,50,option_ball);
  Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,40);
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50);
  }
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  var engine, world, ground, ball;
  function setup(){
     createCanvas(800,400);
     engine = Engine.create();
     world = engine.world;
     var option_ground={
         isStatic:true
     }
     //create a body
  
     ground = Bodies.rectangle(400,350,800,40,option_ground);
     World.add(world,ground);
     var option_ball={
      restitution: 1.0
      }  
     ball = Bodies.circle(200,100,50,option_ball);
}
function draw(){
    
  background("lavender");
  Engine.update(engine);
  rectMode(CENTER);

rect(ground.position.x,ground.position.y,800,40);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);
}