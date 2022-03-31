import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../../reducer/cartReducer";

const CartContext = createContext(null);

const initialCart = { cartItems: [], wishlistItems: [] };

const CartProvider = ({ children }) => {
  const [{ cartItems, wishlistItems }, cartDispatch] = useReducer(
    cartReducer,
    initialCart
  );
  return (
    <CartContext.Provider value={{ cart: cartItems, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
