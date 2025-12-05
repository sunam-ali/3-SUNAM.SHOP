import { useProduct } from "../../context";

export default function SortProduct() {
  const { state, dispatch } = useProduct();

  const handleSortChange = (e) => {
    dispatch({ type: "SET_SORT_BY", payload: e.target.value });
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">Your Products</h2>
      <div className="flex items-center space-x-2">
        <span className="text-sm">Sort by:</span>
        <select
          value={state.sortBy}
          onChange={handleSortChange}
          className="border-[0.5px] border-gray-300 rounded-md px-2 py-1 text-sm"
        >
          <option value="newest">Newest</option>
          <option value="popular">Most Popular</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
