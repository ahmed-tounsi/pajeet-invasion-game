let enemies = [];
let health = 100;
let timeu = 2000;
let score = 0;
let cnv;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  cnv.position(x);
}
function preload() {
    img = loadImage('assets/player.svg');
    img1 = loadImage('assets/pajeet1.png');
    img2 = loadImage('assets/pajeet2.png');
    img3 = loadImage('assets/pajeet3.png');
    img4 = loadImage('assets/pajeet4.png');
    img5 = loadImage('assets/pajeet5.png');
    img6 = loadImage('assets/pajeet6.png');
}
function setup() {
   cnv = createCanvas(900, windowHeight);
   centerCanvas();
   hello = new player();
   setTimeout(newEnemies, 3000);
}
function windowResized() {
  centerCanvas();
  resizeCanvas(900, windowHeight);
}
function draw() {
  background(149,106,55);
  fill(0,100);
    for(var i = 0;i < enemies.length;i++){
       enemies[i].show();
       enemies[i].move(); 
       if (enemies[i].y >= height && enemies[i].y <= height+14 ){
        health -=5;
      }
       if ((enemies[i].y <= height) && (enemies[i].y + (enemies[i].size)/2 >= hello.y-10) && (enemies[i].x+ enemies[i].size > hello.x) && (enemies[i].x  <hello.x +(hello.lineWidth*2))){
        enemies.splice(i,1);
        score += 1;
     }
    
  }
  hello.showu();
  textAlign(LEFT);
  textSize(20);
  text("Pajeet percentage:"+(100-health)+"%", 5, 20);
  text("Pajeets blocked:"+score, 5, 50);
  
  
  
  if (keyIsDown(LEFT_ARROW) && hello.x >0) {
    hello.x -= 15;
  }
  if (keyIsDown(RIGHT_ARROW)&& hello.x < width-hello.size) {
    hello.x += 15;
  }
  if (health <= 0) {
    health = 0;
    textSize(50);
    textAlign(CENTER);
    text("Implying programming is full of pajeets.\nYou failed!\nYour score is:"+(score*5),width/2,(height/2)-100);
    textSize(30);
    textAlign(CENTER);
    text("press space to play again\nalso ure mom gay lole",width/2,(height/2)+100);
  }
  
}
function keyPressed() {
  if(keyCode == 32 && health <= 0){
  health = 100;
  score = 0;
  timeu = 2000;
  setTimeout(newEnemies, timeu);
  }
}
function player() {
  this.size = 100;
  this.x = width/2;
  this.y = height-(this.size+10);
  this.img = img;
  this.lineWidth = 50;
  this.showu = function (){
    image(this.img ,this.x, this.y, this.size ,this.size);
    strokeWeight(15); // thicc
    line(this.x,this.y-10, this.x+(this.lineWidth*2) , this.y-10);
  }
}
function newEnemies(){
  if (health > 0){
  var e = new enemy(random(0,width-90),random([img1,img2,img3,img4,img5,img6]),random(5,16));
  enemies.push(e);
  setTimeout(newEnemies, timeu);
  if (timeu > 625){
     timeu -= 25;
    }  
  }
}

function enemy(x,imgu,s){
  this.speed = s;
  this.x = x;
  this.y = -10;
  this.size = 100;
  this.show = function (){
   image(imgu,this.x, this.y, this.size, this.size);
   
  }
  this.move = function(){
    this.y += this.speed;
  }
}
