import React from "react";
import "./CategorySelection.css";
import categories from "./categories.js";
const CategorySelection = ({ selected, Clicked, handleClick }) => {
  return (
    <>
      <div className="right-container">
        <div className="cardWrapper">
          {categories.map((e, index) => (
            <div
              className="card"
              style={{
                background: e.color,
                border: `${
                  selected.includes(e.title) ? "4px solid green" : "none"
                }`,
              }}
              onClick={() => Clicked(e.title)}
              key={index}
            >
              <div className="card-title">{e.title}</div>

              <img src={e.image} alt={e.title + "image"} className="card-img" />
            </div>
          ))}
        </div>
        <button className="next-btn" onClick={handleClick}>
          Next Page
        </button>
      </div>
    </>
  );
};

export default CategorySelection;
