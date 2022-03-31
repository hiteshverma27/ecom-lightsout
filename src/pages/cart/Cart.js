import React from "react";
import { Link } from "react-router-dom";
import { CartProductCard, PriceDetailsCard } from "../../components";
import { useCart } from "../../contexts";

function Cart() {
  const { cart, setCart } = useCart();
  const removeFromCartHandler = (itemID) => {
    setCart(cart.filter(({ _id }) => _id !== itemID._id));
  };
  const addToCartHandler = (item) => {
    if (cart.some((obj) => obj._id === item._id)) {
      setCart((itemsInCart) =>
        itemsInCart.map((obj) =>
          obj._id === item._id ? { ...obj, qty: obj.qty + 1 } : obj
        )
      );
    } else {
      setCart((itemsInCart) => [...itemsInCart, { ...item, qty: 1 }]);
    }
  };
  const increaseQtyHandler = (item) => {
    addToCartHandler(item);
  };
  const decreaseQtyHandler = (item) => {
    if (cart.some((obj) => obj._id === item._id)) {
      setCart((itemsInCart) =>
        itemsInCart.map((obj) =>
          obj._id === item._id ? { ...obj, qty: obj.qty - 1 } : obj
        )
      );
    } else {
      setCart((itemsInCart) => [...itemsInCart, { ...item, qty: 1 }]);
    }
  };
  const totalPrice = cart.map((item) => item.price * item.qty);
  const grandTotal = totalPrice.reduce((a, i) => a + i, 0);

  return (
    <div className="cart-manage-main w-80per m-auto p-5 flex">
      {cart.length ? (
        <>
          <div className="flex-col">
            {cart.map((item) => {
              return (
                <CartProductCard
                  key={item._id}
                  item={item}
                  removeFromCartHandler={removeFromCartHandler}
                  increaseQtyHandler={increaseQtyHandler}
                  decreaseQtyHandler={decreaseQtyHandler}
                />
              );
            })}
          </div>
          <PriceDetailsCard noOfItems={cart.length} totalAmount={grandTotal} />
        </>
      ) : (
        <div className="flex-col flex-center-center">
          <h1>Cart is empty</h1>
          <Link to={"/products"}>
            <button className="m-1 btn-primary-confirm font-size-x-large font-weight-400">
              Shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export { Cart };
