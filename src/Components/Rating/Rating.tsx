import Star from "../../assets/images/Star.svg?react";
import style from "./Rating.module.scss";

export function Rating(props: RatingProps) {
  const totalStar = 5;
  const stars = Array(totalStar).fill(true);

  return (
    <div className={style.container}>
      {stars.map((_, index) => (
        <Star
          key={index}
          className={`${index < props.rate ? style.star : ""}`}
        />
      ))}
    </div>
  );
}

export interface RatingProps {
  rate: number;
}
