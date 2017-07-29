function drawCanvasBG() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function limitPositionInCanvasBound(position, axisLength) {
  return Math.max(Math.min(position, (axisLength - snakeRectSize)), 0)
}
