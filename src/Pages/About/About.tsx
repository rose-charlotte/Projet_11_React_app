import { Banner } from "../../Components/Banner/Banner";
import { DropDown } from "../../Components/Dropdown/DropDown";
import style from "./About.module.scss";

export function About() {
  const titles = ["Fiabilité", "Respect", "Service", "Sécurité"];
  return (
    <>
      <Banner
        source="src/assets/images/M_MaskGroup.png"
        sourceSet="src/assets/images/MaskGroupPhoto.png"
      />
      <div className={style.dropDownContainer}>
        {titles.map((title) => (
          <DropDown title={title} key={title} />
        ))}
      </div>
    </>
  );
}
