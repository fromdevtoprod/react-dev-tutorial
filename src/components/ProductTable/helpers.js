export function getCategories(products) {
  const categoryNames = getCategoryNames(products);
  return categoryNames.map((category) => ({
    name: category,
    products: getProducts(products, category),
  }));
}

export function filterProductsByStock(products, showOnlyStocked) {
  if (!showOnlyStocked) return products;
  return products.filter((product) => product.stocked);
}

function getProducts(products, category) {
  return products.filter((product) => product.category === category);
}

function getCategoryNames(products) {
  return Array.from(new Set(products.map((product) => product.category)));
}
