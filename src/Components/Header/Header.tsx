import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/LOGO.svg?react";

export function Header() {
  return (
    <div className={style.container}>
      <Logo className={style.logo} />

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
