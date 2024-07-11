import React from "react";
import { DashboardButton, FormButton } from "../components/Button";
import { FormInput, SelectInput } from "../components/FormInput";
import { useNavigate } from "react-router-dom";

export default function Home( params ) {

    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <DashboardButton text={"S'inscrire"} onClick={() => navigate("/sign-up")}/>
            <p style={{ margin: "0 20px" }}>ou</p>
            <DashboardButton text={"Se connecter"} onClick={() => navigate("/sign-in")}/>
        </div>
    )
}