import style from "./Logement.module.scss";

import { Rating } from "../../Components/Rating/Rating.tsx";
import { Accordeon } from "../../Components/Accordeon/Accordeon.tsx";
import { Slideshow } from "../../Components/slideshow/Slideshow.tsx";
import { Host } from "../../Components/Host/Host.tsx";
import { Tag } from "../../Components/Tag/Tag.tsx";
import { Infos } from "../../Components/Infos/Infos.tsx";
import { useLoaderData } from "react-router-dom";

export function Logement() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataElement = useLoaderData() as any;

  const rateInNumber = parseInt(dataElement.rating);

  return (
    <main className={style.container}>
      <Slideshow photos={dataElement.pictures} />

      <div className={style.infoContainer}>
        <div className={style.subcontainer}>
          <div className={style.locationInfo}>
            <Infos title={dataElement.title} location={dataElement.location} />
            <Tag tags={dataElement.tags} />
          </div>
          <div className={style.host}>
            <Rating rate={rateInNumber} />
            <Host
              name={dataElement.host.name}
              image={dataElement.host.picture}
            />
          </div>
        </div>
        <div className={style.accordeonContainer}>
          <Accordeon
            title="Description"
            description={dataElement.description}
          ></Accordeon>
          <Accordeon
            title="Equipements"
            list={dataElement.equipments}
          ></Accordeon>
        </div>
      </div>
    </main>
  );
}
