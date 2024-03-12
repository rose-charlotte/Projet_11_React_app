import Star from "../../assets/images/Star.svg?react";
import style from "./Rating.module.scss";

export function Rating() {
  return (
    <div className={style.container}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}
