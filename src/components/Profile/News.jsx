import React, { useState, useEffect } from "react";
import "./News.css";
import newsBackground from "./../../assets/news-pic.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState(false);

  useEffect(() => {
    axios
      .request(
        "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json"
      )
      .then(function (response) {
        setNews(response.data.articles[5]);
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
          src={news ? news.urlToImage : newsBackground}
          alt="pic"
          className="news-img"
        />
        {news ? (
          <div className="news-title">
            <div>{news ? news.title : ""}</div>
            <span>{news.publishedAt}</span>
          </div>
        ) : (
          <p>loading</p>
        )}
        {news ? (
          <div className="news">{news.content}</div>
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
