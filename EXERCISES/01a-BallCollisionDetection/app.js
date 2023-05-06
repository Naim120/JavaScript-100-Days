const canvasEl = document.getElementById('canvas');
const ctx = canvasEl.getContext('2d');

canvasEl.width = 800;
canvasEl.height = 600;

let xPos = 400; //800/2 = center position
let yPos = 300; //600/2 = center position
let radius = 50;
let speed = 10;

// Arrow keys state
let [up, down, left, right] = [false, false, false, false];

// Arrow key event listener
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// ---Game Loop - Running 60 x per seconds the Game
function runGame() {
  requestAnimationFrame(runGame);

  clearCanvas();

  arrowInputs();

  checkCollision();

  drawBall();
}

// Clear Canvas
function clearCanvas(){
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
}

// Check collision with canvas boundaries
function checkCollision() {
  // Bottom Boundary
  if (yPos >= canvasEl.height - radius) {
    yPos = canvasEl.height - radius;
  }
  // Top Boundary
  if (yPos <= radius) {
    yPos = radius;
  }
  // Right Boundary
  if (xPos >= canvasEl.width - radius) {
    xPos = canvasEl.width - radius;
  }
  // Left Boundary
  if (xPos <= radius) {
    xPos = radius;
  }
}

// Move the ball based on arrow keys state
function arrowInputs() {
  if (up) {
    yPos = yPos - speed;
  }
  if (down) {
    yPos = yPos + speed;
  }

  if (right) {
    xPos = xPos + speed;
  }
  if (left) {
    xPos = xPos - speed;
  }
}

function drawBall() {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI);
  ctx.fill();
}

// Handle KeyDown Event
function keyDown(e) {
  if (e.key === 'ArrowUp') {
    up = true;
  }

  if (e.key === 'ArrowDown') {
    down = true;
  }

  if (e.key === 'ArrowLeft') {
    left = true;
  }
  if (e.key === 'ArrowRight') {
    right = true;
  }
}

// Handle KeyUp Event
function keyUp(e) {
  if (e.key === 'ArrowUp') {
    up = false;
  }

  if (e.key === 'ArrowDown') {
    down = false;
  }

  if (e.key === 'ArrowLeft') {
    left = false;
  }

  if (e.key === 'ArrowRight') {
    right = false;
  }
}

// Start the Game Loop
runGame();
