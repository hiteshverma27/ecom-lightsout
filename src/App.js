import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navigation/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
