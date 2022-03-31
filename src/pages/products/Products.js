import React from "react";
import { products } from "../../backend/db/products";
import {
  filterByCategory,
  filterByPrice,
  filterByRating,
  sortBy,
} from "../../utils";
import { FiltersPanel, ProductCard } from "../../components";
import { useFilter, useCart } from "../../contexts";

function Products() {
  const { cart, setCart, cartState, cartDispatch } = useCart();
  const { filterState } = useFilter();
  const filteredByCatagory = filterByCategory(
    products,
    filterState.catagoryName
  );
  const filteredByRating = filterByRating(
    filteredByCatagory,
    filterState.inputRating
  );
  const filteredByPrice = filterByPrice(
    filteredByRating,
    filterState.inputPrice
  );
  const sortedBy = sortBy(filteredByPrice, filterState.inputSort);

  //cart
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

  return (
    <>
      <input
        type="search"
        className="input w-100per m-auto flex-center-center"
        placeholder="Search LightsOut"
        id="search-mobile"
      />

      <main>
        <FiltersPanel />
        <div className="main-content my-2" id="main-content-products">
          {sortedBy.map((item) => {
            return (
              <ProductCard
                key={item._id}
                item={item}
                addToCartHandler={addToCartHandler}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export { Products };
