function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 10;
  this.ySpeed = 0;

  this.dir = function(x, y){
    this.xSpeed = x;
    this.ySpeed = y;
  }

  this.update = function () {
    var newPosX = this.x + this.xSpeed
    var newPosY = this.y + this.ySpeed

    this.x = limitPositionInCanvasBound(newPosX, canvas.width)
    this.y = limitPositionInCanvasBound(newPosY, canvas.height)
  }

  this.show = function() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, snakeRectSize, snakeRectSize);
  }
}
