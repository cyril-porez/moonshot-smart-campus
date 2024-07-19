import React from 'react';

import "../../style/modals/LaunchActivity.css";

export default function LaunchActivity({data, closeModal}) {

    return (
        <div >
            <form className="launch-activity-body">
                <h2 className='h2-launch-activity'>Lancer L'activité ?</h2>
                <h3>{data.subject ? data.subject : "Erreur - pas de sujet"}</h3>

                <p>le : {data.date && data.time ? data.date+" à "+data.time : "Erreur - pas de date"}</p>
                <p>Durée : {data.expectedTime ? data.expectedTime+"min" : "Erreur - pas de duration" }</p>
                <p>Salle {data.room ? data.room : "Erreur - pas de salle"}</p>

                <input className="button-activity-body" type="submit" value="Valider" />
                <button className="button-activity-body" value="Fermer" onClick={closeModal}>Fermer</button>
            </form>


        </div>
    );
}
