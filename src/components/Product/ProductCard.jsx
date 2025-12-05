import { useProduct } from "../../context";
import getImageUrl from "../../utils/getImageUrl";
import { getPriceAfterDiscount } from "../../utils/getPriceAfteDiscount";
import Rating from "./Rating";

export default function ProductCard({ product }) {
  const { state, dispatch } = useProduct();
  const cartItem = state.cartedProducts.find((p) => p.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantityInCart : 0;
  const wishListed = state.wishListProducts.some((p) => p.id === product.id);

  function handleAddToCart(product) {
    if (!cartItem && quantityInCart <= product.stock) {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    }
  }

  function handleWishList(product, type) {
    if (!cartItem) {
      if (type === "add") {
        if (wishListed) return;
        dispatch({
          type: "ADD_TO_WISHLIST",
          payload: product,
        });
      }
      if (type === "remove") {
        dispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: product.id,
        });
      }
    }
  }

  function handleRemoveFromCart(product) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  }

  return (
    <div className="bg-gray-100 flex flex-col overflow-hidden  rounded-sm">
      <div className="h-48 bg-gray-200 flex items-center justify-center relative">
        <img
          src={getImageUrl(product.image)}
          alt={product.name}
          className="h-full w-auto object-cover "
        />
        <span className="h-fit w-fit text-white text-xs px-1 rounded-full bg-shop-orange absolute top-2 right-2">
          {product.discountPercentage}% off
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h5 className="text-sm sm:text-base  text-slate-900 truncate flex flex-col">
            {product.title}{" "}
            <span className="text-[14px] mt-3 text-gray-700">
              ({product.stock - quantityInCart} pcs left)
            </span>
          </h5>
          <div className="flex flex-wrap justify-between gap-2 mt-3">
            <div className="flex gap-2">
              <h6 className="text-sm sm:text-base font-bold text-slate-900">
                $
                {getPriceAfterDiscount(
                  product.discountPercentage,
                  product.price
                )}
              </h6>
              <h6 className="text-sm sm:text-base text-slate-600">
                <strike>${product.price}</strike>
              </h6>
            </div>
            <div className="flex items-center gap-0.5">
              <Rating value={product.rating} />
              <span className="text-xs text-gray-500 ml-1">
                {product.rating.toFixed(1)} / 5
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          {wishListed ? (
            <button
              onClick={() => handleWishList(product, "remove")}
              className="bg-red-200 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer"
              title="Wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="lucide lucide-heart-icon lucide-heart"
                fill="#dc2626"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.41 
           4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 
           3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.78-3.4 6.86-8.55 
           11.54L12 21.35z"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => handleWishList(product, "add")}
              className="bg-red-200 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer"
              title="Wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart-icon lucide-heart"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
            </button>
          )}
          {wishListed ? (
            <button
              type="button"
              className="text-sm font-medium px-2 cursor-pointer min-h-9 w-full bg-shop-orange/90 hover:bg-shop-orange/90 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm"
            >
              Wishlisted
            </button>
          ) : cartItem ? (
            <button
              type="button"
              onClick={() => handleRemoveFromCart(product)}
              className="text-sm font-medium px-2 cursor-pointer min-h-9 w-full bg-red-700 hover:bg-red-600 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm"
            >
              Remove from cart
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleAddToCart(product)}
              className="text-sm font-medium px-2 cursor-pointer min-h-9 w-full bg-shop-black hover:bg-shop-black/95 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
