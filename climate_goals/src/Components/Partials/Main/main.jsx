import { Section } from "../../Pages/section";
import img1 from "../../../images/Icon-CO2.png";
import spacer1 from "../../../images/Spacer-01.png";
const Main = () => {
  return (
    <Section>
      <h2>HVAD ER CO2?</h2>
      <figure>
        <img src={img1} alt="co2-img" />
        <figcaption>
          <h3>CO2 er en gasart der findes naturligt i Jordens atmosfære.</h3>
          <p>- CO2, findes naturligt i atmosfæren.</p>
          <p>
            - Livet, er afhængigt af CO2 da det regulerer temperaturen på
            Jorden.
          </p>
          <p>
            - CO2, dannes oftest ved at mennesker og dyr, indånder ilt, og
            udånder CO2. Planter optager CO2, og omdanner det til Ilt. Derved
            opnåes en balance i CO2 "regnskabet".
          </p>
          <p>- Afbrænding f.eks. af fossile brændstoffer, udleder CO2.</p>
          <p>
            - Jordens skove og verdenshavene er den største "producent" af den
            ilt, der er nødvendig, for liv på Jorden, som vi kender det.
          </p>
          <p>
            - Mennesket er den enlige faktor der har den største indflydelse på
            CO2 -balancen på Jorden i dag!
          </p>
        </figcaption>
      </figure>
      <img className="divider" src={spacer1} alt="" />
    </Section>
  );
};

export { Main };
