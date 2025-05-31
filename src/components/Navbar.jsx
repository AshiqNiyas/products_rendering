import { IoCart } from "react-icons/io5";

const Navbar = ({ handleCategory, handleInput, cart }) => {
  return (
    <div className="flex justify-between bg-gray-300 p-3 mb-3">
      <input onInput={handleInput} type="search" placeholder="Search a user" />
      <select onChange={handleCategory} name="" id="">
        <option value="All">All</option>
        <option value="HR">HR</option>
        <option value="Marketing">Marketing</option>
        <option value="Training">Training</option>
        <option value="Finance">Finance</option>
      </select>

      <div>
        <IoCart size={30} color="blue" />

        {cart.length}
      </div>
    </div>
  );
};

export default Navbar;
