import React, { useState } from "react";

export function DashboardButton({ onClick, iconPath, text }) {
  return (
    <button onClick={onClick} className={`dashboard-btn-body `}>
      <div className="dashboard-btn-inner">
        {iconPath ? <img src={iconPath} alt="" width={32} height={32} /> : null}
        <p>{text}</p>
      </div>
    </button>
  );
}

export function FormButton({ onClick, text, className }) {
  return (
    <button
      onClick={onClick}
      className={`form-btn w-24 rounded-lg ${className}`}
    >
      {text}
    </button>
  );
}

export function GoogleButton({ onClick }) {
  return (
    <button className="google-btn" onClick={onClick}>
      <img src="/icons/google.png" alt="Google Icon" className="google-icon" />
      <p>Continuez avec Google</p>
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
