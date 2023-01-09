const ArrNav = ["START", "DIT CO2", "CLEAN UP", "TILMELD DIG"];

const Nav = (props) => {
  return (
    <nav className="nav-main">
      <ul>
        {props.data.map((ArrNav, key) => {
          return <li key={key}>{ArrNav}</li>;
        })}
      </ul>
    </nav>
  );
};

export { Nav, ArrNav };
