import React from "react";
import { DashboardButton, FormButton } from "../components/Button";
import { FormInput, SelectInput, TagSelector } from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { ActivityTable } from "../components/Tables";

import "../style/Button.css";
import "../style/FormInput.css";

export default function Home( params ) {

    const navigate = useNavigate();

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
                <DashboardButton text={"Click me"} onClick={() => alert("Ok")}/>
                <FormButton text={"Click me"} onClick={() => alert("Ok")}/>
                <FormInput type={"text"} legend={"Input field"} placeholder={"Placeholder"}/>
                <SelectInput legend={"Select field"} options={[
                    "Option 1",
                    "Option 2",
                    "Option 3",
                ]} />
                <TagSelector legend={"Tag selector"} data={[
                    "Tag 1",
                    "Tag 2",
                    "Tag 3",
                ]}
                />
            </div>  
        </>
    )
}