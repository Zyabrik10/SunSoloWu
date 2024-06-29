import getNormolizedPixels from "./getNormolizedPixels";

export default function getPixels(canvas, ctx) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;
  const normolizedPixels = getNormolizedPixels(pixels, canvas);

  return normolizedPixels;
}
