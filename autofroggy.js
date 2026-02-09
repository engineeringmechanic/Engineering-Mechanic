// gunSketch.js (p5.js)
// Draws a simple stylized gun icon on a canvas (visual only).

let hover = false;

function setup() {
  const canvas = createCanvas(420, 260);
  canvas.parent("autofroggy"); // change to your div id if needed
  textFont("sans-serif");
}

function draw() {
  background("#0d1b2a");

  // hover if mouse is over the gun body area
  hover = mouseX > 70 && mouseX < 360 && mouseY > 70 && mouseY < 190;

  // subtle glow on hover
  if (hover) {
    noStroke();
    fill(119, 141, 169, 60); // #778da9 with alpha
    rect(55, 55, 330, 150, 18);
  }

  drawGun(hover);

  // label text
  noStroke();
  fill("#e0e1dd");
  textSize(16);
  textAlign(CENTER);
  text(hover ? "pew!" : "hover me", width / 2, 235);
}

function drawGun(isHover) {
  // palette
  const metal = color("#e0e1dd");
  const darkMetal = color("#778da9");
  const accent = isHover ? color("#778da9") : color("#1b263b");

  // barrel + slide
  noStroke();
  fill(darkMetal);
  rect(120, 85, 210, 42, 10);          // slide
  rect(320, 95, 35, 22, 6);            // barrel tip

  // muzzle hole
  fill("#0d1b2a");
  ellipse(345, 106, 10, 10);

  // ejection port detail
  fill(metal);
  rect(210, 93, 55, 16, 4);

  // frame
  fill(accent);
  rect(105, 120, 240, 38, 10);

  // trigger guard
  fill(darkMetal);
  beginShape();
  vertex(190, 158);
  vertex(240, 158);
  vertex(252, 178);
  vertex(232, 196);
  vertex(190, 196);
  vertex(176, 178);
  endShape(CLOSE);

  // trigger
  fill(metal);
  rect(216, 165, 10, 22, 5);

  // grip
  fill(darkMetal);
  beginShape();
  vertex(150, 158);
  vertex(195, 158);
  vertex(185, 240);
  vertex(132, 240);
  endShape(CLOSE);

  // grip texture lines
  stroke(metal);
  strokeWeight(2);
  for (let y = 170; y <= 230; y += 10) {
    line(140, y, 185, y);
  }

  // small sight
  noStroke();
  fill(metal);
  rect(135, 78, 20, 10, 4);

  // tiny highlight
  fill(255, 255, 255, 30);
  rect(130, 90, 160, 10, 10);
}
