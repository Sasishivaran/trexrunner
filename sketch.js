

var trex_img, trex;


//is used to load the images and sounds in your game
function preload()
{
trex_img=loadAnimation("trex1.png","trex3.png","trex4.png");

}

//to set your initial environment i.e the canvas
function setup()
{
createCanvas(600,200);


trex=createSprite(100,170,20,20);
trex.addAnimation("trexrunning",trex_img);
trex.scale=0.5

}


function draw()
{
background("lightblue");
drawSprites();

}
