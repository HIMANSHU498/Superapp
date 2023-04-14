import React from "react";
import "./Banner.css";
import BannerImg from "./../../assets/homepage-img.png";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <img src={BannerImg} alt="banner-img" className="banner-img" />
        <div className="already-login">Already have an account?</div>
        <button className="login-btn">LOGIN</button>
        <h1 className="banner-heading">Discover new things on Superapp</h1>
      </div>
    </>
  );
};

export default Banner;
