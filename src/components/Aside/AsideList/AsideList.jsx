import css from "./AsideList.module.css";
// import BlackAndWhite from "../Items/BlackAndWhite/BlackAndWhite";
import Remove from "../Items/Remove/Remove";

export default function AsideList() {
  return (
    <ul className={css["list"]}>
      <Remove />
      {/* <Blac kAndWhite /> */}
    </ul>
  );
}
