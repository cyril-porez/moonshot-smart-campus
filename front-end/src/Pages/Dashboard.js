import React, { useEffect, useState } from "react";
import { DashboardButton, ToggleButton } from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../style/Dashboard.css"
import { isLoggedIn } from "../Services/UserInfo";

export function Dashboard({ props }) {

    let userRole = props.user.status_role;
    let onOpenModal = props.onOpenModal;
    const navigate = useNavigate();

    useEffect(() => {
        // Si l'user n'est pas connecté, on le redirige tout de suite
        if (!isLoggedIn()) {
            navigate("/sign-in");
        }
    }, [])


    if (userRole?.name === "étudiant") {
        return (
            <>
                <div className="dashboard">
                    <DashboardButton
                        onClick={onOpenModal}
                        iconPath={"/icons/plus.png"}
                        text={"Proposition d'activité"}
                    />
                    <DashboardButton
                        onClick={() => navigate("/vote-activites")}
                        iconPath={"/icons/activite.png"}
                        text={"Voter pour une proposition d’activité"}
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
                        onClick={() => navigate("/activites-status")}
                        iconPath={"/icons/agenda.png"}
                        text={"Voir le statut des activités"}
                    />
                </div>
            </>
        )
    } else if (userRole?.name === "responsable") {
        return (
            <div className="dashboard">
                <DashboardButton
                    onClick={onOpenModal}
                    iconPath={"/icons/plus.png"}
                    text={"Créer une activité"}
                />
                <DashboardButton
                    onClick={() => navigate("/suivi-participation")}
                    iconPath={"/icons/stats.png"}
                    text={"Suivi de participation"}
                />
                <DashboardButton
                    onClick={() => navigate("/notes-eleves")}
                    iconPath={"/icons/remarques.png"}
                    text={"Ressenti d'activité d'éleves"}
                />
                <DashboardButton
                    onClick={() => navigate("/notes-accompagnateur")}
                    iconPath={"/icons/remarques.png"}
                    text={"Ressenti d'activité d'accompagnateur"}
                />
                <DashboardButton
                    onClick={() => navigate("/propositions")}
                    iconPath={"/icons/livre.png"}
                    text={"Consulter les propositions d'activité"}
                />
                <DashboardButton
                    onClick={() => navigate("/calendar")}
                    iconPath={"/icons/agenda.png"}
                    text={"Voir mon planning"}
                />
                <DashboardButton
                    onClick={() => navigate("/activites-terminees")}
                    iconPath={"/icons/liste-de-controle.png"}
                    text={"Voir les activités terminées"}
                />
            </div>

        )
    } else if (userRole?.name === "accompagnateur") {
        return (
            <div className="dashboard">
                <DashboardButton
                    onClick={() => navigate("/propositions")}
                    iconPath={"/icons/livre.png"}
                    text={"Consulter les propositions d'activité"}
                />
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
                    onClick={() => navigate("/activity-list")}
                    iconPath={"/icons/agenda.png"}
                    text={"Voir les activités à venir"}
                />
                <DashboardButton
                    onClick={() => navigate("/calendar")}
                    iconPath={"/icons/agenda.png"}
                    text={"Voir mon planning"}
                />
                <DashboardButton
                    onClick={() => navigate("/notes-eleves")}
                    iconPath={"/icons/remarques.png"}
                    text={"Ressenti d'activité d'éleves"}
                />
                
            </div>
        )
    }
}