import React, { useState, useEffect } from "react";
import "./News.css";
import newsBackground from "./../../assets/news-pic.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.newscatcherapi.com/v2/search",
      params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
      headers: {
        "x-api-key": "W9x4V7dUVP4aMBavqj7mdxxfFCyNqDUukgcag4gffoI",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setNews(response.data.articles[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/entertainment");
  };
  return (
    <>
      <div className="news-container">
        <img
          src={news ? news.media : newsBackground}
          alt="pic"
          className="news-img"
        />
        {news ? (
          <div className="news-title">
            <div>{news.title}</div>
            <span>{news.published_date}</span>
          </div>
        ) : (
          <></>
        )}
        {news ? (
          <div className="news">{news.summary}</div>
        ) : (
          <p>api fetching the data</p>
        )}
      </div>
      <button className="browse" onClick={handleClick}>
        Browse
      </button>
    </>
  );
};

export default News;
