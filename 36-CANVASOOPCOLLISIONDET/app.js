const canvasEl = document.querySelector('canvas');
const ctx = canvasEl.getContext('2d');

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

let mouseEffect = {
  x: undefined,
  y: undefined,
};

let maxiRadius = 50;
let miniRadius = 5;

// mouseMoveEvent Listener
window.addEventListener('mousemove', (e) => {
  mouseEffect.x = e.x;
  mouseEffect.y = e.y;
});

// Run Balls
class RunBalls {
  constructor(xP, yP, xV, yV, radius, red, green, blue) {
    this.xP = xP;
    this.yP = yP;
    this.xV = xV;
    this.yV = yV;
    this.radius = radius;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  // Drawing the balls
  drawBalls = function () {
    ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    ctx.beginPath();
    ctx.arc(this.xP, this.yP, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  // Check for Collision
  updateBalls = function () {
    if (this.xP + this.radius > canvasEl.width || this.xP - this.radius < 0) {
      this.xV = -this.xV;
    }

    if (this.yP + this.radius > canvasEl.height || this.yP - this.radius < 0) {
      this.yV = -this.yV;
    }
    this.xP += this.xV;
    this.yP += this.yV;

    // mouse move effect
    if (
      mouseEffect.x - this.xP < 20 &&
      mouseEffect.x - this.xP > -20 &&
      mouseEffect.y - this.yP < 20 &&
      mouseEffect.y - this.yP > -20
    ) {
      if (this.radius < maxiRadius) {
        this.radius += 1;
      }
    } else if (this.radius > miniRadius) {
      this.radius -= 1;
    }

    this.drawBalls();
  };
}

// Array of Balls
let ballsArray = [];
for (let i = 0; i < 500; i++) {
  let radius = 30;
  let xP = Math.random() * canvasEl.width;
  let yP = Math.random() * canvasEl.height;
  let xV = (Math.random() - 0.5) * 2;
  let yV = (Math.random() - 0.5) * 2;
  let red = Math.ceil(Math.random() * 255);
  let green = Math.ceil(Math.random() * 255);
  let blue = Math.ceil(Math.random() * 255);

  ballsArray.push(new RunBalls(xP, yP, xV, yV, radius, red, green, blue));
}

// Get random color
function getRandomColor(){

}
// The Game Loop
function animateBalls() {
  requestAnimationFrame(animateBalls);
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

  for (let j = 0; j < ballsArray.length; j++) {
    ballsArray[j].updateBalls();
  }
}

animateBalls();
