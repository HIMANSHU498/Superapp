import React from "react";
import CategoryBanner from "../components/Category/CategoryBanner";
import CategorySelection from "../components/Category/CategorySelection";

const Category = () => {
  return (
    <div style={{ display: "flex" }}>
      <CategoryBanner />
      <CategorySelection />
    </div>
  );
};

export default Category;
