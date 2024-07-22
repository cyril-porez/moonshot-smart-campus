import React from "react";
import Timer from "../../components/Timer";
import Hourglass from "../../components/Hourglass";
import "../../style/Suivi.css";

/**
 * Page d'où les responsables/accompagnateurs pourront suivre la présence des élèves
 * en fonction des différents filtres
 */
export default function SuiviPresence() {
  return (
    <div className="container">
      <div className="student-info">
        <span className="student-count">nombre d’élèves : 25</span>
        <ul className="student-list">
          <li>Ibrahim Sylla</li>
          <li>Thibault Kine</li>
          <li>Cyril Porez</li>
          <li>Lucas Ribard</li>
          <li>Ridha Boughediri</li>
        </ul>
      </div>
      <div className="timer-container">
        <Timer />
      </div>
      <div className="hourglass-container">
        <Hourglass />
      </div>
    </div>
  );
}
