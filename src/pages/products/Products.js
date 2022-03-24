import React from "react";
import { v4 as uuid } from "uuid";
import { FiltersPanel } from "../../components/FiltersPanel/FiltersPanel";
import { ProductCard } from "../../components/ProductCard/ProductCard";



const prod =  [
  {
    _id: uuid(),
    catagoryName: "Poster",
    title: "Psoteeer",
    price: 200,
    inStock: true,
    isFavourite: false,
    rating:2
  },
  {
    _id: uuid(),
    catagoryName: "fjieof",
    title: "Falg",
    price: 1000,
    inStock: true,
    isFavourite: false,
    rating:1
  },
  {
    _id: uuid(),
    catagoryName: "Posfhuiefter",
    title: "Pser",
    price: 8000,
    inStock: false,
    isFavourite: true,
    rating:8
  },
  {
    _id: uuid(),
    catagoryName: "fefhe",
    title: "Psotefefeeer",
    price: 800,
    inStock: false,
    isFavourite: false,
    rating:8
  },
  {
    _id: uuid(),
    catagoryName: "Postfefefer",
    title: "Psoteeer",
    price: 600,
    inStock: false,
    isFavourite: false,
    rating:6
  },
  {
    _id: uuid(),
    catagoryName: "Pfeoster",
    title: "Psoter",
    price: 3000,
    inStock: true,
    isFavourite: true,
    rating:3
  },
  {
    _id: uuid(),
    catagoryName: "Pfeoster",
    title: "Psoter",
    price: 3000,
    inStock: true,
    isFavourite: true,
    rating:3
  }
];
function Products() {
  return (
    <main>
      <FiltersPanel/>
      <div className="main-content my-2" id="main-content-products">
        {prod.map(
          ({
            _id,
            catagoryName,
            title,
            price,
            inStock,
            isFavourite,
            prodImg,
            rating
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
                  rating={rating} />
              );
            }
        )}
      </div>
    </main>
  );
}

export { Products };
