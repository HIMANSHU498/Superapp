import React from "react";
import ProfileIcon from "./../../assets/profileBig.png";
import "./Entertainment.css";
import { useNavigate } from "react-router-dom";
const Entertainment = () => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className="entertainment-container">
        <div className="page-title">Super app</div>
        <img
          src={ProfileIcon}
          alt=""
          className="profile-icon"
          onClick={goToProfile}
        />
        <div className="entertainment-h2">
          Entertainment according to your choice
        </div>
        <div className="movies-container">
          <div className="movies-card">
            <div className="movie-category"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entertainment;
