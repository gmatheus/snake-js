function Snake() {
  this.x = 0
  this.y = 0
  this.xSpeed = gameUnitSize
  this.ySpeed = 0
  this.tail = []

  // Adds a new position in tail arrray
  this.tail.push({x: this.x, y: this.y})

  this.dir = function(x, y){
    this.xSpeed = x * gameUnitSize;
    this.ySpeed = y * gameUnitSize;
  }

  this.eat = function(food) {
    if (this.x === food.x && this.y === food.y) {
      // Adds a new position in tail array
      this.tail.push({x: this.x, y: this.y})
      return true
    }
    return false
  }

  this.update = function () {
    // Adds a new position in tail arrray
    this.tail.push({x: this.x, y: this.y})
    // Removes last unit of tail (first element in array)
    this.tail.shift()

    var newPosX = this.x + this.xSpeed
    var newPosY = this.y + this.ySpeed

    this.x = limitPositionInCanvasBound(newPosX, canvas.width)
    this.y = limitPositionInCanvasBound(newPosY, canvas.height)
  }

  this.show = function() {
    ctx.fillStyle = 'red';

    // Renders tail
    for (var i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, gameUnitSize, gameUnitSize)
    }

    // Renders head
    ctx.fillRect(this.x, this.y, gameUnitSize, gameUnitSize)
  }
}
