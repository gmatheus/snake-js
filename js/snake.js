function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = gameUnitSize;
  this.ySpeed = 0;

  this.dir = function(x, y){
    this.xSpeed = x * gameUnitSize;
    this.ySpeed = y * gameUnitSize;
  }

  this.eat = function(food) {
    return this.x === food.x && this.y === food.y
  }

  this.update = function () {
    var newPosX = this.x + this.xSpeed
    var newPosY = this.y + this.ySpeed

    this.x = limitPositionInCanvasBound(newPosX, canvas.width)
    this.y = limitPositionInCanvasBound(newPosY, canvas.height)
  }

  this.show = function() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, gameUnitSize, gameUnitSize);
  }
}
