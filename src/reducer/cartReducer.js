const cartReducer = (state, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems.some((obj) => obj._id === payload._id)
          ? state.cartItems.map((obj) =>
              obj._id === payload._id ? { ...obj, qty: obj.qty + 1 } : obj
            )
          : [...state.cartItems, { ...payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(({ _id }) => _id !== payload._id),
      };
    case "DECREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.some((obj) => obj._id === payload._id)
          ? state.cartItems.map((obj) =>
              obj._id === payload._id ? { ...obj, qty: obj.qty - 1 } : obj
            )
          : [...state.cartItems, { ...payload, qty: 1 }],
      };
  }
};

export { cartReducer };
