import React, { useContext } from "react";
import { IoCubeOutline } from "react-icons/io5";
import "./AvailableProducts.css";

import ProductList from "../productList/ProductList";
import { AppContext } from "../../context/AppContext";

const AvailableProducts = () => {
  const {
    availableProducts,
    setCheckedAvailableProducts,
    checkedAvailableProducts,
  } = useContext(AppContext);

  const handleChange = (e) => {
    const title = e.target.name;
    const isChecked = e.target.checked;
    let updatedList = [...checkedAvailableProducts];
    const checkedItem = availableProducts.find(
      (product) => product.title === title
    );

    if (isChecked) {
      updatedList = [...checkedAvailableProducts, checkedItem];
    } else {
      updatedList.splice(checkedAvailableProducts.indexOf(checkedItem), 1);
    }
    
    setCheckedAvailableProducts(updatedList);
  };

  return (
    <div className="available-products-container">
      <div className="product-content">
        <p className="title">
          <span className="icon">
            <IoCubeOutline />
          </span>
          AvailableProducts
        </p>
        <ProductList products={availableProducts} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default AvailableProducts;
