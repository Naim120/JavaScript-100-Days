const canvasEl = document.querySelector('canvas');
const ctx = canvasEl.getContext('2d');

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

const starsColor = '#ececec';
const starsNumber = 800;
const size = 0.005; //max size as fraction of the screen width;
const speed = 0.05; // fraction of screen width per second

// ---------------SETTING UP THE STARS - THE GAME LOOP
let stars = [];
let starsSpeed = speed * canvasEl.width;
// velocity = magnitude(speed) & direction
let horVelocity = starsSpeed * randomSign() * Math.random();
// a=sqrt(c^2 - b^2);
let verVelocity =
  Math.sqrt(Math.pow(starsSpeed, 2) - Math.pow(horVelocity, 2)) * randomSign();

// Ramdomize the Stars Speed, Size and Location
for (let i = 0; i < starsNumber; i++) {
  let speedBoost = Math.random() * 1.5 + 0.3; //max is 3 & min is .5
  stars[i] = {
    starRadius: (Math.random() * size * canvasEl.width) / 2, //for smaller sizes
    horPosition: Math.floor(Math.random() * canvasEl.width),
    verPosition: Math.floor(Math.random() * canvasEl.height),
    horVelocity: horVelocity * speedBoost,
    verVelocity: verVelocity * speedBoost,
  };
}

// The Animation Loop - First Frame
let timeDiff,
  timeLast = 0;
requestAnimationFrame(runStars);

// The Animation Loop - Second Frame
function runStars(timeNow) {
  timeDiff = timeNow - timeLast;
  timeLast = timeNow;

  // clear the canvas before drawing the stars
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

  // Drawing the Stars
  ctx.fillStyle = starsColor;
  for (let i = 0; i < starsNumber; i++) {
    ctx.beginPath();
    ctx.arc(
      stars[i].horPosition,
      stars[i].verPosition,
      stars[i].starRadius,
      0,
      2 * Math.PI
    );
    ctx.fill();

    // Update stars horizontal position
    stars[i].horPosition += stars[i].horVelocity * timeDiff * 0.001; //in msec

    // Repositioning /Redrawing Stars on its Opposite Side (Left / Right)
    if (stars[i].horPosition < 0 - stars[i].starRadius) {
      stars[i].horPosition = canvasEl.width + stars[i].starRadius; //rightmost
    } else if (stars[i].horPosition > canvasEl.width + stars[i].starRadius) {
      stars[i].horPosition = 0 - stars[i].starRadius; //leftmost
    }

    // Update stars Vertical Position
    stars[i].verPosition += stars[i].verVelocity * timeDiff * 0.001;

    // Repositioning /Redrawing Stars on its Opposite Side (Top / Bottom)
    if (stars[i].verPosition < 0 - stars[i].starRadius) {
      stars[i].verPosition = canvasEl.height + stars[i].starRadius; //bottommost
    } else if (stars[i].verPosition > canvasEl.height + stars[i].starRadius) {
      stars[i].verPosition = 0 - stars[i].starRadius; //topmost
    }
  }
  requestAnimationFrame(runStars);
  // Alternative Way - setInterval(runStars, 1000 / 60)
}

// Random Sign Function
function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1;
}
