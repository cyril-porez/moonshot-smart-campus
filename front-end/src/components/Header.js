import React from "react";
import "../style/Header.css";
import "../style/Button.css";
import { isLoggedIn } from "../Services/UserInfo";
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
            {
                isLoggedIn() ? (
                    <button className="borderless round burger" onClick={toggleSidebar}>
                        <img src="/icons/burger.png" width={32} height={32} alt="" />
                    </button>
                ) : <div></div>
            }
            <a href="/" style={{ height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {logo ? <img src={logo} alt="" height="100%" /> : null}
                <h1>{"Syllaverse".toUpperCase()}</h1>
            </a>
            {
                isLoggedIn() ?
                    <p style={{ fontSize: "18px" }}>Bonjour, {currentUser.username}</p> :
                    <div></div>
            }
            {
                jwt ? <FormButton onClick={logout} text={"Deconnexion"} /> : ""
            }

        </header>
    );
}
