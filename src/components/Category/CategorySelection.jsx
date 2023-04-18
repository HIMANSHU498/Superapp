import React, { useState } from "react";
import "./CategorySelection.css";
import categories from "./categories.js";
import { useNavigate } from "react-router-dom";

const CategorySelection = () => {
  const [selected, setSelected] = useState([]);

  const Clicked = (data) => {
    if (selected.includes(data)) {
      setSelected(selected.filter((item) => item !== data));
    } else {
      setSelected([...selected, data]);
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("entertainment Category", JSON.stringify(selected));
    if (selected.length >= 3) {
      navigate("/profile");
    }
  };
  return (
    <>
      <div className="right-container">
        {selected.map((item, i) => {
          return (
            <div
              key={i}
              className="select-category"
              style={{ marginTop: "20%" }}
            >
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
        <div className="cardWrapper">
          {categories.map((e, index) => (
            <div
              className="card"
              style={{
                background: e.color,
                border: `${
                  selected.includes(e.title)
                    ? "4px solid green"
                    : "4px solid white"
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
