import React from "react";
import { FormButton } from "./Button";
import "../style/Tables.css";

export function ActivityTable({ data = [], type }) {

    function startActivity(id) {
        // code pour lancer l'activité
    }

    function validateActivity(id) {
        // code pour valider l'activité
    }

    function refuseActivity(id) {
        // code pour refuser l'activité
    }

    function rateActivity(id) {
        // code pour évaluer l'activité
    }

    return (
        <table>
            <thead>
                <tr className="line">
                    <th>Sujet</th>
                    <th>Promo</th>
                    <th>Date</th>
                    <th>Heure</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="table-body">
                {data.map(activity => (
                    <tr className="line">
                        <td>{activity?.subject}</td>
                        <td>{activity?.promo}</td>
                        <td>{activity?.date}</td>
                        <td>{activity?.time}</td>
                        <td>
                        {
                            type === "suivi" ?
                                (<FormButton text={"Lancer"} onClick={() => startActivity(activity?.id)} />)
                            : type === "proposition" ?
                                (<>
                                    <FormButton text={"Valider"} onClick={() => validateActivity(activity?.id)} />
                                    <FormButton text={"Refuser"} onClick={() => refuseActivity(activity?.id)} />
                                </>)
                            : type === "evaluer" ?
                                (<FormButton text={"Evaluer"} onClick={() => rateActivity(activity?.id)} />)
                            : null
                        }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}