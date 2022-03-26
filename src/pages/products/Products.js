import React, { useState, useReducer } from "react";
import { FiltersPanel } from "../../components/FiltersPanel/FiltersPanel";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { products } from "../../backend/db/products";


const productReducer = (state, {type, payload})=>{
  switch (type){
    case "CATEGORY_NAME":
      return {...state,catagoryName:{
        ...state.catagoryName, [payload]: !state.catagoryName[payload]
      }};
    case "INPUT_PRICE":
      return {...state,inputPrice:payload}
    
  }
}

const initialFilters = {
  catagoryName: {
    poster: false,
    flag: false,
    scaleModel: false,
    wearable: false,
  },
  rating:"",
  inputPrice:10000
};

const filterByCategory = (products, category) => {
  if (Object.values(category).every((v) => !v)) {
    return products;
  }
  console.log(category);
  return products.filter((product) => {
    console.log(product, category);
    return category[product.catagoryName];
  });
};

const filterByPrice = (products, inputPrice = 10000) => {
  return products.filter(({ price }) => price <= inputPrice);
};

const filterByRating = (products, inputRating = 4) => {
  return products.filter(({ rating }) => rating >= inputRating);
};

const sortBy = (products, inputSort) => {
  switch (inputSort) {
    case "HIGH_TO_LOW":
      return products.sort((a, b) => b.price - a.price);
    case "LOW_TO_HIGH":
      return products.sort((a, b) => a.price - b.price);
    default:
      return products;
  }
};


function Products() {
  const [state, dispatch] = useReducer(productReducer, initialFilters);
  const [inputRating, setInputRating] = useState(1);
  // const [inputPrice, setInputPrice] = useState(10000)
  const [inputSort, setInputSort] = useState("")
  const filteredByCatagory = filterByCategory(products, state.catagoryName);
  const filteredByRating = filterByRating(filteredByCatagory, inputRating);
  const filteredByPrice = filterByPrice(filteredByRating, state.inputPrice)
  const sortedBy = sortBy(filteredByPrice, inputSort)
  

  return (
    <main>
      <FiltersPanel />
      <div className="main-content my-2" id="main-content-products">
        <label>
          <input
            type="checkbox"
            checked={state.catagoryName.poster}
            onChange={() => dispatch({ type: "CATEGORY_NAME", payload: "poster" })}
          />
          Poster
        </label>
        <label>
          <input
            type="checkbox"
            checked={state.catagoryName.flag}
            onChange={() => dispatch({ type: "CATEGORY_NAME", payload: "flag" })}
          />
          Flag
        </label>
        <label>
          <input
            type="checkbox"
            checked={state.catagoryName.scaleModel}
            onChange={() => dispatch({ type: "CATEGORY_NAME", payload:  "scaleModel"})}
          />
          Scale Model
        </label>
        <label>
          <input
            type="checkbox"
            checked={state.catagoryName.wearable}
            onChange={() => dispatch({ type: "CATEGORY_NAME", payload: "wearable" })}
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
              onChange={(e) => setInputRating(e.target.value)}
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
              onChange={(e) => setInputRating(e.target.value)}
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
              onChange={(e) => setInputRating(e.target.value)}
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
              onChange={(e) => setInputRating(e.target.value)}
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
              onChange={() => setInputSort("HIGH_TO_LOW")}
            />
            High to low
          </label>
          <br />
          <label >
            <input
              type="radio"
              name="option2"
              onChange={() => setInputSort("LOW_TO_HIGH")}
            />
            Low to high
          </label>
          <br />
        </form>
        <h1>{state.inputPrice}</h1>
        <input className="my-2 w-100per" type="range" min="0" max="10000" value={state.inputPrice} onChange={(e)=>dispatch({type:"INPUT_PRICE", payload: Number(e.target.value)})}/>
        {filteredByPrice.map(
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
