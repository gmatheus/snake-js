function drawCanvasBG() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function isInCanvasBound(position, axisSize) {
  return position >= 0 && position < axisSize
}
