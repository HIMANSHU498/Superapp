import React, { useState, useEffect } from "react";
import "./News.css";
import newsBackground from "./../../assets/news-pic.png";
import { useNavigate } from "react-router-dom";
const News = () => {
  const [news, setNews] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b516f91932ac4dd0a3cfc38900d24f3c"
      );
      const response = await data.json();
      setNews(response.articles[2]);
    };
    getNews();
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
            <div>{news.title}</div>
            <span>{news.publishedAt}</span>
          </div>
        ) : (
          <></>
        )}
        {news ? <div className="news">{news.description}</div> : <></>}
      </div>
      <button className="browse" onClick={handleClick}>
        Browse
      </button>
    </>
  );
};

export default News;
