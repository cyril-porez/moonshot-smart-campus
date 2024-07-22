import React, { useState, useEffect } from 'react';
import '../../style/Suivi2.css';
import Sablier from '../../components/Sablier';

const Suivi2  = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [totalTime] = useState(660); // 11 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = seconds => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}m ${s}s`;
  };

  return (
    <div className="app">
      <div className="header">
        <div className="student-count">nombre d'élèves : 25 / 43</div>
        <div className="total-time">{formatTime(totalTime)}</div>
      </div>
      <div className="timer">
        <Sablier />
        <div className="time-left">{formatTime(timeLeft)} restantes</div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(timeLeft / totalTime) * 100}%` }}></div>
        </div>
      </div>
      <button className="absent-students-btn">Voir les élèves absents</button>
    </div>
  );
};

export default Suivi2
