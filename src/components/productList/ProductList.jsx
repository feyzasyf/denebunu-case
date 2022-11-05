import React from "react";
import Product from "../product/Product";
import "./ProductList.css";

const ProductList = ({ products, handleChange }) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
