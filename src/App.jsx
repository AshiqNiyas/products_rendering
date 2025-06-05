import Home from "./pages/Home";
import "./App.css";
import Notfound from "./pages/Notfound";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./pages/UserDetails";
import Cart from "./pages/Cart";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              products={products}
              filteredProducts={filteredProducts}
              setCart={setCart}
              setFilteredProducts={setFilteredProducts}
              setProducts={setProducts}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
