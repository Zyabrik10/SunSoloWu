import AsideItem from "../../AsideItem/AsideItem";

export default function BlackAndWhite() {
  return (
    <AsideItem>
      <label htmlFor="">Black And White</label>
      <input
        type="range"
        id="black-and-white"
        min="-100"
        max="100"
        value="0"
      ></input>
    </AsideItem>
  );
}
