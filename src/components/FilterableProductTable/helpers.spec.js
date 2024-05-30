import { filterProductsByName } from "./helpers";

describe("filterProductsByName()", () => {
  it("should return an array of products that match the search term", () => {
    const products = [
      { name: "apple", price: 1, stocked: true },
      { name: "banana", price: 2, stocked: false },
      { name: "orange", price: 3, stocked: true },
    ];
    const searchTerm = "apple";
    const result = filterProductsByName(products, searchTerm);
    expect(result).toEqual([{ name: "apple", price: 1, stocked: true }]);
  });
});
