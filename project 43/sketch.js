var hour, minute, second;

hr = hour();
text('Current hour:\n' + h, 5, 50);
mn = minute();
text('Current minute: \n' + m, 5, 50);
sc = second();
text('Current second: \n' + s, 5, 50);

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  let c = map(mouseX, 0, width, 0, 175);
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
  push();
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}