export const filterByPrice = (products, inputPrice = 10000) => {
  return products.filter(({ price }) => price <= inputPrice);
};
