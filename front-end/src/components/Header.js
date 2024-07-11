import React from "react";
import "../style/Header.css";
import "../style/Button.css";

export default function Header({ logo, currentUser }) {

    return (
        <header>
            <button className="borderless round">
                <img src="/icons/menu.png" width={32} height={32} alt=""/>
            </button>
            <a href="/" style={{ height: "80%" }}>
                <img src={logo} alt="" height="100%"/>
            </a>
            <p style={{ fontSize: "18px" }}>Bonjour, {currentUser}</p>
        </header>
    )
}