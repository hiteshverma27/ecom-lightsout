export const filterByCategory = (products, category) => {
  if (Object.values(category).every((v) => !v)) {
    return products;
  }
  console.log(category);
  return products.filter((product) => {
    console.log(product, category);
    return category[product.catagoryName];
  });
};
