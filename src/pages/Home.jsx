import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
const Home = ({
  cart,
  products,
  filteredProducts,
  setCart,
  setProducts,
  setFilteredProducts,
}) => {
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
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
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
      <h1>All products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
        {filteredProducts == 0 ? (
          <div>No user found</div>
        ) : (
          filteredProducts.map((product) => {
            return (
              <Card
                addToCart={addToCart}
                key={product.id}
                product={product}
                cart={cart}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
