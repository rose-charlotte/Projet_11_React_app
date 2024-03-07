import { Link } from "react-router-dom";
import style from "./Card.module.scss";

export function Card(props: CardProps) {
  return (
    <Link to="/logement">
      <div className={style.container}>
        <h1 className={style.title}>{props.title}</h1>
        <img className={style.img} src={props.cover} />
      </div>
    </Link>
  );
}

export interface CardProps {
  title: string;
  cover: string;
}
