import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";
const ArrNav = [
  { navtitle: "START", path: "/" },
  { navtitle: "DIT CO2", path: "/co2" },
  { navtitle: "CLEAN UP", path: "/cleanup" },
  { navtitle: "TILMELD DIG", path: "/tilmeld" },
];

const Nav = (props) => {
  return (
    <nav className={styles.navMain}>
      <ul>
        {props.data.map((ArrNav, key) => {
          return (
            <li key={key}>
              <NavLink to={ArrNav.path}>{ArrNav.navtitle}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Nav, ArrNav };
