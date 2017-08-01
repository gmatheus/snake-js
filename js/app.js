function setup() {
  drawCanvasBG()
  snake = new Snake()
  food = new Food()
}

function draw() {
  drawCanvasBG()

  if (snake.die()) {
    // Runs setup() againto reset game
    setup()
  }

  if (snake.eat(food)) {
    food.update()
  }
  food.show()

  snake.update()
  snake.show()
}

function keyDown(e) {
  switch (e.keyCode) {
    case 37:
      snake.dir(-1, 0)
      break;
    case 38:
      snake.dir(0, -1)
      break;
    case 39:
      snake.dir(1, 0)
      break;
    case 40 :
      snake.dir(0, 1)
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
