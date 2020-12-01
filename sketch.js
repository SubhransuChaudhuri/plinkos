const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var floor;

var score = 0;
var count = 5;

var particle;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300 ;

function setup() {
createCanvas(800, 800);

engine = Engine.create();
world = engine.world;

floor = new Ground(400, 780, 800, 40);


for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));  
}

for (var j = 75; j <=width; j = j + 50) {
  plinkos.push(new Plinko(j, 75));  
}

for (var j = 50; j <=width-10; j = j + 50) {
  plinkos.push(new Plinko(j, 175));  
}

for (var j = 75; j <=width; j = j + 50) {
  plinkos.push(new Plinko(j, 275));  
}

for (var j = 50; j <=width-10; j = j + 50) {
  plinkos.push(new Plinko(j, 375)); 
}

//Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine)
  
  floor.display();

  
for(var k = 0; k<divisions.length; k++){
  divisions[k].display();
}

if(frameCount%60 === 0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));   
}

for(var i = 0; i<particles.length; i++){
  particles[i].display();
}

for(var j = 0; j<plinkos.length; j++){
  plinkos[j].display();
}

text("Score:" + score, 150, 50);
text("turns:" + count, 500, 50);

if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
      }

  drawSprites()
}