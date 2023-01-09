import { Nav, ArrNav } from "../Nav/nav";
import Logo from "../../../images/KT-Logo.png";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="klima-tossen-logo" />
      </div>
      <div className="bottom-right">
        <p>
          "Det er rigtigt, at vi hver især kun kan bidrage lidt til den samlede
          løsning."
        </p>
        <p>
          "Lige så rigtigt er det, at vi slet ikke kan nå målet, uden at hver
          især bidrager en smule til det."
        </p>
      </div>
      <Nav data={ArrNav} />
    </header>
  );
};

export { Header };
