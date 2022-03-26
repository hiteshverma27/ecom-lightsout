import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    catagoryName: "poster",
    title: "Psoteeer",
    price: 200,
    inStock: true,
    isFavourite: false,
    rating: 1,
  },
  {
    _id: uuid(),
    catagoryName: "flag",
    title: "Falg",
    price: 1000,
    inStock: true,
    isFavourite: false,
    rating: 2,
  },
  {
    _id: uuid(),
    catagoryName: "poster",
    title: "Pser",
    price: 8000,
    inStock: false,
    isFavourite: true,
    rating: 3,
  },
  {
    _id: uuid(),
    catagoryName: "scaleModel",
    title: "Psotefefeeer",
    price: 800,
    inStock: false,
    isFavourite: false,
    rating: 4,
  },
  {
    _id: uuid(),
    catagoryName: "wearable",
    title: "Psoteeer",
    price: 600,
    inStock: false,
    isFavourite: false,
    rating: 5,
  },
  {
    _id: uuid(),
    catagoryName: "poster",
    title: "Psoter",
    price: 3000,
    inStock: true,
    isFavourite: true,
    rating: 6,
  },
  {
    _id: uuid(),
    catagoryName: "flag",
    title: "Psoter",
    price: 3000,
    inStock: true,
    isFavourite: true,
    rating: 7,
  },
];
