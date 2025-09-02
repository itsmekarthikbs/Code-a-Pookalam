# Code-a-Pookalam

A creative Pookkalam (flower rangoli) made using **p5.js**.  
This project celebrates tradition with code, generating colorful layered floral patterns on a digital canvas.  

---

## 🎯 About the Project
- Built with [p5.js](https://p5js.org/), a JavaScript library for creative coding.  
- Uses geometric layers of petals in vibrant Onam-inspired colors.  
- Fully runs in the browser — no installation needed.  

---

## 🖼️ Preview
 
<img width="715" height="708" alt="Screenshot 2025-09-02 215720" src="https://github.com/user-attachments/assets/f6af1bf5-9489-4557-9c2f-f52e9e3a9950" />

---

## 🧩 The Code
```javascript
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

  let layers = 7; // number of rings
  let step = 40;  // size difference between rings

  for (let i = 0; i < layers; i++) {
    let radius = 280 - i * step;
    let petals = 12 + i * 4;   // more petals as we go inwards
    let col = colors[i % colors.length];

    drawFlowerLayer(radius, petals, col);
  }

  // Central flower
  fill("#FFD700");
  ellipse(0, 0, 80, 80);
}

function drawFlowerLayer(radius, petals, col) {
  fill(col);
  noStroke();

  for (let angle = 0; angle < 360; angle += 360 / petals) {
    push();
    rotate(angle);
    ellipse(radius / 2, 0, radius, radius / 2.5); // petal shape
    pop();
  }
}
