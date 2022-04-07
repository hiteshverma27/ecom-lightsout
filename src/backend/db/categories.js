import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "poster",
  },
  {
    _id: uuid(),
    categoryName: "flag",
  },
  {
    _id: uuid(),
    categoryName: "scaleModel",
  },
  {
    _id: uuid(),
    categoryName: "wearable",
  },
];
