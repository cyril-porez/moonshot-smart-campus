import React from "react";
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
            return ""
    }
}

export function DashboardButton({ onClick, iconPath, text, variant }) {

    return (
        <button onClick={onClick} className={`dashboard-btn-body ${getVariant(variant)}`}>
            <div className="dashboard-btn-inner">
                {iconPath ? <img src={iconPath} alt="" width={32} height={32} /> : null}
                <p>{text}</p>
            </div>
        </button>
    )
}


export function FormButton({ onClick, text, variant }) {

    return (
        <button onClick={onClick} className={`form-btn ${getVariant(variant)}`}>
            <p>{text}</p>
        </button>
    )
}