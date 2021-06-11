var canvas,bg;
var together;
var cat, cat1,cat2;
var mouse, mouseImg1,mouseImg2;

function preload() {
    garden_img = loadImage("images/garden.png");
    cat_img1 = loadAnimation("images/cat1.png");
    cat_img2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat_img3 = loadAnimation("images/cat4.png");
    mouse_img = loadAnimation("images/mouse1.png");
    mouse_img1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse_img2 = loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(730,715,50,50);
    cat.addAnimation("catstanding",cat_img1);
    cat.scale = 0.08;

    jerry = createSprite(230,715,50,50);
    jerry.addAnimation("sleeping",mouse_img);
    jerry.scale = 0.08; 
                
}

function draw() {

    background(garden_img);

    if(cat.x - jerry.x < (cat.width - jerry.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", cat_img3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        jerry.addAnimation("jerryLastImage", mouse_img2);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", cat_img2);
        cat.changeAnimation("catRunning");
        
        jerry.addAnimation("jerryTeasing", mouse_img);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}