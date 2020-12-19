const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird1;

function setup(){
    var canvas = createCanvas(1600,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,100);
    box2 = new Box(240,300,50,50);
    box3 = new Box(280,500,50,50);
    box4 = new Box(320,700,50,100);
    box5 = new Box(360,900,50,50);
    pig1 = new Pig(500,20);
    pig2 = new Pig(1200,20);
    bird1 = new Bird(40,400);
    log1=new Log(600,800,400,400,PI/2)
    log2=new Log(600,800,400,400,-PI/2)
    log3=new Log(600,800,400,400,PI/7)
    log4=new Log(600,800,400,400,-PI/7)
    ground = new Ground(200,height,1600,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    pig1.display();
    pig2.display();
    bird1.display();

    ground.display();
}