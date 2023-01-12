import { Section } from "../section";
import styles from "./cleanup.module.scss";

import img2 from "../../../../images/Icon-Climate.png";


export const Cleanup = () => {
  return (
    <Section>
      <article className={styles.sectionTwo}>
        <h2>KLIMA OG MILJØ?</h2>
        <figure className={styles.figureMain}>
          <div className={styles.imgCentered}>
            <img src={img2} alt="climate-icon" />
          </div>
          <figcaption>
            <h3>Kort om klimaet og miljøet?</h3>
            <p>- Klima og miljø hænger sammen.</p>
            <p>- Klimaforandringer påvirker miljøet og omvendt</p>
            <p>
              - Miljøet kan betragtes som en organisme, og er det vi baserer
              vores liv og overlevelse på, hvis vi ændrer i miljøet, har det
              oftest en dominoeffekt, der påvirker alle dele i miljøet.
            </p>
            <p>
              - Ændringer i atmosfærens CO2 og Ozonlag påvirker miljøet på hele
              kloden, med ændringer i temperatur og nedbør som følge.
            </p>
            <p>
              - Ændrede temperaturer og nedbørsmønster påvirker ikke kun kældre
              og infrastruktur, men også biodiversiteten som planter insekter
              mm.
            </p>
            <p>- Din adfærd påvirker klimaet i størrer eller mindre grad.</p>
            <a className="moreinfo" href="læsmere">
              Læs Mere
            </a>
          </figcaption>
        </figure>
      </article>
   
    </Section>
  );
};
