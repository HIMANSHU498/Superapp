import React, { useEffect, useState } from "react";
import "./Weather.css";
import humidity from "./../../assets/humidity.png";
import temp from "./../../assets/temp.png";
import wind from "./../../assets/wind.png";
const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.weatherapi.com/v1/current.json?key=1272951965b64fe7bfb132936231904&q=India&aqi=no"
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="weather-container">
        {weatherData ? (
          <div className="date-card">
            <span>{weatherData.location.localtime} PM</span>
          </div>
        ) : (
          <></>
        )}
        {weatherData ? (
          <div className="weather-card">
            <div className="cloud">
              <img
                src={weatherData.current.condition.icon}
                alt="weather condition"
              />
              <div style={{ textAlign: "center" }}>
                {" "}
                {weatherData.current.condition.text}
              </div>
            </div>
            <span></span>
            <div className="temp">
              {weatherData.current.temp_c}&deg;C
              <p style={{ color: "white", marginTop: "`10%" }}>
                <img src={temp} alt="temp-icon" className="weather-icon" />
                {weatherData.current.pressure_mb} mbar <br />
                Pressure
              </p>
            </div>
            <span></span>
            <div className="wind">
              <img src={wind} alt="wind-icon" className="weather-icon" />
              {weatherData.current.wind_kph} km/h <br />
              wind
              <br /> <br />
              <span style={{ border: "none" }}>
                <img
                  src={humidity}
                  alt="humidity-icon"
                  className="weather-icon"
                />
                {weatherData.current.humidity}% <br /> Humidity
              </span>
            </div>
          </div>
        ) : (
          <div style={{ color: "red" }}>*api failed to fetch</div>
        )}
      </div>
    </>
  );
};

export default Weather;
