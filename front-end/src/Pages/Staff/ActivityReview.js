import React from "react";
import Range from "../../components/Range"
import "../../style/ActivityReview.css"
import { useParams } from "react-router-dom";


/**
 * Page sur laquelle l'accompagnateur pourra noter l'activité qu'il vient de faire
 */
export function ActivityReview() {
    const { id } = useParams();
    
    return (
        <div className="range-align">
            <h3>Donnez votre avis sur « Nom du sujet » </h3>
            <Range props={{ label: "Pertinence de la présentation" }} />
            <Range props={{ label: "Concordance technique (Accompagnateur/Sujet)" }} />
            <Range props={{ label: "Intêret des élèves" }} />
            <Range props={{ label: "Qualité du support" }} />
            <Range props={{ label: "Temps de présentation estimé" }} />
            <label>Remarque</label>
            <textarea placeholder="Écrivez ici vos remarques, opinions, etc..." className="remarque"></textarea>
            <input className="form-btn" type="submit" />
        </div>
    )
}