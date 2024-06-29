import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../consts/contexts";
import { validateImage } from "../../middleware/";
import { convertToBase64, getPixels } from "../../image_functions/";
import css from "./Canvas.module.css";

export default function Canvas({ canvasClasses = "" }) {
  const {
    isImageSelected: _isImageSelected,
    file: _file,
    image: _image,
    pixels: _pixels,
    canvas: _canvas,
    ctx: _ctx,
    size: _size,
  } = useContext(AppContext);

  const [canvas, setCanvas] = _canvas;
  const [ctx, setCtx] = _ctx;
  const [isImageSelected, setIsImageSelected] = _isImageSelected;
  const file = _file[0];
  const [image, setImage] = _image;
  const [pixels, setPixels] = _pixels;
  const size = _size[0];

  const canvasElement = useRef();

  useEffect(() => {
    if (!canvasElement["current"]) return;
    const canvas = canvasElement.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    setCanvas(canvas);
    setCtx(ctx);
  }, [setCanvas, setCtx]);

  useEffect(() => {
    if (!(isImageSelected && file)) return;

    async function workWithFile(file) {
      const base64Image = await convertToBase64(file);
      const image = new Image();
      image.src = base64Image;

      image.addEventListener("load", () => {
        const isValid = validateImage(image);

        if (isValid) {
          setImage(image);
        } else {
          alert(
            `Sorry, but ${image.width}/${image.height} is not allowed size`
          );
          setIsImageSelected(false);
        }
      });
    }

    workWithFile(file);
  }, [isImageSelected, file, setImage, setIsImageSelected]);

  // get pixels
  useEffect(() => {
    if (!image) return;

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    const pixels = getPixels(canvas, ctx);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPixels(pixels);
  }, [image, ctx, canvas, setPixels]);

  // !!! Will re-render also canvas, daw pixels
  useEffect(() => {
    if (pixels.length === 0) return;
    canvas.width = image.width * size;
    canvas.height = image.height * size;

    for (let y = 0; y < pixels.length; y++) {
      for (let x = 0; x < pixels[y].length; x++) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${pixels[y][x][0]}, ${pixels[y][x][1]}, ${pixels[y][x][2]}, ${pixels[y][x][3]})`;
        ctx.fillRect(size * x, size * y, size, size);
      }
    }
  }, [pixels, size, ctx, canvas, image]);

  return (
    <canvas
      className={`${css["editor"]} ${canvasClasses}`}
      ref={canvasElement}
    ></canvas>
  );
}
