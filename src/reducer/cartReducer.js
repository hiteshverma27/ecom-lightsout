const cartReducer = (state, { type, payload }) => {
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
    case "INITIAL_WISHLIST":
      return {
        ...state,
        wishlistItems: payload,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        cartItems: state.cartItems.filter(({ _id }) => _id !== payload._id),
        wishlistItems: state.wishlistItems.some(
          (obj) => obj._id === payload._id
        )
          ? [...state.wishlistItems]
          : [...state.wishlistItems, { ...payload, qty: 1 }],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          ({ _id }) => _id !== payload._id
        ),
      };
    case "MOVE_TO_CART":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          ({ _id }) => _id !== payload._id
        ),
        cartItems: state.cartItems.some((obj) => obj._id === payload._id)
          ? state.cartItems.map((obj) =>
              obj._id === payload._id ? { ...obj, qty: obj.qty + 1 } : obj
            )
          : [...state.cartItems, { ...payload, qty: 1 }],
      };
    default:
      return { ...state };
  }
};

export { cartReducer };
