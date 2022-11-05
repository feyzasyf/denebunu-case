import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import ProductList from "../productList/ProductList";
import { BsHeart } from "react-icons/bs";
import { SiNintendogamecube } from "react-icons/si";
import "./Category.css";
import { prepareText } from "../../utils/prepareText";

const Category = ({ name, products, isRemoveCategoryDisabled }) => {
  const {
    checkedAvailableProducts,
    removeCategory,
    addProductsToCategory,
    removeProductsFromCategory,
  } = useContext(AppContext);

  const [checkedCategoryItems, setCheckedCategoryItems] = useState([]);

  let disableAddButton = checkedAvailableProducts.length === 0;
  let disableRemoveButton = checkedCategoryItems.length === 0;

  const addButtonText = prepareText(checkedAvailableProducts, "Add");
  const removeButtonText = prepareText(checkedCategoryItems, "Remove");

  const handleChange = (e) => {
    const title = e.target.name;
    const isChecked = e.target.checked;
    let updatedList = [...checkedCategoryItems];

    const checkedItem = products.filter((product) => product.title === title);

    if (isChecked) {
      updatedList = [...checkedCategoryItems, ...checkedItem];
    } else {
      updatedList.splice(checkedCategoryItems.indexOf(checkedItem), 1);
    }

    setCheckedCategoryItems(updatedList);
  };

  return (
    <div className="category-container">
      <div className="category-product-list">
        <p className="title">
          <span className="icon">
            <SiNintendogamecube />
          </span>
          {name}
        </p>
        {products.length > 0 ? (
          <ProductList products={products} handleChange={handleChange} />
        ) : (
          <div className="content">
            <span>
              <BsHeart />
            </span>
            <p>Select products to add here</p>
          </div>
        )}
      </div>
      <div className="btn-container">
        <div className="product-btn">
          <button
            disabled={disableAddButton}
            className={disableAddButton ? "btn" : "btn active"}
            onClick={() => addProductsToCategory(name)}
          >
            {addButtonText}
          </button>
          <button
            disabled={disableRemoveButton}
            className={disableRemoveButton ? "btn" : "btn active"}
            onClick={() => {
              removeProductsFromCategory(name, checkedCategoryItems);
              setCheckedCategoryItems([]);
            }}
          >
            {removeButtonText}
          </button>
        </div>
        <div>
          <button
            disabled={isRemoveCategoryDisabled}
            className={isRemoveCategoryDisabled ? "btn" : "btn active"}
            onClick={() => removeCategory(name)}
          >
            Remove Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
