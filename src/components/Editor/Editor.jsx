import css from "./Editor.module.css";
import InputFile from "../InputFile/InputFile";
import Canvas from "../Canvas/Canvas";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../consts/contexts";
import { totalReset } from "../../reset";
import Info from "../Info/Info";

export default function Editor() {
  const {
    isImageSelected: _isImageSelected,
    canvas: _canvas,
    size: _size,
    ctx: _ctx,
    file: _file,
    image: _image,
    pixels: _pixels,
  } = useContext(AppContext);

  const [isImageSelected, setIsImageSelected] = _isImageSelected;
  const canvas = _canvas[0];
  const setSize = _size[1];
  const ctx = _ctx[0];
  const setFile = _file[1];
  const setPixels = _pixels[1];
  const setImage = _image[1];

  let isFirstRendered = useRef(false);

  const editorElement = useRef();

  useEffect(() => {
    if (!canvas && !isFirstRendered.current) return;
    isFirstRendered.current = true;

    const coor = {
      x: undefined,
      y: undefined,
    };
    const offset = {
      x: undefined,
      y: undefined,
    };
    let isMouseDown = false;

    editorElement.current.addEventListener(
      "mousedown",
      ({ target, offsetX, offsetY }) => {
        if (target.tagName !== "CANVAS") return;
        isMouseDown = true;

        offset.x = offsetX;
        offset.y = offsetY;
      }
    );

    editorElement.current.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    editorElement.current.addEventListener("mousemove", ({ x, y }) => {
      const editorProp = editorElement.current.getBoundingClientRect();
      coor.x = x - editorProp.x;
      coor.y = y - editorProp.y;

      if (!isMouseDown) return;
      canvas.style.left = x - editorProp.x - offset.x + canvas.width / 2 + "px";
      canvas.style.top = y - editorProp.y - offset.y + canvas.height / 2 + "px";
    });

    window.addEventListener("keydown", ({ ctrlKey, altKey, key }) => {
      if (altKey && key === "l") {
        setSize((size) => size + 0.5 * size);
      } else if (altKey && key === "k") {
        setSize((size) => {
          const newSize = size - 0.5 * size;
          return newSize > 0 ? newSize : size;
        });
      } else if (altKey && key === "0") {
        setSize(1);
        canvas.style.left = 50 + "%";
        canvas.style.top = 50 + "%";
      } else if (altKey && key === "a") {
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
    });
  }, [canvas, setSize, ctx, setFile, setImage, setIsImageSelected, setPixels]);

  return (
    <div className={css["editor-box"]} ref={editorElement}>
      <InputFile
        title="Choose Image"
        buttonClass={`${css["file-input-button"]} ${
          !isImageSelected ? css["active"] : ""
        }`}
        input_id="editor_input"
      />
      <Canvas
        canvasClasses={`${css["canvas-editor"]} ${
          isImageSelected ? css["active"] : ""
        }`}
      />
      <Info />
    </div>
  );
}
