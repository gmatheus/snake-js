function Food() {
  this.x = getRandomPosition(canvas.width)
  this.y = getRandomPosition(canvas.height)

  function getRandomPosition(axisLength) {
    // Gets random position in canvas
    var randomPosition = Math.random() * axisLength
    // Rounds value to match game unit size
    return Math.round(randomPosition / gameUnitSize) * gameUnitSize
  }

  this.update = function () {
    this.x = this.getRandomPosition(canvas.width)
    this.y = this.getRandomPosition(canvas.height)
  }

  this.show = function() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.x, this.y, gameUnitSize, gameUnitSize);
  }
}
