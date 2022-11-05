import React from "react";
import "./Product.css";

const Product = ({ title, handleChange }) => {
  return (
    <div className="product-container">
      <input onChange={handleChange} type="checkbox" name={title} />
      <p>{title}</p>
    </div>
  );
};

export default Product;
