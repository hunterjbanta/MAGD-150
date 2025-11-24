let x;
let y;
let speed = 2

function setup() {
  createCanvas(400, 400);
  
  frameRate(60)
  
  x = random(400);
  y = random(400);
}

function draw() {
  
  background(220);
  
  fill(0);
  circle(x, y, 100);

  if (x > width + 50) {
    x = random(400);
  } else {
    x = x + speed;
  }
  
  if (y > height + 50) {
    y = random(400);
  } else {
    y = y + speed;
  }
  
}