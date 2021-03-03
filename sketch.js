const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine,myWorld
var boggie1,boggie2,boggie3,boggie4,boggie5
var bg

function preload() {
   bg=loadImage("bg.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    myEngine = Engine.create();
    myWorld = engine.world;

    ground=new Ground (600,380,1200,20)
   
    boggie1=new Boggie(50,170,50,50)
    boggie2=new Boggie(150,170,50,50)
    boggie3=new Boggie(250,170,50,50)
    boggie4=new Boggie(350,170,50,50)
    boggie5=new Boggie(450,170,50,50)
    boggie6=new Boggie(550,170,50,50)

    rock1=new Rock(1100,200,100,100)

    chain1=new Chain(boggie1.body,boggie2.body)
    chain2=new Chain(boggie2.body,boggie3.body)
    chain3=new Chain(boggie3.body,boggie4.body)
    chain4=new Chain(boggie4.body,boggie5.body)
    chain5=new Chain(boggie5.body,boggie6.body)
}

function draw(){

    background(bg);
    Engine.update(myEngine)

    boggie1.show()
    boggie2.show()
    boggie3.show()
    boggie4.show()
    boggie5.show()
    boggie6.show()

    rock1.show()

    ground.show()

    chain1.show()
    chain2.show()
    chain3.show()
    chain4.show()
    chain5.show()
    chain6.show()
}