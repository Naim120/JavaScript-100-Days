const canvasEl = document.querySelector('canvas');
const canvasContext = canvasEl.getContext('2d');
const ctx = canvasEl.getContext('2d');

// canvasEl.height = 600;
// canvasEl.width = 800;

canvasContext.fillStyle = 'red';
canvasContext.fillRect(200, 150, 80, 80);
canvasContext.fillRect(350, 150, 80, 80);

// -----------Drawing Randomly Squares & Rectangle---------
canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;
// ---Random Location
for(let i = 1; i < 11; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    canvasContext.fillStyle = "red"
    canvasContext.fillRect(x,y,50,50)
}

// ---Random Location & Color
for (let i = 1; i < 51; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  const randomColor = getRandomColor();
  canvasContext.fillStyle = randomColor;
  canvasContext.fillRect(x, y, 50, 50);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF'; //16
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// ---Random Location, Color & Size
for (let i = 1; i < 21; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let wd = Math.random() * 200 // max width is 200px;
    let ht = Math.random() * 200 // max height is 200px;

    const randomColor = getRandomColor();
    canvasContext.fillStyle = randomColor;
    canvasContext.fillRect(x, y, wd, ht);
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// ---Drawing Lines
canvasContext.beginPath();
canvasContext.moveTo(250, 300) //points x, y where to start the line
canvasContext.lineTo(500, 380) //points x, y where to end the line
canvasContext.strokeStyle = "red"
canvasContext.stroke();
// ----Drawing Arcs
// mathisfun.com/geometry/radians.html
canvasContext.beginPath();
canvasContext.arc(750, 350, 50, 0, Math.PI, true);
canvasContext.arc(900, 500, 50, 0, Math.PI); // false
canvasContext.stroke();

// ---------Drawing Circle with text
// Set the fill style
ctx.fillStyle = "pink";

// // Draw a circle
ctx.beginPath();
ctx.arc(500, 300, 50, 0, 2 * Math.PI);
ctx.fill();

// Set the text properties
ctx.fillStyle = "red";
ctx.font = "bold 20px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// Draw the text at the center of the circle
ctx.fillText("Hello", 500, 300);

// ----------Drawing Lines Randomly
for (let i = 0; i < 20; i++) {
  // Starting Position
  let xStart = Math.random() * window.innerWidth;
  let yStart = Math.random() * window.innerHeight;
  // Ending Position
  let xEnd = Math.random() * window.innerWidth;
  let yEnd = Math.random() * window.innerHeight;
  // Random Lines
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.strokeStyle = 'red';
  ctx.stroke();
//   Random Arcs / Circles
  let radius = (Math.random() * window.innerWidth)/10;
  ctx.beginPath();
  ctx.arc(xStart, yStart, radius, 0, 2* Math.PI);
  ctx.strokeStyle="red";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(xStart, yStart, radius, 0, Math.PI);
  ctx.strokeStyle="blue";
  ctx.stroke();
}
