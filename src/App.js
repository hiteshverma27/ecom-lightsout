import "./App.css";
import { Footer, Navigation } from "./components";
import { Cart, Home, Products } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
