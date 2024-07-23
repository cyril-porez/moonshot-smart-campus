import React from "react";
import Range from "../../components/Range"
import "../../style/ActivityReview.css"
import { useParams } from "react-router-dom";

/**
 * Là où les élèves pourront donner leur avis sur une activité
 */
export function ActivityReview() {
    const { id } = useParams();

    return (
        <div className="range-align">
            <h3>Donnez votre avis sur « Nom du sujet »</h3>
            <Range props={{ label: "Compréhension" }} />
            <Range props={{ label: "Sujet" }} />
            <Range props={{ label: "Pédagogie" }} />
            <Range props={{ label: "Eloquence" }} />
            <Range props={{ label: "Pertinence" }} />
            <label>Remarque</label>
            <textarea placeholder="Écrivez ici vos remarques, opinions, etc..." className="remarque"></textarea>
            <input className="form-btn" type="submit" />
        </div>
    )
}