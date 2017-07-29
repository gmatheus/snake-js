function setup() {
  drawCanvasBG()
  snake = new Snake();
}

function draw() {
  drawCanvasBG()
  snake.update()
  snake.show()
}

function keyDown(e) {
  switch (e.keyCode) {
    case 37:
      snake.dir(-10, 0)
      break;
    case 38:
      snake.dir(0, -10)
      break;
    case 39:
      snake.dir(10, 0)
      break;
    case 40 :
      snake.dir(0, 10)
      break;
    default:
    break;
  }
}

function init(){
  setup()
  document.addEventListener('keydown', keyDown)
  setInterval(draw, 80)
}

init()
