//import the app
import "./App.scss";

//import our components
import { Header } from "./Components/Partials/Header/header";
import { Main } from "./Components/Partials/Main/main.jsx";
import { Footer } from "./Components/Partials/Footer/footer.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/App/AppRouter/AppRouter"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <p className="subText">
          “Alle er vi en del af problemet såvel som af løsningen, og vores
          medvirken er helt nødvendig, hvis det skal lykkes at få knækket kurven
          for udslippet af drivhusgasser. Effekten af indsatsen afhænger af,
          hvor mange der trækker i den rigtige retning.”
        </p>

        <Main> <AppRouter /></Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
