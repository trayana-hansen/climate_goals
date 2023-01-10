import styles from "./nav.module.scss";
const ArrNav = ["START", "DIT CO2", "CLEAN UP", "TILMELD DIG"];

const Nav = (props) => {
  return (
    <nav className={styles.navMain}>
      <ul>
        {props.data.map((ArrNav, key) => {
          return <li key={key}>{ArrNav}</li>;
        })}
      </ul>
    </nav>
  );
};

export { Nav, ArrNav };
