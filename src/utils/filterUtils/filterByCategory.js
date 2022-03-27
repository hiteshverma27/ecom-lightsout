export const filterByCategory = (products, category) => {
  if (Object.values(category).every((v) => !v)) {
    return products;
  }
  return products.filter((product) => {
    return category[product.catagoryName];
  });
};
