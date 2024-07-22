import React from 'react';
import Timer from '../../components/Timer';
import Hourglass from '../../components/Hourglass';
import '../../style/Suivi.css'; // Make sure to create and import this CSS file

const Suivi = () => {
  return (
    <div className="container">
      <div className="timer-container">
        <Timer />
      </div>
      <div className="hourglass-container">
        <Hourglass />
      </div>
    </div>
  );
}

export default Suivi;
