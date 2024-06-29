export default function getNormolizedPixels(pixels, canvas) {
  const arr = [];

  for (let i = 0; i < canvas.height; i++) {
    arr[i] = [];

    for (let j = 0; j < canvas.width; j++) {
      const pixelIndex = i * canvas.width * 4 + j * 4;

      const red = pixels[pixelIndex];
      const green = pixels[pixelIndex + 1];
      const blue = pixels[pixelIndex + 2];
      const alpha = pixels[pixelIndex + 3];

      arr[i].push([red, green, blue, alpha]);
    }
  }

  return arr;
}
