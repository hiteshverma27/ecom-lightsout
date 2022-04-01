import React, { useEffect } from "react";
import { ProductCard } from "../../components";
import { useCart } from "../../contexts";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist } = useCart();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex-center-center">
      {wishlist.length ? (
        <>
          <div
            className="main-content w-100wv my-2 h-90vh"
            id="main-content-products"
          >
            {wishlist.map((item) => {
              return <ProductCard key={item._id} item={item} />;
            })}
          </div>
        </>
      ) : (
        <div className="flex-col flex-center-center h-90vh">
          <h1>Wishlist is empty</h1>
          <div className="flex">
            <Link to={"/products"}>
              <button className="m-1 btn-primary-confirm font-size-x-large font-weight-400">
                Shop now
              </button>
            </Link>
            <Link to={"/cart"}>
              <button className="m-1 btn-primary-confirm font-size-x-large font-weight-400">
                Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export { Wishlist };
