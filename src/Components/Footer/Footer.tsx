import style from "./Footer.module.scss";
import Logo from "../../assets/images/LOGO.svg?react";

export function Footer() {
  return (
    <div className={style.container}>
      <Logo className={style.svg} />
      <span className={style.text}>© 2020 Kasa. All rights reserved</span>
    </div>
  );
}
