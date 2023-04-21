import React from "react";
import ProfileIcon from "./../../assets/profileBig.png";
import "./Entertainment.css";
const Entertainment = () => {
  return (
    <>
      <div className="entertainment-container">
        <div className="page-title">Super app</div>
        <img src={ProfileIcon} alt="" className="profile-icon" />
        <div className="entertainment-h2">
          Entertainment according to your choice
        </div>
      </div>
    </>
  );
};

export default Entertainment;
