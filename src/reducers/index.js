import { getAllProducts } from "../data/products";

const initialState = {
  products: getAllProducts(),
  cartedProducts: [],
  wishListProducts: [],
  sortBy: "newest",
  searchQuery: "",
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cartedProducts: [
          ...state.cartedProducts,
          { ...action.payload, quantityInCart: 1 },
        ],
      };
    }
    case "ADD_TO_WISHLIST": {
      return {
        ...state,
        wishListProducts: [...state.wishListProducts, action.payload],
      };
    }
    case "REMOVE_FROM_WISHLIST": {
      return {
        ...state,
        wishListProducts: state.wishListProducts.filter(
          (p) => p.id !== action.payload
        ),
      };
    }
    case "REMOVE_FROM_CART": {
      const afterRemovedFromCart = state.cartedProducts.filter(
        (p) => p.id !== action.payload.id
      );
      return {
        ...state,
        cartedProducts: afterRemovedFromCart,
      };
    }
    case "INCREMENT_QUANTITY": {
      return {
        ...state,
        cartedProducts: state.cartedProducts.map((p) =>
          p.id === action.payload.id
            ? { ...p, quantityInCart: p.quantityInCart + 1 }
            : p
        ),
      };
    }
    case "DECREMENT_QUANTITY": {
      return {
        ...state,
        cartedProducts: state.cartedProducts.map((p) =>
          p.id === action.payload.id
            ? { ...p, quantityInCart: p.quantityInCart - 1 }
            : p
        ),
      };
    }
    case "SET_SORT_BY": {
      return {
        ...state,
        sortBy: action.payload,
      };
    }

    case "SET_SEARCH_QUERY": {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }

    default:
      return state;
  }
};
export { initialState, productReducer };
