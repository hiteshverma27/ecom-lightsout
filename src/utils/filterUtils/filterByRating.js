export const filterByRating = (products, inputRating = 4) => {
  return products.filter(({ rating }) => rating >= inputRating);
};
