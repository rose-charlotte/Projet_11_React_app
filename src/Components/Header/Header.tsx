import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className={style.container}>
      <picture>
        <source
          srcSet="src/assets/images/D_LOGO.png"
          media="(min-width: 481px)"
        />
        <img src="src/assets/images/M_LOGO.png" alt="Logo Kasa" />
      </picture>

      <div className={style.navLinkContainer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : style.inactive
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : style.inactive
          }
          to="/about"
        >
          A Propos
        </NavLink>
      </div>
    </div>
  );
}
