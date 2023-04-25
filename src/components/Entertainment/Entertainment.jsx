import React, { useEffect, useState } from "react";
import ProfileIcon from "./../../assets/profileBig.png";
import "./Entertainment.css";
import { useNavigate } from "react-router-dom";

const Entertainment = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=43258e9a65aba808ac032cfc1ff28cf0&language=en-US`
      );
      const moviedetail = await data.json();
      console.log(moviedetail.results.splice(1, 4));
      setMovies(moviedetail.results.splice(1, 4));
    };
    fetchMovies();
  }, []);
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
            {movies.map((item, index) => {
              <div className="movie-category">{item.id}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Entertainment;
