function setup() {
  createCanvas(300, 300);
  angleMode(DEGREES);
}

function draw() {
  background(240);

  // check if mouse is near the guy
  const hovering =
    mouseX > 110 && mouseX < 190 &&
    mouseY > 40 && mouseY < 240;

  stroke(0);
  strokeWeight(4);
  noFill();

  // head
  ellipse(150, 70, 50, 50);

  // body
  line(150, 95, 150, 180);

  // left arm (static)
  line(150, 120, 110, 150);

  // right arm (waves on hover)
  push();
  translate(150, 120); // shoulder pivot
  rotate(hovering ? sin(frameCount * 6) * 30 : 0);
  line(0, 0, 40, 30);
  pop();

  // legs
  line(150, 180, 120, 240);
  line(150, 180, 180, 240);

  // hint text
  noStroke();
  fill(80);
  textAlign(CENTER);
  textSize(14);
  text(hovering ? "👋 hey!" : "hover me", width / 2, 280);
