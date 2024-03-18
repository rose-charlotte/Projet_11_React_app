import { Link } from "react-router-dom";
import style from "./Page404.module.scss";

export function Page404() {
  return (
    <main className={style.container}>
      <p className={style.number}>404</p>
      <p className={style.text}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={style.link}>
        Retourner sur la page d'accueil{" "}
      </Link>
    </main>
  );
}
