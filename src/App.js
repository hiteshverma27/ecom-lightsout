import "./App.css";
import { Footer, Navigation } from "./components";
import { Cart, Home, Products, Wishlist } from "./pages";
import { Routes, Route } from "react-router-dom";
import MockmanEs from "mockman-js";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<MockmanEs />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
