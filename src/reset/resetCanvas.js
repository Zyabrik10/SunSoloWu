export default function resetCanvas(canvas, ctx, total = false) {
  if (total) ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.left = 50 + "%";
  canvas.style.top = 50 + "%";
}
