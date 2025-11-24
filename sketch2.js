function setup() {
  //ceateCanvas(128, 128);
  createCanvas(400, 400);
  background(0);
  
  colorMode(255, 255, 255, 1);
  
  stroke(255, 255, 255);
  strokeWeight(2);
  
  for(let x = 0; x <= 35; x += 1 )
  {
    point(random(0, 400), random(0, 400));
  }
  
  stroke(0, 0, 0);
  strokeWeight(1);
  
  fill(255)
  circle(100, 100, 100)
  
  fill("orange");
  circle(300, 50, 50)
  
  noStroke();
  
  fill("red");
  triangle(255, 175, 240, 215, 270, 215);
  triangle(240, 235, 240, 250, 230, 260);
  triangle(270, 235, 270, 250, 280, 260);
  triangle(240, 295, 240, 270, 220, 320);
  triangle(270, 295, 270, 270, 290, 320);
  
  fill("orange");
  triangle(247, 300, 263, 300, 255, 320);
  
  fill(220);
  quad(240, 215, 270, 215, 270, 295, 240, 295);
  quad(247, 295, 263, 295, 263, 300, 247, 300);
  
  fill(255);
  circle(255, 235, 20);
  
}