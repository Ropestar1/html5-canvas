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
  if (!isDrawing) return; //stop the fn from running when mouse isn't down.
  console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // NOTE: Destructuring an array; below line is ES6 way of (re)assigning multiple variables at once.
  [lastX, lastY] = [e.offsetX, e.offsetY]
  // NOTE: above line of code equivalent to below (2) lines of code.
  // lastX = e.offsetX;
  // lastY = e.offsetY;
}

canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
