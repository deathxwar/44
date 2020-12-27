const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player;
var zombie;

function preload(){
    
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    background(0)
   // zombie=new Zombie(250,200)
    player = new Player(220,220)
    
}

function draw(){
    //zombie.display();
    player.display();
    drawSprites();
}   