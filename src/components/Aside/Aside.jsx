import { useContext } from "react";
import { AppContext } from "../../consts/contexts";
import css from "./Aside.module.css";
import AsideList from "./AsideList/AsideList";

export default function Aside() {
  const { isImageSelected: _isImageSelected } = useContext(AppContext);
  const isImageSelected = _isImageSelected[0];
  return (
    <aside className={css["aside"]}>
      <h1 className={css["title"]}>SunSoloWu</h1>
      <h2 className={css["sub-title"]}>
        By{" "}
        <a
          href="https://github.com/Zyabrik10/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline" }}
        >
          @Zyabrik10
        </a>
      </h2>
      {isImageSelected && <AsideList />}
    </aside>
  );
}
