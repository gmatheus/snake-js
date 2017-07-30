function drawCanvasBG() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function limitPositionInCanvasBound(position, axisSize) {
  return Math.max(Math.min(position, (axisSize - gameUnitSize)), 0)
}
