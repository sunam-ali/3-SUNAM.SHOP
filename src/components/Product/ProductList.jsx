import { useProduct } from "../../context";
import ProductCard from "./ProductCard";
import SortProduct from "./SortProduct";

function filterProducts(products, searchQuery) {
  if (!searchQuery.trim()) return products;
  return products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

function sortProducts(products, sortBy) {
  switch (sortBy) {
    case "lowToHigh":
      return [...products].sort((a, b) => a.price - b.price);
    case "highToLow":
      return [...products].sort((a, b) => b.price - a.price);
    case "newest":
      return [...products].sort(
        (a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt)
      );
    case "popular":
    default:
      return [...products].sort((a, b) => b.rating - a.rating);
  }
}

export default function ProductList() {
  const { state } = useProduct();
  const filtered = filterProducts(state.products, state.searchQuery);
  const displayedProducts = sortProducts(filtered, state.sortBy);

  return (
    <div className="lg:col-span-2 px-4 sm:px-0">
      <SortProduct />
      <div className="product-grid">
        {displayedProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-8 text-lg">
            No products found.
          </div>
        ) : (
          displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
