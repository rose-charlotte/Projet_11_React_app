import { Banner } from "../../Components/BannerComponent/Banner";
import { Card } from "../../Components/CardComponent/Card";
import style from "./Home.module.scss";
import data from "../../assets/Data/data.json";

export function Home() {
  return (
    <div className={style.container}>
      <Banner
        source="src/assets/images/M_Section 1.png"
        sourceSet="src/assets/images/D_Section1.png"
      />
      <div className={style.cardsContainer}>
        {data.map((data) => (
          <Card title={data.title} cover={data.cover} key={data.id} />
        ))}
      </div>
    </div>
  );
}
