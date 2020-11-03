const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine,box1,land;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 =  new Box(200,100,100,50);
    box2 = new Box(300,200,20,50)
    land =new Ground();
}

function draw(){
    background("black");
    Engine.update(engine);
    land.display();
    box2.display();
    box1.display();
     
}