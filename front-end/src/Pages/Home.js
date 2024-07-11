import React from "react";
import { DashboardButton, FormButton } from "../components/Button";
import { FormInput, SelectInput } from "../components/FormInput";

export default function Home( params ) {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <DashboardButton
                text={"Dashboard Button"}
                iconPath={"/icons/plus.png"}
            />
            <FormInput legend={"Champ de texte"} type={"text"} placeholder={"Placeholder..."}/>
            <SelectInput 
                legend={"Champ de sélection"} 
                options={[
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4"
                ]}
            />
            <FormButton text={"Bouton de formulaire"} variant={"blue"}/>
        </div>
    )
}