import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FiSave } from "react-icons/fi";
import "./Review.css";

const Review = () => {
  const { categoryList, availableProducts } = useContext(AppContext);

  return (
    <div className="review-container">
      <div className="review-content">
        <p className="title review-title">
          <span className="icon">
            <FiSave />
          </span>
          Review
        </p>
        <p>Available Products: {availableProducts.length} </p>
        <p>Categories: {categoryList.length} </p>
        <div className="categories-detail">
          {categoryList.map((category) => {
            return (
              <p key={category.name}>
                {category.name}: {category.products.length}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
