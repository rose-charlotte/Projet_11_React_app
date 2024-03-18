import { Banner } from "../../Components/Banner/Banner";
import { Card } from "../../Components/Card/Card";
import style from "./Home.module.scss";
import data from "../../assets/Data/data.json";

export function Home() {
  return (
    <main className={style.container}>
      <div className={style.bannerHome}>
        <Banner
          source="src/assets/images/bannerHome.png"
          text="Chez vous, partout et ailleurs"
        />
      </div>
      <div className={style.cardsContainer}>
        {data.map((data) => (
          <Card
            title={data.title}
            cover={data.cover}
            id={data.id}
            key={data.id}
          />
        ))}
      </div>
    </main>
  );
}
