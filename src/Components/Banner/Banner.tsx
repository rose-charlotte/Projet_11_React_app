import style from "./Banner.module.scss";

export function Banner(props: BannerProps) {
  return (
    <div className={style.imgContainer}>
      <img className={style.img} src={props.source} alt="bannière" />
      <p className={style.title}>{props.text}</p>
    </div>
  );
}

export interface BannerProps {
  source: string;
  text?: string;
}
