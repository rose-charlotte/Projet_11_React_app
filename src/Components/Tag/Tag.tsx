import style from "./Tag.module.scss";

export function Tag(props: TagProps) {
  return (
    <div className={style.container}>
      {props.tags.map((tag) => (
        <div key={tag} className={style.tag}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export interface TagProps {
  tags: string[];
}
