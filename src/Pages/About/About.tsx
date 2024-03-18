import { Banner } from "../../Components/Banner/Banner";
import { Accordeon } from "../../Components/Accordeon/Accordeon.tsx";
import style from "./About.module.scss";

export function About() {
  const aboutElements = [
    {
      title: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
    },
    {
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme ",
    },
    {
      title: "Service",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme ",
    },

    {
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <main className={style.container}>
      <Banner source="src/assets/images/bannerAbout.png" />
      <div className={style.accordeonContainer}>
        {aboutElements.map((element) => (
          <Accordeon title={element.title} key={element.title}>
            <p>{element.description}</p>
          </Accordeon>
        ))}
      </div>
    </main>
  );
}
