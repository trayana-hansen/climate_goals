import { Nav, ArrNav } from "../Nav/nav";
import styles from "../Header/header.module.scss";
import Logo from "../../../images/KT-Logo.png";
const Header = () => {
  return (
    <>
      <header className={styles.headerMain}>
        <div className="logo">
          <img src={Logo} alt="klima-tossen-logo" />
        </div>
        <div className={styles.bottomRight}>
          <p>
            "Det er rigtigt, at vi hver især kun kan bidrage lidt til den
            samlede løsning."
          </p>
          <p>
            "Lige så rigtigt er det, at vi slet ikke kan nå målet, uden at hver
            især bidrager en smule til det."
          </p>
        </div>
      </header>
      <Nav data={ArrNav} />
    </>
  );
};

export { Header };
