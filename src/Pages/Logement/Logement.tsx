import { useParams } from "react-router";
import { Slideshow } from "../../Components/slideshow/Slideshow.tsx";
import style from "./Logement.module.scss";

import data from "../../assets/Data/data.json";
import { Rating } from "../../Components/Rating/Rating.tsx";
import { Accordeon } from "../../Components/Accordeon/Accordeon.tsx";

export function Logement() {
  const { id } = useParams();

  const dataElement = data.find((data) => data.id === id);

  return (
    <div className={style.container}>
      <Slideshow photos={dataElement!.pictures} />
      <h1>{dataElement?.title}</h1>
      <p>{dataElement?.location}</p>
      {dataElement?.tags.map((tag) => (
        <div className={style.tag} key={tag}>
          {tag}
        </div>
      ))}
      <Rating />
      <div className={style.accordeonCOntainer}>
        <Accordeon title="Description" description={dataElement?.description} />
        <Accordeon title="Equipement" list={dataElement?.equipments} />
      </div>
    </div>
  );
}
