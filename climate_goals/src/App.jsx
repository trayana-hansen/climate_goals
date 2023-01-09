//import the app
import "./App.scss";

//import our scss files to style
// import "./Components/Partials/Footer/footer.module.scss";
import "./Components/Partials/Header/header.module.scss";
import "./Components/Partials/Main/main.module.scss";

//import our components
import { Header } from "./Components/Partials/Header/header";
import { Main } from "./Components/Partials/Main/main.jsx";
// import { Footer } from "./Components/Partials/Footer/footer.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <p>
        “Alle er vi en del af problemet såvel som af løsningen, og vores
        medvirken er helt nødvendig, hvis det skal lykkes at få knækket kurven
        for udslippet af drivhusgasser. Effekten af indsatsen afhænger af, hvor
        mange der trækker i den rigtige retning.”
      </p>
      <Main />
    </div>
  );
};

export default App;
