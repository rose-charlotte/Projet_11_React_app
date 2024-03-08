import style from "./Banner.module.scss";

export function Banner(props: BannerProps) {
  return (
    <div>
      <picture className={style.imgContainer}>
        <source srcSet={props.sourceSet} media="(min-width: 481px)" />
        <img className={style.img} src={props.source} alt="bannière" />
      </picture>
    </div>
  );
}

export interface BannerProps {
  source: string;
  sourceSet: string;
}
