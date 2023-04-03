const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);

function arenaSweep() {
  let rowCount = 1;
  outer: for (let y = arena.length -1; y > 0; --y) {
    for (let x = 0; x < arena[y].length; ++x) {
      if (arena[y][x] === 0) {
        continue outer;
      }
    }

    const row = arena.splice(y, 1)[0].fill(0);
    arena.unshift(row);
    ++y;

    player.score += rowCount * 10;
    rowCount *= 2;
  }
}

// collision function
function collide(arena, player) {
  const [m, o] = [player.matrix, player.pos]; //o is for offset, m is player
  for (let y = 0; y < m.length; ++y) {
    for (let x = 0; x < m[y].length; ++x) {
      if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
        //if the index of player & arena is not zero
        return true;
      }
    }
  }
  // no collision detected
  return false;
}

// Create Matix Function
function createMatrix(w, h) {
  const matrix = [];
  while (h--) {
    matrix.push(new Array(w).fill(0));
  }
  return matrix;
}

// Tetris Pieces by Type
function createPiece(type) {
  if (type === 'I') {
    return [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ];
  } else if (type === 'L') {
    return [
      [0, 2, 0],
      [0, 2, 0],
      [0, 2, 2],
    ];
  } else if (type === 'J') {
    return [
      [0, 3, 0],
      [0, 3, 0],
      [3, 3, 0],
    ];
  } else if (type === 'O') {
    return [
      [4, 4],
      [4, 4],
    ];
  } else if (type === 'Z') {
    return [
      [5, 5, 0],
      [0, 5, 5],
      [0, 0, 0],
    ];
  } else if (type === 'S') {
    return [
      [0, 6, 6],
      [6, 6, 0],
      [0, 0, 0],
    ];
  } else if (type === 'T') {
    return [
      [0, 7, 0],
      [7, 7, 7],
      [0, 0, 0],
    ];
  }
}


function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = colors[value];
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

// Draw Function to continue drawing
function draw() {
  context.fillStyle = '#0a0a0a';
  context.fillRect(0, 0, canvas.height, canvas.width);

  drawMatrix(arena, { x: 0, y: 0 });
  drawMatrix(player.matrix, player.pos);
}

// merge arena and player function
function merge(arena, player) {
  // to copy all the value from the player into arena at correct pos
  player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        // copy the value into Arena
        arena[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
}
// Rotate Function
// 1.) Tranpose it - convert all rows into columns
// 2.) Reverse each row to get rotated Matrix
function rotate(matrix, dir) {
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < y; ++x) {
      [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
    }
  }

  if (dir > 0) {
    matrix.forEach((row) => row.reverse());
  } else {
    matrix.reverse();
  }
}


// player Drop function
function playerDrop() {
  player.pos.y++;
  //   if drop & collide means we are touching the ground
  if (collide(arena, player)) {
    player.pos.y--;
    merge(arena, player);
    playerReset();
    arenaSweep();
    updateScore();
  }
  dropCounter = 0; // if down pressed, another should not go down as well
}

function playerMove(dir) {
  player.pos.x += dir;
  if (collide(arena, player)) {
    player.pos.x -= dir;
  }
}

// Player Reset Function
function playerReset() {
  const pieces = 'ILJOTSZ';
  player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
  player.pos.y = 0;
  player.pos.x =
    (arena[0].length / 2 | 0) - // | 0 and floor
    (player.matrix[0].length / 2 | 0);
  if (collide(arena, player)) {
    arena.forEach((row) => row.fill(0));
    player.score = 0;
    updateScore();
  }
}

// Player Rotate Update Function
function playerRotate(dir) {
  const pos = player.pos.x;
  let offset = 1;
  rotate(player.matrix, dir);
  while (collide(arena, player)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > player.matrix[0].length) {
      rotate(player.matrix, -dir);
      player.pos.x = pos;
      return;
    }
  }
}

// update function
let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
  const deltaTime = time - lastTime;


  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    playerDrop();
  }
  lastTime = time;
  draw();
  requestAnimationFrame(update);
}

// update score function
function updateScore() {
  const score = document.getElementById('score');
  score.textContent= `SCORE: ${player.score}`;
}
// Keyboard Controls
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    playerMove(-1);
  } else if (event.key === 'ArrowRight') {
    playerMove(1);
  } else if (event.key === 'ArrowDown') {
    playerDrop();
    //   for Rotation
  } else if (event.key === 'q' || event.key === 'Q') {
    playerRotate(-1);
  } else if (event.key === 'w' || event.key === 'W') {
    playerRotate(1);
  }
});


const colors = [
  null,
  '#FF0D72',
  '#0DC2FF',
  '#0DFF72',
  '#F538FF',
  '#FF8E0D',
  '#FFE138',
  '#3877FF',
];

const arena = createMatrix(15, 31);

// Player constructor
const player = {
  pos: { x: 0, y: 0 },
  matrix: null,
  score: 0,
};


playerReset();
updateScore();
update();
