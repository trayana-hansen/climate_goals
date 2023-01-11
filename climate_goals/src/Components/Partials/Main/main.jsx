import { Section } from "../../Pages/section";
import styles from "./main.module.scss";
import img1 from "../../../images/Icon-CO2.png";
import img2 from "../../../images/Icon-Climate.png";
import img3 from "../../../images/Icon-Checklist.png";
import img4 from "../../../images/Icon-Arrangement.png";
import spacer1 from "../../../images/Spacer-01.png";
import spacer2 from "../../../images/Spacer-02.png";
import spacer3 from "../../../images/Spacer-03.png";

const Main = () => {
  return (
    <>
      <Section>
        <article className={styles.sectionOne}>
          <h2>HVAD ER CO2?</h2>
          <figure className={styles.figureMain}>
            <img src={img1} alt="co2-img" />
            <figcaption>
              <h3>
                CO2 er en gasart der findes naturligt i Jordens atmosfære.
              </h3>
              <p>- CO2, findes naturligt i atmosfæren.</p>
              <p>
                - Livet, er afhængigt af CO2 da det regulerer temperaturen på
                Jorden.
              </p>
              <p>
                - CO2, dannes oftest ved at mennesker og dyr, indånder ilt, og
                udånder CO2. Planter optager CO2, og omdanner det til Ilt.
                Derved opnåes en balance i CO2 "regnskabet".
              </p>
              <p>- Afbrænding f.eks. af fossile brændstoffer, udleder CO2.</p>
              <p>
                - Jordens skove og verdenshavene er den største "producent" af
                den ilt, der er nødvendig, for liv på Jorden, som vi kender det.
              </p>
              <p>
                - Mennesket er den enlige faktor der har den største indflydelse
                på CO2 -balancen på Jorden i dag!
              </p>
              <a href="læsmere" className="more-info">
                Læs Mere
              </a>
            </figcaption>
          </figure>
        </article>
        <img className={styles.divider} src={spacer1} alt="divider-one" />
      </Section>

      <Section>
        <article className={styles.sectionTwo}>
          <h2>KLIMA OG MILJØ?</h2>
          <figure className={styles.figureMain}>
            <img src={img2} alt="climate-icon" />
            <figcaption>
              <h3>Kort om klimaet og miljøet?</h3>
              <p>- Klima og miljø hænger sammen.</p>
              <p>- Klimaforandringer påvirker miljøet og omvendt.</p>
              <p>
                - Miljøet kan betragtes som en organisme, og er det vi baserer
                vores liv og overlevelse på, hvis vi ændrer i miljøet, har det
                oftest en dominoeffekt, der påvirker alle dele i miljøet.
              </p>
              <p>
                - Ændringer i atmosfærens CO2 og Ozonlag påvirker miljøet på
                hele kloden, med ændringer i temperatur og nedbør som følge.
              </p>
              <p>
                - Ændrede temperaturer og nedbørsmønster påvirker ikke kun
                kældre og infrastruktur, men også biodiversiteten som planter
                insekter mm.
              </p>
              <p>- Din adfærd påvirker klimaet i størrer eller mindre grad.</p>
              <a href="læsmere" className="more-info">
                Læs Mere
              </a>
            </figcaption>
          </figure>
        </article>
        <img className={styles.divider} src={spacer2} alt="divider-two" />
      </Section>
      <Section>
        <article className={styles.sectionThree}>
          <h2>HVORDAN KAN JEG BIDRAGE?</h2>
          <figure className={styles.figureMain}>
            <img src={img3} alt="icon-checklist" />
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
                - Jordens skove og verdenshavene er den største "producent" af
                den ilt, der er nødvendig, for liv på Jorden, som vi kender det.
              </p>
              <p>
                - Mennesket er den enlige faktor der har den største indflydelse
                på CO2 -balancen på Jorden i dag!
              </p>
              <p>
                - Du kan påvirke CO2 balancen, både ved at ændre små ting i din
                hverdag, eller ved aktivt deltage i kampen for et bedre miljø.
              </p>
              <a href="læsmere" className="more-info">
                Læs Mere
              </a>
            </figcaption>
          </figure>
        </article>
        <img className={styles.divider} src={spacer3} alt="divider-three" />
      </Section>
      <Section>
        <article className={styles.sectionFour}>
          <h2>DELTAG I ARRANGEMENT</h2>
          <figure className={styles.figureMain}>
            <img src={img4} alt="icon-cleaning" />
            <figcaption>
              <h3>Deltag i et af vores arrangementer og gør en forskel!</h3>
              <p>
                - “Combing” (”at fjerne affald”, f.eks. beachcombing: , rense
                stranden for affald og elementer der ikke hører hjemme her).
                Invester en dag med familien i naturen og sammen med andre.
              </p>
              <p>- Tilmeld dig eet arrangement i dit område</p>
              <p>
                - Tag ansvar hjælp dit nærområde og os alle sammen generelt.
              </p>
              <p>- Mød nye mennesker omkring en fælles opgave.</p>
              <p>
                - Tag famillien med på en dag for naturen og vores fremtid..
              </p>
              <p>
                - Tilmeld dig eet af vore arrangementer, eller modtag
                information om Klimatossen!
              </p>
              <p>- Hent mere information på siden “Tilmeld Dig”.</p>
              <a href="læsmere" className="more-info">
                Læs Mere
              </a>
            </figcaption>
          </figure>
        </article>
      </Section>
    </>
  );
};

export { Main };
