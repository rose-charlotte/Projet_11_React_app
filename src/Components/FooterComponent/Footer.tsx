import style from "./Footer.module.scss";

export function Footer() {
  return (
    <div>
      <picture>
        <source
          srcSet="src/assets/images/D_Footer.png"
          media="(min-width: 481px)"
        />
        <img
          className={style.img}
          src="src/assets/images/M_Footer.png"
          alt="footer Kasa"
        />
      </picture>
    </div>
  );
}
