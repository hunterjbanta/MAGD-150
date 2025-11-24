let ellipseX = [];
let y = [];
let justBecause = [];

function setup() {
  createCanvas(400, 400);
  
  for(let i = 0; i < 100; i++){
    ellipseX[i] = random(-1000, 200);
  }
  for(let i = 0; i < height; i++){
    y[i] = i;
  }
  justBecause[0] = mouseX;
}

function draw() {
  background('blue');
  fill('yellow');
  circle(400, 0, 100);
  fill('brown')
  rect(0, 300, 400, 100)
  
  fill(255);
  
  for(let i = 0; i < ellipseX.length; i++) {
    ellipseX[i]++;
    ellipse(ellipseX[i], y[i], 50, 20);
  }
}