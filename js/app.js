function draw() {
  drawCanvasBG()

  if (snake.die()) {
    endGame('You died :(')
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
    case 37: // LEFT
      snake.dir(-1, 0)
      break;
    case 38: // UP
      snake.dir(0, -1)
      break;
    case 39: // RIGHT
      snake.dir(1, 0)
      break;
    case 40: // DOWN
      snake.dir(0, 1)
      break;
    default:
    break;
  }
}

function initGame(){
  menu.classList.add('_hidden')

  drawCanvasBG()
  snake = new Snake()
  food = new Food()
  gameIntervalLoop = setInterval(draw, 80)
}

function endGame(message) {
  clearInterval(gameIntervalLoop)

  messageSpan.innerHTML = message
  messageSpan.classList.remove('_hidden')
  menu.classList.remove('_hidden')
}

startButton.addEventListener('click', initGame)
document.addEventListener('keydown', keyDown)
