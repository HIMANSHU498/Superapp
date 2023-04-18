import React from "react";
import "./CategoryBanner.css";
const CategoryBanner = ({ selected, Clicked }) => {
  return (
    <>
      <div className="category-container">
        <div className="category-h1">Super app</div>
        <div className="category-h2">Choose your entertainment category</div>
        <div className="selection-box">
          {selected.map((item, index) => {
            return (
              <div className="select-category" key={index}>
                {item} &nbsp;
                <span
                  style={{ color: "#080C00", cursor: "pointer" }}
                  onClick={() => Clicked(item)}
                >
                  X
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
