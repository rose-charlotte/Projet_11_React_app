import style from "./Infos.module.scss";

export function Infos(props: InfosProps) {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{props.title}</h1>
      <p className={style.location}>{props.location}</p>
    </div>
  );
}

export interface InfosProps {
  title: string;
  location: string;
}
