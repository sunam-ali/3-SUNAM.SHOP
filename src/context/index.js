import { createContext, useContext } from "react";
const ProductContext = createContext();

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductContext, useProduct };
