import { Banner } from "../../Components/Banner/Banner";
import { DropDown } from "../../Components/Dropdown/DropDown";
import style from "./About.module.scss";

export function About() {
  const titles = ["Fiabilité", "Respect", "Service", "Sécurité"];
  return (
    <div className={style.container}>
      <Banner source="src/assets/images/bannerAbout.png" />
      <div className={style.dropDownContainer}>
        {titles.map((title) => (
          <DropDown title={title} key={title} />
        ))}
      </div>
    </div>
  );
}
