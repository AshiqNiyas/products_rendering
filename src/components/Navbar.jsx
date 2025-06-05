import { useEffect, useState } from "react";
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = ({ handleCategory, handleInput, cart }) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const navigate = useNavigate();
  const updateQuantity = () => {
    const quantity = cart.reduce((total, item) => total + item.quantity, 0);
    setCartQuantity(quantity);
  };
  useEffect(() => {
    updateQuantity();
  }, [cart]);
  return (
    <div className="flex justify-between bg-gray-300 p-3 mb-3">
      <input
        onInput={handleInput}
        type="search"
        placeholder="Search a product"
      />
      <select onChange={handleCategory} name="" id="">
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fitness">Fitness</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Accessories">Accessories</option>
      </select>

      <div onClick={() => navigate("/cart")} className="relative">
        <IoCart size={30} color="blue" />
        {cartQuantity > 0 ? (
          <div className="absolute top-0 right-0 text-xs w-3 h-3 p-2 flex justify-center items-center rounded-full bg-red-400">
            {cartQuantity}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
