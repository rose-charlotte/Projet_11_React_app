import style from "./Error.module.scss";
import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className={style.container}>
      <p className={style.number}>Oups</p>
      <p className={style.text}>something went wrong!</p>
      <Link to="/" className={style.link}>
        Retourner sur la page d'accueil{" "}
      </Link>
    </div>
  );
}
