import React, { useState } from "react";
import "./Timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import up from "./../../assets/up.png";
import down from "./../../assets/down.png";
import beep from "./../../assets/Beep.mp3";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [play, setPlay] = useState(false);

  const increasedSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increasedMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increasedHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreasedSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreasedMinute = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreasedHour = () => {
    if (hours === 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };
  const children = (time) => {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);
    const second = time % 60;
    if (time === 0) {
      new Audio(beep).play();
    }
    return `${hour}:${minute}:${second}`;
  };

  const totalSeconds = seconds + minutes * 60 + hours * 60 * 60;
  return (
    <>
      <div className="timer-container">
        <div className="timer-circle">
          <CountdownCircleTimer
            size={100}
            isPlaying={play}
            duration={totalSeconds}
            colors={["#FF6A6A"]}
            strokeWidth={4}
          >
            {({ remainingTime }) => (
              <span style={{ color: "white", fontSize: "1.2rem" }}>
                {children(remainingTime)}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
        <div className="time-setter">
          <div className="timer">
            <div className="hours">
              <h4>Hours</h4>
              <img src={up} alt="" onClick={increasedHour} />
              <h3>{hours}</h3>
              <img src={down} alt="" onClick={decreasedHour} />
            </div>
            <span>:</span>
            <div className="hours">
              <h4>Minutes</h4>
              <img src={up} alt="" onClick={increasedMinute} />
              <h3>{minutes}</h3>
              <img src={down} alt="" onClick={decreasedMinute} />
            </div>
            <span>:</span>
            <div className="hours">
              <h4>Seconds</h4>
              <img src={up} alt="" onClick={increasedSecond} />
              <h3>{seconds}</h3>
              <img src={down} alt="" onClick={decreasedSecond} />
            </div>
          </div>
          <div className="start-time" onClick={() => setPlay((e) => !e)}>
            {play ? <div>Pause</div> : <div>Start</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
