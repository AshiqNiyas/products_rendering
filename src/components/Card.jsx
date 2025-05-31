import React from "react";
import { Link } from "react-router-dom";
const Card = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-md p-4 border border-gray-400 rounded-md">
      <h1>Name : {product.name}</h1>
      <h2>Category : {product.category}</h2>
      <p className="text-sm">Price : {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="p-1 rounded-md bg-orange-300"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
