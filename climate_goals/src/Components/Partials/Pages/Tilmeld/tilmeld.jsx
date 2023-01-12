import { Section } from "../section";
import styles from "./tilmeld.module.scss";

import img4 from "../../../../images/Icon-Arrangement.png";

export const Tilmeld = () => {
  return (
    <Section>
      <article className={styles.sectionFour}>
        <h2>DELTAG I ARRANGEMENT</h2>
        <figure className={styles.figureMain}>
          <img src={img4} alt="icon-cleaning" />
          <figcaption>
            <h3>
              Deltag i eet af vores arrangementer og gør en forskel! Hvordan
              belaster du miljøet mindst muligt i dagligdagen?
            </h3>
            <p>
              - “Combing” - ”at fjerne affald”, f.eks. beachcombing: , rense
              stranden for affald og elementer der ikke hører hjemme her.
              Invester en dag med familien i naturen og sammen med andre.
            </p>
            <p>- Tilmeld dig eet arrangement i dit område</p>
            <p>- Tag ansvar hjælp dit nærområde og os alle sammen generelt.</p>
            <p>- Mød nye mennesker omkring en fælles opgave.</p>
            <p>- Tag famillien med på en dag for naturen og vores fremtid..</p>
            <p>
              - Tilmeld dig eet af vore arrangementer, eller modtag information
              om Klimatossen!
            </p>
            <p>- Hent mere information på siden “Tilmeld Dig”.</p>
            <a className="moreinfo" href="læsmere">
              Læs Mere
            </a>
          </figcaption>
        </figure>
      </article>
    </Section>
  );
};
