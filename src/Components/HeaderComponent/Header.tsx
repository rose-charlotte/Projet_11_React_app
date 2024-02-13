import style from "./Header.module.scss";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={style.container}>
      <img src="src/assets/D_LOGO.png" alt="Logo Kasa" />
      <ul className={style.listContainer}>
        <li className={style.listItem}>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </div>
  );
}
