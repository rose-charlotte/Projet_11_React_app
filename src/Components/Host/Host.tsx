import style from "./Host.module.scss";

export function Host(props: HostProps) {
  return (
    <div className={style.container}>
      <p className={style.name}>{props.name}</p>
      <img className={style.img} src={props.image} />
    </div>
  );
}

export interface HostProps {
  name: string;
  image: string;
}
