import React from "react";
import "../style/Header.css";
import "../style/Button.css";
import { useNavigate } from "react-router-dom";
import { FormButton } from "./Button";


export default function Header({ logo, currentUser, toggleSidebar }) {
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("jwt");
        navigate("/sign-in")
    }

    const jwt = localStorage.getItem("jwt");

    return (
        <header>
            <button className="borderless round burger" onClick={toggleSidebar}>
                <img src="/icons/burger.png" width={32} height={32} alt="" />
            </button>
            <a href="/" style={{ height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {logo ? <img src={logo} alt="" height="100%" /> : null}
                <h1>{"Syllaverse".toUpperCase()}</h1>
            </a>
            <p style={{ fontSize: "18px" }}>{currentUser.username ? `Bonjour, ${currentUser.username}` : ""}</p>
            {jwt ? <FormButton onClick={logout} text={"Déconnexion"} /> : null}
        </header>
    );
}
