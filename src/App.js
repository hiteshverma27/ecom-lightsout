import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/products/Products";

function App() {
  return (
    <>
      <Navigation/>
      <Home/>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
