import { useReducer } from "react";
import Announce from "./components/layout/Announce";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import NewsLetter from "./components/layout/NewsLetter";
import CartDetails from "./components/Product/CartDetails";
import ProductList from "./components/Product/ProductList";
import { ProductContext } from "./context";
import { initialState, productReducer } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <>
      <ProductContext value={{ state, dispatch }}>
        <Announce />
        <Header />
        <main className="container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px">
            <ProductList />
            <CartDetails />
          </div>
        </main>
        <NewsLetter />
        <Footer />
      </ProductContext>
    </>
  );
}

export default App;
