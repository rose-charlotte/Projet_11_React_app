import { useParams } from "react-router";
import { Rating } from "../../Components/Rating/Rating.tsx";
import { Accordeon } from "../../Components/Accordeon/Accordeon.tsx";
import { Slideshow } from "../../Components/slideshow/Slideshow.tsx";
import style from "./Logement.module.scss";

import data from "../../assets/Data/data.json";
import { Host } from "../../Components/Host/Host.tsx";
import { Tag } from "../../Components/Tag/Tag.tsx";
import { Infos } from "../../Components/Infos/Infos.tsx";

export function Logement() {
  const { id } = useParams();

  const dataElement = data.find((data) => data.id === id);

  return (
    <div className={style.container}>
      <Slideshow photos={dataElement!.pictures} />
      <Infos title={dataElement!.title} location={dataElement!.location} />
      <Tag tags={dataElement!.tags} />

      <Rating />
      <Host name={dataElement!.host.name} image={dataElement!.host.picture} />

      <Accordeon title="Description" description={dataElement?.description} />
      <Accordeon title="Equipement" list={dataElement?.equipments} />
    </div>
  );
}
