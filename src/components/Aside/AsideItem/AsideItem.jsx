import css from "./AsideItem.module.css";

export default function AsideItem({ children }) {
  return <li className={css["item"]}>{children}</li>;
}
