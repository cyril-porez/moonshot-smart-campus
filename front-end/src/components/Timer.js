import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = ({ timeLeft }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}min${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div>
      <h1>Temps restant : {formatTime(timeLeft)}</h1>
    </div>
  );
};

export default Timer;
