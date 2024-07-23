import React, { useState, useEffect } from "react";
import "../style/Timer.css";
import Sablier from "./Sablier";

const Hourglass = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}s`;
  };

  const progressPercentage = ((300 - timeLeft) / 300) * 100;

  return (
    <div className="timer-container">
      <h1>Checkpoint</h1>
      <div className="checkpoint">
        <Sablier />
        <h2>{formatTime(timeLeft)} restantes</h2>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hourglass;
