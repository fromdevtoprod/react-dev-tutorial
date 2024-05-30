import { filterProductsByStock, getCategories } from "./helpers";

describe("filterProductsByStock()", () => {
  it("should return an array of products that are stocked", () => {
    const products = [
      { name: "apple", price: 1, stocked: true },
      { name: "banana", price: 2, stocked: false },
      { name: "orange", price: 3, stocked: true },
    ];
    const showOnlyStocked = true;
    const result = filterProductsByStock(products, showOnlyStocked);
    expect(result).toEqual([
      { name: "apple", price: 1, stocked: true },
      { name: "orange", price: 3, stocked: true },
    ]);
  });

  it("should return all products if showOnlyStocked is false", () => {
    const products = [
      { name: "apple", price: 1, stocked: true },
      { name: "banana", price: 2, stocked: false },
      { name: "orange", price: 3, stocked: true },
    ];
    const showOnlyStocked = false;
    const result = filterProductsByStock(products, showOnlyStocked);
    expect(result).toEqual(products);
  });
});

describe("getCategories()", () => {
  it("should return an array of categories with products", () => {
    const products = [
      { name: "apple", price: 1, stocked: true, category: "fruit" },
      { name: "banana", price: 2, stocked: false, category: "fruit" },
      { name: "orange", price: 3, stocked: true, category: "fruit" },
      { name: "carrot", price: 1, stocked: true, category: "vegetable" },
      { name: "broccoli", price: 2, stocked: false, category: "vegetable" },
      { name: "spinach", price: 3, stocked: true, category: "vegetable" },
    ];
    const result = getCategories(products);
    expect(result).toEqual([
      {
        name: "fruit",
        products: [
          { name: "apple", price: 1, stocked: true, category: "fruit" },
          { name: "banana", price: 2, stocked: false, category: "fruit" },
          { name: "orange", price: 3, stocked: true, category: "fruit" },
        ],
      },
      {
        name: "vegetable",
        products: [
          { name: "carrot", price: 1, stocked: true, category: "vegetable" },
          { name: "broccoli", price: 2, stocked: false, category: "vegetable" },
          { name: "spinach", price: 3, stocked: true, category: "vegetable" },
        ],
      },
    ]);
  });
});
