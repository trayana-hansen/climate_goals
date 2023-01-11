import logo from "../../../images/KT-Logo.png";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerInfo}>
        <h4>KlimaTossen NPO</h4>
        <p>Vesterbrogade 92</p>
        <p>9000 Aalborg</p>
        <p>info@klima-tossen.dk</p>
        <p> 9922 3344 (Åben man - fre: 08:00 - 16:00)</p>
        <h4>SAMARBEJDSPARTNERE:</h4>
        <a href="https://www.dn.dk">https://www.dn.dk</a> <br />
        <a href="https://www.miljoportal.dk">https://www.miljoportal.dk</a>
        <div className={styles.footerImg}>
          <img src={logo} alt="KT-Logo" />
        </div>
      </div>
      <div className={styles.footerForm}>
        <h4>Ja tak! Jeg vil gerne høre mere.</h4>
        <form>
          <input type="text" placeholder="Fulde navn" />
          <input type="text" placeholder="Hjem by" />
          <input type="email" placeholder="Email adresse" />
          <input type="number" placeholder="Telefon nummer" />
          <div className={styles.checkboxFooter}>
            <label>Få en samtale med Klimatossen</label>
            <input type="checkbox" />
          </div>
          <div className={styles.checkboxFooter}>
            <label>Modtag Nyhedsbrev</label>
            <input type="checkbox" />
          </div>

          <button>Send</button>
        </form>
      </div>
    </footer>
  );
};

export { Footer };
