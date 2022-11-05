import React, { createContext, useState } from "react";
import { sortArray } from "../utils/sort";
import products from "../data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [availableProducts, setAvailableProducts] = useState(products);
  const [checkedAvailableProducts, setCheckedAvailableProducts] = useState([]);
  const [categoryNo, setCategoryNo] = useState(2);
  const [categoryList, setCategoryList] = useState([
    { name: "Category 1", products: [] },
  ]);

  const addToAvailableProducts = (products) => {
    const updatedProductList = [...availableProducts, ...products];
    setAvailableProducts(sortArray(updatedProductList));
  };

  const addCategory = () => {
    const name = `Category ${categoryNo}`;
    const newCategory = { name: name, products: [] };
    setCategoryNo((prev) => prev + 1);
    setCategoryList([...categoryList, newCategory]);
  };

  const removeCategory = (name) => {
    if (categoryList.length === 1) return;
    const categoryToBeRemoved = categoryList.find(
      (category) => category.name === name
    );
    addToAvailableProducts(categoryToBeRemoved.products);
    const updatedCategoryList = categoryList.filter(
      (category) => category.name !== name
    );
    setCategoryList(updatedCategoryList);
  };

  const addProductsToCategory = (name) => {
    const updatedCategoryList = categoryList.map((category) => {
      if (category.name === name) {
        const newProductList = sortArray([
          ...category.products,
          ...checkedAvailableProducts,
        ]);
        return { ...category, products: newProductList };
      }
      return category;
    });
    setCategoryList(updatedCategoryList);

    const remainingProducts = availableProducts.filter((product) => {
      const hasProduct = checkedAvailableProducts.findIndex(
        (checkedProduct) => checkedProduct.title === product.title
      );
      if (hasProduct === -1) {
        return true;
      }
      return false;
    });
    setAvailableProducts(remainingProducts);

    setCheckedAvailableProducts([]);
  };

  const removeProductsFromCategory = (name, items) => {
    const updatedCategoryList = categoryList.map((category) => {
      if (category.name === name) {
        const newProductList = category.products.filter((product) => {
          const hasProduct = items.findIndex(
            (checkedProduct) => checkedProduct.title === product.title
          );
          if (hasProduct === -1) {
            return true;
          }
          return false;
        });
        return { ...category, products: newProductList };
      }
      return category;
    });
    setCategoryList(updatedCategoryList);

    addToAvailableProducts(items);
  };

  const value = {
    availableProducts,
    setAvailableProducts,
    checkedAvailableProducts,
    setCheckedAvailableProducts,
    addCategory,
    categoryList,
    removeCategory,
    addProductsToCategory,
    removeProductsFromCategory,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
