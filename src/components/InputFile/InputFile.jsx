import css from "./InputFile.module.css";
import { useContext } from "react";
import { AppContext } from "../../consts/contexts";

export default function InputFile({
  title,
  buttonClass = "",
  titleClasses = "",
  input_id,
}) {
  const { isImageSelected: _isImageSelected, file: _file } =
    useContext(AppContext);
  const setIsImageSelected = _isImageSelected[1];
  const setFile = _file[1];

  function inputHanlder(e) {
    const file = e.target.files[0];
    if (file) {
      setIsImageSelected(true);
      setFile(file);
    } else {
      console.log("exit");
    }

    e.target.value = "";
  }

  return (
    <label className={buttonClass} htmlFor={input_id}>
      <span className={titleClasses}>{title}</span>
      <input
        className={css["file-input"]}
        type="file"
        id={input_id}
        onChange={inputHanlder}
        accept="image/png, image/jpeg"
      />
    </label>
  );
}
