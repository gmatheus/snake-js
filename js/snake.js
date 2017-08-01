function Snake() {
  this.x = 0
  this.y = 0
  this.xSpeed = gameUnitSize
  this.ySpeed = 0
  this.tail = []

  // Adds a new position in tail arrray
  this.tail.push({x: this.x, y: this.y})

  this.hitItself = function() {
    var hitPosition = this.tail.filter((function(p) {
      return p.x === this.x && p.y === this.y
    }).bind(this))

    return !!hitPosition.length
  }

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

  this.die = function() {
    var hitBoundaries = !isInCanvasBound(this.x, canvas.width) ||
        !isInCanvasBound(this.y, canvas.height)

    return hitBoundaries || this.hitItself()
  }

  this.update = function () {
    // Adds a new position in tail arrray
    this.tail.push({x: this.x, y: this.y})
    // Removes last unit of tail (first element in array)
    this.tail.shift()

    this.x = this.x + this.xSpeed
    this.y = this.y + this.ySpeed
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
