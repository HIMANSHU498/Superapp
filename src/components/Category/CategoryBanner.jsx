import React from "react";
import "./CategoryBanner.css";
const CategoryBanner = () => {
  return (
    <>
      <div className="category-container">
        <div className="category-h1">Super app</div>
        <div className="category-h2">Choose your entertainment category</div>
        <div className="select-category">
          Romance &nbsp;
          <span style={{ color: "#080C00", cursor: "pointer" }}>X</span>
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
