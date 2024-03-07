import style from "./Banner.module.scss";

export function Banner() {
  return (
    <picture className={style.imgContainer}>
      <source
        srcSet="src/assets/images/D_Section1.png"
        media="(min-width: 481px)"
      />
      <img
        className={style.img}
        src="src/assets/images/M_Section 1.png"
        alt="Chez vous, partout et ailleurs"
      />
    </picture>
  );
}
