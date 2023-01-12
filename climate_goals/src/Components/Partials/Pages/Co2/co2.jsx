import { Section } from "../section";
import styles from "./co2.module.scss";

import img3 from "../../../../images/Icon-Checklist.png";


export const Co2 = () => {
  return (
    <Section>
      <article className={styles.sectionThree}>
        <h2>HVORDAN KAN JEG BIDRAGE?</h2>
        <figure className={styles.figureMain}>
          <div className={styles.imgCentered}>
            <img src={img3} alt="icon-checklist" />
          </div>
          <figcaption>
            <h3>Hvordan belaster du miljøet mindst muligt i dagligdagen?</h3>
            <p>
              - Dit forbrug overordnet herunder din produktion af affald,
              bidrager til udledning af CO2
            </p>
            <p>
              - Fødevareproduktion har stor indflydelse på CO2 balancen, tænk
              over dit valg i dagligdagen.
            </p>
            <p>
              - Din bolig og den måde du har indrettet dig påvirker miljøet.
            </p>
            <p>
              - Jordens skove og verdenshavene er den største "producent" af den
              ilt, der er nødvendig, for liv på Jorden, som vi kender det.
            </p>
            <p>
              - Mennesket er den enlige faktor der har den største indflydelse
              på CO2 -balancen på Jorden i dag!
            </p>
            <p>
              - Du kan påvirke CO2 balancen, både ved at ændre små ting i din
              hverdag, eller ved aktivt deltage i kampen for et bedre miljø.
            </p>
            <a className="moreinfo" href="læsmere">
              Læs Mere
            </a>
          </figcaption>
        </figure>
      </article>
     
    </Section>
  );
};
