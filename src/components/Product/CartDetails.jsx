import { useProduct } from "../../context";
import CartedProduct from "./CartedProduct";
import OrderSummary from "./OrderSummary";

export default function CartDetails() {
  const { state } = useProduct();
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
        {state.cartedProducts.length === 0 ? (
          <p className="text-slate-700">Your cart is empty.</p>
        ) : (
          state.cartedProducts.map((product) => (
            <CartedProduct key={product.id} product={product} />
          ))
        )}
        <OrderSummary />
      </div>
    </div>
  );
}
