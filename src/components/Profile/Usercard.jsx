import React from "react";
import "./Usercard.css";
import userPic from "./../../assets/user-pic.png";
const Usercard = () => {
  const userData = JSON.parse(localStorage.getItem("userValues"));
  const categories = JSON.parse(localStorage.getItem("category"));

  return (
    <>
      <div className="user-card">
        <img src={userPic} alt="user-img" className="user-profile" />
        <div className="card-detail">
          <div className="card-name">{userData.name}</div>
          <div className="card-email">{userData.email}</div>
          <div className="card-username">{userData.username}</div>
          <div className="category-box">
            {categories.map((item, i) => {
              return (
                <div className="card-category" key={i}>
                  {item} &nbsp;
                  <span
                    style={{
                      color: "#080C00",
                      cursor: "pointer",
                      fontSize: "10px",
                      marginLeft: "0.6rem",
                    }}
                  >
                    X
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Usercard;
