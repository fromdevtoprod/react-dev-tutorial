import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import { PRODUCTS } from "./constants";

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
