import React, { useEffect } from "react";
import axios from "axios";
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
  const { filterState, filterDispatch } = useFilter();
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("/api/products")
        .then((response) => {
          console.log(response.data.products);
          filterDispatch({
            type: "INITIAL_PRODUCTS",
            payload: response.data.products,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  const filteredByCatagory = filterByCategory(
    filterState.products,
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
            return <ProductCard key={item._id} item={item} />;
          })}
        </div>
      </main>
    </>
  );
}

export { Products };
