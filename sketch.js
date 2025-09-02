function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  let colors = [
    "#FF9933", // saffron
    "#FFD700", // yellow
    "#32CD32", // green
    "#FF69B4", // pink
    "#8A2BE2", // violet
    "#FF4500"  // orange-red
  ];

  let layers = 7;
  let step = 40;
  for (let i = 0; i < layers; i++) {
    let radius = 280 - i * step;
    let petals = 12 + i * 4;
    let col = colors[i % colors.length];

    drawFlowerLayer(radius, petals, col);
  }

  
  fill("#FFD700");
  ellipse(0, 0, 80, 80);
}

function drawFlowerLayer(radius, petals, col) {
  fill(col);
  noStroke();

  for (let angle = 0; angle < 360; angle += 360 / petals) {
    push();
    rotate(angle);
    ellipse(radius / 2, 0, radius, radius / 2.5);
    pop();
  }
}
