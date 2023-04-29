import React, { useEffect, useState } from "react";
import ProfileIcon from "./../../assets/profileBig.png";
import "./Entertainment.css";
import { useNavigate } from "react-router-dom";

const Entertainment = () => {
  const [movies, setMovies] = useState({});

  const genres = localStorage.getItem("category");

  const [selectedGenre, setSelectedGenre] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=43258e9a65aba808ac032cfc1ff28cf0&language=en-US`
      );
      const genresData = await data.json();
      const response = genresData.genres.filter((genre) =>
        genres.includes(genre.name)
      );
      setSelectedGenre(response);
      fetchMovies(response.map((item) => item.id));
    };
    fetchGenres();
  }, []);

  const fetchMovies = async (genreIds) => {
    const genreMovies = {};

    for (const genre of genreIds) {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=43258e9a65aba808ac032cfc1ff28cf0&language=en-US&sort_by=popularity.desc&with_genres=${genre}`
      );
      const movies = await data.json();
      genreMovies[genre] = movies.results.splice(4, 4);
    }
    setMovies(genreMovies);
  };

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
          {selectedGenre.map((genre, index) => {
            return (
              <div className="movies-card" key={index}>
                <span>{genre.name}</span>
                <div className="movies-category">
                  {movies[genre.id] &&
                    movies[genre.id].map((movie, index) => {
                      return (
                        <img
                          key={index}
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className="movie-poster"
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Entertainment;
