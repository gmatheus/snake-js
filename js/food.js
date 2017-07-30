function Food() {
  this.x = getRandomPosition(canvas.width)
  this.y = getRandomPosition(canvas.height)

  function getRandomPosition(axisSize) {
    // Gets random position in canvas
    var randomPosition = Math.random() * (axisSize - gameUnitSize)
    // Rounds value to match game unit size
    return Math.round(randomPosition / gameUnitSize) * gameUnitSize
  }

  this.update = function () {
    this.x = getRandomPosition(canvas.width)
    this.y = getRandomPosition(canvas.height)
  }

  this.show = function() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.x, this.y, gameUnitSize, gameUnitSize);
  }
}
