import React from "react";
import { products } from "../../backend/db/products";
import { filterByCategory, filterByPrice, filterByRating, sortBy } from "../../utils/filterUtils";
import { FiltersPanel, ProductCard } from "../../components";
import { useFilter } from "../../contexts/filterContext";


function Products() {
  const {filterState} = useFilter()
  const filteredByCatagory = filterByCategory(products, filterState.catagoryName);
  const filteredByRating = filterByRating(filteredByCatagory, filterState.inputRating);
  const filteredByPrice = filterByPrice(filteredByRating, filterState.inputPrice)
  const sortedBy = sortBy(filteredByPrice, filterState.inputSort)
  

  return (
    <main>
      <FiltersPanel />
      <div className="main-content my-2" id="main-content-products">
        {sortedBy.map(
          ({
            _id,
            catagoryName,
            title,
            price,
            inStock,
            isFavourite,
            prodImg,
            rating,
          }) => {
            return (
              <ProductCard
                key={_id}
                id={_id}
                catagoryName={catagoryName}
                title={title}
                price={price}
                inStock={inStock}
                isFavourite={isFavourite}
                rating={rating}
              />
            );
          }
        )}
      </div>
    </main>
  );
}

export { Products };
