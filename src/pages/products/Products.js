import React from "react";
import { products } from "../../backend/db/products";
// import { filterReducer } from "../../reducer/filterReducer";
import { filterByCategory, filterByPrice, filterByRating, sortBy } from "../../utils/filterUtils";
import { FiltersPanel, ProductCard } from "../../components";
import { useFilter } from "../../contexts/filterContext";


//made context but didnt link to anything else

// const initialFilters = {
//   catagoryName: {
//     poster: false,
//     flag: false,
//     scaleModel: false,
//     wearable: false,
//   },
//   rating:"",
//   inputPrice:10000,
//   inputRating:1,
//   inputSort:""
// };

function Products() {
  const {filterState, filterDispatch} = useFilter()
  // const [filterState, filterDispatch] = useReducer(filterReducer, initialFilters);
  const filteredByCatagory = filterByCategory(products, filterState.catagoryName);
  const filteredByRating = filterByRating(filteredByCatagory, filterState.inputRating);
  const filteredByPrice = filterByPrice(filteredByRating, filterState.inputPrice)
  const sortedBy = sortBy(filteredByPrice, filterState.inputSort)
  

  return (
    <main>
      <FiltersPanel />
      <div className="main-content my-2" id="main-content-products">
        <label>
          <input
            type="checkbox"
            checked={filterState.catagoryName.poster}
            onChange={() => filterDispatch({ type: "CATEGORY_NAME", payload: "poster" })}
          />
          Poster
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterState.catagoryName.flag}
            onChange={() => filterDispatch({ type: "CATEGORY_NAME", payload: "flag" })}
          />
          Flag
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterState.catagoryName.scaleModel}
            onChange={() => filterDispatch({ type: "CATEGORY_NAME", payload:  "scaleModel"})}
          />
          Scale Model
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterState.catagoryName.wearable}
            onChange={() => filterDispatch({ type: "CATEGORY_NAME", payload: "wearable" })}
          />
          Wearable
        </label>
        <form className="my-2">
          <label >
            <input
              type="radio"
              id="rating-opt-1"
              name="option1"
              value={4}
              onChange={(e) => filterDispatch({type:"INPUT_RATING" , payload: Number(e.target.value) })}
            />
            4 stars and above
          </label>
          <br />
          <label >
            <input
              type="radio"
              id="rating-opt-2"
              name="option1"
              value={3}
              onChange={(e) => filterDispatch({type:"INPUT_RATING" , payload: Number(e.target.value) })}
            />
            3 stars and above
          </label>
          <br />
          <label >
            <input
              type="radio"
              id="rating-opt-3"
              name="option1"
              value={2}
              onChange={(e) => filterDispatch({type:"INPUT_RATING" , payload: Number(e.target.value) })}
            />
            2 stars and above
          </label>
          <br />
          <label >
            <input
              type="radio"
              id="rating-opt-4"
              name="option1"
              value={1}
              onChange={(e) => filterDispatch({type:"INPUT_RATING" , payload: Number(e.target.value) })}
            />
            1 stars and above
          </label>
          <br />
        </form>
        <form>
          <label >
            <input
              type="radio"
              name="option2"
              onChange={() => filterDispatch({type:"INPUT_SORT", payload:"HIGH_TO_LOW"})}
            />
            High to low
          </label>
          <br />
          <label >
            <input
              type="radio"
              name="option2"
              onChange={() => filterDispatch({type:"INPUT_SORT", payload:"LOW_TO_HIGH"})}
            />
            Low to high
          </label>
          <br />
        </form>
        <h1>{filterState.inputPrice}</h1>
        <input className="my-2 w-100per" type="range" min="0" max="10000" value={filterState.inputPrice} onChange={(e)=>filterDispatch({type:"INPUT_PRICE", payload: Number(e.target.value)})}/>
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
