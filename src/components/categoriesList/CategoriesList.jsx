import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Category from "../category/Category";
import "./CategoriesList.css";

const CategoriesList = () => {
  const { addCategory, categoryList } = useContext(AppContext);
  const [isRemoveCategoryDisabled, setIsRemoveCategoryDisabled] = useState(true);

  useEffect(() => {
    if (categoryList.length > 1) {
      setIsRemoveCategoryDisabled(false);
    } else {
      setIsRemoveCategoryDisabled(true);
    }
  }, [categoryList]);

  return (
    <div className="category-list-container">
      {categoryList.map((category) => {
        const { name, products } = category;
        return (
          <Category
            key={name}
            name={name}
            products={products}
            isRemoveCategoryDisabled={isRemoveCategoryDisabled}
          />
        );
      })}
      <div>
        <button className=" btn category-btn active" onClick={addCategory}>
          Add Category
        </button>
      </div>
    </div>
  );
};

export default CategoriesList;
