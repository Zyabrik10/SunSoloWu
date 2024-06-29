import resetCanvas from "./resetCanvas";
import resetSceneProperties from "./resetSceneProperties";

export default function totalReset({
  canvas,
  ctx,
  setFile,
  setIsImageSelected,
  setImage,
  setPixels,
  setSize,
}) {
  resetSceneProperties({
    setFile,
    setIsImageSelected,
    setImage,
    setPixels,
    setSize,
  });
  resetCanvas(canvas, ctx, true);
}
