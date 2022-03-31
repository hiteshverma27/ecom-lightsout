import React from "react";
import { Link } from "react-router-dom";
import { CartProductCard, PriceDetailsCard } from "../../components";
import { useCart } from "../../contexts";

function Cart() {
  const { cart } = useCart();
  const totalPrice = cart.map((item) => item.price * item.qty);
  const grandTotal = totalPrice.reduce((acc, init) => acc + init, 0);

  return (
    <div className="cart-manage-main w-80per m-auto p-5 flex">
      {cart.length ? (
        <>
          <div className="flex-col">
            {cart.map((item) => {
              return <CartProductCard key={item._id} item={item} />;
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
