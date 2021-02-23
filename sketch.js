const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, block1;
var score=0;


function preload() {
   polygon_img= loadImage("polygon.png"); 
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(390,350,280,10);
    

    block1 = new Block(300,330,30,40);
    block2 = new Block(330,330,30,40);
    block3 = new Block(360,330,30,40);
    block4 = new Block(390,330,30,40);
    block5 = new Block(420,330,30,40);
    block6 = new Block(450,330,30,40);
    block7 = new Block(480,330,30,40);

    block8 = new Block(330,280,30,40);
    block9 = new Block(360,280,30,40);
    block10 = new Block(390,280,30,40);
    block11 = new Block(420,280,30,40);
    block12 = new Block(450,280,30,40);

    block13 = new Block(360,240,30,40);
    block14 = new Block(390,240,30,40);
    block15 = new Block(420,240,30,40);
    
    block16 = new Block(390,200,30,40);

    ground1 = new Ground(790,250,280,10);
    

    block21 = new Block(700,230,30,40);
    block22 = new Block(730,230,30,40);
    block23 = new Block(760,230,30,40);
    block24 = new Block(790,230,30,40);
    block25 = new Block(820,230,30,40);
    block26 = new Block(850,230,30,40);
    block27 = new Block(880,230,30,40);

    block28 = new Block(730,180,30,40);
    block29 = new Block(760,180,30,40);
    block210 = new Block(790,180,30,40);
    block211 = new Block(820,180,30,40);
    block212 = new Block(850,180,30,40);

    block213 = new Block(760,140,30,40);
    block214 = new Block(790,140,30,40);
    block215 = new Block(820,140,30,40);
    
    block216 = new Block(790,100,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

   
   slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    //background(0);
    getBackgroundImg();

    
    Engine.update(engine);

    
    textSize(30);
    fill("white");
    text("SCORE : " + score, 750, 40);

    strokeWeight(4);
    
    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
 
    fill("blue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();

    fill("green");
   block13.display();
   block14.display();
   block15.display();

   block13.score();
   block14.score();
   block15.score();

   fill("pink");
   block16.display();

   block16.score();
    
    ground.display();

    fill("red");
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
 
    fill("blue");
    block28.display();
    block29.display();
    block210.display();
    block211.display();
    block212.display();

    block28.score();
    block29.score();
    block210.score();
    block211.score();
    block212.score();

    fill("green");
   block213.display();
   block214.display();
   block215.display();

   block213.score();
   block214.score();
   block215.score();

   fill("pink");
   block216.display();

   block216.score();
    
    ground1.display();

    imageMode(CENTER);
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
   

  
   slingshot.display();    
}

 function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
} 

function keyPressed(){
if(keyCode=== 32){
    slingshot.attach(this.polygon);
}

}

async function getBackgroundImg(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON= await response.json();
    var datetime = responseJSON.datetime;
    var hour= datetime.slice(11,13);

    if (hour >=06 && hour <=19){
        background(100);
    }
    else {
        background(225);
    }
}