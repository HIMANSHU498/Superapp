import React, { useState } from "react";
import CategoryBanner from "../components/Category/CategoryBanner";
import CategorySelection from "../components/Category/CategorySelection";

import { useNavigate } from "react-router-dom";
const Category = () => {
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
    localStorage.setItem("category", JSON.stringify(selected));
    if (selected.length >= 3) {
      navigate("/profile");
    } else {
      alert("Please select atleast 3 categories");
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <CategoryBanner selected={selected} Clicked={Clicked} />
      <CategorySelection
        selected={selected}
        Clicked={Clicked}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Category;
