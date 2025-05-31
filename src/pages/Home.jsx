import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
const Home = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const getUsers = async () => {
    const response = await axios.get("/products.json");
    setProducts(response.data);
    setFilteredProducts(response.data);
  };

  const handleInput = (e) => {
    const filteredUsers = products.filter((product) => {
      return product.name.includes(e.target.value);
    });
    setFilteredProducts(filteredUsers);
  };

  const handleCategory = (e) => {
    if (e.target.value == "All") {
      setFilteredProducts(products);
      return;
    }
    const filteredUsers = products.filter((product) => {
      return product.category == e.target.value;
    });
    setFilteredProducts(filteredUsers);
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log(cart);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className=" mx-auto">
      <Navbar
        cart={cart}
        handleCategory={handleCategory}
        handleInput={handleInput}
      />
      <h1>Users Directory</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
        {filteredProducts == 0 ? (
          <div>No user found</div>
        ) : (
          filteredProducts.map((product) => {
            return (
              <Card addToCart={addToCart} key={product.id} product={product} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
