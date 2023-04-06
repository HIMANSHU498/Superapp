import React from "react";
import "./Home.css";
import Banner from "./../../assets/homepage-img.png";
const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="banner">
          <img src={Banner} alt="banner-img" className="banner-img" />
          <div className="already-login">Already have an account?</div>
          <button className="login-btn">LOGIN</button>
          <h1 className="banner-heading">Discover new things on Superapp</h1>
        </div>
        <div className="signup">
          <h1 className="form-title">Super App</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
