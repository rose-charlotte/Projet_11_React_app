import Star from "../../assets/images/Star.svg?react";
import style from "./Rating.module.scss";

export function Rating(props: RatingProps) {
  //const rate = 0;
  const totalStar = 5;
  const stars = Array(totalStar).fill(props.rate);
  return (
    <div className={style.container}>
      {stars.map((_, index) => (
        <Star className={`${index < props.rate ? style.star : ""}`} />
      ))}
    </div>
  );
}

export interface RatingProps {
  rate: number;
}
