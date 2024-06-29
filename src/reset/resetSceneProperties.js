export default function resetSceneProperties({
  setFile,
  setIsImageSelected,
  setImage,
  setPixels,
  setSize,
}) {
  setFile(undefined);
  setIsImageSelected(false);
  setImage(undefined);
  setPixels([]);
  setSize(1);
}
