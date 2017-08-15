var canvas = document.getElementById('canvas');
var ctx = canvas.msGetInputContext('2d');

var sizeInput = document.getElementById('size');
var changeSize = document.getElementById('change-size');
var scoreLabel = document.getElementById('score');

var score = 0;
var size = 4;
var width = canvas.width / size - 5; 

var cells = [];
var fontSize; 
var loss = false; 

startGame();

function cell(row, coll) {
  this.value = 0;
  this.x = coll * width + 5 * (coll + 1);
  this.y = row * width + 5 * (row + 1); 
}

function createCells() {
  for (var i = 0; i <size; i++) {
    cells[i] = [];
    for (var j = 0; j <size; j++) {
      cells[i][j] = new cell(i, j);
    }
  }
}

function drawCell(cell) {
  ctx.beginPath();
  ctx.rect(cell.x, cell.y, width, width);
  
  switch (cell.value) {
    case 0 : ctx.fillStyle = '#FF0000'; break;
    case 2 : ctx.fillStyle = '#FF0000'; break;
    case 4 : ctx.fillStyle = '#FF0000'; break;
    case 8 : ctx.fillStyle = '#FF0000'; break;
    case 16 : ctx.fillStyle = '#FF0000'; break;
    case 32 : ctx.fillStyle = '#FF0000'; break;
    case 64 : ctx.fillStyle = '#FF0000'; break;
    case 128 : ctx.fillStyle = '#FF0000'; break;
    case 256 : ctx.fillStyle = '#FF0000'; break;
    case 512 : ctx.fillStyle = '#FF0000'; break;
    case 1024 : ctx.fillStyle = '#FF0000'; break;
    case 2048 : ctx.fillStyle = '#FF0000'; break;
    case 4096 : ctx.fillStyle = '#FF0000'; break;
    default: ctx.fillStyle = '#';
  }
}