import style from "./Header.module.scss";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={style.container}>
      <picture>
        <source srcSet="src/assets/D_LOGO.png" media="(min-width: 481px)" />
        <img src="src/assets/M_LOGO.png" alt="Logo Kasa" />
      </picture>

      <ul className={style.listContainer}>
        <li className={style.listItem}>
          <Link className={style.link} to="/">
            Accueil
          </Link>
        </li>
        <li className={style.listItem}>
          <Link className={style.link} to="/about">
            A Propos
          </Link>
        </li>
      </ul>
    </div>
  );
}
