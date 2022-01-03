const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundimage;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    spaceShip = new SpaceShip (500,20);
     
}
function preload(){
    backgroundimage=loadImage("background.png");
}
function draw(){
    background(backgroundimage);
    Engine.update(engine);
    spaceShip.display();
    
}