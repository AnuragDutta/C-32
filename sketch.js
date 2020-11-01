const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bgimg, backgroundImage

function preload(){
    getbackgroundImage()
}




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(265,50);

    platform = new Ground(150,305,300,170)


    sling = new Catapault(bird.body,{x : 265, y : 50})

}

function draw(){
    if(backgroundImage){
        background(backgroundImage);
    }
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    sling.display()
}

function keyPressed(){
    if(keyCode===32){
        bird.trajectory = []
        sling.attach(bird.body)
    }
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body , {x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling.fly()
}

async function getbackgroundImage(){
    var response = await fetch ('https://worldtimeapi.org/api/timezone/Asia/Tokyo')
    var responseJSON = await response.json()
    var hour = responseJSON.datetime.slice(11,13)
    console.log(hour)
    if(hour >= 06 && hour<= 19){
        bgimg = "sprites/bg.png"
    }
    else{
        bgimg = "sprites/bg2.jpg"
    }
backgroundImage = loadImage(bgimg)
}