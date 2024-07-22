import React, { useState } from "react";
import "../style/Button.css";

function getVariant(variant) {
  switch (variant) {
    case "red":
      return "variant-red";

    case "green":
      return "variant-green";

    case "blue":
      return "variant-blue";

    default:
      return "";
  }
}

export function DashboardButton({ onClick, iconPath, text, variant }) {
  return (
    <button
      onClick={onClick}
      className={`dashboard-btn-body ${getVariant(variant)}`}
    >
      <div className="dashboard-btn-inner">
        {iconPath ? <img src={iconPath} alt="" width={32} height={32} /> : null}
        {text}
      </div>
    </button>
  );
}

export function FormButton({ onClick, text, variant }) {
  return (
    <button onClick={onClick} className={`form-btn ${getVariant(variant)}`}>
      {text}
    </button>
  );
}

export function GoogleButton({ onClick }) {
  return (
    <button className="google-btn" onClick={onClick}>
      <img src="/icons/google.png" alt="Google Icon" className="google-icon" />
      Continuez avec Google
    </button>
  );
}

export function ToggleButton({ onClick }) {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    const newToggleState = !isToggled;
    setIsToggled(newToggleState);
    onClick(newToggleState);
  }

  return (
    <button
      onClick={handleToggle}
      className={`${isToggled ? "toggle-on" : "toggle-off"} toggle-btn`}
    >
      <div className={`${isToggled ? "toggle-on" : ""} toggle-handle`}></div>
    </button>
  );
}