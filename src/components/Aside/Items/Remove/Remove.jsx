import { useContext } from "react";
import css from "./Remove.module.css";
import { AppContext } from "../../../../consts/contexts";
import { totalReset } from "../../../../reset";

export default function Remove() {
  const {
    file: _file,
    isImageSelected: _isImageSelected,
    image: _image,
    pixels: _pixels,
    ctx: _ctx,
    canvas: _canvas,
    size: _size,
  } = useContext(AppContext);

  const setFile = _file[1];
  const setIsImageSelected = _isImageSelected[1];
  const setImage = _image[1];
  const setPixels = _pixels[1];
  const ctx = _ctx[0];
  const canvas = _canvas[0];
  const setSize = _size[1];

  function removeImage() {
    totalReset({
      canvas,
      ctx,
      setFile,
      setIsImageSelected,
      setImage,
      setPixels,
      setSize,
    });
  }

  return (
    <button className={css["button"]} onClick={removeImage}>
      Remove
    </button>
  );
}
