const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// creating a variable so we can indicate when drawing is occurring (like on a click and hold)
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  // if (!isDrawing) return; //stop the fn from running when mouse isn't down.
  console.log(e);
}

canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mousedown', () => isDrawing = true);
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);
