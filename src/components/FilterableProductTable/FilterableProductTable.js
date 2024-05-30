import { useEffect, useState } from "react";
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar";
import { filterProductsByName } from "./helpers";

export default function FilterableProductTable({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showOnlyStocked, setShowOnlyStocked] = useState(false);

  const handleCheckboxClick = () => setShowOnlyStocked(!showOnlyStocked);
  const handleInputChange = (value) => setSearchTerm(value);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(filterProductsByName(products, searchTerm));
    }
  }, [searchTerm]);

  return (
    <div>
      <SearchBar
        onCheckboxClick={handleCheckboxClick}
        onInputChange={handleInputChange}
      />
      <ProductTable
        products={filteredProducts}
        showOnlyStocked={showOnlyStocked}
      />
    </div>
  );
}
