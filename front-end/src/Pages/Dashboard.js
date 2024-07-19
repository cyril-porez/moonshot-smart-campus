import React, { useState } from "react";
import { DashboardButton, ToggleButton } from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../style/Dashboard.css"

export function Dashboard({ props }) {

    let userType = props.user ?? "student";
    const navigate = useNavigate();

    function summonModal() {}

    // Utilisez cette logique si vous voulez utiliser le toggle dans un formulaire ou autre...
    // const [isToggled, setIsToggled] = useState(false);
    // function handleToggle(newToggleState) {
    //     setIsToggled(newToggleState)
    // }

    if(userType === "student") {
        return (
            <>
                {/* <ToggleButton onClick={handleToggle}/>
                <p>{isToggled == true ? "true" : "false"}</p> */}
                <div className="dashboard">
                    <DashboardButton
                        onClick={summonModal}
                        iconPath={"/icons/plus.png"}
                        text={"Proposition d'activité"}
                    />
                    <DashboardButton
                        onClick={() => navigate("/my-activites")}
                        iconPath={"/icons/activite.png"}
                        text={"Mes activités"}
                    />
                    <DashboardButton
                        onClick={() => navigate("/activites-terminees")}
                        iconPath={"/icons/liste-de-controle.png"}
                        text={"Voir les activités terminées"}
                    />
                    <DashboardButton
                        onClick={() => navigate("/calendar")}
                        iconPath={"/icons/agenda.png"}
                        text={"Voir mon planning"}
                    />
                </div>
            </>
        )
    } else if(userType === "responsable") {
        return (
            <div className="dashboard">
                <DashboardButton
                    onClick={summonModal}
                    iconPath={"/icons/plus.png"}
                    text={"Créer une activité"}
                />
                <DashboardButton
                    onClick={() => navigate("/suivi-participation")}
                    iconPath={"/icons/stats.png"}
                    text={"Suivi de participation"}
                />
                <DashboardButton
                    onClick={() => navigate("/activites-terminees")}
                    iconPath={"/icons/liste-de-controle.png"}
                    text={"Voir les activités terminées"}
                />
                <DashboardButton
                    onClick={() => navigate("/calendar")}
                    iconPath={"/icons/agenda.png"}
                    text={"Voir mon planning"}
                />
                <DashboardButton
                    onClick={() => navigate("/propositions")}
                    iconPath={"/icons/livre.png"}
                    text={"Consulter les propositions d'activité"}
                />
                <DashboardButton
                    onClick={() => navigate("/notes-activite")}
                    iconPath={"/icons/remarques.png"}
                    text={"Note d'activité élève"}
                />
            </div>
            
        )
    } else if(userType === "accompagnateur") {
        return (
            <div className="dashboard">
                <DashboardButton
                    onClick={() => navigate("/suivi-participation")}
                    iconPath={"/icons/stats.png"}
                    text={"Suivi de participation"}
                />
                <DashboardButton
                    onClick={() => navigate("/activites-terminees")}
                    iconPath={"/icons/activite.png"}
                    text={"Voir les activités terminées"}
                />
                <DashboardButton
                    onClick={() => navigate("/calendar")}
                    iconPath={"/icons/agenda.png"}
                    text={"Voir mon planning"}
                />
                <DashboardButton
                    onClick={() => navigate("/activity-propositions")}
                    iconPath={"/icons/livre.png"}
                    text={"Consulter les propositions d'activité"}
                />
                <DashboardButton
                    onClick={() => navigate("/notes-activite")}
                    iconPath={"/icons/remarques.png"}
                    text={"Note d'activité élève"}
                />
                <DashboardButton
                    onClick={() => navigate("/ressenti")}
                    iconPath={"/icons/emotion.png"}
                    text={"Ressenti accompagnateur"}
                />
            </div>
        )
    }
}