import { createContext, useContext, useState, useReducer } from "react";
// import { addToCartHandler } from "../../utils";

// const cartReducer = (state, { type, payload }) => {
//   switch (type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cartItems: [...state.cartItems, addToCartHandler(payload)],
//       };
//   }
// };

// console.log(initialCart.cartItems);

const CartContext = createContext(null);

// const initialCart = { cartItems: [], wishlistItems: [] };

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //   const [cartState, cartDispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
