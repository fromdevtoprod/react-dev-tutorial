import { Fragment } from "react";
import { getCategories, filterProductsByStock } from "./helpers";

export default function ProductTable({ products, showOnlyStocked }) {
  const filteredProducts = filterProductsByStock(products, showOnlyStocked);
  const categoriesRow = getCategoriesRow(filteredProducts);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{categoriesRow}</tbody>
    </table>
  );
}

function getCategoriesRow(products) {
  const categories = getCategories(products);
  return categories.map((category) => {
    return (
      <Fragment key={category.name}>
        <ProductCategoryRow key={category.name} category={category.name} />
        {category.products.map((product) => (
          <ProductRow key={product.name} product={product} />
        ))}
      </Fragment>
    );
  });
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  let style = {};
  if (!product.stocked) style = { color: "red" };
  return (
    <tr>
      <td style={style}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
