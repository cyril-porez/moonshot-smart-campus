import React from "react";
import "../style/Header.css";
import "../style/Button.css";

export default function Header({ logo, currentUser, toggleSidebar }) {

    return (
        <header>
            <button className="borderless round burger" onClick={toggleSidebar}>
                <img src="/icons/burger.png" width={32} height={32} alt=""/>
            </button>
            <a href="/" style={{ height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {logo ? <img src={logo} alt="" height="100%"/> : null}
                <h1>{"Syllaverse".toUpperCase()}</h1>
            </a>
            <p style={{ fontSize: "18px" }}>Bonjour, {currentUser}</p>
        </header>
    )
}