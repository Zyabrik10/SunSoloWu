import { useContext } from "react";
import { AppContext } from "../../consts/contexts";
import css from "./Info.module.css";

export default function Info() {
  const { file: _file, image: _image } = useContext(AppContext);
  const file = _file[0];
  const image = _image[0];
  const date = new Date(file?.lastModified);
  return (
    <ul className={css["info-list"]}>
      <li>{file && file.name}</li>
      <li>{file && date.toDateString()}</li>
      <li>
        {image && (
          <p>
            {image.width}:{image.height}
          </p>
        )}
      </li>
    </ul>
  );
}
